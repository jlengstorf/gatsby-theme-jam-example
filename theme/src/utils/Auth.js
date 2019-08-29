// import { AUTH_CONFIG } from "./auth0-variables";
import authorize0 from 'auth0-js';
import { navigate } from 'gatsby';
// import { withStyles } from '@material-ui/core';

let accessToken = null;
let idToken = null;
let expiresAt = null;
// let isAuth = 'loggedIn';
const isBrowser = typeof window !== 'undefined';

let auth0 = isBrowser
  ? new authorize0.WebAuth({
      domain: process.env.GATSBY_AUTH0_DOMAIN,
      clientID: process.env.GATSBY_AUTH0_CLIENT_ID,
      redirectUri: process.env.GATSBY_AUTH0_CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid email',
    })
  : {};

export const login = () => {
  if (!isBrowser) {
    return;
  }
  auth0.authorize();
};

const getCookie = cname => {
  let name = `${cname}=`;
  let decodeCookie = decodeURIComponent(document.cookie);
  let ca = decodeCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }
  return getCookie('loggedIn');
};

// DETERMINES IF THE AUTH0 PROFILE IS VALID
export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }

  auth0.parseHash(setSession());
};

const setCookie = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toGMTString();
  document.cookie = `${cname}=${cvalue};${expires};path=/;`;
};

// SETS THE SESSION IF THE PROFILE IS VALID
const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate('/');
    cb();
    return;
  }
  if (authResult && authResult.accessToken && authResult.idToken) {
    let currentExpiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    accessToken = authResult.accessToken;
    idToken = authResult.idToken;
    expiresAt = currentExpiresAt;

    // let user = authResult.idTokenPayload;
    setCookie('access_token', accessToken, 60);
    setCookie('id_token', idToken, 60);
    setCookie('loggedIn', true, 60);
    setCookie('expires_at', expiresAt, 60);
    auth0.client.userInfo(accessToken, function(err, profile) {
      let profileName = profile;
      let userId = profileName.sub.split('|')[1];
      setCookie('profile', userId, 60);
    });
    navigate('/');
    cb();
  }
};

// RENEWS THE SESSION WHEN THE USER RETURNS TO THE APPLICATION AND IF TOKEN IS NOT EXPIRED
export const renewSession = () => {
  return dispatch => {
    if (!isBrowser) {
      return;
    }
    auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult, dispatch);
      } else if (err) {
        logout();
        console.log(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`,
        );
      }
    });
  };
};

const deleteCookie = (name, path, domain) => {
  if (getCookie(name)) {
    document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};

// LOGS THE USER OUT, DESTROYS THE SESSION AND RELEASES THE AUTH0 CONNECTION
export const logout = () => {
  if (!isBrowser) {
    return;
  }

  auth0.logout({
    returnTo: process.env.GATSBY_AUTH0_REDIRECT_URL,
    clientID: process.env.GATSBY_AUTH0_CLIENT_ID,
  });
  if (isBrowser) {
    deleteCookie('access_token');
    deleteCookie('id_token');
    deleteCookie('loggedIn');
    deleteCookie('expires_at');
    deleteCookie('profile');
  }
  return false;
};

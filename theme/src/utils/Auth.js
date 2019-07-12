// import { AUTH_CONFIG } from "./auth0-variables";
import authorize0 from "auth0-js";
import { navigate } from "gatsby";

let accessToken = null;
let idToken = null;
let expiresAt = null;
let isAuth = "loggedIn";
const isBrowser = typeof window !== "undefined";

let auth0 = isBrowser
  ? new authorize0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      redirectUri: process.env.AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid email",
    })
  : {};

export const login = () => {
  if (!isBrowser) {
    return;
  }
  auth0.authorize();
};

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }
  return JSON.parse(localStorage.getItem(isAuth));
};

// DETERMINES IF THE AUTH0 PROFILE IS VALID
export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }

  auth0.parseHash(setSession());
};

// SETS THE SESSION IF THE PROFILE IS VALID
const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/");
    cb();
    return;
  }
  if (authResult && authResult.accessToken && authResult.idToken) {
    let currentExpiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    accessToken = authResult.accessToken;
    idToken = authResult.idToken;
    expiresAt = currentExpiresAt;
    // let user = authResult.idTokenPayload;
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("id_token", idToken);
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("expires_at", expiresAt);
    auth0.client.userInfo(accessToken, function(err, profile) {
      let profileName = profile;
      let userId = profileName.sub.split("|")[1];
      localStorage.setItem("profile", userId);
    });
    navigate("/");
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
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  };
};

// LOGS THE USER OUT, DESTROYS THE SESSION AND RELEASES THE AUTH0 CONNECTION
export const logout = () => {
  if (!isBrowser) {
    return;
  }

  let returnTo = "";

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    returnTo = "http://localhost:8000";
  } else {
    returnTo = "https://www.thedevelopertoolbook.com";
  }

  auth0.logout({
    returnTo: returnTo,
    clientID: process.env.AUTH0_CLIENT_ID,
  });
  if (isBrowser) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("profile");
    localStorage.removeItem("id_token");
  }
  return dispatch => {
    return false;
  };
};

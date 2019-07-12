import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

const isBrowser = typeof window !== 'undefined';
let isLoggedIn = false;
const loggedIn = auth => {
  if (isBrowser) {
    if (auth === true) {
      isLoggedIn = true;
    }
  }
  if (auth === true) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
  return isLoggedIn;
};

// const redirect = 'http://tools.spudnik.com';

const PrivateRoute = ({ component: Component, location, props, ...rest }) => {
  if (!isBrowser) {
    return;
  }
  let isAuthenticated = JSON.parse(localStorage.getItem('loggedIn'));
  isLoggedIn = loggedIn(isAuthenticated);
  if (!isLoggedIn && location.pathname !== `/`) {
    // If we’re not logged in, redirect to the home page.
    navigate('/');
    return null;
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;

import React from "react";
import PropTypes from "prop-types";

const PublicRoute = ({ component: Component, location, ...rest }) => {
  return <Component {...rest} />
}

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PublicRoute;
import React from 'react';
import Home from '../components/Home';

const PageTemplate = ({ pageContext }) => {
  return (
    <Home
      siteTitle={pageContext.siteTitle}
      socialLinks={pageContext.socialLinks}
      brand={pageContext.brand}
      loginOption={pageContext.loginOption}
      isAuthApp={pageContext.isAuthApp}
    />
  );
};

export default PageTemplate;

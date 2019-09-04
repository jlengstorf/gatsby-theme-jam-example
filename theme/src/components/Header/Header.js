import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import HeaderText from '../Text/TypographyH6';
import SimpleAppBar from './SimpleAppBar';
import HeaderButton from '../Button/HeaderButton';
import SwipeDrawer from '../Menu/SwipeDrawer';
import UserMenu from '../Menu/UserMenu';
import NavigationList from '../Menu/NavigationList';
import { isAuthenticated, login, logout } from '../../utils/Auth';
import getSiteData from '../../hooks/siteMetadata';
import getBrandData from '../../hooks/brandData';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  plainLink: {
    color: '#eee',
    textDecoration: 'none',
  },
  foregroundColor: {
    color: '#eee',
  },
  brandLogoClass: {
    width: '250px',
    height: '45px',
    margin: '5px',
  },
});

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [left, setLeft] = useState(false);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function toogleDrawer() {
    if (left) {
      setLeft(false);
    } else {
      setLeft(true);
    }
  }

  const { loginDesc, title, isAuthApp } = getSiteData();
  const data = getBrandData();
  let brandLogo = false;
  if (data) {
    brandLogo = data.brandLogo;
  }
  const classes = useStyles();
  const alt = `This is the logo and return to home button for the site`;
  let logo = null;
  let BrandContainer = null;

  if (brandLogo) {
    if (!brandLogo.childImageSharp && brandLogo.extension === 'svg') {
      logo = brandLogo.publicURL;
      BrandContainer = (
        <img className={classes.brandLogoClass} src={logo} alt={alt} />
      );
    } else {
      logo = brandLogo.childImageSharp.fluid;
      BrandContainer = (
        <Image className={classes.brandLogoClass} fluid={logo} alt={alt} />
      );
    }
  } else {
    brandLogo = false;
  }
  return (
    <SimpleAppBar className={'appHeader'}>
      {(isAuthenticated() && isAuthApp) || !isAuthApp ? (
        <HeaderButton
          className={classes.menuButton}
          aria-label="Menu"
          aria-owns={left ? 'menu-sidebar' : undefined}
          onClick={toogleDrawer}
        >
          <MenuIcon className={classes.foregroundColor} />
        </HeaderButton>
      ) : null}
      <HeaderText className={classes.grow}>
        <Link to="/" className={classes.plainLink}>
          {brandLogo && BrandContainer}
          {title && !brandLogo && title}
        </Link>
      </HeaderText>
      {(isAuthenticated() && isAuthApp) || !isAuthApp ? (
        <SwipeDrawer left={left} handleClose={toogleDrawer}>
          <NavigationList />
        </SwipeDrawer>
      ) : null}
      <div>
        {isAuthenticated() && isAuthApp ? (
          <React.Fragment>
            <HeaderButton
              aria-owns={open ? 'menu-appbar' : undefined}
              onClick={handleMenu}
            >
              <AccountCircle className={classes.foregroundColor} />
            </HeaderButton>

            <UserMenu
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
              logout={logout}
              isAuthenticated={isAuthenticated}
            />
          </React.Fragment>
        ) : null}
        {!isAuthenticated() && isAuthApp ? (
          <Button onClick={() => login()} className={classes.foregroundColor}>
            {loginDesc}
          </Button>
        ) : null}
      </div>
    </SimpleAppBar>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
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
// import brandLogo from '../../images/spud_logo_red.svg';

const styles = {
  // root: {
  //   flexGrow: 1,
  //   // background:
  //   //   'linear-gradient(to bottom, #ffcc00 0%, #FFD700 35%, #ffe066 68%, #fff5cc 100%)',
  //   background: `linear-gradient(to bottom, #EE3234 0%, #EE6454 19%
  //       , #dd3234 30%, #912b2d 100%)`,
  //   boxShadow: 'inset 0px 1px 6px 0px #ffe066',
  //   margin: 'auto 0px',
  // },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  plainLink: {
    // color: '#7b1bb3',
    color: '#eee',
    textDecoration: 'none',
  },
  foregroundColor: {
    // color: '#7b1bb3',
    color: '#eee',
  },
  brandLogo: {
    width: '250px',
    height: '45px',
    margin: '5px',
  },
};

class Header extends React.Component {
  state = {
    anchorEl: null,
    left: false,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, brand, loginOption, siteTitle } = this.props;
    const { anchorEl, left } = this.state;
    const alt = `This is the logo and return to home button for the site`;
    const open = Boolean(anchorEl);
    let logo = null;
    let BrandContainer = null;
    if (brand) {
      if (!brand.childImageSharp && brand.extension === 'svg') {
        logo = brand.publicURL;
        BrandContainer = (
          <img className={classes.brandLogo} src={logo} alt={alt} />
        );
      } else {
        logo = brand.childImageSharp.fluid;
        BrandContainer = (
          <Image className={classes.brandLogo} fluid={logo} alt={alt} />
        );
      }
    }

    return (
      <SimpleAppBar className={'appHeader'}>
        {isAuthenticated() && (
          <HeaderButton
            className={classes.menuButton}
            aria-label="Menu"
            aria-owns={anchorEl ? 'menu-sidebar' : undefined}
            onClick={this.toggleDrawer('left', true)}
          >
            <MenuIcon className={classes.foregroundColor} />
          </HeaderButton>
        )}
        <HeaderText className={classes.grow}>
          <Link to="/" className={classes.plainLink}>
            {brand && BrandContainer}
            {/*!brand.childImageSharp && (
              <img className={classes.brandLogo} src={logo} alt={alt} />
            )*/}
            {siteTitle && !brand && siteTitle}

            {/* {siteTitle} */}
          </Link>
        </HeaderText>
        {isAuthenticated() && (
          <SwipeDrawer left={left} toggleDrawer={this.toggleDrawer}>
            <NavigationList />
          </SwipeDrawer>
        )}
        <div>
          {isAuthenticated() && (
            <React.Fragment>
              <HeaderButton
                aria-owns={open ? 'menu-appbar' : undefined}
                onClick={this.handleMenu}
              >
                <AccountCircle className={classes.foregroundColor} />
              </HeaderButton>

              <UserMenu
                anchorEl={anchorEl}
                open={open}
                handleClose={this.handleClose}
                login={login}
                logout={logout}
                isAuthenticated={isAuthenticated}
              />
            </React.Fragment>
          )}
          {!isAuthenticated() && (
            <Button
              onClick={() => login()}
              className={classes.foregroundColor}
              // color={buttonColor}
              // autoFocus
            >
              {loginOption}
            </Button>
          )}
        </div>
      </SimpleAppBar>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default withStyles(styles)(Header);

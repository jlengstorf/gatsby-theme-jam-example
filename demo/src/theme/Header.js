import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Button from "@material-ui/core/Button"

import HeaderText from "../Text/TypographyH6"
import SimpleAppBar from "./SimpleAppBar"
import HeaderButton from "../Button/HeaderButton"
import SwipeDrawer from "../Menu/SwipeDrawer"
import UserMenu from "../Menu/UserMenu"
import NavigationList from "../Menu/NavigationList"
import { isAuthenticated, login, logout } from "../../utils/Auth"

const styles = {
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(to bottom, #ffcc00 0%, #FFD700 35%, #ffe066 68%, #fff5cc 100%)",
    boxShadow: "inset 0px 1px 6px 0px #ffe066",
    margin: "auto 0px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  plainLink: {
    color: "#7b1bb3",
    textDecoration: "none",
  },
  foregroundColor: {
    color: "#7b1bb3",
  },
}

class Header extends React.Component {
  state = {
    anchorEl: null,
    left: false,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes, siteTitle } = this.props
    const { anchorEl, left } = this.state

    const open = Boolean(anchorEl)

    return (
      <SimpleAppBar className={classes.root}>
        {!isAuthenticated() && (
          <Button
            onClick={() => login()}
            // color={buttonColor}
            // autoFocus
          >
            Login / Signup
          </Button>
        )}

        <HeaderText className={classes.grow}>
          <Link to="/" className={classes.plainLink}>
            {siteTitle}
          </Link>
        </HeaderText>
        {!isAuthenticated() && (
          <SwipeDrawer right={left} toggleDrawer={this.toggleDrawer}>
            <NavigationList />
          </SwipeDrawer>
        )}
        <div>
          {isAuthenticated() && (
            <React.Fragment>
              <HeaderButton
                aria-owns={open ? "menu-appbar" : undefined}
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
            <HeaderButton
              className={classes.menuButton}
              aria-label="Menu"
              aria-owns={anchorEl ? "menu-sidebar" : undefined}
              onClick={this.toggleDrawer("left", true)}
            >
              <MenuIcon className={classes.foregroundColor} />
            </HeaderButton>
          )}
        </div>
      </SimpleAppBar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)

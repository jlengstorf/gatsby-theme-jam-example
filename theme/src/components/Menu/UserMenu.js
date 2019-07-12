import React from "react";
import { Link } from "gatsby";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

export default function UserMenu({
  anchorEl,
  open,
  handleClose,
  login,
  logout,
  isAuthenticated,
}) {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={() => handleClose()}
    >
      {/* {!isAuthenticated() && (
        <MenuItem
          onClick={() => {
            login();
          }}
        >
          <Link to="/">Log In</Link>
        </MenuItem>
      )} */}
      {isAuthenticated() && (
        <MenuItem
          onClick={() => {
            logout();
          }}
        >
          <Link to="/">Log Out</Link>
        </MenuItem>
      )}
    </Menu>
  );
}

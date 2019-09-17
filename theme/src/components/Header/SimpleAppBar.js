import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const SimpleAppBar = props => (
  <AppBar position="static" style={props.style}>
    <Toolbar {...props} color="inherit" style={props.style}>
      {props.children}
    </Toolbar>
  </AppBar>
);

export default SimpleAppBar;

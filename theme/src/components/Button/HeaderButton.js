import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const HeaderButton = props => (
  <IconButton
    {...props}
    color="inherit"
    aria-haspopup="true"
    style={props.style}
  >
    {props.children}
  </IconButton>
);

export default HeaderButton;

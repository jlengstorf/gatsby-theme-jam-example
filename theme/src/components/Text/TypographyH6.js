import React from 'react';
import Typography from '@material-ui/core/Typography';

const TypographyH6 = props => (
  <Typography {...props} color="inherit" variant="h6" style={props.style}>
    {props.children}
  </Typography>
);

export default TypographyH6;

import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const IconsButton = props => (
    <IconButton
        {...props}
        color='inherit'
        style={[props.style]}>
            {props.children}
    </IconButton>
);

export default IconsButton;
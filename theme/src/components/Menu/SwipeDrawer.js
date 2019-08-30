import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default function SwipeDrawer({ left, handleClose, children }, props) {
  return (
    <SwipeableDrawer
      {...props}
      id="menu-sidebar"
      // anchor="right"
      open={left}
      onClose={() => handleClose(false)}
      onOpen={() => handleClose(true)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => handleClose(false)}
        onKeyDown={() => handleClose(false)}
      >
        {children}
      </div>
    </SwipeableDrawer>
  );
}

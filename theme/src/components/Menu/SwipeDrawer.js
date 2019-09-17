import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default function SwipeDrawer({ left, handleClose, children }, props) {
  return (
    <SwipeableDrawer
      {...props}
      id="menu-sidebar"
      open={left}
      onClose={handleClose}
      onOpen={handleClose}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={handleClose}
        onKeyDown={handleClose}
      >
        {children}
      </div>
    </SwipeableDrawer>
  );
}

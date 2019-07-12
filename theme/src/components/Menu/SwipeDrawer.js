import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default function SwipeDrawer({ left, toggleDrawer, children }, props) {
  return (
    <SwipeableDrawer
      {...props}
      id="menu-sidebar"
      // anchor="right"
      open={left}
      onClose={toggleDrawer('left', false)}
      onOpen={toggleDrawer('left', true)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer('left', false)}
        onKeyDown={toggleDrawer('left', false)}
      >
        {children}
      </div>
    </SwipeableDrawer>
  );
}

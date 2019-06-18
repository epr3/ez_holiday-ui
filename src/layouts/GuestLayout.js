import React from 'react';
import { Pane } from 'evergreen-ui';

function GuestLayout({ children }) {
  return (
    <Pane
      flex={1}
      style={{ height: '100vh' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="default"
    >
      {children}
    </Pane>
  );
}

export default GuestLayout;

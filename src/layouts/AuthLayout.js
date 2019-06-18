import React from 'react';
import { useStoreActions } from 'easy-peasy';
import { Pane, Button, Heading } from 'evergreen-ui';

function AuthLayout({ children }) {
  const logout = useStoreActions(actions => actions.auth.logout);

  return (
    <>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>EZ Holiday</Heading>
        </Pane>
        <Pane>
          <Button onClick={() => logout()}>
            Log out
          </Button>
        </Pane>
      </Pane>
      <Pane display="flex">
        {children}
      </Pane>
    </>
  );
}

export default AuthLayout;

import React from 'react';
import { Redirect } from '@reach/router';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = !!localStorage.getItem(
    process.env.REACT_APP_ACCESS_TOKEN_PATH
  );

  const render = isAuth ? (
    <Component {...rest} />
  ) : (
    <Redirect from="" to="/login" noThrow />
  );

  return render;
}

export default PrivateRoute;

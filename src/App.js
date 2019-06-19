import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './lib/history';

import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact component={Home} path="/" />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <PrivateRoute component={Home} path="/" />
      <Login path="/login" />
    </Router>
  );
}

export default App;

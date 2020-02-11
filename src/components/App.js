import React from 'react';
import Home from './Home/Home.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

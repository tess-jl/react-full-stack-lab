import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <p>TEST</p>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

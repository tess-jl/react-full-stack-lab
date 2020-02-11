import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import SignUp from '../components/Auth/SignUp/SignUp';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';

export default function App() {

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

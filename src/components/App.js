import React from 'react';
<<<<<<< HEAD
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
=======
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
>>>>>>> ab6752e4aa86318c85204f3dd8d0b064611822aa
import Header from './Header/Header';
import SignUp from '../components/Auth/SignUp/SignUp';
import Login from '../components/Auth/Login/Login';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';

export default function App() {

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/' component={Home} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/login'component={Login} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

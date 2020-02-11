import React from 'react';
<<<<<<< HEAD
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
=======
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 63497cbd30ce81cd48c102d03765c80c09d253d9
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
          <Route exact path='/' component={Home} />
          <Route path='/login'component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

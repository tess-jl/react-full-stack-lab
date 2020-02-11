import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import Header from './Header/Header';
import SignUp from '../components/Auth/SignUp/SignUp';
import Login from '../components/Auth/Login/Login';
import Footer from './Footer/Footer.js';

export default function App() {

  return (
    <>
      <Header />

      <Router>
        <Route exact path='/' component={SignUp} />
        <Route path='/login'component={Login} />
      </Router>

      <Footer />
    </>
  );
}

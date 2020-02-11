import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
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

import React, { useState } from 'react';
import { useLogin, useAuthError } from '../../../hooks/auth';
import { Link } from 'react-router-dom';
 
const Login = () => {
  const { login, authError } = useLogin();
  const { setAuthError } = useAuthError();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputFactoryMethod = {
    email: setEmail,
    password: setPassword
  };

  const handleChange = ({ target }) => {
    inputFactoryMethod[target.name](target.value);
  };

  const loginData = {
    email: email,
    password: password
  };

  const handleLoginSubmit = () => {
    event.preventDefault();
    login(loginData);
  };

  return (
    <>
      <p>Login</p>
      <form onSubmit={handleLoginSubmit}>
        {authError && <p>{authError}</p>}
        <input type="text" name="email" value={email} placeholder="Enter your email" onChange={handleChange}></input>
        <input type="password" name="password" value={password} placeholder="Enter a password" onChange={handleChange}></input>
      
        <button>Login</button>
        <Link to={'/signup'}>
          <button onClick={() => setAuthError(null)}>Create Account</button>
        </Link>
      </form>
    </>

  );
};

export default Login; 


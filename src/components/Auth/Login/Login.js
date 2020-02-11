import React from 'react';
import { useAuth } from '../../../hooks/auth';
import { Link } from 'react-router-dom';
 
const Login = () => {
  const { email, password, handleChange, handleLoginSubmit } = useAuth();

  return (
    <>
      <p>Login</p>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="email" value={email} placeholder="Enter your email" onChange={handleChange}></input>
        <input type="password" name="password" value={password} placeholder="Enter a password" onChange={handleChange}></input>
      
        <button>Login</button>
        <Link to={'/signup'}>
          <button>Create Account</button>
        </Link>
      </form>
    </>

  );
};

export default Login; 


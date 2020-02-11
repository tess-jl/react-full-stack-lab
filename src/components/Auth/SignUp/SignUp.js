import React from 'react';
import { useAuth } from '../../../hooks/auth';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { email, password, piNickname, handleChange, handleSignUpSubmit } = useAuth();

  return (
    <main>
      <p>Sign Up</p>
      <form onSubmit={handleSignUpSubmit}>
        <input type="text" name="email" value={email} placeholder="Enter your email" onChange={handleChange}></input>
        <input type="password" name="password" value={password} placeholder="Enter a password" onChange={handleChange}></input>
        <input type="text" name="piNickname" value={piNickname} placeholder="Your Pi Nickname" onChange={handleChange}></input>
        
        <button>Create Account</button>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
      </form>
    </main>
  );
};

export default SignUp;

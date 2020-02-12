import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignUp } from '../../../hooks/auth';

const SignUp = () => {

  const { signUp, authError } = useSignUp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [piNickname, setPiNickname] = useState('');

  const inputFactoryMethod = {
    email: setEmail,
    password: setPassword,
    piNickname: setPiNickname
  };

  const handleChange = ({ target }) => {
    inputFactoryMethod[target.name](target.value);
  };

  const signUpData = {
    email: email,
    password: password,
    myPis: [{
      piNickname: piNickname
    }]
  };

  const handleSignUpSubmit = () => {
    event.preventDefault();
    signUp(signUpData);
  };

  return (
    <main>
      
      <p>Sign Up</p>
      <form onSubmit={handleSignUpSubmit}>
        {authError && <p>{authError}</p>}
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

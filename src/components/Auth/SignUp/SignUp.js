import React from 'react';
import { useSignUp } from '../../../hooks/auth';

const SignUp = () => {
  const { email, password, piNickname, handleChange, handleSubmit } = useSignUp();

  return (
    <main>
      <p>Sign Up</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={email} placeholder="Enter your email" onChange={handleChange}></input>
        <input type="text" name="password" value={password} placeholder="Enter a password" onChange={handleChange}></input>
        <input type="text" name="piNickname" value={piNickname} placeholder="Your Pi Nickname" onChange={handleChange}></input>
        <button>Create Account</button>
      </form>
    </main>
  );
};

export default SignUp;

import { useEffect, useState } from 'react';
import { postSignUp, postLogin } from '../services/authApi';

export const useAuth = () => {
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

  const loginData = {
    email: email,
    password: password
  };

  const handleSignUpSubmit = () => {
    event.preventDefault();
    postSignUp(signUpData)
      .then(res => {
        console.log(res);
      })
      .catch();
  };

  const handleLoginSubmit = () => {
    event.preventDefault();
    postLogin(loginData)
      .then(res => {
        console.log(res);
      })
      .catch();
  };

  return { email, password, piNickname, handleChange, handleSignUpSubmit, handleLoginSubmit };
};


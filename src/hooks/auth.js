import { useEffect, useState } from 'react';
import { postSignUp } from '../services/authApi';

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

  const data = {
    email: email,
    password: password,
    role: 'user',
    myPis: [{
      piNickname: piNickname
    }]
  };

  const handleSubmit = () => {
    event.preventDefault();
    postSignUp({ data })
      .then(res => {
        console.log(res);
      })
      .catch();
  };

  return { email, password, piNickname, handleChange, handleSubmit };
};


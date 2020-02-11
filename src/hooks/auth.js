import { useEffect, useState } from 'react';
import { fetchSignUpUser } from '../services/fetchUser';

export const useSignUp = () => {
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

  const handleSubmit = () => {
    event.preventDefault();
    fetchSignUpUser(email, password, piNickname)
      .then(res => {
        console.log(res);
      })
      .catch();
  };

  return { email, password, piNickname, handleChange, handleSubmit };
};


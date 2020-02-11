import { useEffect, useState } from 'react';
import { fetchSignUpUser } from '../services/fetchUser';

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

  const handleSubmit = () => {
    event.preventDefault();
    fetchSignUpUser(email, password, piNickname)
      .then(res => {
        //if
        //history .push somewhere else 

        //err.message
        console.log(res);
      })
      .catch(err => {
        console.log(err.message)
      });
  };

  return { email, password, piNickname, handleChange, handleSubmit };
};


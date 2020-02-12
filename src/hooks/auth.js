import React, { 
  useEffect, 
  useState, 
  useContext, 
  createContext } from 'react';
import { postLogin, 
  postSignUp, 
  getVerifyAuth } from '../services/authApi';
import { useHistory } from 'react-router-dom';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [authError, setAuthError] = useState();
  const [user, setUser] = useState();

  const history = useHistory();

  useEffect(() => {
    getVerifyAuth()
      .then(user => {
        setUser(user);
        history.push('/');
      })
      .catch(() => history.push('/login'));
  }, []);

  const login = loginData => {
    setAuthError(null);
    return postLogin(loginData)
      .then(user => {
        setUser(user);
        console.log('login response', user);
        history.push('/');
      })
      .catch(err => {
        setAuthError(err.message);
      });
  };

  const signUp = signUpData => {
    setAuthError(null);
    return postSignUp(signUpData)
      .then(user => {
        setUser(user);
        console.log('signup response', user);
        history.push('/');
      })
      .catch(err => {
        setAuthError(err.message);
      });
  };

  return (
    <SessionContext.Provider value={{ user, login, signUp, authError }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionUser = () => {
  const user = useContext(SessionContext);
  return user;
};

export const useHasSession = () => {
  const user = useSessionUser();
  return !!user;
};

export const useLogin = () => {
  const { login, authError } = useContext(SessionContext);
  return { login, authError };
};

export const useSignUp = () => {
  const { signUp, authError } = useContext(SessionContext);
  return { signUp, authError };
};

export const useAuthError = () => {
  const { authError } = useContext(SessionContext);
  return authError;
};

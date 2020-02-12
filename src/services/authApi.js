import { get, post, path, del } from './request.js';

export const getVerifyAuth = () => get('/auth/verify');
export const postSignUp = user => post('/auth/signup', user);
export const postLogin = user => post('/auth/login', user);


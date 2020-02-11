import { get, post, path, del } from './request.js';

export const postSignUp = user => post('/auth/signup', user);



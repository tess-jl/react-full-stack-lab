import { get, post, path, del } from './request.js';

export const postSignUp = user => post('/auth/signup', user);


// export const fetchSignUpUser = (email, password, piNickname) => {
//   const data = {
//     email: email,
//     password: password,
//     role: 'user',
//     myPis: [{
//       piNickname: piNickname
//     }]
//   };

// };


export const fetchSignUpUser = (email, password, piNickname) => {
  const data = {
    email: email,
    password: password,
    role: 'user',
    myPis: [{
      piNickname: piNickname
    }]
  };

  return fetch('http://localhost:7890/api/v1/auth/signup', {
    method: 'POST', 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if(res.ok) return res.json();
      throw `Response: ${res.status}`;
    });
};


export const fetchSignUpUser = (email, password, piNickname) => {
  const data = {
    email: email,
    password: password,
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
      //Promise.all json, res.ok --> if ok then return json, otherwise throw json, which is the error 
      if(res.ok) return res.json();
      throw `Response: ${res.status}`;
    });
};

export const fetchLoginUser = (email, password) => {
  const data = {
    email: email,
    password: password
  };

  return fetch('http://plantonomous.herokuapp.com/api/v1/auth/login', {
    method: 'POST', 
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



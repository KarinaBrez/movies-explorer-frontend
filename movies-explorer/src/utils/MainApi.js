class Api{ 
    constructor(config){ 
        this._baseUrl = config.baseUrl 
        this._headers = config.headers 
 
    }

_getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`${res.status}`)
};

register = (name, email, password) => {
  return fetch (`${this._baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json',
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(this._getResponse) ;
};

login = (email, password) => {
  return fetch (`${this._baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then(this._getResponse) ;
};

checkAuth = (token) => {
  return fetch (`${this._baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(this._getResponse) ;
};

updateProfile = (username, email) => {
  return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: username,
      email: email,
    }),
  })
    .then(this._getResponse) ;
};
}

const api = new Api({ 
    baseUrl:'https://api.movies.karinabrez.nomoredomains.club', 
    headers:{ 
        'Content-Type': 'application/json', 
    } 
    }) 

    export default api 
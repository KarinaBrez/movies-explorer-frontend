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
    body: JSON.stringify({ 
      "name": name,
      "password": password,
      "email": email
     })
  })
    .then(this._getResponse) ;
};

login = (email, password) => {
  return fetch (`${this._baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
    .then((response => response.json()))
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
      }
      return data;
    })
};

getUserData = (token) => {
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
 getSavedMovies = (token) => {
  return fetch(`${this._baseUrl}/movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
  .then(this._getResponse)
    .then(data => data)
}

saveMovie = (token, movie)=> {

  return fetch(`${this._baseUrl}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailer: movie.trailer,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: movie.thumbnail,
      movieId: movie.movieId
    })
  })
    .then(this._getResponse)
    .then(data => data)
}

deleteMovie=(token, movieId)=> {
  return fetch(`${this._baseUrl}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(this._getResponse)
    .then(data => data)
}
}
const api = new Api({ 
    baseUrl:'https://api.movies.karinabrez.nomoredomains.club', 
    headers:{ 
        'Content-Type': 'application/json', 
    } 
    }) 

    export default api 
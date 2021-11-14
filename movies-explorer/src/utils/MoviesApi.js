class ApiMovies{ 
    constructor(config){ 
        this._baseUrl = config.baseUrl 
        this._moviesUrl = config.moviesUrl
        this._moviesImUrl = config.moviesImUrl
        this._headers = config.headers 
 
    } 

 _getResponse = (res) => {
 return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
 };

getMovies = () => {
return fetch(`${this._moviesUrl}/`)

.then(this._getResponse);
  };

  bookmarkMovie = (movie) => {
    const {
      movieId = movie.id,
      nameRU,
      nameEN,
      trailer = movie.trailerLink,
      country,
      director,
      duration,
      year,
      description,
    } = movie;
  
    const image = `${this._moviesImUrl}${movie.image?.url}`;
    const thumbnail = `${this._moviesUrl}${movie.image?.formats.thumbnail.url}`;
  
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        movieId,
        nameRU,
        nameEN,
        director,
        year,
        duration,
        description,
        trailer,
        country,
        image,
        thumbnail,
      }),
    })
    .then(this._getResponse);
  };
 unBookMarkMovie = (movieId) => {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then(this._getResponse);
  };

  getBookmarkedMovies = () => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then(this._getResponse);
  };
}

const apiMovies = new ApiMovies ({
    baseUrl:'https://api.movies.karinabrez.nomoredomains.club', 
    moviesUrl:'https://api.nomoreparties.co/beatfilm-movies',
    moviesImUrl:'https://api.nomoreparties.co/',
    headers: { 
      'Content-Type': 'application/json' 
    } 
})

export default apiMovies
import React, {useState} from 'react';

import './MoviesCard.css';
const moviesImage = 'https://api.nomoreparties.co'

function MoviesCard(props) {

  const [isInBookmark, setIsInBookmark] = useState(false);
  const savedMoviesInStore = JSON.parse(localStorage.getItem('savedMovies'));

  const durationFloor = (min) => {
    return `${Math.floor(min / 60) % 24}ч ${min % 60}м`;
  }

  const handleAddBookmark = () => {
    props.onSaveMovie(props.movie, isInBookmark, setIsInBookmark);
  };

  const handleDeleteBookmark = () => {
    props.onDeleteMovie(props.savedMovie);
  }


  return(
    <div className="movie-card">
      <figure className="movie-card__content">
        <figcaption className="movie-card__info">
          <h3 className="movie-card__title">{props.movie ? props.movie.nameRU : props.savedMovie.nameRU}</h3>
          <p className="movie-card__duration">{props.movie ? durationFloor(props.movie.duration) : durationFloor(props.savedMovie.duration)}</p>
          {
          !props.isBookmarkPage ?
            <button className={`movie-card__button ${isInBookmark && "movie-card__button_type_in-bookmark"}`}
                    onClick={handleAddBookmark}
            >
              {isInBookmark || props.isBookmarkPage ? '' : 'Сохранить'}
            </button>
            :
            <button className={`movie-card__button ${props.isBookmarkPage && "movie-card__button_type_remove-bookmark"}`}
                    onClick={handleDeleteBookmark}
            >
              {isInBookmark || props.isBookmarkPage ? '' : 'Сохранить'}
            </button>
        }
        </figcaption>
        <a
          href={props.movie ? `${props.movie.trailerLink}` : `${props.savedMovie.trailer}`}
          className="movie-card__link"
          target="_blank"
          rel="noreferrer"
        >
        <img
            src={props.movie ? `${moviesImage}${props.movie.image?.url}` : `${props.savedMovie.image}`}
            className="movie-card__image"
            alt={props.movie ? `Постер к фильму: ${props.movie.title}` : `Постер к фильму: ${props.savedMovie.title}`}/>
        </a>
      </figure>
    </div>
  );
}

export default MoviesCard;
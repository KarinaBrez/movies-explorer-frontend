import React, {useState} from 'react';

import './MoviesCard.css';

function MoviesCard({ movieImage, isBookmarkPage,movieDuration, movieName }) {

  const [isInBookmark, setIsInBookmark] = useState(false);

  function handleAddBookmark() {
    setIsInBookmark(!isInBookmark);
  }

  return(
    <div className="movie-card">
      <figure className="movie-card__content">
        <figcaption className="movie-card__info">
          <h3 className="movie-card__title">{movieName}</h3>
          <p className="movie-card__duration">{movieDuration}</p>
          <button className={`movie-card__button
                ${isInBookmark && "movie-card__button_type_in-bookmark"}
                ${isBookmarkPage && "movie-card__button_type_remove-bookmark"}`}
                onClick={handleAddBookmark}>
          {isInBookmark || isBookmarkPage ? '' : ''}
          </button>
        </figcaption>
        <img src={movieImage} className="movie-card__image" alt="Кадр фильма"/>
      </figure>
    </div>
  );
}

export default MoviesCard;
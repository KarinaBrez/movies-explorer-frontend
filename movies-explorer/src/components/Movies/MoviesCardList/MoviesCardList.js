import React from 'react';

import './MoviesCardList.css';
import MovieCard from "../MoviesCard/MoviesCard";

import image_1 from '../../../images/movies/movie.png';
import image_2 from '../../../images/movies/movie_2.png';
import image_3 from '../../../images/movies/movie_3.png';
import image_4 from '../../../images/movies/movie_4.png';
import image_5 from '../../../images/movies/movie_5.png';
import image_6 from '../../../images/movies/movie_6.png';
import image_7 from '../../../images/movies/movie_7.png';



function MoviesCardList({ isBookmarkPage }) {
  return(
    <section className="movies-card-list">
      <div className="movies-card-list__movies-wrapper">
        <MovieCard
          movieImage={image_1}
          movieName="33 слова о дизайне"
          movieDuration="1ч 42м"
          isBookmarkPage={isBookmarkPage}
        />
        <MovieCard
          movieImage={image_2}
          movieName="Киноальманах «100 лет дизайна»"
          movieDuration="1ч 42м"
          isBookmarkPage={isBookmarkPage}
        />
        <MovieCard
          movieImage={image_3}
          movieName="В погоне за Бенкси"
          movieDuration="1ч 42м"
          isBookmarkPage={isBookmarkPage}
        />
        <MovieCard
          movieImage={image_4}
          movieName="Баския: Взрыв реальности"
          movieDuration="1ч 42м"
          isBookmarkPage={isBookmarkPage}
        />
        <MovieCard
          movieImage={image_5}
          movieName="Бег это свобода"
          movieDuration="1ч 42м"
          isBookmarkPage={isBookmarkPage}
        />
        <MovieCard
          movieImage={image_6}
          movieName="Книготорговцы"
          movieDuration="1ч 42м"
          isBookmarkPage={isBookmarkPage}
        />
        <MovieCard
          movieImage={image_7}
          movieName="Когда я думаю о Германии ночью"
          movieDuration="1ч 42м"
          isBookmarkPage={isBookmarkPage}
        />
      
      </div>
      {
        isBookmarkPage ?
          (
            <div className="saved-movies__footer-gap" />
          ) : (
            <button className="movies-card-list__lazy-load-button">Ещё</button>
          )
      }
    </section>
  );
}

export default MoviesCardList;
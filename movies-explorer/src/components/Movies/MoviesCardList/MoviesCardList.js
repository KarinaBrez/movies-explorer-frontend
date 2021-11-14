import React from 'react';

import './MoviesCardList.css';
import MovieCard from "../MoviesCard/MoviesCard";

import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  // eslint-disable-next-line no-undef
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-undef
  const [visible, setVisible] = useState(15);
  // eslint-disable-next-line no-undef
  const [loadMore, setLoadMore] = useState(4);
  // eslint-disable-next-line no-undef
  const [screenSize, setScreenSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  React.useEffect(() => {
    const debounceResizer = debounce(function handleResize() {
      setScreenSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debounceResizer);

    return (_) => {
      window.removeEventListener('resize', debounceResizer);
    };
  });

  React.useEffect(() => {
    props.movies && setItems(props.movies);

    if (screenSize.width <= 717) {
      setVisible(5);
      setLoadMore(2);
    }

    if (screenSize.width > 717 && screenSize.width < 1280) {
      setVisible(8);
      setLoadMore(2);
    }

    if (screenSize.width > 1280) {
      setVisible(12);
      setLoadMore(3);
    }
  }, [props.movies, screenSize.width]);

  const loadMoreMovies = () => {
    setVisible((prev) => prev + loadMore);
  };
  function filterShortMovies(movie) {
    return movie.filter((item) => item.duration <= 40)
  }

  return(
    <section className="movies-card-list">
      {props.isLoading && <Preloader />}
      {props.searchError !== '' && <span className="input__error input__error_visible">{props.searchError}</span>}
      {props.savedMovies?.length === 0 && (
        <span className="input__error input__error_visible">Вы не добавили в закладки ни одного фильма</span>
      )}
      <div className="movies-card-list__movies-wrapper">
      {props.movies &&
        (props.isShortMovie ? filterShortMovies(items) : items)
          .slice(0, visible)
          .map((data) => {
            return (
        <MovieCard
        isBookmarkPage={props.isInBookmark}
        key={data.id}
        movie={data}
        onSaveMovie={props.onSaveMovie}
        />
        
        );
      })
    }
    {props.savedMovies &&
    (props.isShortMovie ? filterShortMovies(props.savedMovies) : props.savedMovies)
      .map((data) => {
        return (
          <MovieCard
            isBookmarkPage={props.isInBookmark}
            key={data._id}
            savedMovie={data}
            onDeleteMovie={props.onDeleteMovie}
          />
        );
      })
    }
  </div>
  {
    props.isBookmarkPage ?
      (
        <div className="saved-movies__footer-gap" />
      ) : (
       props.movies && items.length > visible &&
        (<button
          className="movies-card-list__lazy-load-button"
          onClick={loadMoreMovies}
        >Ещё</button>)
      )
  }
    </section>
  );
}

export default MoviesCardList;
import React from 'react';

import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Movies(props) {
  return(
    <section className="movies">
      <Header
        loggedIn={props.loggedIn}
        isProfilePageActive={true}
        menuIsOpened={props.menuIsOpened}
        openMenu={props.openMenu}
        closeMenu={props.closeMenu}
      />
      <div className="movies__search-wrapper">
        <Search
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        handleCheck={props.handleShortCheck}
        searchValue={props.searchValue}
         />
        <FilterCheckbox
         checkboxName={'Короткометражки'}
         handleCheck={props.handleShortCheck}
         />
      </div>
      <MoviesCardList 
      isInBookmark={false}
      movies={props.movies}
      isLoading={props.isLoading}
      searchError={props.searchError}
      onSaveMovie={props.onSaveMovie}
      isShortMovie={props.isShortMovie}
      />
      <div className="movies__footer-wrapper">
        <Footer moviesPage={true}/>
      </div>
    </section>
  );
}

export default Movies;
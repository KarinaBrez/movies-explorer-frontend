import React from 'react';

import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Movies({ menuIsOpened, openMenu, closeMenu, isBookmarkPage, loggedIn }) {
  return(
    <section className="movies">
      <Header
        loggedIn={loggedIn}
        isProfilePageActive={true}
        menuIsOpened={menuIsOpened}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <div className="movies__search-wrapper">
        <Search />
        <FilterCheckbox checkboxName={'Короткометражки'}/>
      </div>
      <MoviesCardList isBookmarkPage={isBookmarkPage}/>
      <div className="movies__footer-wrapper">
        <Footer moviesPage={true}/>
      </div>
    </section>
  );
}

export default Movies;
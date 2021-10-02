import React from 'react';

import './SearchForm.css';
import search from '../../../images/searsh.svg'

function SearchForm() {
  return(
    <form className="search" name="search">
      <img className="search__image" src={search} alt ="Лупа"/>
      <input type="text" placeholder="Фильм" className="search__input"/>
      <button className="search__input-button">Найти</button>
    </form>

  );
}

export default SearchForm;
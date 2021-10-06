import React from 'react';

import './SearchForm.css';
import search from '../../../images/searsh.svg'

function SearchForm() {
  return(
    <form className="search" name="search">
      <input type="text" placeholder="Фильм" className="search__input" required="required"/>
      <img className="search__image" src={search} alt ="Лупа"/>
      <button className="search__input-button">Найти</button>
    </form>

  );
}

export default SearchForm;
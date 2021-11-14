import React from 'react';

import './SearchForm.css';
import search from '../../../images/searsh.svg'

function SearchForm(props) {
  return(
    <form 
    onSubmit={props.onSubmit}
    className="search"
    name="search"
    noValidate
    >
      <input 
      type="text"
      placeholder="Фильм"
      className="search__input"
      value={props.searchValue || ''}
      onChange={props.onChange}
      required
      />
      <img className="search__image" src={search} alt ="Лупа"/>
      <button className="search__input-button" type="submit">Найти</button>
    </form>

  );
}

export default SearchForm;
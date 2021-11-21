import React, {useState} from 'react';

import './SearchForm.css';
import search from '../../../images/searsh.svg'

function SearchForm(props) {

  const [search, setSearch] = useState('');

  const [isSearchValid, setIsSearchValid] = useState(true);

  function handleSearchChange(evt) {
    setSearch(evt.target.value);
    setIsSearchValid(evt.target.checkValidity());
  }

  function handleSearchSavedMovies(evt) {
    evt.preventDefault();
    props.onSearchSavedMovies(search);
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
    props.onSearchMovies(search);
  }
  return(
    <form 
    onSubmit={props.saved ? handleSearchSavedMovies : handleSearchMovies}
    className="search"
    name="search"
    >
      <input 
      type="text"
      placeholder="Фильм"
      className="search__input"
      value={search || ''}
      onChange={handleSearchChange}
      required
      />
      <img className="search__image" src={search} alt ="Лупа"/>
      <button className="search__input-button" type="submit">Найти</button>
    </form>

  );
}

export default SearchForm;
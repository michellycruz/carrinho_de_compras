import React, {useState} from 'react';
import { IoIosSearch } from 'react-icons/io';
import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('Michelly');

  return ( 
    <form className= "search_bar">
      <input type="search" placeholder="Buscar produtos" className="search__input" required/>
      { searchValue }
      <button type="submit"className="search__button">
        < IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
import React, {useState} from 'react';
import { IoIosSearch } from 'react-icons/io';
import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return ( 
    <form className= "search_bar">
      <input type="search" value={searchValue} placeholder="Buscar produtos" className="search__input" onChange={ ({target}) => setSearchValue(target.value) } required 
      />
      { searchValue }
      <button type="submit"className="search__button">
        < IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
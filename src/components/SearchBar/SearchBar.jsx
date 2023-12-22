import React from 'react';
import { IoIosSearch } from 'react-icons/io';

function SearchBar() {
  return ( 
    <form>
      <input type="search" placeholder="Buscar produtos" className="search__input" required/>
      <button type="submit"className="search__button">
        < IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
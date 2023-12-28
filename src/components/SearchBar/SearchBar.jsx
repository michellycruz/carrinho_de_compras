import React, {useState} from 'react';
import { IoIosSearch } from 'react-icons/io';
import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
  };

  return ( 
    <form className= "search_bar" onSubmit={handleSearch}>
      <input type="search" value={searchValue} placeholder="Buscar produtos" className="search__input" onChange={ ({target}) => setSearchValue(target.value) } required 
      />
      <button type="submit"className="search__button">
        < IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
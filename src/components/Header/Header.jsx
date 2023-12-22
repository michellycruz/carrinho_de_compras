import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import '../Header/Header.css';

function Header(){

  return(
    <header className="header">
      <div className="container">
        <SearchBar />
        <button>cart</button>
      </div>
    </header>
  );
}

export default Header;
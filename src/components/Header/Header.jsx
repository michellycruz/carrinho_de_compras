import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import '../Header/Header.css';

function Header(){

  return(
    <header className="header" style={{backgroundColor: 'red'}}>
      <div className="container">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
import React, {useContext, useState} from 'react';
import { IoIosSearch } from 'react-icons/io';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const { setProducts, setLoading, setError } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');


  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const products = await fetchProducts(searchValue);
      setProducts(products);
      setError('');
    } catch (err) {
      // Uma busca que falha nao pode deixar a tela girando: mostra o motivo.
      setError(err.message);
    } finally {
      setLoading(false);
      setSearchValue('');
    }
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
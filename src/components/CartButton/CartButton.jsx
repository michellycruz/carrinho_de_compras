import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import '../CartButton/CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return(
    <button 
      type="button" 
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <IoCartOutline />
      {cartItens.length > 0 && <span className="cart-status">{cartItens.length}</span>}
    </button>
  );
}

export default CartButton;
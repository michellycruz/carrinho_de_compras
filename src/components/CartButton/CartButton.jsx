import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import '../CartButton/CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItens } = useContext(AppContext);

  return(
    <button type="button" className="cart__button">
      <IoCartOutline />
      {cartItens.length > 0 && <span className="cart__status">{cartItens.length}</span>}
    </button>
  );
}

export default CartButton;
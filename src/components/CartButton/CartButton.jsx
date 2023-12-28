import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import '../CartButton/CartButton.css';

function CartButton() {
  return(
    <button type="button" className="cart__button">
      <IoCartOutline />
      <span className="cart__status">1</span>
    </button>
  );
}

export default CartButton;
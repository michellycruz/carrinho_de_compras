import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import '../CartButton/CartButton.css';

function CartButton() {
  return(
    <button type="button" className="cart__button">
      <MdOutlineShoppingCart />
    </button>
  );
}

export default CartButton;
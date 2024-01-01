import React, { useContext } from 'react';
import '../Cart/Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const {cartItens} = useContext(AppContext);

  const totalPrice = cartItens.reduce((acc, item) => item.price + acc, 0);

  return ( 
    <section className="cart">
      <div className="cart-items">
        { cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>) }
      </div>

      <div className="cart-resume">{(formatCurrency(totalPrice, 'BRL'))}</div>
    </section>
  );
}

export default Cart;
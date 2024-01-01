import React, { useContext } from 'react';
import '../Cart/Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';

function Cart() {
  const {cartItens} = useContext(AppContext);

  return ( 
    <section className="cart">
      <div className="cart-items">
        { cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>) }


      </div>
      <div className="cart-resume">Resumo do Carrinho</div>
    </section>
  );
}

export default Cart;
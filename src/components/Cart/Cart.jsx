import React from 'react';
import '../Cart/Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart() {
  return ( 
    <section className="cart">
      <div className="cart-items">
        <CartItem data={{ thumbnail: '', title: '', price: '123' }}/>
      </div>
      <div className="cart-resume">Resumo do Carrinho</div>
    </section>
  );
}

export default Cart;
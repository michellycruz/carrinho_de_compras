import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import '../CartItem/CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import propTypes from 'prop-types';

function CartItem( { data } ) {

  const {thumbnail, title, price} = data;

  return ( 
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="imagem do produto" 
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>

        <button 
          type="button"
          className="button-remove-item">
            
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
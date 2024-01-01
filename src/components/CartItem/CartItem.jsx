import React, { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import '../CartItem/CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function CartItem( { data } ) {

  const {cartItens, setCartItens} = useContext(AppContext);
  const {id, thumbnail, title, price} = data;

  const handLeRemoveItem = () => {
    const updatedItens = cartItens.filter((item) => item.id != id);
    setCartItens(updatedItens);
  };

  return ( 
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="imagem do produto" 
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
          type="button"
          className="button-remove-item"
          onClick={handLeRemoveItem}
        >
            
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
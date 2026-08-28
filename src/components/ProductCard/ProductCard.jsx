import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';
import '../ProductCard/ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  const {title, thumbnail, price} = data;

  const { setCartItens } = useContext(AppContext);

  // Atualiza a partir do estado anterior: com [ ...cartItens, data ], dois
  // cliques seguidos leem o mesmo cartItens e o segundo apaga o primeiro.
  const handleAddCart = () => setCartItens((itens) => [...itens, data]);

  return ( 
    <section className="product__card">
      <img src={thumbnail} alt={title} className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button 
        type="button" 
        className="btn__add__card"
        onClick={ handleAddCart }>
        <FaCartPlus />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
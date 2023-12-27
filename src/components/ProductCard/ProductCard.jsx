import React from 'react';
import propTypes from 'prop-types';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import '../ProductCard/ProductCard.css';

function ProductCard({ data }) {

  const {title, thumbnail, price} = data;

  return ( 
    <section className="product__card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">{price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          
        })}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="btn__add__card">
        <MdOutlineAddShoppingCart />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
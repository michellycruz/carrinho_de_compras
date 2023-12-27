import React from 'react';

import '../ProductCard/ProductCard.css';

function ProductCard() {
  return ( 
    <section className="product__card">
      <img src="https://http2.mlstatic.com/D_608615-MLU72148589298_102023-W.jpg" alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">R$300.00</h2>
        <h2 className="card__title">Kindle</h2>
      </div>

      <button type="button" className="btn__add__card">+</button>
    </section>
  );
}

export default ProductCard;
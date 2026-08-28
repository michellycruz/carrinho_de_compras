import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {
  const { products, setProducts, loading, setLoading, error, setError } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('phone')
      .then((response) => {
        setProducts(response);
        setError('');
      })
      // A versao anterior nao tinha catch: quando a API caiu, a promise
      // rejeitava, setLoading(false) nunca rodava e a tela girava sem fim.
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return (
      <section className="products container">
        <p className="products__error">{error} Tente buscar outro produto.</p>
      </section>
    );
  }

  return (
    <section className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product} />)}
    </section>
  );
}

export default Products;
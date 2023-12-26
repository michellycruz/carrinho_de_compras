import React, { useState, useEffect } from 'react';
import  '../Products/Products.css';
import fetchProducts from '../../api/fetchProducs';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);

  return ( 
    <section className="products container">
      products
    </section>
  );
}

export default Products;
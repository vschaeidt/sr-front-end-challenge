import React from 'react';
import PropTypes from 'prop-types';

import "./ProductGrid.css"
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => (
  <div className="product-grid" >
    {
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    }
  </div>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ProductGrid;
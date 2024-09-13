import React from 'react';
import PropTypes from 'prop-types';

import "./ProductGrid.css"
import ProductCard from './ProductCard';

import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

const ProductGrid = ({ products }) => {
  const dispatch = useDispatch();
  return (<div className="product-grid" >
    {
      products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={product => dispatch(addToCart(product))} />
      ))
    }
  </div>
  );
}

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
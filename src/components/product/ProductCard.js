import React from "react";
import PropTypes from 'prop-types';
import Img from "../../atoms/Image";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <Img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-content">
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <p>Colors: {product.colors.join(", ")}</p>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
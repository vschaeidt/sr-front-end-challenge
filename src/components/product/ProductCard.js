import React from "react";
import PropTypes from 'prop-types';
import Img from "../../atoms/Image";
import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <Img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p>Colors: {product.colors.join(", ")}</p>
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
};

export default ProductCard;
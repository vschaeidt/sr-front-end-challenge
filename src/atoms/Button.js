import React from 'react';
import './Button.css';

const Button = ({ type, className, children, ...props }) => {
    return (
        <button type={type} className={`button ${className}`} {...props}>
            {children}
        </button>
    );
};

import PropTypes from 'prop-types';

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    type: 'button',
    className: '',
};


export default Button;
import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

const Select = ({ options, onChange }) => {
    return (
        <div className="select-wrapper">
            <select onChange={onChange} className="modern-select">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <span className="select-arrow"></span>
        </div>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Select;
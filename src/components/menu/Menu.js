import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = ({ links = [] }) => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                {links.map((link, index) => (
                    <li key={index} className="menu-item">
                        <a href={link.url} className="menu-link">{link.text}</a>
                        {link.subItems && link.subItems.length > 0 && (
                            <ul className="submenu">
                                {link.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex} className="submenu-item">
                                        <a href={subItem.url} className="submenu-link">{subItem.text}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Menu.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            subItems: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired
                })
            )
        })
    )
};

export default Menu;

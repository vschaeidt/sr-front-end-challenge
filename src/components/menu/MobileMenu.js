import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { links } from '../../links';
import './MobileMenu.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mobile-menu">
            <button className="burger-button" onClick={toggleMenu}>
                <img src="images/icon/burger-menu.svg" alt="Menu" width="24" height="24" />
            </button>

            {isOpen && (
                <div className="menu-overlay">
                    <button className="close-button" onClick={toggleMenu}>
                        &times;
                    </button>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu-list">
                            {links.map((link, index) => (
                                <li key={index} className="mobile-menu-item">
                                    <a href={link.url} className="mobile-menu-link">
                                        {link.text}
                                    </a>
                                    {link.subItems && (
                                        <ul className="mobile-submenu">
                                            {link.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex} className="mobile-submenu-item">
                                                    <a href={subItem.url} className="mobile-submenu-link">
                                                        {subItem.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

MobileMenu.propTypes = {
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

export default MobileMenu;

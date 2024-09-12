import React from 'react';
import './Header.css';
import Img from '../../atoms/Image';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Img
                    alt="company_xxx logo"
                    src="images/logo/logo.jpeg"
                    desktopSrc="images/logo/logo_desktop.jpeg"
                    tabletSrc="images/logo/logo_tablet.jpeg"
                    mobileSrc="images/logo/logo_mobile.jpeg" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search products..." className="search-input" />
                <button className="search-button">Search</button>
            </div>
            <div className="icons">
                <span className="icon">🛒</span>
                <span className="icon">👤</span>
            </div>
        </header>
    );
};

export default Header;


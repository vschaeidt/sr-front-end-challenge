import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <h3>Stay Connected</h3>
                    <p>Join our mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                </div>
                <form className="footer-form">
                    <input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;

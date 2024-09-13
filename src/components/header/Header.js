import './Header.css';
import Img from '../../atoms/Image';
import Button from '../../atoms/Button';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Img
                    alt="company logo"
                    src="images/logo/logo.jpeg"
                    desktopSrc="images/logo/logo_desktop.jpeg"
                    tabletSrc="images/logo/logo_tablet.jpeg"
                    mobileSrc="images/logo/logo_mobile.jpeg" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search products..." className="search-input" />
                <Button className="search-button">Search</Button>
            </div>
            <div className="icons">
                <span className="icon">
                    <Img src="images/icon/cart.svg" alt="Shopping cart" />
                </span>
                <span className="icon">
                    <Img src="images/icon/user.svg" alt="Logged-in user" />
                </span>
            </div>
        </header>
    );
};

export default Header;


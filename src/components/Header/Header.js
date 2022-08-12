import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />

            <div>
                <a href="/">Home</a>{" "}
                <a href="/order">Order</a>{" "}
                <a href="/order review">Order Review</a>{" "}
                <a href="/manage Inventory">Manage Inventory</a>
            </div>
            
        </nav>
    );
};

export default Header;
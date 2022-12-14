import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <h1>Okay</h1>
            <div>
                <a href="/shop">Shop</a>{" "}
                <a href="/orders">Orders</a>{" "}
                <a href="/inventory">Inventory</a>{" "}
                <a href="/about">About</a>
            </div>

        </nav>
    );
};

export default Header;
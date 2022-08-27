import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>

            <div className="products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h3 className='summary-text'>Order Summary</h3>
                <p>Selected items : {cart.length}</p>
                <p>Total Price : $</p>
                <p>Total Shipping Charge : $</p>
                <p>Tax : $</p>
                <h3 className='grand-total-text'>Grand Total : $</h3>

                <button className='btn-clear'>
                    <p className='clear-text'>Clear Cart</p>
                    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </button>

                <button className='btn-review'>
                    <p className='review-text'>Review Order</p>
                    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    
                </button>



            </div>
        </div>
    );
};

export default Shop;
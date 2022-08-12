import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const[products,setProducts]= useState([]);

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data));
    },[])

    return (
        <div className='shop-container'>

            <div className="products-container">
                  
                    {
                        products.map(product=><Product
                        
                            product={product}
                        
                        ></Product>)
                    }
            </div>

            <div className="cart-container">
                    <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;
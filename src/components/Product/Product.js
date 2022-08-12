import React from 'react';
import './Product.css';

const Product = (props) => {
    const{img,name,price,seller,ratings}=props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price : ${price}</h5>
            <h6>Seller : {seller}</h6>
            <p><small>Ratings : {ratings}</small></p>
        </div>
    );
};

export default Product;
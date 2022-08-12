import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, price, seller, ratings } = props.product;
    // const handleAddToCart = () =>{
    //     console.log('clicked');
    // }
    return (
        <div className='product'>
            <img src={img} alt="" />
           
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p>Seller : {seller}</p>
                <p><small>Ratings : {ratings}*</small></p>
            </div>

            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
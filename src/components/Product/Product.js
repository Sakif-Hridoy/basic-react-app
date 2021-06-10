import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    
    return (
        <div className="product">
            <div className="product-img">
                <img className="logo-img" src={props.product.img} alt=""/>
            </div>
            <div>
            <h3 className="product-name"><Link to={"/product/"+props.product.key}>{props.product.name}</Link></h3>
            
            <p className="product-celler"><small>by: {props.product.seller}</small></p>
            <p className="product-celler">${props.product.price}</p>
            
            <p className="product-celler"><small>only {props.product.stock} left in stock-order soon</small></p>
            {props.showAddToCart && <button onClick={()=>props.handleProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;


import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const{name,quantity,key,price} = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };
    const quantityStyle = {
        marginLeft:'20px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <h4 style={quantityStyle}>Quantity: {quantity}</h4><br />
            <p className="product-name"><small>${price}</small></p>
            <button key={props.product.key} onClick={()=> props.handleRemoveProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;
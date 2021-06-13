import React from 'react';

const ReviewItem = (props) => {
    const{name,quantity,key} = props.product;
    
    return (
        <div >
            <h4>{name}</h4>
            <h4>Quantity: {quantity}</h4><br />
            <button key={props.product.key} onClick={()=> props.handleRemoveProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;
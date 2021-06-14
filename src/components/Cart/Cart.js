import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const totalByReduce = cart.reduce((total, prd)=> total + prd.price,0);
    let total = 0;
    for(let i=0;i<cart.length;i++){
        const prdct = cart[i];
        total = total + prdct.price*prdct.quantity;
    }

    let shipping = 0;
    if(total >35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total >0){
        shipping = 12.99;
    }

    const tax = (total/10).toFixed(2);
    const finalTax = Number(tax);
    const grandTotal = Math.round(total + shipping + finalTax);
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Quantity</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <h5>Total:{grandTotal}</h5>
            <Link to="/review"><button className="main-button">Review Order</button></Link>
            
        </div>
    );
};

function formatNumber(amount){
    const precision = amount.toFixed(2);
    return Number(precision);
}
export default Cart;
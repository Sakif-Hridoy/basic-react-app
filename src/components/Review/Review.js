import React, { useEffect, useState } from 'react';
import { getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import Cart from '../Cart/Cart';
const Review = (props) => {
    const [cart,setCart] = useState([]);
    const handleRemoveProduct = (productKey)=>{
        const newCart = cart.filter(pd=>
            pd.key !== productKey
        )
        setCart(newCart);
        removeFromDatabaseCart(productKey);
        
    }

    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key=> {
           const product = fakeData.find(pd=>pd.key === key);
           product.quantity = savedCart[key];
           return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
            <h3 >Number of Item in Cart Item: {cart.length}</h3>
            {
                cart.map(pd=><ReviewItem product={pd} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;
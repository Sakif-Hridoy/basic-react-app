import React, { useEffect, useState } from 'react';
import { getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

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
        <div>
            <h3>Cart Item details: {cart.length}</h3>
            {
                cart.map(pd=><ReviewItem key={props.key} product={pd} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
            }
        </div>
    );
};

export default Review;
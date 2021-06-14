import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
  
    const firstTen = fakeData.slice(0,10);
    const[product,setProduct] = useState(firstTen);
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const previousCart = productKey.map(existingKey=>{
            const elements= fakeData.find(elmnt=>elmnt.key === existingKey)
            elements.quantity= savedCart[existingKey];
            return elements;
            
        })
        setCart(previousCart);
    },[])
    
    const handleProduct = (product) =>{
        const addedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === addedKey);
        let count=1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity +1;
            sameProduct.quantity = sameProduct.quantity+1;
            const others = cart.filter(pd=> pd.key != addedKey);
            newCart = [...others,sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }
    

    return (
        <div className="shop-container">
            <div className="product-container">
            
              {
                  product.map(products=><Product key={products.key}showAddToCart={true} handleProduct={handleProduct} product={products}></Product>)
                  
                  
              }
          
            </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;
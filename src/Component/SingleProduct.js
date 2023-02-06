import React from 'react'
import {Cart} from '../Context'
import { useContext } from 'react';


const SingleProduct = ({prod}) => {

  const {cart,setCart}= useContext(Cart);
 
  return (
    <div className='products'>
        <img src={prod.image} style={{height:300}} alt={prod.title}/>
        <div className='productDesc'>
            <span style={{fontWeight: 700}}>{prod.title}</span>
            <span>${(prod.price)}</span>
        </div>
        
        {cart.includes(prod)?(
          <button className='add' onClick={()=>{
            setCart(cart.filter(c=>c.id!==prod.id));
          }}>
            Remove From Cart
            </button>
        ):(
          <button className='remove'  onClick={()=>{
            setCart([...cart,prod]);
          }}>
            Add to Cart
            </button>
        )}      
    </div>
  );
};

export default SingleProduct;
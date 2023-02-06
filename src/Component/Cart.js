import React from 'react'
import SingleProduct from './SingleProduct'
import {Cart} from '../Context'
import {useState,useEffect,useContext} from 'react'

const Cartpage = ({}) => {

  const {cart}= useContext(Cart);
  const [total,setTotal]= useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price),0))
  },[cart])
  return (
    <div>
      <span style={{fontsize:30}}>My Cart</span>
      <br/>
      <span style={{fontsize:30}}>Total:{(total)}</span>
      <div className='productContainer'>{
        cart.map(prod=>{
         return <SingleProduct 
         prod={prod}
         key={prod.id}
         />
        })
      }</div>
    </div>
  )
}

export default Cartpage
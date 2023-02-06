import React, { useState, useEffect, useContext } from 'react'
import {Cart} from '../Context'
import axios from 'axios';
import SingleProduct from './SingleProduct';
import './styles.css'

      const Home = () => {

        const [product, setProduct] = useState('')
        const {cart,setCart}= useContext(Cart)
        
        //fetching data from API
        useEffect( () => {
          try{
          async function fetchData(){
            const response= await axios.get('https://fakestoreapi.com/products')
            console.log(response.data)
            setProduct(response.data)
          } 
          fetchData()
        } catch (err) {
          console.log(err)
        }
        }, [])

          return (
            <div className='productContainer'>
              {
                product && product.map((prod)=>{
                return (
                <SingleProduct prod={prod}  key={prod.id}/>
                )
                })
              }  
            </div>
                )
            }

        export default Home
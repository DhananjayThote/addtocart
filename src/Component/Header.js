import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {Cart} from '../Context'
import './styles.css'

const Header = () => {

  const {cart}= useContext(Cart)
  return (
    <div>
      <span className='header'>Shopping App</span>
      <ul className='nav'>
        <li className='prod'>
          <Link to='/'>Home Page</Link>
        </li>
        <li className='prod1'>
          <Link to='/cart'>
            Cart
           ({cart.length}) 
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
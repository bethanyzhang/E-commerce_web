import React, { useState } from 'react'
import footerimg from '../images/footer.png'
import AccountCard from '../views/account/AccountCard.js'
import banner from '../images/banner-girl.cc69a475.png'
import { ShoppingOutlined } from '@ant-design/icons'
import { Link, useNavigate } from "react-router-dom"
import Searchbar from './Searchbar'
import { useSelector } from 'react-redux'
export default function Header () {
  const user = useSelector(state => state.user.user)
  console.log('home', user)
  const navigate = useNavigate()
  let signup = () => {
    navigate('/signup')


  }
  const signin = () => {
    navigate('/signin')
  }

  const onClickToggle = () => {
    if (document.body.classList.contains('is-basket-open')) {
      document.body.classList.remove('is-basket-open')
    } else {
      document.body.classList.add('is-basket-open')
    }
  }

  return (
    <>

      <header className='header'>
        <div className='nav'>
          <a href=""><img src={footerimg} alt="" /></a>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/featured">Featured</Link></li>
            <li><Link to="/recommended">Recommended</Link></li>
          </ul>
          <Searchbar />
          <button onClick={onClickToggle} className='shoppingcart'>
            <ShoppingOutlined style={{ fontSize: '20px' }} />
          </button>
          {user?.fullname ? (<AccountCard ></AccountCard>) : (<> <button className='signup' onClick={signup}>Sign Up</button>

            <button className='signin' onClick={signin}>Sign In</button></>)}


        </div>
      </header>
    </>
  )
}

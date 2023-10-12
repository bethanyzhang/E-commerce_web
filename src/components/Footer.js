import React from 'react'
import footerimg from '../images/footer.png'
import { useLocation } from 'react-router-dom'

export default function Footer () {

  let { pathname } = useLocation()
  const path = ['/', '/shop']

  return path.includes(pathname) ? (
    <>
      <footer>
        <div className='boxes'>
          <div className="box1">
            <span>Developed by <a href="">Solely Bootcamp</a> </span></div>
          <div className="box">
            <img src={footerimg} alt="" />
            <h5>© 2023</h5></div>
          <div className="box2">
            <span>Fork this project <a href="">HERE</a></span></div>
        </div>
      </footer>
    </>
  ) : null
}
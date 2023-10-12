import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function AccountCard () {
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  const click = () => {
    navigate('/personal')
  }
  return (
    <div className='accountbox'>
      <div className="card">

        <h5>{user.fullname}</h5>
        <img src={user.image} alt="" />
        <div className="boxes">
          <div className="box" onClick={click}><a href="#">View Account</a></div>
          <div className="box"><a href="#">Sign Out</a></div>

        </div>
      </div>

    </div>
  )
}

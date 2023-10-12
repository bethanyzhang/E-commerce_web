import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound () {
  const navigate = useNavigate()
  const goback = () => {
    navigate('/')
  }
  return (
    <div>
      <p>:( Page you are looking for doesn't exists.</p>
      <button onClick={goback}>Go Back</button>
    </div>
  )
}

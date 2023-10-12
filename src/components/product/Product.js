import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product ({ product }) {

  const navigate = useNavigate()

  const onClickItem = () => {
    if (product.id) {
      navigate(`/detail/${product.id}`)
    }
  }

  return (
    <>
      <div className='box' onClick={onClickItem}>
        <img src={product.image} alt="" />
        <div className="lower">
          <h2>{product.name}</h2>
          <span>{product.brand}</span></div>
      </div>
    </>
  )
}

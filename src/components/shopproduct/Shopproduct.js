import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useBasket from '../../hooks/useBasket'

export default function Shopproduct ({ product }) {

  const navigate = useNavigate()

  const onClickItem = () => {
    if (product.name) {
      navigate(`/detail/${product.name}`)
    }
  }


  const { itemInBasket, addtoBasket, removefromBasket } = useBasket()

  const handleBasket = () => {

    if (itemInBasket(product)) {

      removefromBasket(product)
    } else {
      addtoBasket(product)
    }


  }


  return (
    <>
      <div className="box" onClick={onClickItem}>
        <div className="mainbox">
          <div className="image">
            <img src={product.image || ""} alt="" /></div>
          <div className="detail">
            <h5>{product.name || ""}</h5>
            <p>{product.brand || ""}</p>
            <h4>{product.price || 0}</h4>
          </div>
        </div>


      </div >
      <div>{
        product && (
          <button onClick={handleBasket} className='addtoBasket'>
            {itemInBasket(product) ? 'Remove from basket' : 'Add to basket'}
          </button>
        )
      }</div>
    </>

  )
}


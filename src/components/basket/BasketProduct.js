import React from 'react'


export default function BasketProduct ({ product }) {


  return (
    <>
      <div className="box">
        <div className="image">
          <img src={product.image} alt="" />
        </div>
        <div className="name">
          <h4>{product.name}</h4>
        </div>
        <div className="quantity">
          <h5>Quantity</h5>
          <span>{product.quantity}</span>
        </div>
        <div className="size">
          <h5>Size</h5>
          <span>{product.size}</span>
        </div>
        <div className="color">
          <h5>Color</h5>
          <span>{product.color}</span>
        </div>
        <div className="price">
          <h4>$ {product.price}</h4>
        </div>

      </div>
    </>
  )
}

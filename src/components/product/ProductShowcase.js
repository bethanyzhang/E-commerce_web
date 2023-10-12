import React from 'react'
import Product from './Product'

export default function ProductShowcase ({ products }) {
  return (
    <>
      <div className="productlist">
        {products.map((product, index) => (
          <Product key={index} product={product}></Product>
        ))
        }</div>
    </>
  )
}

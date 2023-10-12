import React from 'react'
import Shopproduct from './Shopproduct'

export default function ShopproductShowcase ({ shopproduct }) {


  return (
    <>
      <div className="shopproduct" id='shoppro'>
        {shopproduct.map((product, index) => (
          <Shopproduct key={index} product={product}></Shopproduct>
        ))}
      </div>
    </>
  )
}

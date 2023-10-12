import React from 'react'
import BasketProduct from './BasketProduct'


export default function BasketShowcase ({ basketList }) {

  return (
    <>
      <div className="basket_main">
        {basketList.length === 0 ? "Basket is empty" :

          basketList.map((product, index) => (
            <BasketProduct key={index} product={product}></BasketProduct>
          )
          )}
      </div>


    </>
  )
}

import React, { useState, useEffect } from 'react'
import { calculateTotal } from '../../utils'
import { default as BasketShowcase } from './BasketShowcase'
import { useSelector } from 'react-redux'


export default function Basket () {


  useEffect(() => {

  }, [])

  const basketList = useSelector(state => state.basketProduct.basketList)

  const clearBasket = () => {
    if (basketList.length !== 0) {
      console.log('clear basketList...')
    }
  }

  const checkout = () => {
    if (basketList.length !== 0) {
      document.body.classList.remove('is-basket-open')
      console.log('go checkout...')
    }
  }

  const close = () => {
    document.body.classList.remove('is-basket-open')
  }

  return (
    <div>
      <>
        <div className="basket">
          <div className="basket-list">
            <div className="basket-header">
              <h3 className="basket-header-title">
                My Basket
                <span>
                  (
                  {
                    `${basketList.length} ${basketList.length > 1 ? 'items' : 'item'}`
                  }
                  )
                </span>
              </h3>
              <button onClick={close}>Close</button>
              <button className="basket-clear button" onClick={clearBasket} disabled={basketList.length == 0}>
                <span>Clear Basket</span>
              </button>





            </div>
            <div className="basketlist">
              <BasketShowcase basketList={basketList} />
            </div>
            <p>
              Subtotal Amout:
            </p>
            <h2>
              {
                calculateTotal(basketList.map(product => product.price * product.quantity))
              }
            </h2>
          </div>
          <button disabled={basketList.length === 0} onClick={checkout}>
            Check out
          </button>
        </div>



      </>
    </div>
  )
}

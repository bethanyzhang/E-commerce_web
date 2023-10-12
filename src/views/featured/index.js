import React from 'react'
import glasses1 from '../../images/glasses1'
import banner_guy from '../../images/banner_guy.png'
import { useState } from 'react'
import { ProductShowcase } from '../../components'
import { useFeaturedProduct } from '../../hooks'

export default function Featured () {
  const { featuredProducts, getFeaturedProducts, error: fea_error } = useFeaturedProduct()

  return (
    <>
      <div className='banner'>
        <div className="left">
          <h1>Featured Products</h1>
        </div>
        <div className="right">
          <img src={banner_guy} alt="" />
        </div>
      </div>

      <div className="product">
        <ProductShowcase products={featuredProducts}></ProductShowcase>
      </div>
    </>
  )
}

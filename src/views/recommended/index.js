import React from 'react'
import glasses1 from '../../images/glasses1'
import banner_girl2 from '../../images/banner_girl2.png'

import { useState } from 'react'
import { Header, ProductShowcase } from '../../components'
import { useRecommended } from '../../hooks'

export default function Recommended () {


  const { recommended, getRecommended, error: rec_error } = useRecommended()
  return (
    <>

      <div className='banner'>
        <div className="left">
          <h1>Recommended Products</h1>
        </div>
        <div className="right">
          <img src={banner_girl2} alt="" />
        </div>
      </div>

      <div className="product">
        <ProductShowcase products={recommended}></ProductShowcase>
      </div>
    </>
  )
}
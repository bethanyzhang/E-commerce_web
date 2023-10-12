import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ShopproductShowcase } from '../../components'

import { useSelector } from 'react-redux'
export default function Search () {

  const productList = useSelector(state => state.product.productList)



  const { searchInput } = useParams()
  const [resProducts, setResProducts] = useState([])

  useEffect(() => {

    let list = productList.filter((item, index) => {
      return item.name.toLowerCase().indexOf(searchInput) !== -1
    })
    setResProducts(list)
  }, [searchInput])

  console.log(" heeeeeeere")
  console.log(productList)

  return (
    <div>

      <h5>Found {resProducts.length} {resProducts.length > 1 ? 'products' : 'product'} with keyword {searchInput}</h5>

      <ShopproductShowcase shopproduct={resProducts} />
    </div>
  )
}

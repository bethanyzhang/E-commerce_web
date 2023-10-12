import React, { useEffect } from 'react'
import { ShopproductShowcase } from '../../components'
import { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore"
import { default as app } from '../../services/config'
import { getFirestore } from "firebase/firestore"
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/reducer/productReducer'


export default function Shop () {
  const [shoplist, setShoplist] = useState([])

  const dispatch = useDispatch()


  useEffect(() => {
    async function fetchData () {

      const db = getFirestore(app)

      const q = query(collection(db, "products"))
      let productList = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        productList.push(doc.data())

      })

      dispatch(getProduct({ productList }))
      setShoplist([...productList])

    }

    if (shoplist.length === 0) {

      fetchData()
    }

  }, [])

  return (
    <>

      <div className='shop' id='shop'>
        <ShopproductShowcase shopproduct={shoplist}></ShopproductShowcase>
      </div>

    </>
  )
}

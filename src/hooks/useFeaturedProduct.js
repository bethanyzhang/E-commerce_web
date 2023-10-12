import React, { useEffect, useState } from 'react'
import glasses1 from '../images/glasses1'
import { collection, query, where, getDocs } from "firebase/firestore"
import { default as app } from '../services/config'
import { getFirestore } from "firebase/firestore"

export default function useFeaturedProduct () {

  const [featuredProducts, setFeaturedProducts] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    if (featuredProducts.length == 0) {
      getFeaturedProducts()
    }
  }, [])

  const getFeaturedProducts = async () => {
    try {
      const db = getFirestore(app)
      const q = query(collection(db, "products"), where("isFeatured", "==", true))

      const querySnapshot = await getDocs(q)
      let productList = []
      querySnapshot.forEach((doc) => {
        productList.push(doc.data())

      })
      setFeaturedProducts([...productList])

    } catch (error) {
      setError(error)

    }

  }





  return {
    featuredProducts, getFeaturedProducts, error
  }
}

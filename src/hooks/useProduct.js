import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { collection, query, where, getDocs } from "firebase/firestore"
import { default as app } from '../services/config'
import { getFirestore } from "firebase/firestore"
export default function useProduct (name) {





  const [product, setProduct] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = async () => {
    try {

      const db = getFirestore(app)
      const q = query(collection(db, "products"), where("name", "==", name))

      const querySnapshot = await getDocs(q)
      let products = []
      querySnapshot.forEach((doc) => {
        products.push(doc.data())

      })


      setProduct({ ...products[0] })
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }


  }
  useEffect(() => {
    getData()
  }, [name])

  return { product, isLoading, error, getData }
}

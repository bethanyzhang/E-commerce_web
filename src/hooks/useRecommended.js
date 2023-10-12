import React, { useEffect, useState } from 'react'

import { collection, query, where, getDocs } from "firebase/firestore"
import { default as app } from '../services/config'
import { getFirestore } from "firebase/firestore"

export default function useRecommended () {

  const [recommended, setRecommended] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    if (recommended.length == 0) {
      getRecommended()
    }
  }, [])

  const getRecommended = async () => {
    try {
      const db = getFirestore(app)
      const q = query(collection(db, "products"), where("isRecommended", "==", true))

      const querySnapshot = await getDocs(q)
      let productList = []
      querySnapshot.forEach((doc) => {
        productList.push(doc.data())

      })
      setRecommended([...productList])

    } catch (error) {
      setError(error)

    }


  }




  return {
    recommended, getRecommended, error
  }
}

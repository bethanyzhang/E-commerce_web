import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/reducer/basketReducer'

export default function useBasket () {
  const basketList = useSelector(state => state.basketProduct.basketList)
  const dispatch = useDispatch()

  const itemInBasket = (item) => {

    let ifinbasket = basketList.filter((product) => { return product?.name == item?.name })
    if (ifinbasket.length !== 0) {
      return true
    } else {
      return false
    }
  }


  const addtoBasket = (item) => {


    dispatch(add(item))

  }

  const removefromBasket = (item) => {

    dispatch(remove(item))

  }



  return {
    itemInBasket, addtoBasket, removefromBasket
  }


}

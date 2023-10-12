import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({

  name: "product",

  initialState: {
    productList: []
  },



  reducers: {
    getProduct: (state, param) => {
      const { productList } = param.payload
      state.productList = [...state.productList, ...productList]

    }
  }

})

export const { getProduct } = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer
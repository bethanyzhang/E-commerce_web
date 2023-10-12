import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({

  name: "basketProduct",

  initialState: {
    basketList: []
  },


  reducers: {
    add: (state, param) => {


      const basketList = param.payload

      state.basketList = [...state.basketList, basketList]




    },
    remove: (state, param) => {

      let product_del = param.payload
      let filter_res = state.basketList.filter((product) => product.name !== product_del.name)
      state.basketList = [...filter_res]


    }
  }

})

export const { add, remove } = basketSlice.actions
const basketReducer = basketSlice.reducer
export default basketReducer
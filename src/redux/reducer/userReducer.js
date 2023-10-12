import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

  name: "user",

  initialState: {
    user: {
      DocId: ""
    }
  },


  reducers: {
    signUp: (state, param) => {
      const { docId } = param.payload
      state.user.DocId = docId
      console.log('user.DocId reducers', state.user.DocId)
    },
    signInSuccess: (state, param) => {
      const { user } = param.payload
      console.log('user,', user)
      state.user = { ...state.user, ...user }
      console.log('state.user', state.user)
    }
  }

})

export const { signUp, signInSuccess } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
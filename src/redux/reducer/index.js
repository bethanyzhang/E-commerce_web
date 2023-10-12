import basketReducer from "./basketReducer"
import productReducer from "./productReducer"
import userReducer from "./userReducer"


const rootReducer = {
  user: userReducer,
  product: productReducer,
  basketProduct: basketReducer
}
export default rootReducer
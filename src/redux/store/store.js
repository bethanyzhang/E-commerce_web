
import rootReducer from '../reducer'
import { createStore } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}
const persistedReducer = persistCombineReducers(rootPersistConfig, rootReducer)

export default () => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}


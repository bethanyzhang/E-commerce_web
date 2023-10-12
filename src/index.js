import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import configureStore from './redux/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

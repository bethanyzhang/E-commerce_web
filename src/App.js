import React from 'react'
import AppRouter from './routers/AppRouter'
import './styles/style.scss'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
export default App

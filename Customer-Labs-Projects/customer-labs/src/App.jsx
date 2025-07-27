import React from 'react'
import Home from './component/Home'
import './component/home.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Home/>
    </div>
  )
}

export default App
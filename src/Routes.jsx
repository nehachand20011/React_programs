import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'

const Routess = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/nav' element={<Navbar/>}/>
<Route path='/' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routess
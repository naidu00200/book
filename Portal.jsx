import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import AddBooks from './AddBooks'
import ReadBook from './ReadBook'
import CartItems from './CartItems'

const Portal = () => {
  return (
    <div className="portal">
        <Navbar/>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Books/>} path='/books'/>
            <Route element={<AddBooks/>} path='/addbooks'/>
            <Route element={<ReadBook/>} path='/readbook/:id'/>
            <Route element={<CartItems/>} path='/cartitems'/>
        </Routes>
    </div>
  )
}

export default Portal
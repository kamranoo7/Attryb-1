import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Login from '../Component/Login'
import Signup from '../Component/Signup'
import Car from '../Component/Car'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} >

        </Route>
        <Route path="/car" element={<Car/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoute

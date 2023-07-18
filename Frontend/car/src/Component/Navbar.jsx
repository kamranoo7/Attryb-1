import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup" >Singup</Link>
      <Link to="/car">Car</Link>
    </div>
  )
}

export default Navbar

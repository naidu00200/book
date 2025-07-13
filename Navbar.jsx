import React from 'react'
import '../assets/styles/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          <h3>Library Books</h3>
        </div>
        <div className="links">
            <ul>
                <li><NavLink to="/portal/">HOME</NavLink></li>
                <li><NavLink to="/portal/books">Books</NavLink></li>
                <li><NavLink to="/portal/addbooks">Add Books</NavLink></li>
                <li><NavLink to="/portal/cartitems">Cart</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
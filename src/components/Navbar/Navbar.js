import React from 'react'
import "../styles/Navbar.css"
import pic1 from "../Images/logoremove.png"
import { Link } from 'react-router-dom'
import About from '../Pages/About'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={pic1}>
        </img>
      </div>
      <div className='Nav'>
        <ul>
          <li>
            <Link to="/"className='link'>Home</Link>
          </li>
          <li>
            <Link to="/form"className='link'>Form</Link>
          </li>
          <li>
              <Link to="/About" className='link'>About </Link>
          </li>
          <li>
             <Link to="/Contact"className='link'>Contact Us</Link>
          </li>
        </ul>

      </div>
      
    </div>
  )
}

export default Navbar
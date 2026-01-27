import React from 'react'
import {Link} from "react-router-dom"
import "../css/navbar.css"
const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
        <li><button onClick={<Link to="/" ></Link>}>Home</button></li>
        <li><Link to="/service" >Service</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/about" >About Us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

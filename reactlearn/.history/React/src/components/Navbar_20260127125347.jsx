import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="./service" >Service</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/about" >About Us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

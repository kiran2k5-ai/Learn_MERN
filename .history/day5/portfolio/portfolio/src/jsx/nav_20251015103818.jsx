import React from 'react'
import '../css/nav.css'

const home = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1 className='navh text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent'>KIRAN P</h1> 
        <div className='links'>
            <a href='/' className='link-a'>Home</a>
            <a href='/' className='link-a'>About</a>
            <a href='/' className='link-a'>TechStack</a>
            <a href='/' className='link-a'>Project</a>
            <a href='/' className='link-a'>Contact</a>
            <a href="https://github.com/kiran2k5-ai" target="_blanck" ><img className="image-a" src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/kiranp2005/" target='_blanck'><img className="image-a" src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="Linked In" /></a>
        </div>
      </nav>
    </div>
  )
}

export default home

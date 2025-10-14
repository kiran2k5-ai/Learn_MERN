import React from 'react'
import '../css/home.css'
const home = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1 className='navh'>My Portfolio</h1> 
        <div className='links'>
            <a href='/' className='link-a'>Home</a>
            <a href='/' className='link-a'>About</a>
            <a href='/' className='link-a'>TechStack</a>
            <a href='/' className='link-a'>Project</a>
            <a href='/' className='link-a'>Contact</a>
            <a href="/"><img src="https://www.flaticon.com/free-icon/github_733609" alt="img" /></a>
        </div>
      </nav>
    </div>
  )
}

export default home

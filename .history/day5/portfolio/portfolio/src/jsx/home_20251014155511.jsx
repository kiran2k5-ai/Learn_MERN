import React from 'react'
import Nav from './nav.jsx'
import '../css/home.css'
import Profile from '../images/profile_img.jpg'

const home = () => {
  return (
    <>
     <div className='content'>
        <div className='content-1'>
            <h1 className='homeh'>
                Hi 👋, <br />
                My name is Kiran<br />
    I           This My PortFolio
            </h1>
        </div>

        <div className="content-2">
            <img src= {Profile}   alt="Profile image" style={innerWidth:}/>
        </div>
     </div>
    </>
  )
}

export default home

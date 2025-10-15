import React from 'react'
import Nav from './nav.jsx'
import '../css/home.css'
import Profile1 from '../images/profile_img.jpg'
import Profile2 from '../images/profile_img1.jpg'

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

        <div>
            <img className="content-2" src= {Profile2}   alt="Profile image" />
        </div>
     </div>
    </>
  )
}

export default home

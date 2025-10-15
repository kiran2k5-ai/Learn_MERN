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

        <div>
            <img className="content-2" src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Favatar-user-profile-male-avatar-png%2Fe6ACujVB&psig=AOvVaw2DKE62ODVgswdQ60iL1NXG&ust=1760524715445000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjy--m_o5ADFQAAAAAdAAAAABAE"   alt="Profile image" />
        </div>
     </div>
    </>
  )
}

export default home

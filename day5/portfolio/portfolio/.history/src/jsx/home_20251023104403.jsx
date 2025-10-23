import React from 'react'
import Nav from './nav.jsx'
import '../css/home.css'
import Profile1 from '../images/profile_img.jpg'
import Profile2 from '../images/profile_img2.png'

const home = () => {
  return (
    <>
     <div className='content'>
        <div className='content-1'>
            <h1 className='homeh'>
                Hi 👋, <br />
                My name is <span class="name">Kiran P</span><br />
                This My PortFolio
                <h2>I'm a <span id="typed-text"></span></h2>
            </h1>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script>
var typed = new Typed("#typed-text", {
  strings: ["Web Developer", "UI/UX Designer", "AI Enthusiast", "Full-Stack Developer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});
</script>

        <div>
            <img className="content-2" src= {Profile2}   alt="Profile image" />
        </div>
     </div>
    </>
  )
}

export default home

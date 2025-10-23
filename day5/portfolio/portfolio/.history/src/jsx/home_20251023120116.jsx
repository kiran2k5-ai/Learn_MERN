import React, { useEffect } from 'react';
import Nav from './nav.jsx';
import '../css/home.css';
import Profile2 from '../images/profile_img.jpg';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Web Developer", "UI/UX Designer", "AI Enthusiast", "Full-Stack Developer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='content'>
        <div className='content-1'>
          <h1 className='homeh'>
            Hi 👋, <br />
            My name is <span className="name">Kiran P</span><br />
            This My PortFolio
          </h1>
          <h2>I'm a <span id="typed-text"></span></h2>
        </div>
        <div className="content-2">
            <img src={Profile2} alt="Profile" />
        </div>

      </div>
    </>
  );
};

export default Home;

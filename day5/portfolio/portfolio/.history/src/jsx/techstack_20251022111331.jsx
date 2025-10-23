import React from 'react'
import '../css/techstack.css'
const techstack = () => {
  return (
    <>
    <div className='techstack1'>
      <div className='techstack2'>
        <h3 className='techstack-h3'>Tech Stack</h3>
        <h5 className='techstack-h5'> Technologies I’ve been working with recently</h5>
      </div>
      <div className='techstackimages'>

        <h5 className='techstack-h5'> Languages Used : </h5>
        <div className='techstacklang'>
          <img src="src/images/java.png" alt="Html" />
          <img src="src/images/js.png" alt="JavaScript" />
          <img src="src/images/python.jpeg" alt="" />
          <img src="src/images/css.jpg" alt="Css" />
          <img src="src/images/dart.png" alt="Dart" />
        </div>

        <h5 className='techstack-h5'> FrontEnd Used : </h5>
        <div className='techstacklang'>
          <img src="src/images/react.png" alt="React" />
          <img src="src/images/tailwind.png" alt="TailWind Css" />
          <img src="src/images/bootstrap.png" alt="" />
          <img src="src/images/css.jpg" alt="Css" />
          <img src="src/images/dart.png" alt="Dart" />
        </div>
      </div>
    </div>
    </>
  )
}

export default techstack

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
          <img src="src/images/bootstrap.png" alt="BootStrap" />
          <img src="src/images/typescript.png" alt="Typescript" />
          <img src="src/images/responsive.png" alt="Responsive" />
        </div>

        <h5 className='techstack-h5'> BackEnd Used : </h5>
        <div className='techstacklang'>
          <img src="src/images/nodejs.png" alt="React" />
          <img src="src/images/express.png" alt="Express" />
          <img src="src/images/fastapi.png" alt="FastApi" />
          <img src="src/images/restapi.png" alt="RestApi" />
          <img src="src/images/microservice.png" alt="Microservice" />
        </div>

        <h5 className='techstack-h5'> Database Used : </h5>
        <div className='techstacklang'>
          <img src="src/images/mysql.png" alt="Mysql" />
          <img src="src/images/supabase.png" alt="Supabase" />
          <img src="src/images/mongodb.png" alt="Mongodb" />
          <img src="src/images/restapi.png" alt="RestApi" />
          <img src="src/images/microservice.png" alt="Microservice" />
        </div>
      </div>
    </div>
    </>
  )
}

export default techstack

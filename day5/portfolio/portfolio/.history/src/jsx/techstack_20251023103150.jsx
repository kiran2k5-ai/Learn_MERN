import React from 'react'
import '../css/techstack.css'

import Image1 from 'src/images/java.png'
import Image2 from 'src/images/js.png'
import Image3 from 'src/images/python.jpeg'
import Image4 from 'src/images/php.png'
import Image5 from 'src/images/dart.png'
import Image6 from 'src/images/react.png'
import Image7 from 'src/images/tailwind.png'
import Image8 from 'src/images/bootstrap.png'
import Image9 from 'src/images/typescript.png'
import Image10 from 'src/images/responsive.png'
import Image11 from 'src/images/nodejs.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'
import Image2 from 'src/images/js.png'

const techstack = () => {
  return (
    <>
    <div className='techstack1'>
      <div className='techstack2'>
        <h3 className='techstack-h3'>Tech Stack</h3>
        <h5 className='techstack-h5'> Technologies I’ve been working with recently</h5>
      </div>
      <div className='techstackimages'>

        <h5 className='techstack-h6'> Languages Used : </h5>
        <div className='techstacklang'>
          <img src="src/images/java.png" alt="Html" />
          <img src="src/images/js.png" alt="JavaScript" />
          <img src="" alt="" />
          <img src="" alt="PHP" />
          <img src="" alt="Dart" />
        </div>

        <h5 className='techstack-h6'> FrontEnd Used : </h5>
        <div className='techstacklang'>
          <img src="" alt="React" />
          <img src="" alt="TailWind Css" />
          <img src="" alt="BootStrap" />
          <img src="" alt="Typescript" />
          <img src="" alt="Responsive" />
        </div>

        <h5 className='techstack-h6'> BackEnd Used : </h5>
        <div className='techstacklang'>
          <img src="" alt="React" />
          <img src="" alt="Express" />
          <img src="src/images/fastapi.png" alt="FastApi" />
          <img src="src/images/restapi.png" alt="RestApi" />
          <img src="src/images/microservice.png" alt="Microservice" />
        </div>

        <h5 className='techstack-h6'> Database Used : </h5>
        <div className='techstacklang'>
          <img src="src/images/mysql.png" alt="Mysql" />
          <img src="src/images/supabase.png" alt="Supabase" />
          <img src="src/images/mongodb.png" alt="Mongodb" />
          <img src="src/images/postgresql.png" alt="PostgreSql" />
          <img src="src/images/xampp.png" alt="Xampp" />
        </div>
      </div>
    </div>
    </>
  )
}

export default techstack

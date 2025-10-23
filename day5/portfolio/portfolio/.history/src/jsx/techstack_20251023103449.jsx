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
import Image12 from 'src/images/express.png'
import Image13 from 'src/images/fastapi.png'
import Image14 from 'src/images/restapi.png'
import Image15 from 'src/images/microservice.png'
import Image16 from 'src/images/mysql.png'
import Image17 from 'src/images/supabase.png'
import Image18 from 'src/images/mongodb.png'
import Image19 from 'src/images/postgresql.png'
import Image20 from 'src/images/xampp.png'

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
          <img src={Image1} alt="Html" />
          <img src= alt="JavaScript" />
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
          <img src="" alt="FastApi" />
          <img src="" alt="RestApi" />
          <img src="" alt="Microservice" />
        </div>

        <h5 className='techstack-h6'> Database Used : </h5>
        <div className='techstacklang'>
          <img src="" alt="Mysql" />
          <img src="" alt="Supabase" />
          <img src="" alt="Mongodb" />
          <img src="" alt="PostgreSql" />
          <img src="" alt="Xampp" />
        </div>
      </div>
    </div>
    </>
  )
}

export default techstack

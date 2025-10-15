import React from 'react'
import '../css/about_me.css'
import Nav from './nav.jsx'

const about_me = () => {
  return (
    <>
      <Nav />
      <div>
        <h1 className='abouth'>About Me</h1>
        <p className='aboutp'>I am Kiran P, a passionate and dedicated individual with a strong 
          interest in technology and software development. I am currently pursuing my education 
          in computer science, where I have gained a solid foundation in programming languages, 
          data structures, and algorithms. I enjoy solving complex problems and continuously 
          learning new skills to stay updated with the latest advancements in the tech industry. 
          In addition to my technical skills, I am a team player and thrive in collaborative environments.
           I am excited about the opportunities to contribute my knowledge and skills to real-world projects and make a positive impact through technology.</p>
      </div>
    </>
  )
}

export default about_me;

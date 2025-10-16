import React from 'react'
import '../css/about_me.css'
import Nav from './nav.jsx'

const about_me = () => {
  return (
    <>
      <div className='about'>
        <h1 className='abouth'>About Me</h1> <br />
        <div className='aboutp'>I am Kiran P, a passionate and dedicated individual with a strong <br />
          interest in technology and software development. I am currently pursuing my education <br />
          in computer science, where I have gained a solid foundation in programming languages, <br />
          data structures, and algorithms. I enjoy solving complex problems and continuously <br />
          learning new skills to stay updated with the latest advancements in the tech industry. <br />
          In addition to my technical skills, I am a team player and thrive in collaborative environments. <br />
          I am excited about the opportunities to contribute my knowledge and skills to real-world projects <br />
          and make a positive impact through technology.
        </div>
        <h1 className='aboutw'>Work Experience</h1>
        <div className='about-i'>


          <div>
            <h3 className='abouti'>Web Developer Intern</h3>
          </div>
          <div className='aboutintern1'>
            <h3 className='aboutintern2'>Internship</h3>
          </div>
        </div>
        <div className='about-jj1'>
          <h4 className='about-jj-name'>J.J.TECH.Software Solutions (OPC) Private Limited</h4>
          <h4 className='about-jj-name'> 11/06/2025 to 21/06/2025</h4>
        </div>
        <div>
          <ul>
            <li> Developed and maintained responsive web interfaces using HTML5, CSS3, JavaScript, and
                Bootstrap.
            </li>
            <li>Collaborated with the team to design and deploy the company’s official website, improving UI/UX
                and load performance.
            </li>
            <li>Worked with Git/GitHub for version control and debugged frontend components to enhance
                reliability.
            </li>
            <li>Gained exposure to backend development concepts, API integration, and database handling.</li>
          </ul>
        </div>
      </div>
      <hr className='line'/>

    <div className='aboutinter'> 
      <div className='about-i'>
          <div>
            <h3 className='abouti'>Web Developer Intern</h3>
          </div>
          <div className='aboutintern1'>
            <h3 className='aboutintern2'>Internship</h3>
          </div>
        </div>
        <div className='about-jj2'>
          <h4 className='about-jj-name'>PEARLTHOUGHTS</h4>
          <h4 className='about-jj-name'> 25.07.2025 to 18.08.2025 </h4>
        </div>
        <div>
          <ul>
            <li> Developed a full-stack web application with Patient and Doctor Dashboards, Notification System, Medical Records, Calendar View, and Prescription 
                Handling.
            </li>
            <li>Built responsive interfaces using TypeScript, integrated backend and database with Supabase, and implemented email notifications via Twilio for 
                seamless communication.
            </li>
            <li>Optimized performance, resolved issues, and delivered a scalable, reliable healthcare application using Git/GitHub and modern full-stack 
                best practices.
            </li>
          </ul>
        </div>
      </div>
      <hr className='line'/>

      
    </>
  )
}

export default about_me;

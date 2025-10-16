import React from 'react'
import Nav from './jsx/nav.jsx'
import Home from './jsx/home.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About_me from './jsx/about_me.jsx'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About_me} />
        <Route path='/techstack' Component={} />
      </Routes>
      {/* <Home /> */}
    </div>
  )
}

export default App

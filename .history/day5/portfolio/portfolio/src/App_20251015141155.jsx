import React from 'react'
import Nav from './jsx/nav.jsx'
import Home from './jsx/home.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About_me from './jsx/about_me.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/about' component={About_me} />
      </Routes>
      {/* <Home /> */}
    </div>
  )
}

export default App

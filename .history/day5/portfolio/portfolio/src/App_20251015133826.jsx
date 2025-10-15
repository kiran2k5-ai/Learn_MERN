import React from 'react'
import Nav from './jsx/nav.jsx'
import Home from './jsx/home.jsx'
import { Routes, Route } from 'react-router-dom'
import home from './jsx/nav.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' component={home} />
        
      </Routes>
      <Nav />
      <Home />
    </div>
  )
}

export default App

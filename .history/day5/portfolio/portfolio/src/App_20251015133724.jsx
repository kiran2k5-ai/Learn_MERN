import React from 'react'
import Nav from './jsx/nav.jsx'
import Home from './jsx/home.jsx'
import { Routes, Router } from 'react-router-dom'
import home from './jsx/nav.jsx'
const App = () => {
  return (
    <div>
      <Router>
        <Route path='/home' component={home} />

      </Router>
      <Nav />
      <Home />
    </div>
  )
}

export default App

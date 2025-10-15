import React from 'react'
import Nav from './jsx/nav.jsx'
import Home from './jsx/home.jsx'
import { Route, Router } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Route path='/about_me' component={About} />
      </Router>
      <Nav />
      <Home />
    </div>
  )
}

export default App

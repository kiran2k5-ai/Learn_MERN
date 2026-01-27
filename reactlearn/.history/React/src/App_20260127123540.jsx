import React from 'react'
import Profile from './components/Profile.jsx'
import Temp from "./hooks/Temp.jsx"
import Parent from './components/Parent.jsx'
import Form from './hooks/Form.jsx'
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Service from "./pages/Service.jsx"
import Contact from "./pages/Contact.jsx"
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        Route path='/' element={<Home />}></Route>
        Route path='/' element={<Home />}></Route>
        Route path='/' element={<Home />}></Route>
      </Routes>
      <Temp/>
      <Profile name={["xyz","vhb","hjb"]} />
      <h2>app</h2>
      <Parent></Parent>
      <Form></Form>
    
    </>
  )
}

export default App

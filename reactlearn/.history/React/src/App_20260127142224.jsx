import React from 'react'
import Profile from './components/Profile.jsx'
import Temp from "./hooks/Temp.jsx"
import Parent from './components/Parent.jsx'
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Service from "./pages/Service.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from './components/Navbar.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route></Route>
      </Routes>
      {/* <Temp/>
      <Profile name={["xyz","vhb","hjb"]} />
      <h2>app</h2>
      <Parent></Parent> */}
    
    </>
  )
}

export default App

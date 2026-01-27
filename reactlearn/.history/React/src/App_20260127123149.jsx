import React from 'react'
import Profile from './components/Profile.jsx'
import Temp from "./hooks/Temp.jsx"
import Parent from './components/Parent.jsx'
import Form from './hooks/Form.jsx'

const App = () => {
  return (
    <>
      
      <Temp/>
      <Profile name={["xyz","vhb","hjb"]} />
      <h2>app</h2>
      <Parent></Parent>
      <Form></Form>
    
    </>
  )
}

export default App

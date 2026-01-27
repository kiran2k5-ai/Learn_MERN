import React from 'react'
import Profile from './components/Profile.jsx'
import Temp from "./hooks/temp.jsx"
const App = () => {
  return (
    <>
    <div>
      <Profile name={["xyz","vhb","hjb"]} />
      <h2>app</h2>
      <Temp/>
    </div>
    
    </>
  )
}

export default App

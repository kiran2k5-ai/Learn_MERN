import React from 'react'
import Profile from './components/Profile.jsx'
import State from './hooks'
const App = () => {
  return (
    <div>
      <Profile name={["xyz","vhb","hjb"]} />
      <h2>app</h2>
      <State></State>
    </div>
  )
}

export default App

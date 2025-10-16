import React from 'react'
import Unit from './components/Unit'
import { BrowerRouter , Router , Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Unit name="Kiran" dept="CSE" skills={["HTML","CSS","JS","MERN"]} />
    </div>
  )
}

export default App

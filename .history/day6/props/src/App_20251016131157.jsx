import React from 'react'
import Unit from './components/Unit'
import { BrowerRouter , Router , Routes} from 'react-router-dom'
const App = () => {
  return (
    <BrowerRouter>
      <Routes>
        <Route path='/' Component={Unit} />
      </Routes>
    </BrowerRouter>
  )
}

export default App

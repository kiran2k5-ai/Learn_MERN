import React from 'react'
import Unit from './components/Unit'
import { BrowerRouter , Router , Routes} from 'react-router-dom'
import state from './hooks/state'
const App = () => {
  return (
    <BrowerRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/state' Component={state} />
        <Route path='/state' Component={state} />
      </Routes>
    </BrowerRouter>
  )
}

export default App

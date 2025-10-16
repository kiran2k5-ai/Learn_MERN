import React from 'react'
import Unit from './components/Unit'
import { BrowerRouter , Router , Routes} from 'react-router-dom'
import state from './hooks/state'
import home from './pages/home'
im
const App = () => {
  return (
    <BrowerRouter>
      <Routes>
        <Route path='/' Component={home} />
        <Route path='/about' Component={} />
        <Route path='/state' Component={state} />
      </Routes>
    </BrowerRouter>
  )
}

export default App

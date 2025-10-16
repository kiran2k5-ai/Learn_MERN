import React from 'react'
import Unit from './components/Unit'
import { BrowerRouter , Route , Routes} from 'react-router-dom'
import state from './hooks/state'
import home from './pages/home'
import services from './pages/services'
im
const App = () => {
  return (
    <BrowerRouter>
      <Routes>
        <Route path='/' Component={home} />
        <Route path='/service' Component={services} />
        <Route path='/state' Component={state} />
      </Routes>
    </BrowerRouter>
  )
}

export default App

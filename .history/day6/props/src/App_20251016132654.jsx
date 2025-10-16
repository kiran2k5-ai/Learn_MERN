import React from 'react'
import Unit from './components/Unit'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import state from './hooks/state'
import home from './pages/home'
import services from './pages/services'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={home} />
        <Route path='/service' Component={services} />
        <Route path='/state' Component={state} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

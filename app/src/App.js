import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profesores from './components/Profesores'
import Barra from './components/Barra'

export const App = () => {
  return (
    <div>
      <Barra/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Profesores' element={<Profesores/>}/>
        </Routes>
      </Router>
    </div>
  )
}


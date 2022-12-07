import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profesores from './pages/Profesores'
import Sidebar from './components/Sidebar'
import Estudiantes from './pages/Estudiantes'
import Addestudiante from './pages/Addestudiante'
export const App = () => {
  return (
    <div>
      <Router>
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Profesores' element={<Profesores/>}/>
            <Route path='/Estudiantes' element={<Estudiantes/>}/>
            <Route path='/Addestudiante' element={<Addestudiante/>}/>
          </Routes> 
      </Router>
    </div>
  )
}


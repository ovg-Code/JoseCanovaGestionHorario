import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profesores from './pages/Profesores'
import Estudiantes from './pages/Estudiantes'
import Addestudiante from './pages/Addestudiante'
import Addprofesores from './pages/Addprofesores'
import Acceso from './pages/Acceso'
import PerfilEstudiante from './pages/PerfilEstudiante'
import Horario from './pages/Horario'


export const App = () => {
  return (
    <div>
      <Router>
        
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Profesores' element={<Profesores/>}/>
            <Route path='/Estudiantes' element={<Estudiantes/>}/>
            <Route path='/Addestudiante' element={<Addestudiante/>}/>
            <Route path='/Addprofesores' element={<Addprofesores/>}/>
            <Route path='/Acceso' element={<Acceso/>}/>
            <Route path='/PerfilEstudiante' element={<PerfilEstudiante/>}/>
            <Route path='Horario' element={<Horario/>}/>
          </Routes> 
      </Router>
    </div>
  )
}


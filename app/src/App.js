import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import tablero from './components/tablero'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<tablero/>}/>
    </Routes>
    </BrowserRouter>
  )
}


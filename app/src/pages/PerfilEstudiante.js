import React, {Fragment, useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar'
import '../components/styles/perfilEstudianteStyle.css'
import cover from './../components/cover.png'
export default function perfilEstudiante() {
    return(
        <div>
            <Sidebar/>
            <div className='container'>
                <header>
                    <h3>Detalles de Estudiante</h3>
                </header>
                <section className='Perfil'>
                    < figure>
                        <img src={cover}/>
                    </figure>
                </section>
                
            </div>

        </div>
    )
}
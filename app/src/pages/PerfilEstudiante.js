import React, {Fragment, useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar'
import '../components/styles/perfilEstudianteStyle.css'

import cover from './../components/cover.png'
import avatar from './../components/avatar.png'
import parent from './../components/parent.png'
import from1 from './../components/icon.png'
import phone from './../components/Phone.png'
import mail from './../components/Mail.png'
import axios from 'axios';
import Cookies from 'universal-cookie'; 




export default function PerfilEstudiante() {
    
    const [horario,setHorario] = useState([])

    const showdata = async ()=>{
         const res = await fetch(`http://localhost:3000/api/v1/schedule/3BI2022`)
        const data = await res.json()
        setHorario(data)
    }

    useEffect (()=>{
        showdata()
    },[])

    const cookies = new Cookies();
    return(

        <div>
            <Sidebar/>
            <div className='container'>
                <header>

                    <h3>Detalles de Estudiante</h3>

                </header>

                <section className='Perfil'>

                    < figure className='banner'>
                        <img src={cover}/>
                    </figure>
                    < figure className='avatar'>
                        <img src={avatar}/>
                    </figure>

                </section >

                <section className='info'>
                    <di className='info-nombre'>
                        <h4 >{cookies.get('Nombre')+' '+cookies.get('Apellido')}</h4>
                        <p>Estudiante</p>
                    </di>
                </section>

                <section className='infoData'>
                        <div className='infoData1'>
                            <h5>Acudiente:</h5>
                            <div className='infoData5'>

                                <img src={parent}/>
                                <p>{cookies.get('Nombre')+' '+cookies.get('Apellido')}</p>
                                
                            </div>
                            
                        </div>

                        <div className='infoData2'>
                            <h5>Direccion:</h5>
                            <div className='infoData5' >

                                <img src={from1}/>
                                <p>{cookies.get('provincia')+', '+cookies.get('distrito')}</p>
                                
                            </div>
                           
                        </div>

                        <div className='infoData3'>
                            <h5>Telefono:</h5>
                            <div className='infoData5' >

                                <img src={phone}/>
                                <p>{cookies.get('Telefono')}</p>
                                
                            </div>
                           
                        </div>

                        <div className='infoData4'>
                            <h5>Email:</h5>
                            <div className='infoData5' >
                                <img src={mail}/>
                                <p>{cookies.get('correo')}</p>
                            </div>
                            
                        </div>

                </section>

                <section className='Horario2'>
                    <div className='Horario container is-fullhd ' >
                    <h1 className='title_tabla schedule2 schedule3'>Horario de clase </h1>
                        <table className='table is-bordered'>
                            <thead>
                                <tr>
                                    <th>Horario</th>
                                    <th>Lunes</th>
                                    <th>Martes</th>
                                    <th>Miercoles</th>
                                    <th>Jueves</th>
                                    <th>Viernes</th>
                                </tr>
                            </thead>
                            <tbody >
                                {horario.map(horario => (
                                <tr>
                                    <td>{horario.horario}</td>
                                    <td>{horario.lunes}</td>
                                    <td>{horario.martes}</td>
                                    <td>{horario.miercoles}</td>
                                    <td>{horario.jueves}</td>
                                    <td>{horario.viernes}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
               
                
            </div>

        </div>
    )
}
import React, {Fragment, useEffect, useState} from 'react'
import Sidebar from '../components/SidebarProfesor'
import '../components/styles/perfilEstudianteStyle.css'

import cover from './../components/cover.png'
import avatar from './../components/avatar.png'
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

                    <h3>Detalles de Profesor</h3>

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
                        <p>Profesor</p>
                    </di>
                </section>

                <section className='infoData'>
                        
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

                <section className='Horario2 Horario container is-fullhd'>
                    
                   
                    <div className='about'>
                        <h1 className=' schedule3'>Acerca del profesor </h1>
                        <p>

                        </p>
                    </div>
                    <div className='education'>
                        <h1 className=' schedule3'>Nivel Educativo </h1>
                        <p></p>
                    </div>
  
                </section>
               
                
            </div>

        </div>
    )
}
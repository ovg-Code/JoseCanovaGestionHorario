import React, {Fragment, useEffect, useState} from 'react'

import '../components/styles/AccesoStyle,.css'
import 'bulma/css/bulma.min.css'

import imagenFooter from './../components/FooterImage.png'
import imagenLogo from './../components/logoLogin.png'
import axios from 'axios';
import Cookies from 'universal-cookie'; 

const cookies = new Cookies();

export default function Acceso(){

    const url="http://localhost:3000/api/v1/auth//loginTeacher"
    const [data, setData]= useState({
        id_card:"",
        password:"",  
     })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            id_card: data.id_card,
            password:data.password
        })
        .then(res=>{
           localStorage.setItem('token',res.data.token)
           cookies.set('idCard',res.data.teacher.id_card_teacher,{path:'/'})
           cookies.set('Nombre',res.data.teacher.firstnameteacher,{path:'/'})
           cookies.set('Apellido',res.data.teacher.firstlastnameteacher,{path:'/'})
           cookies.set('Telefono',res.data.teacher.phonenumberteacher,{path:'/'})
           cookies.set('provincia',res.data.teacher.provinceteacher,{path:'/'})
           cookies.set('distrito',res.data.teacher.districtteacher,{path:'/'})
           cookies.set('correo',res.data.teacher.emailteacher,{path:'/'})
            window.location = '/PerfilEstudiante'
           
        })
    }

    function handler(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
        }

    return (
        <section className='container2 '>
            <div className='login'>
                <figure>
                    <img  src={imagenLogo} className='imageLogo'/>
                </figure>
                <form onSubmit={(e)=> submit(e)} className=" conteiner">

                    <h3>Inicio De Sesión</h3>

                    <div className="field">
                        <label className="label">Cedula</label>
                    <div className="control">
                        <input className="input" type="text" id='id_card' onChange={(e)=>handler(e)} value={data.id_card} placeholder="e.g 2-865-4542"/>
                    </div>
                    </div>

                    <div className="field">
                    <label className="label">Contrasena </label>
                    <div className="control">
                        <input className="input" type="password" id='password'onChange={(e)=>handler(e)} value={data.password} placeholder="e.g. sdfsfsfdsfd"/>
                    </div>
                    </div>
                    <button  type='submit' className='button is-primary is-active '>Iniciar Sesión</button>
                </form>
            </div>
            <footer>
                <img src={imagenFooter} className='imageFooter' />

            </footer>
        </section>
    )
}
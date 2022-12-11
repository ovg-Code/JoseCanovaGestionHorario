import React, {Fragment, useEffect, useState} from 'react'
import '../components/Addestudiantes.css'
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Addestudiante() {
    const url="http://localhost:3000/api/v1/teacher"
    const [data, setData]= useState({
       id_estudiante:"",
       nombre: "",
       apellido: "",
       corregimiento:"",
       provincestudent:"",
       distrito:"",
       email:"",
       telefono:"",
       password:"",       
    })
    
    const params = useParams();
    function handler(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
    }
    function submit(e){
        e.preventDefault();
    axios.patch(url+'/'+ data.id_estudiante,{
                id_card_teacher: data.id_estudiante,
                firstnameteacher: data.nombre,
                firstlastnameteacher: data.apellido,
                corregimientoteacher: data.corregimiento,
                provinceteacher: data.provincestudent,
                districtteacher: data.distrito,
                emailteacher: data.email,
                phonenumberteacher: data.telefono,
                passwordteacher: data.passwordstudent,
        }
        );
    }
    
    const loaddatos = async (id) =>{
    const res = await fetch('http://localhost:3000/api/v1/teacher/'+id)
    const data = await res.json()
    setData({
        id_estudiante: data.id_card_teacher,
        nombre: data.firstnameteacher,
        apellido: data.firstlastnameteacher,
        corregimiento: data.corregimientoteacher,
        provincestudent: data.provinceteacher,
        distrito: data.districtteacher,
        email: data.emailteacher,
        telefono: data.phonenumberteacher,
        passwordstudent: data.passwordteacher})
    };
    
    
    useEffect(() => {
        if (params.id ){
            loaddatos(params.id);
        }
    }, [params.id])
    
    
    
  return (
        <div>
        <h1 className='title'>Añadir Nuevo Profesor</h1>
        <div className='container_tabla'>
            <div className='top_tabla'>
                <h1 className='title_tabla'>Detalles de Profesor</h1>
                    <form onSubmit={(e)=> submit(e)}>
                        <label for="nombre">
                            <span className='addnameestudiante'>Nombre*</span>
                            <input onChange={(e)=>handler(e)} id="nombre" value={data.nombre} placeholder="Nombre del Profesor" className='nestudiante' type="text" autoComplete='given-name' required/>  
                        </label>
                        <label for="apellido">
                            <span className='lasttitle'>Apellido*</span>
                            <input onChange={(e)=>handler(e)} id="apellido" value={data.apellido} placeholder="Apellido del Profesor" className='lastnameimput' type="text"  autoComplete='family-name' required/>  
                        </label>
                        <label for="fecha">
                            <span className='fechatitle'>Provincia*</span>
                            <input onChange={(e)=>handler(e)} id="provincestudent" value={data.provincestudent} placeholder="Ingresar la provincia" className='fechaimp' type="place"  required/>  
                        </label>
                        <label for="corregimiento">
                            <span className='corregititle'>Corregimiento*</span>
                            <input onChange={(e)=>handler(e)} id="corregimiento" value={data.corregimiento} placeholder="corregimiento" className='corregiimp' type="text" required/>  
                        </label>
                        <label for="distrito">
                            <span className='distritotitle'>Distrito*</span>
                            <input onChange={(e)=>handler(e)} id="distrito" value={data.distrito} placeholder="distrito" className='distritoimp' type="text" required/>  
                        </label>
                        <label for="email">
                            <span className='emailtitle'>Email</span>
                            <input onChange={(e)=>handler(e)} id="email" value={data.email} placeholder="Correo electronico" className='emailimp' type="email" />  
                        </label>
                        <label for="telefono">
                            <span className='phonetitle'>Telefono*</span>
                            <input onChange={(e)=>handler(e)} id="telefono" value={data.telefono} placeholder="Telefono" className='phoneimput' type="text" required/>  
                        </label>
                        <label for="id">
                            <span className='idtitle'>Cedula*</span>
                            <input onChange={(e)=>handler(e)} id="id_estudiante" value={data.id_estudiante} placeholder="Cedula del Profesor" className='idimput' type="name" required/>  
                        </label>
                        <label for="Materia">
                            <span className='grupotitle'>Materia*</span>
                            <input onChange={(e)=>handler(e)} id="id_grupo" value={data.id_grupo} placeholder="Materia" className='grupoimput' type="name" required/>  
                        </label>
                        <label for="acudiente">
                            <span className='acudientetitle'>Contraseña*</span>
                            <input onChange={(e)=>handler(e)} id="passwordstudent" value={data.passwordstudent} placeholder="Contraseña del estudiante" className='acudienteimput' type="name" required/>  
                        </label>
                        <button className='button' type='submit'>
                            Editar
                        </button>
                    </form> 
            </div>

        </div>

    </div>  
  
  )
}
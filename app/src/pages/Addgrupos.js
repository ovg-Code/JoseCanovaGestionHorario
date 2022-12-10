import React, {Fragment, useEffect, useState} from 'react'
import '../components/Addgrupos.css'
import axios from 'axios';

export default function Addestudiante() {
const url="http://localhost:3000/api/v1/group"
const [data, setData]= useState({
   fk_id_classroom:"",
   id_group: "",
   periodgroup: "",
   levelgroup:"",
   yeargroup:"",
   lettergroup:"",
})

function submit(e){
    e.preventDefault();
    axios.post(url,{
        fk_id_classroom: data.fk_id_classroom,
        id_group: data.id_group,
        periodgroup: data.periodgroup,
        levelgroup: data.levelgroup,
        yeargroup: data.yeargroup,
        lettergroup: data.lettergroup,

    })
    .then(res=>{
        console.log(res.data)
    })
}

function handler(e){
const newdata={...data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata)
}

  return (
    <Fragment>
        <div>
        <h1 className='title'>Añadir Nuevos Grupos</h1>
        <div className='container_tabla'>
            <div className='top_tabla'>
                <h1 className='title_tabla'>Detalles del grupo</h1>
                    <form onSubmit={(e)=> submit(e)}>
                        <label for="nombre">
                            <span className='addnameestudiante'>Salon*</span>
                            <input onChange={(e)=>handler(e)} id="fk_id_classroom" value={data.fk_id_classroom} placeholder="Ingresar el codigo del salon" className='nestudiante' type="text" required/>  
                        </label>
                        <label for="apellido">
                            <span className='lasttitle'>Codigo de grupo(Automático)</span>
                            <input onChange={(e)=>handler(e)} id="id_group" value={data.id_group} placeholder="Codigo de grupo" className='lastnameimput'  required/> 
                        </label>
                        <label for="fecha">
                            <span className='fechatitle'>Año*</span>
                            <input onChange={(e)=>handler(e)} id="yeargroup" value={data.yeargroup} placeholder="Año" className='fechaimp'  required/>  
                        </label>
                        <label for="corregimiento">
                            <span className='corregititle'>Nivel*</span>
                            <input onChange={(e)=>handler(e)} id="levelgroup" value={data.levelgroup} placeholder="Nivel de estudio" className='corregiimp' type="text" required/>  
                        </label>
                        <label for="corregimiento2">
                            <span className='periodotitle'>Periodo*</span>
                            <input onChange={(e)=>handler(e)} id="periodgroup" value={data.periodgroup} placeholder="Periodo de estudio" className='periodoimp' type="text" required/>  
                        </label>
                        <label for="distrito">
                            <span className='distritotitle'>Letra*</span>
                            <input onChange={(e)=>handler(e)} id="lettergroup" value={data.lettergroup} placeholder="Letra de nivel" className='distritoimp' type="text" required/>  
                        </label>
                        <button className='button' type='submit'>
                            Guardar
                        </button>
                    </form> 
            </div>

        </div>

    </div>  
    </Fragment>
  
  )
}
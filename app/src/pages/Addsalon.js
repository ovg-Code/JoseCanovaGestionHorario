import React, { useState} from 'react'
import '../components/Addsalon.css'
import axios from 'axios';

export default function Addestudiante() {
const url="http://localhost:3000/api/v1/classroom"
const [data, setData]= useState({
   id_classroom:"",
   pavilionclassroom:"",
   capacityclassroom:"",
})

function submit(e){
    e.preventDefault();
    axios.post(url,{
        id_classroom: data.id_classroom,
        pavilionclassroom: data.pavilionclassroom,
        capacityclassroom: data.capacityclassroom

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
        <div>
                    <h1 className='barra'></h1>
                    <h1 className='title_tabla2'>Detalles del Salon</h1>
                    <form onSubmit={(e)=> submit(e)}>
                        <label for="fecha">
                            <span className='fechatitle2'>Codigo del Salon*</span>
                            <input onChange={(e)=>handler(e)} id="id_classroom" value={data.id_classroom} placeholder="Codigo de grupo" className='fechaimp2'  required/>  
                        </label>
                        <label for="corregimiento">
                            <span className='corregititle2'>Pabellon*</span>
                            <input onChange={(e)=>handler(e)} id="pavilionclassroom" value={data.pavilionclassroom}  className='corregiimp2' type="text" required/>  
                        </label>
                        <label for="corregimiento2">
                            <span className='periodotitle2'>Capacidad*</span>
                            <input onChange={(e)=>handler(e)} id="capacityclassroom" value={data.capacityclassroom} className='periodoimp2' required/>  
                        </label>
                        <button className='button3' type='submit'>
                            Guardar
                        </button>
                    </form> 

            </div>

 
  )
}
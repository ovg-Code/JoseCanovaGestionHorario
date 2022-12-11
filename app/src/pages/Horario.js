import React, {Fragment, useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar'
import 'bulma/css/bulma.min.css'
import '../components/styles/perfilEstudianteStyle.css'
import axios from 'axios';


export default function Horario() {

    const[datos, setdatos] = useState([])
    const[grupo,setgrupo] = useState('')

  

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/schedule/${grupo}`)
        .then(res =>{
            console.log(res)
            setdatos(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[grupo])

const url="http://localhost:3000/api/v1/schedule"
const [data, setData]= useState({
   id_teacher:"",
   materia: "",
   horario: "",
   dia:"",
   grupo:"",
})



function submit(e){
    e.preventDefault();
    axios.post(url,{
        id_schedule: data.grupo+data.materia+data.horario+data.dia+data.id_teacher,
        fk_id_card_teacher: data.id_teacher,
        fk_id_group: data.grupo,
        fk_id_subject: data.materia,
        hourteachersubjectgroup: data.horario,
        dayteachersubjectgroup: data.dia, 
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



    return(
        <div>
            <Sidebar/>
            <div className='container  is-fullhd'>
                <header>
                    <h3 className='title_tabla schedule2'>Horario</h3>
                </header>

                <div className=' createSchedule container is-fullhd container_tabla'>
                    <div className='top_tabla'>
                        <h1 className='title_tabla'>Creacion de Horario</h1>
                        <form onSubmit={(e)=> submit(e)}>
                            <label for="profesor">
                                <span className='teacher'>Profesor*</span>
                                <input onChange={(e)=>handler(e)} id="id_teacher" value={data.id_teacher} placeholder="Nombre del Profesor" className='teacherInp'  autoComplete='given-name' required/>  
                            </label>
                            <label for="Materia">
                                <span className='subject'>Materia*</span>
                                <input onChange={(e)=>handler(e)} id="materia" value={data.materia} placeholder="Materia" className='subjectInp'  autoComplete='family-name' required/>  
                            </label>
                            <label for="Horario">
                                <span className='schedule'>Horario*</span>
                                <input onChange={(e)=>handler(e)} id="horario" value={data.horario} placeholder="Horario" className='scheduleInp' list="Country" autoComplete='family-name' required/>  
                                <datalist id="Country" >
                                    <option value="7:00 - 7:40"/>
                                    <option value="7:40 - 8:20"/>
                                    <option value="8:20 - 9:00"/>
                                    <option value="9:00 - 9:40"/>
                                    <option value="10:00 - 10:40"/>
                                    <option value="10:40 - 11:20"/>
                                    <option value="11:20 - 12:00"/>
                                </datalist>    
                                
                            </label>
                            <label for="Dia">
                                <span className='day'>Dia*</span>
                                <input onChange={(e)=>handler(e)} id="dia" value={data.dia} placeholder="Dia"  className='dayInp' list="Dia"   required/>  
                                <datalist id="Dia" >
                                    <option value="Lunes"/>
                                    <option value="Martes"/>
                                    <option value="Miercoles"/>
                                    <option value="Jueves"/>
                                    <option value="Viernes"/>
                                </datalist> 
                            </label>
                            <label for="Grupo">
                                <span className='group'>Grupo*</span>
                                <input onChange={(e) =>{handler(e); setgrupo(e.target.value);}} id="grupo" value={data.grupo} placeholder="Grupo" className='groupInp' type="text"  autoComplete='family-name' required/>  
                            
                            
                            </label>
                            
                            <button  className='button2' >
                                Guardar
                            </button>
                        </form> 
                    </div>
                </div>
                <div className='Horario container is-fullhd ' >
                <h1 className='title_tabla schedule2'>Visualizacion De Horario</h1>
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
                            {datos.map(datos => (
                            <tr>
                                <td>{datos.horario}</td>
                                <td>{datos.lunes}</td>
                                <td>{datos.martes}</td>
                                <td>{datos.miercoles}</td>
                                <td>{datos.jueves}</td>
                                <td>{datos.viernes}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
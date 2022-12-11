import React, {Fragment, useEffect, useState} from 'react'
import '../components/pagestyle.css'
import 'bulma/css/bulma.css'
import '../components/profesores.css'
import { useNavigate } from "react-router-dom";

export default function Profesores() {

    const[datos, setdatos] = useState([])
    const navigate = useNavigate()

    const getdatos = async () => {
        try {

            const response = await fetch("http://localhost:3000/api/v1/teacher")
            const jsonData = await response.json()

            setdatos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getdatos()
    }, []);

    console.log(datos);

    const handlerDelete = async (id_card_teacher) => {
      const res = await fetch('http://localhost:3000/api/v1/teacher/'+id_card_teacher, {
          method: "DELETE",
      })
      setdatos(datos.filter(datos => datos.id_card_teacher !== id_card_teacher)) ;
  }

  return (
    <div className='body'>
        <a className='title'>Profesores</a>
        <a href='/Addprofesores' className='add'>
            + Nuevos Profesores
        </a>
      <div className='contenedor'>
        <div className='cuadros'>
        {datos.map(datos => (
        
          <div>
              <img className='photo'>{datos.phototeacher}</img>
              <h3 className='nameteacher'>{datos.firstnameteacher} {datos.firstlastnameteacher}</h3>
              <p className='materia'>{datos.id_card_teacher}</p>
              <a className='editprofe' onClick={() => navigate('/'+datos.id_card_teacher+'/Addprofesores')}>Editar</a>
              <a className='elimprofe' onClick={() => handlerDelete(datos.id_card_teacher)}>Eliminar</a>
          </div>
        
                ))}
       </div> 
      </div>     
    </div>
  )
}
import React, {Fragment, useEffect, useState} from 'react'
import '../components/pagestyle.css'
import 'bulma/css/bulma.css'
import '../components/profesores.css'

export default function Profesores() {

    const[datos, setdatos] = useState([])

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
  return (
    <div className='body'>
        <a className='title'>Profesores</a>
        {datos.map(datos => (
          <div className='contenedor'>
          <div>
              <img className='photo'>{datos.phototeacher}</img>
              <h3 className='nameteacher'>{datos.firstnameteacher} {datos.firstlastnameteacher}</h3>
              <p className='materia'>{datos.id_card_teacher}</p>
          </div>
      </div>
                ))}
            
    </div>
  )
}
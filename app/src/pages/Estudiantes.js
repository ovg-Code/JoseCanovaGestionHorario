
import React, {Fragment, useEffect, useState} from 'react'
import '../components/pagestyle.css'
import 'bulma/css/bulma.css'
import { Task } from '@mui/icons-material';


export default function Estudiantes() {

    const[datos, setdatos] = useState([])

    const getdatos = async () => {
        try {

            const response = await fetch("http://localhost:3000/api/v1/student")
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

    const handlerDelete = async (id_card_student) => {
        const res = await fetch('http://localhost:3000/api/v1/student/'+id_card_student, {
            method: "DELETE",
        })
        setdatos(datos.filter(datos => datos.id_card_student !== id_card_student)) ;
    }

  return (
    <div className='body'>
        <a className='title'>Estudiantes</a>
        <a href='/Addestudiante' className='add'>
            + Nuevos Estudianes
        </a>
        <Fragment>
        <table className='tabla'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cedula</th>
                    <th>Acudiente</th>
                    <th>Grupo</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {datos.map(datos => (
                <tr key={datos.id_card_student}>
                    <td>{datos.firstnamestudent} {datos.firstlastnamestudent}</td>
                    <td>{datos.id_card_student}</td>
                    <td>{'/'}</td>
                    <td>{datos.fk_id_group}</td>
                    <td>{datos.phonenumberstudent}</td>
                    <td><a className='edit' onClick={() => console.log("edit")}>Editar</a></td>
                    <td><a className='elim' onClick={() => handlerDelete(datos.id_card_student)}>Eliminar</a></td>
                </tr>
                ))}
            </tbody>
        </table>
        </Fragment>
    </div>
  )
}

import React, {Fragment, useEffect, useState} from 'react'
import '../components/Addestudiantes.css'

export default function Addestudiante() {

  return (
    <Fragment>
        <div>
        <h1 className='title'>Añadir Nuevo Estudiante</h1>
        <div className='container_tabla'>
            <div className='top_tabla'>
                <h1 className='title_tabla'>Detalles de Estudiante</h1>
                    <form>
                        <label for="name">
                            <span className='addnameestudiante'>Nombre*</span>
                            <input className='nestudiante' id="name" type="text" name="nameestu" autoComplete='given-name'/>  
                        </label>
                        <label for="lastname">
                            <span className='lasttitle'>Apellido*</span>
                            <input className='lastnameimput' id="name" type="text" name="fname" autoComplete='family-name' />  
                        </label>
                        <label for="lastname">
                            <span className='fechatitle'>Fecha de Nacimiento*</span>
                            <input className='fechaimp' id="name" type="date" name="fname" />  
                        </label>
                        <label for="lastname">
                            <span className='corregititle'>Corregimiento*</span>
                            <input className='corregiimp' id="name" type="text" name="fname" />  
                        </label>
                        <label for="lastname">
                            <span className='distritotitle'>Distrito*</span>
                            <input className='distritoimp' id="name" type="text" name="fname" />  
                        </label>
                        <label for="lastname">
                            <span className='emailtitle'>Email*</span>
                            <input className='emailimp' id="name" type="email" name="fname" />  
                        </label>
                        <label for="lastname">
                            <span className='phonetitle'>Telefono*</span>
                            <input className='phoneimput' id="name" type="text" name="fname" />  
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

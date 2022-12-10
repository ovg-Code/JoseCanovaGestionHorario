import React, { Children } from 'react'
import logito from './logo.png'
import { NavLink } from 'react-router-dom';
import './Sidestyle.css'
import studentlogo from './Student.png';

const Sidebar= ({Children}) =>{
  const menuItem=[
        {
            path:"/",
            name:"Tablero",
        },
        {
            path:"/Estudiantes",
            name:"Estudiantes",
        },
        {
            path:"/Profesores",
            name:"Profesores",
        },
    ]
    return (
    
    <div>
        <div className='sidebar'>
            <div className='top_section'>
                <img src={logito} className="logo"/>
                <div className='titulo'>Jose Canovas</div>
                <div className='bars'>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className='icon'>{item.icon}</div>
                        <div className='link_text'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{Children}</main>
    </div>
  )
}

export default Sidebar;
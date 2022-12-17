import React from 'react'
import '../styles/Input.style.css'
const Input = ({label, ...rest})=>{
    return(
        <div className='field container'>
            <label>{label}</label>
            <input{...rest}/>
        </div>
    )
}
export default Input
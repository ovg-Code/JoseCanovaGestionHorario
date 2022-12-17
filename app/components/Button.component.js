import React from 'react'
import '../styles/Button.style.css'

const Button =({children})=>{
    return(
        <button className='btn waves-effect waves-light button'>
            {children}
        </button>
    )
}

export default Button
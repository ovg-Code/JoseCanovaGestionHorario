import React,{ useState } from 'react'
import useForm from '../hooks/useForm.hooks'
import Input from '../components/Input.component'
import Button from '../components/Button.component'
import '../styles/formLogin.style.css'
import logo from '../images/logo.png'
import footer from '../images/footer.png'

function FormLogin(){
    const [form,handleChange]  = useForm({name:''})
    console.log(form);
    return(
        <div>
            <img className='logo' src={logo}/>
            <form className='formLogin col s6'>
            <Input label=" Correo Electronico " name="name" value={form.name} onChange={handleChange} />
            <Input label=" Contraseña " name="password" value={form.password} type="password" onChange={handleChange} />
            <Button>
                Iniciar Sesion
                <i class="material-icons right">send</i>
            </Button>
            </form>
            <img className='footer'  src={footer}/>
        </div>
    )
}

export default FormLogin
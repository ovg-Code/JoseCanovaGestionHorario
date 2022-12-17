import React,{ useState } from 'react'
import Container  from '../components/Container.component'
import SideBar from '../components/SideBar.component'

function CreateStudent(){
    const [form,handleChange]  = useForm({name:''})
    return(
        <Container>
            <SideBar/>
            <form className='CreateStudent' >
            <Input label=" Correo Electronico " name="name" value={form.name} onChange={handleChange} />
            <Input label=" Contraseña " name="password" value={form.password} type="password" onChange={handleChange} />
            <Button>
                Iniciar Sesion
                <i class="material-icons right">send</i>
            </Button>
            </form>
            <img className='footer'  src={footer}/>
        </Container>
    )
}

export default CreateStudent
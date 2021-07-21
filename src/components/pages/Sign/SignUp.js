import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerForm, ContainerInput, Form, Input, Button, Text } from '../../style/ElementForms'
import { ReactComponent as Login } from '../../../images/login2.svg'
import { Alerta } from '../../style/Alerta'

import { useSign } from '../../../context/SignContext'
import { auth } from '../../../firebase'

const Image = styled(Login)`
    width: 40%;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const SignUp = () => {

    const history = useHistory()
    const expReg =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    const { dataForm, setDataForm} = useSign()
    const {email} = dataForm
    const [alert, setAlert] = useState({
        message: '',
        type: '',
        state: false
    })


    const handleCancelRegister = () => {
        history.push('/')
    }
    
    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        if(email === '') {

            setAlert({
                message: 'el correo no puede ir vacio.',
                state: true
            })
            setTimeout(() => setAlert({
                message: '',
                state: false
            }), 2500)
            return

        }

        if(!expReg.test(email)) {

            setAlert({
                message: 'Esto no es un correo valido.',
                state: true
            })
            setTimeout(() => setAlert({
                message: '',
                state: false
            }), 2500)
            return
        }
    }
    


    return (
        <Fragment>
            <Helmet>
                <title>Registrar nuevo usuario</title>
            </Helmet>
            <ContainerForm>
                <Form onSubmit={handleSubmit}>
                    {
                        alert.state ? (
                            <Alerta success={alert.type}> {alert.message}</Alerta>
                        ) : null
                    }
                    <Text>Registrar nuevo empleado o usuario</Text>
                    <ContainerInput>
                        <Input 
                            name="email"
                            type="text"
                            placeholder="Ingresar Correo"
                            onChange={handleChange}
                            value={email}
                        />
                    </ContainerInput>


                    <Button mt
                        type="submit"
                    >{'Crear cuenta'}</Button>
                    <Button
                        mt
                        primary 
                        type="button"
                        onClick={handleCancelRegister}
                    >Cancelar Registro</Button>
                </Form>
                <Image />
            </ContainerForm>
        </Fragment>
    )
}

export default SignUp

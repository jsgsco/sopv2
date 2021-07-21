import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Fragment, useState } from 'react'
import { ContainerForm, ContainerInput, Form, Input, Button, Text } from '../../style/ElementForms'
import { ReactComponent as Login } from '../../../images/register.svg'
import { Alerta } from '../../style/Alerta'

import { useSign } from '../../../context/SignContext'
import { usePanel } from '../../../context/PanelContext'
import { auth } from '../../../firebase'

const Image = styled(Login)`
    width: 40%;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const SignUp = () => {

    const { newRegister, setNewRegister } = usePanel()
    const expReg =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    const { dataForm, setDataForm} = useSign()
    const { email } = dataForm
    const [alert, setAlert] = useState({
        message: '',
        type: '',
        state: false
    })
    
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

        try {

            await auth.createUserWithEmailAndPassword(email, email)
            setAlert({
                message: 'Se ha creado el nuevo empleado con exito.',
                type: 'success',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    type: '',
                    state: false
                })
            }, 2000)
            setDataForm('')
            await auth.signOut()

        } catch (error) {

            let text
            switch (error.code) {
                case 'auth/email-already-in-use':
                    text = 'Este correo ya esta en uso por otro usuario.'
                    break;
                default:
                    text = 'Hubo un error al intentar iniciar sesion.'
                    break
            }
            setAlert({
                message: text,
                type: '',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    type: '',
                    state: false
                })
            }, 3000);

        }

    }
    
    const handleCancelNewRegister = () => {
        setNewRegister(!newRegister)
    }

    return (
        <Fragment>
            <Helmet>
                <title>Registrar Nuevo Empleado</title>
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
                    >Crear cuenta</Button>
                    <Button
                        mt
                        primary 
                        type="button"
                        onClick={handleCancelNewRegister}
                    >Cancelar Registro</Button>
                </Form>
                <Image />
            </ContainerForm>
        </Fragment>
    )
}

export default SignUp

import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSign } from '../../../context/SignContext'
import { ContainerForm, ContainerInput, Form, Input, Button, Text } from '../../style/ElementForms'
import { ReactComponent as Login } from '../../../images/login2.svg'
import { Alerta } from '../../style/Alerta'

import { auth } from '../../../firebase'

const Image = styled(Login)`
    width: 40%;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const SignIn = () => {

    const history = useHistory()
    const { dataForm, setDataForm } = useSign()
    const { email, password } = dataForm
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
        const expReg =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        
        if(email === '' || password === '') {

            setAlert({
                message: 'Hey, los campos no pueden ir vacios',
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
                message: 'Hey, esto no es un correo valido.',
                state: true
            })
            setTimeout(() => setAlert({
                message: '',
                state: false
            }), 2500)
            return

        }

        try {

            await auth.signInWithEmailAndPassword(email, password)
            setAlert({
                message: 'Ha iniciado sesion con exito.',
                type: 'success',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    type: '',
                    state: false
                })
            }, 2000);
            setTimeout(() => {
                history.push('/')
            }, 2500);

        } catch (error) {

            let text
            switch(error.code){
                case 'auth/wrong-password':
                    text = 'La contraseña no es correcta.'
                    break
                case 'auth/user-not-found':
                    text = 'No se encontro ninguna cuenta con este correo.'
                    break
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
    
    const handleRecover = () => {
        console.log('Click en recuperar')
    }

    return (
        <ContainerForm>
            <Form onSubmit={handleSubmit}>
                {
                    alert.state ? (
                        <Alerta success={alert.type}> {alert.message} </Alerta>
                    ) : null
                }
                <Text>¿Tienes cuenta? Inicia sesion ahora</Text>
                <ContainerInput>
                    <Input 
                        name="email"
                        type="text"
                        placeholder="Ingresa tu correo"
                        onChange={handleChange}
                        value={email}
                    />
                </ContainerInput>
                <ContainerInput mt>
                    <Input 
                        name="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={handleChange}
                        value={password}
                    />
                </ContainerInput>
                <Button mt
                    type="submit"
                >Inicia Sesion</Button>
                <Button
                    mt
                    primary 
                    type="button"
                    onClick={handleRecover}
                > ¿Haz olvidado tu contraseña? Recuperala ahora
                </Button>
            </Form>
            <Image />
        </ContainerForm>
    )
}

export default SignIn

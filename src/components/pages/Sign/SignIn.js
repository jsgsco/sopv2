import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Fragment, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { ContainerForm, ContainerInput, Form, Input, Button, Text } from '../../style/ElementForms'
import { ReactComponent as Login } from '../../../images/login2.svg'
import { Alerta } from '../../style/Alerta'

import { useSign } from '../../../context/SignContext'
import { useAuth } from '../../../context/AuthContext'
import { auth } from '../../../firebase'

const Image = styled(Login)`
    width: 40%;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const SignIn = () => {

    const history = useHistory()
    const { user } = useAuth()
    const expReg =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    const { dataForm, setDataForm, stateRecover, setStateRecover } = useSign()
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
        
        
        if(email === '' || password === '') {

            setAlert({
                message: 'Los campos no pueden ir vacios.',
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

            await auth.signInWithEmailAndPassword(email, password)
            setAlert({
                message: 'Ha iniciado sesion con exito.',
                type: 'success',
                state: true
            })
            setDataForm({
                email: '',
                password: ''
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

    const handleRecoverPass = async (e) => {
        e.preventDefault()
        
        if(email === '') {

            setAlert({
                message: 'El correo no puede ir vacio.',
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

            await auth.sendPasswordResetEmail(email)
            setAlert({
                message: 'Se ha enviado un correo de recuperacion',
                type: 'success',
                state: true
            })
            setDataForm({
                email: ''
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    type: '',
                    state: false
                })
            }, 2500);
            setStateRecover(false)

        } catch (error) {

            let text
            switch (error.code) {
                case 'auth/user-not-found':
                    text = 'No se encontro ninguna cuenta con este correo.'
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
    
    const handleRecover = () => {
        setStateRecover(!stateRecover)
    }

    if(user) return <Redirect to="/" />

    return (
        <Fragment>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>
            <ContainerForm>
                <Form onSubmit={ stateRecover ? handleRecoverPass : handleSubmit }>
                    {
                        alert.state ? (
                            <Alerta success={alert.type}> {alert.message} </Alerta>
                        ) : null
                    }
                    <Text>{ stateRecover ? '¿Olvidaste tu cuenta? Recuperala ahora' : '¿Tienes cuenta? Inicia sesion ahora' }</Text>
                    <ContainerInput>
                        <Input 
                            name="email"
                            type="text"
                            placeholder="Ingresa tu Correo"
                            onChange={handleChange}
                            value={email}
                        />
                    </ContainerInput>
                    {
                        stateRecover ? null : (
                            <ContainerInput mt>
                                <Input 
                                    name="password"
                                    type="password"
                                    placeholder="Ingresa tu Contraseña"
                                    onChange={handleChange}
                                    value={password}
                                />
                            </ContainerInput>
                        )
                    }
                    <Button mt
                        type="submit"
                    >{ stateRecover ? 'Recuperar cuenta' : 'Iniciar sesion' }</Button>
                    <Button
                        mt
                        primary 
                        type="button"
                        onClick={handleRecover}
                    >{ stateRecover ? '¿Tienes cuenta? Ingresa ahora' : '¿Haz olvidado tu contraseña? Recuperala ahora'}</Button>
                </Form>
                <Image />
            </ContainerForm>
        </Fragment>
    )
}

export default SignIn

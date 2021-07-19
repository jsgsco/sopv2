import { ContainerForm, ContainerInput, Form, Input, Button, Text } from '../../style/ElementForms'
import { ReactComponent as Login } from '../../../images/login2.svg'
import styled from 'styled-components'
import { useState } from 'react'
import { Alerta } from '../../style/Alerta'
import { useHistory } from 'react-router-dom'

import { auth } from '../../../firebase'

const Image = styled(Login)`
    width: 40%;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const SignIn = () => {

    const [register, setRegister] = useState(false)
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [alert, setAlert] = useState({
        message: '',
        type: '',
        state: false
    })

    const handleRegister = () => {
        setRegister(!register)
    }

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const expReg =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        
        if(register) {

            if(email.trim() === '' || password.trim() === '' || repeatPassword.trim() === '' ) {
                setAlert({
                    message: 'Los datos no pueden ir vacios',
                    type:'',
                    state: true
                })
                setTimeout(() => {
                    setAlert({
                        message: '',
                        state: false
                    })
                },3000)
                
                return
            }
            
            
            if(!expReg.test(email)) {
                setAlert({
                    message: 'El email es invalido',
                    type:'',
                    state: true
                })
                setTimeout(() => {
                    setAlert({
                        message: '',
                        state: false
                    })
                },3000)
    
                return
            }    

            if(password.trim() !== repeatPassword.trim()) {
                setAlert({
                    message: 'Las contraseñas no coinciden',
                    type:'',
                    state: true
                })
                setInterval(() => {
                    setAlert({
                        message:'',
                        state: false
                    })
                }, 3000)
    
                return
            }

            try {
                await auth.createUserWithEmailAndPassword(email, password)
                setAlert({
                    message: 'Usuario creado con exito',
                    type: 'success',
                    state: true
                })
                setEmail('')
                setPassword('')
                setRepeatPassword('')
                setTimeout(() => {
                    setAlert({
                        message: '',
                        type: '',
                        state: false
                    })
                }, 2000)
                setTimeout(() => { 
                    setRegister(false)
                }, 2500)

            } catch (error) {
                let text
                switch(error.code){
                    case 'auth/invalid-password':
                        text = 'La contraseña tiene que ser de al menos 6 caracteres.'
                        break;
                    case 'auth/email-already-in-use':
                        text = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    break;
                    case 'auth/invalid-email':
                        text = 'El correo electrónico no es válido.'
                    break;
                    default:
                        text = 'Hubo un error al intentar crear la cuenta.'
                    break;
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
                }, 3000)
            }

        } else {

            if(email.trim() === '' || password.trim() === '') {
                setAlert({
                    message: 'Los datos no pueden ir vacios',
                    type:'',
                    state: true
                })
                setTimeout(() => {
                    setAlert({
                        message: '',
                        state: false
                    })
                },3000)
                
                return
            }
            
            
            if(!expReg.test(email)) {
                setAlert({
                    message: 'El email es invalido',
                    type:'',
                    state: true
                })
                setTimeout(() => {
                    setAlert({
                        message: '',
                        state: false
                    })
                },3000)
    
                return
            }    

            try {
                await auth.signInWithEmailAndPassword(email, password)
                setAlert({
                    message: 'Ha iniciado sesion con exito',
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

             
    }

    return (
        <ContainerForm>
            <Form onSubmit={handleSubmit}>
                {
                    alert.state ? (
                        <Alerta success={alert.type}> {alert.message} </Alerta>
                    ) : null
                }
                <Text>{register ? '¿No tienes cuenta? Crea una ahora' : '¿Tienes cuenta? Inicia sesion ahora'}</Text>
                <ContainerInput>
                    <Input 
                        name="email"
                        type="text"
                        placeholder="Ingresa tu correo"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </ContainerInput>
                <ContainerInput mt>
                    <Input 
                        name="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </ContainerInput>

                {
                    register && (
                        <ContainerInput mt>
                            <Input 
                                name="repeatpassword"
                                type="password"
                                placeholder="Repite tu contraseña"
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                value={repeatPassword}
                            />
                        </ContainerInput>
                    )
                }

                <Button mt
                    type="submit"
                >{register ? 'Crear Cuenta' : 'Inicia Sesion'}</Button>
                <Button mt
                    primary
                    type="button"
                    onClick={handleRegister}
                >{register ? '¿Tienes cuenta? Inicia sesion ahora' : '¿No tienes cuenta? Crea una ahora'}</Button>
            </Form>
            <Image />
        </ContainerForm>
    )
}

export default SignIn

import { ContainerForm, ContainerInput, Form, Input, Button, Text } from '../../style/ElementForms'
import { ReactComponent as Login } from '../../../images/login2.svg'
import styled from 'styled-components'
import { useState } from 'react'
import { Alerta } from '../../style/Alerta'

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
        massage: '',
        type: '',
        state: false
    })



    const funcRegister = () => {
        setRegister(!register)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        const expReg =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if(email.trim() === '') {
            setAlert({
                massage: 'el correo no puede ir vacio',
                type: '',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    massage: '',
                    state: false
                })
            }, 3000)
            return
        }
        
        if(!expReg.test(email)) {
            setAlert({
                massage: 'El email es invalido',
                type:'',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    massage: '',
                    state: false
                })
            },3000)

            return
        }

        if(password.trim() === '' || repeatPassword.trim() === '') {
            setAlert({
                massage:'No puedes enviar contraseña vacia',
                type: '',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    massage: '',
                    state: false
                })
            }, 3000)

            return
        }

        if(password.trim() !== repeatPassword.trim()) {
            setAlert({
                massage: 'Las contraseñas no coinciden',
                type:'',
                state: true
            })
            setInterval(() => {
                setAlert({
                    massage:'',
                    state: false
                })
            }, 3000)

            return
        }


        console.log('envio exitoso')
    }


    return (
        <ContainerForm>
            <Form onSubmit={onSubmitForm}>
                {
                    alert.state ? (
                        <Alerta success={alert.type}> {alert.massage} </Alerta>
                    ) : null
                }
                <Text>{register ? '¿No tienes cuenta? Crea una ahora' : '¿Tienes cuenta? Inicia sesion ahora'}</Text>
                <ContainerInput>
                    <Input 
                        name="email"
                        type="text"
                        placeholder="Ingresa tu correo"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </ContainerInput>
                <ContainerInput mt>
                    <Input 
                        name="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => setPassword(e.target.value)}
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
                    onClick={funcRegister}
                >{register ? '¿Tienes cuenta? Inicia sesion ahora' : '¿No tienes cuenta? Crea una ahora'}</Button>
            </Form>
            <Image />
        </ContainerForm>
    )
}

export default SignIn

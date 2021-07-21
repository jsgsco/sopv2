import { useState } from 'react'
import { ContainerInput, ContainerForm, Input, Form, Button } from './style/ElementForms'
import { Text } from './style/Heading'
import { ContainerAlerta, Alerta } from './style/Alerta'
import { auth } from '../firebase'

const UpdateData = ({user}) => {

    const [name, setName] = useState('')
    const [alert, setAlert] = useState({
        message: '',
        type: '',
        state: false
    })

    const handleChange =  (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(name === '') {
            setAlert({
                message: 'El nombre no puede ir vacio.',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    state: false
                })
            }, 2500);
            return
        }

        try {
            await auth.currentUser.updateProfile({
                displayName: name
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }

    }
    
    const closeSesion = async () => {
        try {
            await auth.signOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ContainerForm column>
            <ContainerAlerta>
                {
                    alert.state ? (
                        <Alerta success={alert.type}>{alert.message}</Alerta>
                    ) : (
                        <Alerta>Primero debe actualizar sus datos antes de continuar.</Alerta>
                    )
                }
            </ContainerAlerta>
            <Form
                onSubmit={handleSubmit}
            >
                <ContainerInput>
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Ingresa tu Nombre Completo"
                        onChange={handleChange}
                        value={name}
                        autoFocus
                    />
                </ContainerInput>
                <ContainerInput>
                    <Input 
                        mt
                        type="email"
                        name="email"
                        value={user.email}
                        disabled
                    />
                </ContainerInput>
                <Button 
                    mt
                    type="submit"
                >Actualizar Datos</Button>
                <Button 
                    mt 
                    primary
                    onClick={closeSesion}
                    type="button"
                >Cerrar Sesion</Button>
                <Text>Conexion Segura ID {user.uid}</Text>
            </Form>
        </ContainerForm>
    );
}
 
export default UpdateData;
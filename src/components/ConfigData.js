import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ContainerForm, Form, ContainerInput, Input, Button } from './style/ElementForms'
import { Alerta } from './style/Alerta'
import { useAuth } from '../context/AuthContext'
import { usePanel } from '../context/PanelContext'
import { auth } from '../firebase'

const ConfigData = () => {

    const { user, refresh, setRefresh } = useAuth()
    const { handleCloseSesion, userUpdate, setUserUpdate } = usePanel()
    const expReg =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    const [updateData, setUpdateData] = useState({
        name: user.displayName,
        email: user.email,
        password: ''
    })
    const [alert, setAlert] = useState({
        message: '',
        type: '',
        state: false
    })
    const { name, email, password } = updateData

    const handleChange = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(name === '' || email === '' || password === '') {
            setAlert({
                message: 'Los datos no se pueden enviar vacios.',
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

            await auth.currentUser.updateProfile({
                displayName: name
            })
            await auth.currentUser.updateEmail(email)
            await auth.currentUser.updatePassword(password)
            setRefresh(!refresh)
            setAlert({
                message: 'Datos actualizados correctamente.',
                type: 'success',
                state: true
            })
            setTimeout(() => setAlert({
                message: '',
                type: '',
                state: false
            }), 2500)
            setTimeout(() => {
                setUserUpdate(!userUpdate)
            }, 2900);

        } catch (error) {
            console.log(error)
        }

    }

    const deleteUser = async () => {
        try {
            await auth.currentUser.delete()
            setRefresh(!refresh)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Helmet>
                <title>Administra tu Cuenta</title>
            </Helmet>
            <ContainerForm column>
                <Form
                    onSubmit={handleSubmit}
                >
                    {
                        alert.state ? (
                            <Alerta success={alert.type}>{alert.message}</Alerta>
                        ) : (
                            <Alerta>Por seguridad para actualizar los datos debe haber iniciado sesion recientemente.</Alerta>
                        )
                    }
                    <ContainerInput>
                        <Input 
                            autoFocus
                            type="text"
                            name="name"
                            placeholder="Ingresa tu Nombre Completo"
                            onChange={handleChange}
                            value={name}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <Input
                            mt 
                            type="text"
                            name="email"
                            placeholder="Ingresa tu Correo"
                            onChange={handleChange}
                            value={email}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <Input
                            mt 
                            type="password"
                            name="password"
                            placeholder="Actualiza tu Contraseña"
                            onChange={handleChange}
                            value={password}
                        />
                    </ContainerInput>
                    <Button
                        mt
                        type="submit"
                    >Actulizar datos</Button>
                    <Button
                        mt
                        type="button"
                        primary
                        onClick={() => setUserUpdate(!userUpdate)}
                    >Cancelar actulizacion de datos</Button>
                    <Button
                        mt
                        type="button"
                        primary
                        onClick={deleteUser}
                    >Eliminar cuenta permanentemente</Button>
                    <Button
                        mt
                        type="button"
                        primary
                        onClick={handleCloseSesion}
                    >Cerrar sesion</Button>
                </Form>
            </ContainerForm>
        </>
    );
}
 
export default ConfigData;
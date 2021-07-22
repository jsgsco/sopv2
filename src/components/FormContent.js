import { Form, ContainerInput, Input, InputArea, Text, Button } from './style/ElementForms'
import { Alerta } from './style/Alerta'
import { Helmet } from 'react-helmet'
import { usePanel } from '../context/PanelContext'
import { useState } from 'react'

import { db } from '../firebase'

const FormContent = () => {

    const { register, setRegister, formData, setFormData } = usePanel()
    const { name, date, element, contact, description } = formData
    const expRegular = /^([0-9])*$/
    const [alert, setAlert] = useState({
        message: '',
        type: '',
        state: false
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(name === '' || date === '' || element === '' || contact === '' || description === '') {

            setAlert({
                message: 'Ningun campo puede ir vacio.',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    state: false
                })
            }, 2500)
            return

        }

        if(!expRegular.test(contact)) {

            setAlert({
                message: 'Esto no es un numero de contacto valido.',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    state: false
                })
            }, 2500)
            return

        }

        if(contact.length < 10 || contact.length > 10) {

            setAlert({
                message: 'Este numero de contacto no es de Colombia o esta mal.',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    state: false
                })
            }, 2500)
            return

        }

        try {
            
            await db.collection('items').add({
                name: name,
                date: date,
                element: element,
                contact: parseInt(contact),
                description: description
            })
            setAlert({
                message: 'Objeto registrado con exito.',
                type: 'success',
                state: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    type: '',
                    state: false
                })
            }, 2500)
            setFormData({
                name: '',
                date: '',
                element: '',
                contact: '',
                description: ''
            })

        } catch (error) {

            console.log(error)

        }

    }

    return (  
        <Form
            onSubmit={handleSubmit}
        >
            <Helmet>
                <title>Registrar Nuevo Objeto</title>
            </Helmet>
            {
                alert.state && <Alerta success={alert.type}>{alert.message}</Alerta>
            }
            <Text>Registra un nuevo objeto perdido</Text>
            <ContainerInput>
                <Input 
                    autoFocus
                    type="text"
                    name="name"
                    placeholder="Ingresa el Nombre Completo del Usuario"
                    onChange={handleChange}
                    value={name}
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    mt
                    type="date"
                    name="date"
                    onChange={handleChange}
                    value={date}
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    mt
                    type="text"
                    name="element"
                    placeholder="Ingresa el Nombre del Objeto"
                    onChange={handleChange}
                    value={element}
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    mt
                    type="number"
                    name="contact"
                    placeholder="Ingresa el Numero de Contacto"
                    onChange={handleChange}
                    value={contact}
                />
            </ContainerInput>
            <ContainerInput>
                <InputArea
                    mt
                    name="description"
                    cols="30" rows="10"
                    onChange={handleChange}
                    value={description}
                ></InputArea>
            </ContainerInput>
            <Button 
                mt
                type="submit"
            >Registar nuevo objeto</Button>
            <Button 
                mt
                primary
                type="button"
            >Administrar objetos perdidos</Button>
            <Button 
                mt
                primary
                type="button"
                onClick={() => setRegister(!register)}
            >Cancelar registro</Button>
    </Form>
    );
}
 
export default FormContent;
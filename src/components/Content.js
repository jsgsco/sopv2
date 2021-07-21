import { Helmet } from 'react-helmet'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Panel } from '../images/panel.svg'
import styled from 'styled-components'
import { ContainerForm, Form, ContainerInput, Input, InputArea, Text, Button } from './style/ElementForms'
import { Profile } from './style/Heading'
import { usePanel } from '../context/PanelContext'

const Image = styled(Panel)`
    width: 35%;
    padding: 5px;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const Content = ({user}) => {

    const { register, setRegister } = usePanel()
    const history = useHistory()
    const handleCloseSesion = async () => {
        try {
            await auth.signOut()
            history.push('/iniciar-sesion')
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <>
            <Helmet>
                <title>Panel Admin</title>
            </Helmet>
            <ContainerForm>
                {
                    register ? (
                        <Form>
                            <Text>Registra un nuevo objeto perdido</Text>
                            <ContainerInput>
                                <Input 
                                    autoFocus
                                    type="text"
                                    name="name"
                                    placeholder="Ingresa el Nombre Completo del Usuario"
                                />
                            </ContainerInput>
                            <ContainerInput>
                                <Input 
                                    mt
                                    type="date"
                                    name="date"
                                />
                            </ContainerInput>
                            <ContainerInput>
                                <Input 
                                    mt
                                    type="text"
                                    name="element"
                                    placeholder="Ingresa el Nombre del Objeto"
                                />
                            </ContainerInput>
                            <ContainerInput>
                                <Input 
                                    mt
                                    type="number"
                                    name="number"
                                    placeholder="Ingresa el Numero de Contacto"
                                />
                            </ContainerInput>
                            <ContainerInput>
                                <InputArea
                                    mt
                                    name="description"
                                    cols="30" rows="10"
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
                    ) : (
                        <>
                            <Image />
                            <Profile>
                                <Text>Hola, {user.displayName}</Text>
                                <Text>¿Que deseas hacer hoy?</Text>
                                <Button 
                                    mt
                                    type="button"
                                >Administrar mi cuenta</Button>
                                <Button 
                                    mt
                                    primary
                                    type="button"
                                    onClick={() => setRegister(!register)}
                                >Registrar un nuevo objeto</Button>
                                <Button 
                                    mt
                                    primary
                                    type="button"
                                    onClick={handleCloseSesion}
                                >Cerrar Sesion</Button>
                            </Profile>
                        </>
                    )
                }
            </ContainerForm>            
        </>
     );
}
 
export default Content;
import { Helmet } from 'react-helmet'
import { Text, Button } from './style/ElementForms'
import { Profile } from './style/Heading'
import { usePanel } from '../context/PanelContext'
import { ReactComponent as Panel } from '../images/profile.svg'
import ConfigData from './ConfigData'
import styled from 'styled-components'
import SignUp from './pages/Sign/SignUp'

const Image = styled(Panel)`
    width: 45%;
    padding: 5px;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const PanelContent = ({user}) => {

    const { register, newRegister, setNewRegister, setRegister, handleCloseSesion, userUpdate, setUserUpdate } = usePanel()

    const handleNewRegister = () => {
        setNewRegister(!newRegister)
    }

    const handleUserUpdate = () => {
        setUserUpdate(!userUpdate)
    }

    return ( 
        <>
            {
                newRegister ? (
                    <SignUp />
                ) : (
                    <>
                        {
                            userUpdate ? (
                                <ConfigData />
                            ) : (
                                <>
                                    <Helmet>
                                        <title>Panel Admin</title>
                                    </Helmet>
                                    <Image />
                                    <Profile>
                                        <Text>Hola, {user.displayName}</Text>
                                        <Text>¿Que deseas hacer hoy?</Text>
                                        <Button 
                                            mt
                                            type="button"
                                            onClick={handleUserUpdate}
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
                                            onClick={handleNewRegister}
                                        >Registar un nuevo empleado</Button>
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
                    </>
                )
            }
        </>
     );
}
 
export default PanelContent;
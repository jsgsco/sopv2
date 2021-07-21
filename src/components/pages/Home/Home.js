import { auth } from "../../../firebase"
import { useHistory } from 'react-router-dom'
import { HeadingContainer, Header, Profile, Settings, Text } from '../../style/Heading'
import { useAuth } from '../../../context/AuthContext'

const Home = () => {

    const history = useHistory()
    const { user } = useAuth()
    console.log(user.displayName)
    const closeSesion = async () => {
        try {
            await auth.signOut()
            history.push('/iniciar-sesion')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {
                user.displayName ? (
                    <HeadingContainer>
                    <Header>
                        <Profile>
                            <Text>Hola, {user.email} es un placer tenerte aqui!</Text>
                        </Profile>
                        <Settings>
                            <button
                                onClick={closeSesion}
                                type="button"
                            >Cerrar Sesion</button>
                        </Settings>
                    </Header>
                    Texto plano
                </HeadingContainer>
                ) : (
                    <HeadingContainer>
                        Actualice sus datos
                    </HeadingContainer>
                )
            }
        </>
    )
}

export default Home

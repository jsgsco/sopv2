import { auth } from "../../../firebase"
import { useHistory } from 'react-router-dom'
import { HeadingContainer, Header, Profile, Settings, Text } from '../../style/Heading'
import { useAuth } from '../../../context/AuthContext'

const Home = () => {

    const history = useHistory()

    const closeSesion = async () => {
        try {
            await auth.signOut()
            history.push('/iniciar-sesion')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <HeadingContainer>
            <Header>
                <Profile>
                    <Text>Hola, foeblackg@gmail.com es un placer tenerte aqui!</Text>
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
    )
}

export default Home

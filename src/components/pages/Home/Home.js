import { auth } from "../../../firebase"
import { useHistory } from 'react-router-dom'
import { HeadingContainer, Header, Profile, Settings, Text } from '../../style/Heading'
import { useAuth } from '../../../context/AuthContext'

import UpdateData from '../../UpdateData'

const Home = () => {

    const history = useHistory()
    const { user } = useAuth()
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
                            <Text>Hola, {user.displayName} es un placer tenerte aqui!</Text>
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
                    <UpdateData 
                        user={user}
                    />
                )
            }
        </>
    )
}

export default Home

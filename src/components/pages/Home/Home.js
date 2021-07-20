import { auth } from "../../../firebase"
import { useHistory } from 'react-router-dom'

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
        <div>
            <button
                type="button"
                onClick={closeSesion}
            >Cerrar Sesion</button>
        </div>
    )
}

export default Home

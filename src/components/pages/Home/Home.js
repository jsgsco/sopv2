import { useAuth } from '../../../context/AuthContext'
import UpdateData from '../../UpdateData'
import Content from "../../Content"

const Home = () => {
    
    const { user } = useAuth()

    return (
        <>
            {
                user.displayName ? (
                    <Content 
                        user={user}
                    />
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

import { useAuth } from '../context/AuthContext'
import { Route, Redirect } from 'react-router-dom'

const RoutePrivate = ({children, ...rest}) => {
    const { user } = useAuth()

    if(user) {
        return <Route {...rest}>{children}</Route>
    } else {
        return <Redirect to="/iniciar-sesion" />
    }
}

export default RoutePrivate

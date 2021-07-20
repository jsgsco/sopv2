import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [charge, setCharge] = useState(true)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setCharge(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user
        }}>
            { !charge && children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider, useAuth }
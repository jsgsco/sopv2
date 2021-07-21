import { createContext, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const PanelContext = createContext()

const usePanel = () => {
    return useContext(PanelContext)
}

const PanelProvider = ({children}) => {

    const [register, setRegister] = useState(false)
    const [newRegister, setNewRegister] = useState(false)

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
        <PanelContext.Provider value={{
            register,
            newRegister,
            setNewRegister,
            setRegister,
            handleCloseSesion
        }}>
            {children}
        </PanelContext.Provider>
     );
}
 
export { PanelContext, PanelProvider, usePanel }
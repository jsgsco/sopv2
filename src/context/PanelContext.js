import { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, db } from '../firebase'

const PanelContext = createContext()

const usePanel = () => {
    return useContext(PanelContext)
}

const PanelProvider = ({children}) => {

    const [register, setRegister] = useState(false)
    const [newRegister, setNewRegister] = useState(false)
    const [userUpdate, setUserUpdate] = useState(false)
    const [refreshInfo, setRefreshInfo] = useState(false)
    const [tableInfo, setTableInfo] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        element: '',
        contact: '',
        description: ''
    })

    const history = useHistory()
    const handleCloseSesion = async () => {
        try {
            await auth.signOut()
            history.push('/iniciar-sesion')
        } catch (error) {
            console.log(error)
        }
    }

    const getDataTable = async () => {
        try {
            const data = await db.collection('items').get()
            const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setTableInfo(arrayData)
            setRefreshInfo(false)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getDataTable()
    }, [refreshInfo])

    return ( 
        <PanelContext.Provider value={{
            register,
            newRegister,
            formData,
            userUpdate,
            tableInfo,
            refreshInfo,
            setRefreshInfo,
            setUserUpdate,
            setFormData,
            setNewRegister,
            setRegister,
            handleCloseSesion
        }}>
            {children}
        </PanelContext.Provider>
     );
}
 
export { PanelContext, PanelProvider, usePanel }
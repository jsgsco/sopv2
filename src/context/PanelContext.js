import { createContext, useContext, useState } from 'react'

const PanelContext = createContext()

const usePanel = () => {
    return useContext(PanelContext)
}

const PanelProvider = ({children}) => {

    const [register, setRegister] = useState(false)

    return ( 
        <PanelContext.Provider value={{
            register, 
            setRegister
        }}>
            {children}
        </PanelContext.Provider>
     );
}
 
export { PanelContext, PanelProvider, usePanel }
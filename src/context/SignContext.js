import {  createContext, useContext, useState } from 'react'

const SignContext = createContext()

const useSign = () => {
    return useContext(SignContext)
}

const SignProvider = ({children}) => {

    const [dataForm, setDataForm] = useState({
        email: '',
        password: ''
    })
    const [stateRecover, setStateRecover] = useState(false)

    return (
        <SignContext.Provider value={{
            dataForm,
            stateRecover,
            setDataForm,
            setStateRecover
        }}>
            {children}
        </SignContext.Provider>
    )
}

export { SignContext, SignProvider, useSign }
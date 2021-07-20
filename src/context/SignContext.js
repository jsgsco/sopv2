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

    return (
        <SignContext.Provider value={{
            dataForm,
            setDataForm
        }}>
            {children}
        </SignContext.Provider>
    )
}

export { SignContext, SignProvider, useSign }
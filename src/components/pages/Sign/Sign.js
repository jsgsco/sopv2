import { ContainerForm, ContainerInput, Form, Input, Button, Text } from '../../style/ElementForms'
import { ReactComponent as Login } from '../../../images/login2.svg'
import styled from 'styled-components'
// import { Alerta } from '../../style/Alerta'

const Image = styled(Login)`
    width: 40%;

    @media(max-width: 60rem){ 
        display: none;
    }
`

const SignIn = () => {
    return (
        <ContainerForm>
            <Form>
                <Text>¿Tienes cuenta? Inicia sesion ahora</Text>
                <ContainerInput>
                    <Input 
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                    />
                </ContainerInput>
                <ContainerInput mt>
                    <Input 
                        name="password"
                        type="password"
                        placeholder="**********"
                    />
                </ContainerInput>
                <Button mt
                    type="submit"
                >Iniciar Sesion</Button>
                <Button mt
                    primary
                    type="submit"
                >¿No tienes cuenta? Crea una ahora</Button>
            </Form>
            <Image />
        </ContainerForm>
    )
}

export default SignIn

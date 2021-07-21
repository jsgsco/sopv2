import { Form, ContainerInput, Input, InputArea, Text, Button } from './style/ElementForms'
import { Helmet } from 'react-helmet'
import { usePanel } from '../context/PanelContext'

const FormContent = () => {

    const { register, setRegister } = usePanel()

    return (  
        <Form>
            <Helmet>
                <title>Registrar Nuevo Objeto</title>
            </Helmet>
            <Text>Registra un nuevo objeto perdido</Text>
            <ContainerInput>
                <Input 
                    autoFocus
                    type="text"
                    name="name"
                    placeholder="Ingresa el Nombre Completo del Usuario"
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    mt
                    type="date"
                    name="date"
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    mt
                    type="text"
                    name="element"
                    placeholder="Ingresa el Nombre del Objeto"
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    mt
                    type="number"
                    name="number"
                    placeholder="Ingresa el Numero de Contacto"
                />
            </ContainerInput>
            <ContainerInput>
                <InputArea
                    mt
                    name="description"
                    cols="30" rows="10"
                ></InputArea>
            </ContainerInput>
            <Button 
                mt
                type="submit"
            >Registar nuevo objeto</Button>
            <Button 
                mt
                primary
                type="button"
            >Administrar objetos perdidos</Button>
            <Button 
                mt
                primary
                type="button"
                onClick={() => setRegister(!register)}
            >Cancelar registro</Button>
    </Form>
    );
}
 
export default FormContent;
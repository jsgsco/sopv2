import { ContainerForm } from './style/ElementForms'
import { usePanel } from '../context/PanelContext'
import FormContent from './FormContent'
import PanelContent from './PanelContent'



const Content = ({user}) => {

    const { register } = usePanel()
   
    return ( 
        <>
            <ContainerForm>
                {
                    register ? (
                        <FormContent />
                    ) : (
                        <PanelContent user={user}/>
                    )
                }
            </ContainerForm>            
        </>
     );
}
 
export default Content;
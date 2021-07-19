import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ContainerError } from '../../style/Error'
import { ReactComponent as Error404 } from '../../../images/4042.svg'

const E404 = styled(Error404)`
    width: 50%;
`

const Error = () => {

    const history = useHistory()

    setTimeout(() => {
        history.push('/sign')
    }, 3000);

    return (
        <ContainerError>
            <E404 />
        </ContainerError>
    )
}

export default Error

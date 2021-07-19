import { ContainerError, Contain } from '../../style/Error'
import { ReactComponent as Error404 } from '../../../images/404.svg'
import styled from 'styled-components'

const E404 = styled(Error404)`
    width: 50%;
`

const Error = () => {
    return (
        <ContainerError>
            <E404 />
        </ContainerError>
    )
}

export default Error

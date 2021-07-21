import styled from 'styled-components'

export const Alerta = styled.p`
    width: 100%;
    padding: 0.625rem; /* 10px */
    background-color: ${(props) => props.success ? '#64BC26' : '#F23041'};
    margin-bottom: 0.625rem; /* 10px */
    border-radius: 0.5rem; /* 8px */
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
`

export const ContainerAlerta = styled.div`
    width: 50%;

    @media(max-width: 60rem){ 
        width: 100%;
    }
`
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerForm = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => props.column ? 'column' : ''};
`

export const Form = styled.form`
    width: 50%;

    @media(max-width: 60rem){ 
        width: 100%;
    }
`

export const ContainerInput = styled.div`
    width: 100%;
    margin-top: ${(props) => props.mt ? '0.375rem' : ''}; /* 6px */
`

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem; /* 12px */
    border: none;
    border-radius: 0.5rem; /* 8px */
    background-color: #F2F2F2;
    margin-top: ${(props) => props.mt ? '0.38rem' : ''};
    &:focus {
        outline: none;
    }
`

export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 0.75rem; /* 12px */
    margin-top: ${(props) => props.mt ? '0.375rem' : ''}; /* 6px */
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.5rem; /* 8px */
    background-color: ${(props) => props.primary ? 'black' : '#FFE849'};
    color: ${(props) => props.primary ? 'white' : 'black'};
    transition: 1s all;
    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.primary ? '#FFE849' : 'black'};
        color: ${(props) => props.primary ? 'black' : 'white'};
        transition: 1s all;
    }
`

export const Text = styled.h2`
    width: 100%;
    text-align: ${(props) => props.nc ? '' : 'center'};
    text-transform: uppercase;
    font-size: 1.063rem; /* 17px */
    padding: 0.625rem; /* 10px */
`

export const InputArea = styled.textarea`
    width: 100%;
    padding: 0.75rem; /* 12px */
    border: none;
    border-radius: 0.5rem; /* 8px */
    background-color: #F2F2F2;
    margin-top: ${(props) => props.mt ? '0.38rem' : ''};
    &:focus {
        outline: none;
    }
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: white;
`
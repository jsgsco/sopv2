import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    text-transform: uppercase;
`

export const Caption = styled.caption`
    margin-bottom: 30px;
    font-weight: 800;
    width: 100%;
    text-align: ${(props) => props.nc ? '' : 'center'};
    text-transform: uppercase;
    font-size: 1.063rem; /* 17px */
    padding: 0.625rem; /* 10px */
`

export const Table = styled.table`
    width: 100%;
    border-radius: 2px;
    border-collapse: collapse;
    background-color: black;
    margin-top: 10px;

    @media(max-width: 765px) {
        width: 100%;
    }
`

export const Body = styled.tbody`
   //campo vacio 
`

export const Row = styled.tr`
    text-align: center;
    :nth-child(even){
        background-color: #404040;
    }

    @media(max-width: 765px) {
        margin: 0 0 1rem 0;
        text-align: right;
    }
`

export const Head = styled.thead`
    background-color: #FFE849;
    border-bottom: solid 2px black;
    padding: 10px 30px;
    font-size: 14px;

    @media(max-width: 765px) {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
`

export const Hcell = styled.th`
    padding: 7px 12px;

    @media(max-width: 765px) {
        margin: 0 0 1rem 0;
    }
`

export const Cell = styled.td`
    padding: 7px 12px;
    color: white;
    font-size: 12px;

    @media(max-width: 765px) {

        display: block;
        border: none;
        position: relative;
        padding-left: 50%;

        ::before {
            position: absolute;
            top: 0;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            text-align: left !important;  
        }
        :nth-of-type(1):before { content: "Id";}
        :nth-of-type(2):before { content: "Nombre Completo";}
        :nth-of-type(3):before { content: "Fecha de perdida";}
        :nth-of-type(4):before { content: "Elemento";}
        :nth-of-type(5):before { content: "Descripcion";}
        :nth-of-type(6):before { content: "Contacto";}
    }

    @media(max-width:  362px){
        font-size: .6rem;
    }
    @media(max-width:  285px){
        font-size: .5rem;
    }
`

export const ContainerTable = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => props.column ? 'column' : ''};
`

export const BtnAccion = styled.button`
    width: 100%;
    background-color: #FFE849;
    border: none;
    padding: ${props => props.mt ? '10px' : '6px'};
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    color: black;
    transition: 1s all;
    margin-top: ${props => props.mt ? '5px' : ''};

    &:hover {
        cursor: pointer;
        color: ${props => props.mt ? 'white' : 'black'};
        background-color: ${props => props.mt ? 'black' : 'white'};
        transition: 1s all;
    }
`

export const ContainerLink = styled.div`
    text-align: center;
    padding: 8px;
    width: 100%;
    background-color: #FFE849;
    margin-top: 5px;

    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
    }
`

export const BtnLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    color: black;
    width: 100%;
    font-size: 14px;
`
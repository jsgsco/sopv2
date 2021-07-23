import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Content = styled.div`

    width: 100%;
    height: 100vh;
    overflow-y: auto;
    text-transform: uppercase;
    @media(max-width: 1345px) {
        width: 1000px;
        height: 100vh;
        overflow-x: scroll;
    }
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
`

export const Body = styled.tbody`
    /* height: 100vh;
    overflow: hidden; */
`


export const Row = styled.tr`
    text-align: center;
`

export const Head = styled.thead`
    background-color: #FFE849;
    border-bottom: solid 2px black;
    padding: 10px 30px;
    font-size: 14px;
`

export const Hcell = styled.th`
    padding: 7px 12px;
`

export const Cell = styled.td`
    padding: 7px 12px;
    color: white;
    font-size: 12px;
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
import styled from "styled-components";

export const Content = styled.div`
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
    border-radius: 2px;
    border-collapse: collapse;
    background-color: #2a3338;
    margin-top: 5%;
`

export const Body = styled.tbody`
    /* height: 100vh;
    overflow: hidden; */
`


export const Row = styled.tr`
    text-align: center;
    &:hover {
        background-color: #4e575c;
    }
`

export const Head = styled.thead`
    background-color: #FFE849;
    border-bottom: solid 2px black;
    padding: 10px 30px;
`

export const Hcell = styled.th`
    padding: 7px 12px;
`

export const Cell = styled.td`
    padding: 7px 12px;
    color: white;
`
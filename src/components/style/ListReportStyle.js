import styled from "styled-components";

export const Caption = styled.caption`
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 50px;
`

export const Table = styled.table`
    border-radius: 2px;
    border-collapse: collapse;
    background-color: #2a3338;
    margin-top: 5%;
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
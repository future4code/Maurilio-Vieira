import styled from 'styled-components';

export const AppContainer = styled.div`
    box-sizing: border-box;
    background-color: #f5f5f5;
    min-height: 90vh;
    min-width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    margin: auto;
    padding: 0;
    border: 1px solid black;
`

export const CardContainer = styled.div`
    background-color: #cecece;
    text-align: center;
    min-width: 90vw;
    padding: 16px;
    margin: 0;
`

export const Button = styled.button`
    border-radius: 5px;
    background-color: orange;
    color: white;
    font-size: 26px; 
    padding: 4px;
    margin: 16px auto;
    display: block;
    :hover {
        font-weight: bolder;
        background-color: white;
        color: orange;
        cursor: pointer;
    }
`
export const Select = styled.select`
    display: block;
    margin: 16px auto;
    padding: 4px;
`
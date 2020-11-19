import styled from 'styled-components';

export const ExternalContainer = styled.div`
  background-color: black;
` 
export const AppContainer = styled.div`
  background-color: #cecece;
  box-sizing: border-box;
  min-height: 90vh;
  width: 90vw;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin: 10px;
`

export const InputContainer = styled.div`
    border: 1px solid black;
    background-color: white;
    height: 30vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    padding: 16px;
`
export const Label = styled.label`
    margin-top: 10px;
`
export const Input = styled.input`
    margin: 4px;
`
export const Button = styled.div`
    :hover {
        color: white;
        font-weight: bolder;
        cursor: pointer;
    }
    background-color: orange;
    border-radius: 5px;
    margin-top: 20px;
    width: 60px;
    text-align: center;
`



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
export const ListContainer = styled.div`
    border: 1px solid black;
    background-color: white;
    min-height: 30vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    padding: 16px;
`
export const ListItem = styled.li`
    border-bottom: 1px solid black;
    padding: 4px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 22px;
`
export const DeleteListItem = styled.span`
    :hover {
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer; 
    }
    margin: 2px 8px;
    color: red;
    font-size: 18px;
` 

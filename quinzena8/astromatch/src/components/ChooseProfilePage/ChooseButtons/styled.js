import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
`

export const ButtonYes = styled.button`
  width: 80px;
  height: 80px;
  color: red;
  font-size: 50px;
  transform: scale(0.7);
  position: relative;
  box-shadow: rgba(205,205,205, 0.73) 0 0 15px 0;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: green;
  border-image: initial;
  transition: all 0.2 ease 0s;
  overflow: hidden;
    :hover {
      background-color: green;
      color: red;
    }
`

export const ButtonNo = styled.button`
  width: 80px;
  height: 80px;
  color: red;
  font-size: 50px;
  transform: scale(0.7);
  position: relative;
  box-shadow: rgba(205,205,205, 0.73) 0 0 15px 0;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: red;
  border-image: initial;
  transition: all 0.2 ease 0s;
  overflow: hidden;
   :hover {
      background-color: red;
      color: white;
    } 
`

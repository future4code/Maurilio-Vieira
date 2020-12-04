import styled from 'styled-components';

export const PlaylistDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TrackCreationForm = styled.form`
  width: 90vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
  }
`
export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: lightgreen;
  color: black;
`
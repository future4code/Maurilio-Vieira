import styled from 'styled-components';

export const TrackCardContainer = styled.div`
  margin: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`
export const TrackContainer = styled.h4`
  margin: 10px;
`
export const ArtistContainer = styled.p`
  margin-right: 10px;
`
export const DeleteButton = styled.p`
  color: red;
    :hover {
      font-weight: bolder;
    }
`
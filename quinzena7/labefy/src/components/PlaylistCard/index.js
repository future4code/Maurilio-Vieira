import React from 'react';
import { PlaylistCardContainer, NameContainer, DeleteButton, Button } from './styled';

const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
      <Button onClick={() => props.changePage("playlistDetail", props.playlistId)}>Abrir playlist</Button>
      <NameContainer>{props.name}</NameContainer>
      <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)}>X</DeleteButton>
    </PlaylistCardContainer>
  )
}

export default PlaylistCard;
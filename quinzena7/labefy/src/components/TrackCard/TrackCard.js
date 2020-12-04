import React from 'react';
import { TrackCardContainer, TrackContainer, ArtistContainer, DeleteButton } from './styled';

const TrackCard = (props) => {
  return (
    <TrackCardContainer>
      <div>
        <TrackContainer>{props.trackName} - </TrackContainer>
        <ArtistContainer>{props.artist}</ArtistContainer>
        <DeleteButton
          onClick={() => props.removeTrackFromPlaylist(props.trackId)}
        >
          X
        </DeleteButton>
      </div>
      <audio controls="controls">
        <source src={props.url} type="audio/ogg" />
      </audio>
    </TrackCardContainer>
  )
}

export default TrackCard;
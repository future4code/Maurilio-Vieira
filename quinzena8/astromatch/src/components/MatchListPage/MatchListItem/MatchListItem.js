import React from 'react';

import { ListItemContainer, Avatar } from './styled'

function MatchListItem(props) {
  const profile = props.profile
  return (
    <ListItemContainer>
      <Avatar src={profile.photo} />
      <p>{profile.name}</p>
    </ListItemContainer>
  );
}

export default MatchListItem;
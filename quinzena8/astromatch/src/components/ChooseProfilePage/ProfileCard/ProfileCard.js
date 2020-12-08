import React from 'react';
import { ProfileCardContainer, ProfilePicture, ProfileInfo } from './styled'

export default function ProfileCard(props) {
  const profile = props.profile
  return (
    <ProfileCardContainer>
      <ProfilePicture src={profile.photo} />
      <ProfileInfo>
        <p>{profile.name}, {profile.age}</p>
        <p>{profile.bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

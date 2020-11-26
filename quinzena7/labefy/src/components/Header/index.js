import React from 'react';
import { HeaderContainer, ButtonContainer, Button } from './styled';

const Header = (props) => {
  return (
    <HeaderContainer>
      <h1>Labefy</h1>
      <ButtonContainer>
        <Button onClick={() => props.changePage("playlistCreationPage")}>Cadastrar playlist</Button>
        <Button onClick={() => props.changePage("playlistManagerPage")}
        >Gerenciar playlists</Button>
      </ButtonContainer>
    </HeaderContainer>
  )
}

export default Header;
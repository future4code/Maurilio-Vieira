import React from 'react';
import { AppBarContainer, LogoContainer } from './styled';
import astromatch from '../../assets/img/astromatch.png';
import Button from '@material-ui/core/Button';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';

export default function AppBar(props) {
  return (
    <AppBarContainer>
      <Button onClick={props.goToChooseProfilePage} startIcon={<ContactsRoundedIcon />} />
      <LogoContainer src={astromatch} alt={"logo"} />
      <Button onClick={props.goToMatchListPage} startIcon={<PeopleAltSharpIcon />} />
    </AppBarContainer>
  );
};

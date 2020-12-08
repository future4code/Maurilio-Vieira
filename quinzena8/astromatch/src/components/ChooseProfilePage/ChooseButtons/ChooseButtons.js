import React from 'react';
import { ButtonsContainer, ButtonYes, ButtonNo } from './styled';

export default function ChooseButtons(props) {

  return (
    <ButtonsContainer>
      <ButtonNo onClick={props.onClickNo}>X</ButtonNo>
      <ButtonYes onClick={props.onClickYes}>♥️</ButtonYes>
    </ButtonsContainer>
  );
};


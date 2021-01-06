import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { ButtonsContainer } from './styles';

export default function HomePage() {
  return (
    <div>
      <PageTitle title={'LabeX'} />
      <ButtonsContainer>
        <Link to={'/login'}>
          <Button variant={'outlined'} color={'primary'}> Área do administrador</Button>
        </Link>
        <Link to={'/inscricao'}>
          <Button variant={'outlined'} color={'secondary'}> Quero me candidatar</Button>
        </Link>
      </ButtonsContainer>
    </div>
  )
}
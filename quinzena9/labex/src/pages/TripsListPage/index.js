import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { TripsListPageContainer } from './styles';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useTripsList } from '../../hooks/useTripsList';

const TripsListPage = () => {
  const trips = useTripsList()

  useProtectedPage()

  return (
    <TripsListPageContainer>
      <PageTitle title={'Lista de Viagens'} />
      <Link to={'/viagens/criar'}>
        <Button variant={'outlined'} color={'primary'}>Criar viagem</Button>
      </Link>

      <List component="nav">
        {trips.map((trip) => {
          return (
            <Link key={trip.name} to={`/viagens/detalhe/${trip.id}`}>
              <ListItem button>
                <ListItemText primary={trip.name}></ListItemText>
              </ListItem>
            </Link>
          )
        })}
      </List>
    </TripsListPageContainer>
  )
}

export default TripsListPage
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TripInfoItem from './TripInfoItem';

export default function TripInfoCard(props) {
  const { name, planet, description, date, durationInDays } = props.info
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant={'h5'} color="textSecondary" gutterBottom>
          Informações da viagem
        </Typography>

        <TripInfoItem infoName={'Nome'} info={name} />
        <TripInfoItem infoName={'Planeta'} info={planet} />
        <TripInfoItem infoName={'Data'} info={date} />
        <TripInfoItem infoName={'Descrição'} info={description} />
        <TripInfoItem infoName={'Duração em dias'} info={durationInDays} />

      </CardContent>
    </Card>
  )
}
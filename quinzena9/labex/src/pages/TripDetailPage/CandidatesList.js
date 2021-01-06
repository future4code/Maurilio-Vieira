import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { List } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CandidateItem from './CandidateItem';

export default function CandidatesList(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant={'h5'} color="textSecondary" gutterBottom>
          Lista de candidatos
        </Typography>
        <List>
          {props.candidates.map((candidate) => {
            return <CandidateItem
              key={candidate.id}
              candidate={candidate}
              decideCandidate={props.decideCandidate}
            />
          })}
        </List>
      </CardContent>
    </Card>
  )
}
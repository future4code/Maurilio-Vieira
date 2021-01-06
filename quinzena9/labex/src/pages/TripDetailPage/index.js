import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CandidatesList from './CandidatesList';
import PageTitle from '../../components/PageTitle';
import TripInfoCard from './TripInfoCard';
import { ContentContainer } from './styles';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export default function TripDetailPage() {

  const [trip, setTrip] = useState()
  const params = useParams()

  useProtectedPage()

  const getTripDetail = () => {
    axios.get(`${BASE_URL}/trip/${params.tripId}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      setTrip(response.data.trip)
    })
  }

  useEffect(() => {
    getTripDetail()
  }, [])

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }
    axios.put(`${BASE_URL}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetail()
    })
  }

  return (
    <div>
      <PageTitle title={'Detalhes da Viagem'} />
      {trip ? <ContentContainer>
        <TripInfoCard info={trip} />
        <CandidatesList
          candidates={trip.candidates} decideCandidate={decideCandidate}
        />
      </ContentContainer> : <div>Carregando...</div>}
    </div>
  )
}
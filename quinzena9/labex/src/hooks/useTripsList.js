import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants';

export const useTripsList = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/trips`).then((response) => {
      setTrips(response.data.trips)
    })
  }, [])

  return trips
}
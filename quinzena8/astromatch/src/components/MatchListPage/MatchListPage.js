import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/requests';

import { ListContainer } from './styled'
import MatchListItem from './MatchListItem/MatchListItem';

export default function MatchListPage() {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_URL}/matches`)
      .then(response => {
        setMatches(response.data.matches)
      })
      .catch(err => {
        alert(err.message)
      })
  }, [])

  return (
    <div>
      <ListContainer>
        {matches && matches.map((profile) => {
          return <MatchListItem profile={profile} key={profile.id} />
        })}
      </ListContainer>
    </div>
  );
};

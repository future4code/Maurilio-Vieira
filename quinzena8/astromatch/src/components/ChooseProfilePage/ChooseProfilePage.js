import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/requests';

import ProfileCard from './ProfileCard/ProfileCard';
import ChooseButtons from './ChooseButtons/ChooseButtons';

export default function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState({ undefined })

  const getProfileToChoose = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then(response => {
        setProfileToChoose(response.data.profile)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const chooseProfile = (boolean) => {
    const body = {
      choice: boolean,
      id: profileToChoose.id
    }
    setProfileToChoose(undefined)

    axios.post(`${BASE_URL}/choose-person`, body)
      .then(response => {
        getProfileToChoose()
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const onClickNo = () => {
    chooseProfile(false)
  }

  const onClickYes = () => {
    chooseProfile(true)
  }

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons
            onClickYes={onClickYes}
            onClickNo={onClickNo}
          />
        </>) : <p>Carregando...</p>
      }
    </div>
  );
}

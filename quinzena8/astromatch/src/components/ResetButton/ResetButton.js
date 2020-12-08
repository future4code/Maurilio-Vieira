import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/requests'

import { ClearAllButton } from './styled';

export default function ResetButton() {
  const onClickReset = () => {
    axios
      .put(`${BASE_URL}/clear`)
      .then(() => {
        alert('Lista limpa!')
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <ClearAllButton onClick={onClickReset}>Resetar curtidas e matches</ClearAllButton>
  )
}




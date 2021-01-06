import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { FormContainer } from '../../components/FormContainer';
import PageTitle from '../../components/PageTitle'
import { useForm } from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export default function CreateTripPage() {

  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    durationInDays: 0
  })

  useProtectedPage()

  const history = useHistory()

  const [date, setDate] = useState(new Date())

  const onSubmitForm = (event) => {
    event.preventDefault()

    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.durationInDays
    }

    axios.post(`${BASE_URL}/trips`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      history.push('/viagens')
    }).catch((error) => {
      alert(error)
    })
  }

  return (
    <div>
      <PageTitle title={'Criar viagem'} />
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          label={'Nome'}
          onChange={onChangeInput}
          name={'name'}
          value={form['name']}
        />
        <TextField
          label={'Planeta'}
          onChange={onChangeInput}
          name={'planet'}
          value={form['planet']}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Data"
          value={date}
          onChange={date => setDate(date)}
        />
        <TextField
          label={'Descrição'}
          onChange={onChangeInput}
          name={'description'}
          value={form['description']}
        />
        <TextField
          label={'Duração em dias'}
          type={'number'}
          onChange={onChangeInput}
          name={'durationInDays'}
          value={form['durationInDays']}
        />
        <Button
          variant={'outlined'}
          color={'primary'}
          type={'submit'}>Criar</Button>
      </FormContainer>
    </div>
  )
}
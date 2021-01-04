import React, { useEffect, useState } from 'react';
import { Button, InputLabel, FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { FormContainer } from '../../components/FormContainer';
import PageTitle from '../../components/PageTitle'
import { useForm } from '../../hooks/useForm';
import { useTripsList } from '../../hooks/useTripsList';
import axios from 'axios';
import { BASE_URL } from '../../constants';

const ApplicationPage = () => {

  const trips = useTripsList()
  const [form, onChangeInput] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: undefined
  })

  const onSubmitApplication = (event) => {
    event.preventDefault()
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    if(form.trip) {
      axios.post(`${BASE_URL}/trips/${form.trip.id}/apply`, body)
        .then((response) => {
          alert(response.request.statusText)
        }).catch((error) => {
          alert(error)
        })
    } else {
      alert('Existe algum campo em branco!')
    }
  }

  return (
    <div>
      <PageTitle title={'Inscrição'} />
      <FormContainer onSubmit={onSubmitApplication}>
        <TextField
          label={'Nome do candidato'}
          onChange={onChangeInput}
          value={form['name']}
          name={'name'}
        />
        <TextField
          label={'Idade'} type={'number'}
          onChange={onChangeInput}
          value={form['age']}
          name={'age'}
        />
        <TextField
          label={'Motivação'} helperText="Explique por que quer ir nessa viagem"
          onChange={onChangeInput}
          value={form['applicationText']}
          name={'applicationText'}
        />
        <TextField
          label={'Profissão'}
          onChange={onChangeInput}
          value={form['profession']}
          name={'profession'}
        />
        <FormControl>
          <InputLabel id="select-paises">Países</InputLabel>
          <Select
            labelId="select-paises"
            onChange={onChangeInput}
            value={form['country']}
            name={'country'}
          >
            <MenuItem value={'brasil'}>Brasil</MenuItem>
            <MenuItem value={'canada'}>Canadá</MenuItem>
            <MenuItem value={'eua'}>EUA</MenuItem>
            <MenuItem value={'china'}>China</MenuItem>
            <MenuItem value={'inglaterra'}>Inglaterra</MenuItem>
            <MenuItem value={'alemanha'}>Alemanha</MenuItem>
            <MenuItem value={'russia'}>Rússia</MenuItem>
            <MenuItem value={'japao'}>Japão</MenuItem>
            <MenuItem value={'australia'}>Austrália</MenuItem>
            <MenuItem value={'emirados'}>Emirados Árabes</MenuItem>

          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="select-viagens">Viagens</InputLabel>
          <Select
            labelId="select-viagens"
            onChange={onChangeInput}
            value={form['trip']}
            name={'trip'}
          >
            {trips.map((trip) => {
              return <MenuItem key={trip.id} value={trip}>{trip.name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <Button variant={'outlined'} color={'secondary'} type={'submit'}>Inscrever-se</Button>
      </FormContainer>
    </div>
  )
}

export default ApplicationPage
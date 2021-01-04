import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { useForm } from '../../hooks/useForm';
import { LoginForm } from './styles';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export default function LoginPage() {
  const history = useHistory()
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post(`${BASE_URL}/login`, body)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        history.push('/viagens')
      }).catch((error) => {
        alert(error);
      })
  }

  return (
    <div>
      <PageTitle title={'Login'} />
      <LoginForm onSubmit={onSubmitLogin}>
        <TextField
          label={'Email'}
          type={'email'}
          onChange={onChangeInput}
          value={form['email']}
          name={'email'}
        />
        <TextField
          label={'Senha'}
          type={'password'}
          onChange={onChangeInput}
          value={form['password']}
          name={'password'}
        />
        <Button variant={'outlined'} color={'primary'} type={'submit'}>Entrar</Button>
      </LoginForm>
    </div>
  )
}
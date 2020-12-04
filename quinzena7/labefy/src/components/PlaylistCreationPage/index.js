import React from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../constants';
import { PlaylistCreationPageContainer, PlaylistCreationForm, Button } from './styled'

class PlaylistCreationPage extends React.Component {
  state = {
    inputNameValue: ""
  }

  changeInputNameValue = (e) => {
    this.setState({ inputNameValue: e.target.value })
  }

  createPlaylist = (e) => {
    e.preventDefault()

    if (this.state.inputNameValue !== '') {
      const body = {
        name: this.state.inputNameValue
      }

      axios.post(baseUrl, body, axiosConfig).then(() => {
        alert("Playlist criada com sucesso!")
      }).catch(err => {
        console.log(err.message);
      })
      this.setState({ inputNameValue: "" })
    } else {
      alert("Por favor, preencha o campo antes de enviar!")
    }
  }

  render() {
    return (
      <PlaylistCreationPageContainer>
        <h1>Cadastrar nova playlist</h1>
        <PlaylistCreationForm onSubmit={this.createPlaylist}>
          <label>Nova playlist</label>
          <input
            placeholder="Nome da Playlist"
            type="text"
            value={this.state.inputNameValue}
            onChange={this.changeInputNameValue}
          />
          <Button type="submit">Cadastrar Playlist</Button>
        </PlaylistCreationForm>
      </PlaylistCreationPageContainer>
    )
  }
}

export default PlaylistCreationPage;
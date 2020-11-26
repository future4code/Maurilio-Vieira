import React from 'react';
import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants';
import { PlaylistDetailContainer, TrackCreationForm, Button } from './styled';
import TrackCard from '../TrackCard/TrackCard';

class PlaylistDetail extends React.Component {
  state = {
    tracks: [],
    trackName: "",
    artist: "",
    url: ""
  }

  componentDidMount = () => {
    this.fetchTracks()
  }

  fetchTracks = () => {
    axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(response => {
      this.setState({ tracks: response.data.result.tracks })
    }).catch(err => {
      console.log(err);
    })
  }

  removeTrackFromPlaylist = (trackId) => {
    axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(response => {
      this.fetchTracks()
    }).catch(err => {
      console.log(err);
    })
  }

  changeInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addTrackToPlaylist = (e) => {
    e.preventDefault()

    if (this.state.trackName !== "" && this.state.artist !== "" && this.state.url !== "") {
      const body = {
        name: this.state.trackName,
        artist: this.state.artist,
        url: this.state.url
      }
      axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig).then(() => {
        this.fetchTracks();
        this.setState({ trackName: "", artist: "", url: "" })
      }).catch(err => {
        console.log(err);
      })
    } else {
      alert('Por favor, verifique se existem campos em branco!')
    }

  }

  render() {
    const tracks = this.state.tracks.map(track => {
      return <TrackCard
        key={track.id}
        trackName={track.name}
        artist={track.artist}
        url={track.url}
        trackId={track.id}
        removeTrackFromPlaylist={this.removeTrackFromPlaylist}
      />
    })

    return (
      <PlaylistDetailContainer>
        <TrackCreationForm onSubmit={this.addTrackToPlaylist}>
          <div>
            <label>Nome da música</label>
            <input
              placeholder="Nome da música"
              name="trackName"
              value={this.state.trackName}
              onChange={this.changeInputValue}
            />
          </div>
          <div>
            <label>Artista</label>
            <input
              placeholder="Nome do artista/banda"
              name="artist"
              value={this.state.artist}
              onChange={this.changeInputValue}
            />
          </div>
          <div>
            <label>URL da música</label>
            <input
              placeholder="Url da música"
              name="url"
              value={this.state.url}
              onChange={this.changeInputValue}
            />
          </div>
          <Button type="submit">Adicionar música</Button>
        </TrackCreationForm>
        {tracks}
        <Button onClick={() => this.props.changePage("playlists", "")}>Voltar para Playlists</Button>
      </PlaylistDetailContainer>
    )
  }
}

export default PlaylistDetail;
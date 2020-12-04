import React from 'react';
import { PlaylistManagerPageContainer } from './styled';
import PlaylistDetail from '../PlaylistDetail';
import Playlists from '../Playlists';

class PlaylistManagerPage extends React.Component {
  state = {
    currentPage: "playlists",
    playlistId: ""
  }
  changePage = (Page, playlistId) => {
    this.setState({
      currentPage: Page,
      playlistId: playlistId
    })
  }

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === 'playlists') {
        return <Playlists
          changePage={this.changePage}
        />
      } else if (this.state.currentPage === 'playlistDetail') {
        return <PlaylistDetail
          changePage={this.changePage}
          playlistId={this.state.playlistId}
        />
      }
    }
    return (
      <PlaylistManagerPageContainer>
        {renderCurrentPage()}
      </PlaylistManagerPageContainer>
    )
  }
}

export default PlaylistManagerPage;
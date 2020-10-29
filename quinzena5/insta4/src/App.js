import React from 'react';
import styled from 'styled-components'
import './App.css';
import Post from './components/Post/Post';

const DivEstilizada = styled.div `
  display:flex;
  flex-direction: column;
`
const EntradaEstilizada = styled.input `
  border-radius:10px;
`
const BotaoEstilizado = styled.button `
  border-radius: 5px;
`

class App extends React.Component {
  state = {

    listaDePostagem: [
      {
          nomeUsuario: 'paulinha',
          fotoUsuario: 'https://picsum.photos/50/50?a=1',
          fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {   nomeUsuario: 'eneas',
          fotoUsuario: 'https://picsum.photos/50/50?a=2',
          fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'severino',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }    
    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }
    novaPostagem = () => {
      const novoPost = {
        nomeUsuario: this.state.inputNomeUsuario,
        fotoUsuario: this.state.inputFotoUsuario,
        fotoPost: this.state.inputFotoPost
      } 
    
    const novaListaDePostagem = [novoPost,...this.state.listaDePostagem]
    this.setState({listaDePostagem:novaListaDePostagem})
  }

  preencheCampoUsuario = (event) => {
    this.setState({inputNomeUsuario:event.target.value})
  }

  preencheCampoFotoUsuario = (event) => {
    this.setState({inputFotoUsuario:event.target.value})
  }

  preencheCampoFotoPost = (event) => {
    this.setState({inputFotoPost:event.target.value})
  }

  render() {

    const listaDePostagens = this.state.listaDePostagem.map((postagem) =>{
      return (
        <Post
        nomeUsuario={postagem.nomeUsuario}
        fotoUsuario={postagem.fotoUsuario}
        fotoPost={postagem.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <p></p>
        <DivEstilizada>
        <EntradaEstilizada placeholder={'Nome'} value={this.state.inputNomeUsuario} onChange={this.preencheCampoUsuario} />
        <EntradaEstilizada placeholder={'Foto do Usuário'} value={this.state.inputFotoUsuario} onChange={this.preencheCampoFotoUsuario} />
        <EntradaEstilizada placeholder={'Post'} value={this.state.inputFotoPost} onChange={this.preencheCampoFotoPost} />
        <BotaoEstilizado onClick={this.novaPostagem}>Adicionar</BotaoEstilizado>
        </DivEstilizada>
        <p></p>
        {listaDePostagens}
        
      </div>
    );
  }
}

export default App;

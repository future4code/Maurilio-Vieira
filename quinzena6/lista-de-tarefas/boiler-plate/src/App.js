import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const tarefas = {
      tarefas: this.state.tarefas,
      inputValue: this.state.inputValue,
      filtro: this.state.filtro
    }
    const tarefasEmStrings = JSON.stringify(tarefas)

    localStorage.setItem("tarefas", tarefasEmStrings)
  };

  componentDidMount() {
    const tarefasEmStrings = localStorage.getItem("tarefas")
    const tarefas = JSON.parse(tarefasEmStrings)
    if (tarefas) {
      this.setState({
        tarefas: tarefas.tarefas,
        inputValue: tarefas.inputValue,
        filtro: tarefas.filtro
      })
    }

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    if (this.state.inputValue === ''){
      alert("É preciso preencher o campo de tarefa, antes de tentar adicionar!")
    } else {

      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }
      const novaListaDeTarefas = [...this.state.tarefas,novaTarefa]

    this.setState({tarefas: novaListaDeTarefas})
    this.state.inputValue = ''
    }  
  }

  criaTarefaComOEnter = (event) => {
    if (event.key === 'Enter'){
      this.criaTarefa()
    }
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyDown={this.criaTarefaComOEnter}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

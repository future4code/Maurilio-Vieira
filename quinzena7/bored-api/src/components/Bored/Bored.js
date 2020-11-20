import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/requests';
import { AppContainer, Button, CardContainer, Select } from './styled';

class Bored extends Component {

    state = {
        atividade: {},
        listaDosTipos: ["education", "recreational", "social", "diy", "charity",
            "cooking", "relaxation", "music", "busywork"],
        tipoSelecionado: "education",
        qtdParticipantes: [1, 2, 3, 4],
        qtdSelecionada: 1
    }

    componentDidMount = () => {
        axios.get(`${BASE_URL}/activity`).then(response => {
            this.setState({ atividade: response.data })
        })
            .catch(error => {
                console.log(error.message);
            })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.tipoSelecionado !== this.state.tipoSelecionado) {
            this.pegaAtividadePorTipo()
        }

        else if (prevState.qtdSelecionada !== this.state.qtdSelecionada) {
            this.pegarAtividadePorQtd()
        }
    }

    mudaAtividade = () => {
        axios.get(`${BASE_URL}/activity/`).then(response => {
            this.setState({ atividade: response.data })
        }).catch(error => {
            console.log(error.message);
        })
    }

    mudaTipoAtividade = (event) => {
        const novoTipo = event.target.value;
        this.setState({ tipoSelecionado: novoTipo })
    }

    pegaAtividadePorTipo = () => {
        axios.get(`${BASE_URL}/activity?type=${this.state.tipoSelecionado}`).then(response => {
            this.setState({ atividade: response.data })
        }).catch(error => {
            console.log(error.message);
        })
    }
    mudaQtd = (event) => {
        const novaQuantidade = event.target.value;
        this.setState({ qtdSelecionada: novaQuantidade })
    }

    pegarAtividadePorQtd = () => {
        axios.get(`${BASE_URL}/activity?participants=${this.state.qtdSelecionada}`).then(response => {
            this.setState({ atividade: response.data })
        }).catch(error => {
            console.log(error.message);
        })
    }
    render() {
        return (
            <AppContainer>
                <CardContainer>
                    <h1>Vença o tédio - <br /> (sugestões em inglês)</h1>
                    <p>Atividade: {this.state.atividade.activity}</p>
                    <p>Tipo: {this.state.atividade.type}</p>
                    <p>Número de participantes: {this.state.atividade.participants}</p>
                    <p>Preço US$: {this.state.atividade.price}</p>
                    <hr />
                </CardContainer>
                <CardContainer>
                    Procura por tipo:
                    <Select
                        value={this.state.tipoSelecionado}
                        onChange={this.mudaTipoAtividade}
                    >
                        {this.state.listaDosTipos.map((tipo) => {
                            return (
                                <option
                                    key={tipo}
                                    value={tipo}
                                >
                                    {tipo}
                                </option>)
                        })}
                    </Select>
                    ou pelo número de participantes:
                    <Select
                        value={this.state.qtdSelecionada}
                        onChange={this.mudaQtd}
                    >
                        {this.state.qtdParticipantes.map((numeroDeParticipante, index) => {
                            return (
                                <option
                                    key={index}
                                    value={index + 1}
                                >
                                    {index + 1}
                                </option>)
                        })}
                    </Select>
                    <p> ou clique para critérios aleatórios </p>
                    <Button onClick={this.mudaAtividade}>Gerar outra</Button>
                </CardContainer>
            </AppContainer>
        );
    }
}

export default Bored;
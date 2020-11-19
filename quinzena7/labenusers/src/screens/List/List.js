import React from 'react';
import axios from 'axios';
import {BASE_URL, axiosConfig} from '../../constants/requests'
import{ExternalContainer, AppContainer, ListContainer, ListItem, DeleteListItem} from './styled'

export class List extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount() {
        this.catchListUser();
    };

    catchListUser = () => {
        axios.get(`${BASE_URL}/users`, axiosConfig)
        .then((response) => this.setState({usersList: response.data}))
        .catch((error) => alert(error.message))
    };

    onClickDeleteUser = (id) => {
        axios.delete(`${BASE_URL}/users/${id}`, axiosConfig)
        .then(() => {
            this.catchListUser();
            alert("Usuário deletado com sucesso!");
        })
        .catch((error) => alert(error.message));
    };

    render () {
        const newListUsers = this.state.usersList.map(element => {
            return (
                <ListItem key={element.id}>
                    {element.name}
                    <DeleteListItem onClick={() => this.onClickDeleteUser(element.id)}>X</DeleteListItem>
                </ListItem>
            ) 
        })

        return ( 
            <ExternalContainer>
                <AppContainer>
                    <ListContainer>
                    <h3> Usuários Cadastrados: </h3>
                    <ul> {newListUsers}</ul>
                    </ListContainer>
                </AppContainer>
            </ExternalContainer>
        )
    }
}
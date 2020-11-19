import React from 'react';
import axios from 'axios';
import {BASE_URL, axiosConfig} from '../../constants/requests'
import {ExternalContainer, AppContainer, InputContainer, Label, Input, Button} from './styled'

export class Form extends React.Component {
    state = {
        nameInput: '',
        emailInput: ''
    };

    onChangeName = (event) => {
        this.setState({ nameInput: event.target.value })
    };
    
    onChangeEmail = (event) => {
        this.setState({ emailInput: event.target.value })
    };
    
    onSave = () => {
      const body = {
          name: this.state.nameInput,
          email: this.state.emailInput
      };
    
      axios.post(`${BASE_URL}/users`, body, axiosConfig)
      .then(() => {
          alert(`O usuário ${this.state.nameInput} foi adicionado.`)
          this.setState({nameInput: "", emailInput: ""})  
      })
      .catch((error) => alert(error.message))
    };

    sendWithEnter = (event) => {
        if (event.key === 'Enter'){
            this.onSave()
        }
    }

    render() {
        return (
            <ExternalContainer>
                <AppContainer>
                    <InputContainer>
                        <Label>Nome: </Label>
                        <Input type="text" 
                        onChange={this.onChangeName} 
                        value={this.state.nameInput}
                        />
                        <Label>E-mail: </Label>
                        <Input type="email" 
                        onChange={this.onChangeEmail}
                        value={this.state.emailInput}
                        onKeyDown={this.sendWithEnter} 
                        />
                        <Button onClick={this.onSave}>Salvar</Button>
                    </InputContainer>
                </AppContainer>
            </ExternalContainer>
        )
    }
}


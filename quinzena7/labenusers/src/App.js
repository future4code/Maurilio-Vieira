import React from 'react';
import {Form} from './screens/Form/Form';
import {List} from './screens/List/List';

class App extends React.Component {
  state = {
    createUserPage: true
}

onChangeScreen = () => {
  this.setState({ createUserPage: !this.state.createUserPage })
};

render() {
    return (
      <div>
        <button onClick={this.onChangeScreen}> 
          {this.state.createUserPage ? "Ir para página de lista" : "Ir para página de registro"}
        </button>
        {this.state.createUserPage ? <Form/> : <List/>}
      </div>
    );
  }
}

export default App;

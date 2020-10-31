import React from 'react';


class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h3> <strong>ETAPA 1 - DADOS GERAIS</strong></h3>
                <p>1. Qual o seu nome?</p>
                <input></input>
                <p>2. Qual sua idade?</p>
                <input></input>
                <p>3. Qual seu email?</p>
                <input></input>
                <p>4. Qual a sua escolaridade?</p>
                <div>
                    <select>
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                </div>
                <br/>
            </div>
        );
    }
}

export default Etapa1;
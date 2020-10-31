import React from 'react';

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h3><strong>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</strong></h3>
                <p>5.Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6.Você fez algum curso complementar?</p>
                <div>
                    <select>
                        <option> Curso técnico</option>
                        <option> Curso de inglês</option>
                    </select>
                </div>
                <br/>
            </div>
        )
    }
}

export default Etapa3;
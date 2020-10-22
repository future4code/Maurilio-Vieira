import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div>
                <h3> {props.rotulo}</h3>
                <p> {props.valor}</p>
            </div>
        </div>
    )
}

export default CardPequeno;

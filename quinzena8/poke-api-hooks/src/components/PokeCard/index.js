import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/requests'

export default function PokeCard(props) {

  const [pokemon, setPokemon] = useState({})

  const getPokemonInfo = (pokeName) => {
    axios.get(`${BASE_URL}/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemonInfo(props.pokemon)
  }, [props.pokemon])

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight}Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

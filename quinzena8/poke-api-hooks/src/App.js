import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/requests';
import { AppContainer } from './styled';
import PokeCard from './components/PokeCard';

export default function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const getPokemons = () => {
    axios.get(`${BASE_URL}/pokemon?limit=151`)
      .then(response => setPokeList(response.data.results))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPokemons()
  }, [])

  const onChangePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <AppContainer>
      <select onChange={onChangePokeName}>
        <option value={""}>
          Nenhum
        </option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </AppContainer>
  );
}


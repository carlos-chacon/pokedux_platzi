import React, { useEffect } from 'react';
import { getPokemons } from '../../api/getPokemons';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
  useEffect(() => {
    getPokemons().then((res) => console.log(res));
  })
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;

import React from 'react';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;

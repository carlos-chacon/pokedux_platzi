import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { fetchPokemons } from '../../slices/pokemon';
import './styles.css';



function Home() {
  const list = useSelector((state) => state.pokemon.list);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());    
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={list}/>
    </div>
  );
}

export default Home;

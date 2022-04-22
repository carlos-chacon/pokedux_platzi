import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setPokemon } from '../../actions';
import { getPokemons } from '../../api/getPokemons';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';



function Home() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  useEffect(() => {
    getPokemons().then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)));
    })
    .then((resPokemon) => {
      const pokemonData = resPokemon.map(res => res.data);
      dispatch(setPokemon(pokemonData));
    })
    .catch((error) => {
      dispatch(setError({message: 'Ocurrió un error', error}));
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list}/>
    </div>
  );
}

export default Home;

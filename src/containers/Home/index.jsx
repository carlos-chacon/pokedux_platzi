import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from '../../actions';
import Loader from '../../components/Loader';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';



function Home() {
  const list = useSelector((state) => state.getIn(['pokemon', 'list'])).toJS();
  const loading = useSelector((state) => state.get('ui').get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());    
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

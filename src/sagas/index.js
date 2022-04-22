import { call, put, takeEvery } from 'redux-saga/effects';
import { setPokemon } from '../actions';
import { FETCH_POKEMONS } from '../actions/types';
import { getPokemonWithDetails } from '../api/getPokemons';

function* fetchPokemonWithDetails(action) {
    try {
        const pokemonWithDetails = yield call(getPokemonWithDetails);
        yield put(setPokemon(pokemonWithDetails));
    } catch (error) {
        console.log(error);
    }
}

function* pokemonSaga() {
    yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails);
}

export default pokemonSaga;
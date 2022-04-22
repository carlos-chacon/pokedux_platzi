import { getPokemons, getPokemonsWithDetails } from "../api/getPokemons";
import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, FETCH_POKEMONS, TOGGLE_LOADER, SET_FAVORITE } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload,
});

export const toggleLoader = () => ({
    type: TOGGLE_LOADER,
});

export const fetchPokemons = () => ({
    type: FETCH_POKEMONS,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});

export const fetchPokemonsWithDetails = () => async(dispatch) => {
    try {
        dispatch(toggleLoader());
        const response = await getPokemons();
        const pokemons = response.results;
        const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
        dispatch(setPokemon(pokemonsWithDetails));
        dispatch(toggleLoader());
    } catch (error) {
        dispatch(setError({ message: 'Oops! Something went wrong.', error }));
        dispatch(toggleLoader());
    }
};
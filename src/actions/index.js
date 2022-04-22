import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, FETCH_POKEMONS } from "./types";

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

export const fetchPokemons = () => ({
    type: FETCH_POKEMONS,
});

// export const getPokemonWithDetails = () => (dispatch) => {
//     getPokemons().then((res) => {
//             const pokemonList = res.results;
//             return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)));
//         })
//         .then((resPokemon) => {
//             const pokemonData = resPokemon.map(res => res.data);
//             dispatch(setPokemon(pokemonData));
//         })
//         .catch((error) => {
//             dispatch(setError({ message: 'Ocurrió un error', error }));
//         });
// }
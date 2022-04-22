import { CLEAR_ERROR, SET_ERROR, SET_FAVORITE, SET_POKEMON, TOGGLE_LOADER } from "../actions/types";

const initialState = {
    list: [],
    error: '',
    loading: false
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {...state, list: action.payload };
        case SET_FAVORITE:
            const newPokemonList = [...state.list];
            const currentPokemonIndex = newPokemonList.findIndex((elem) => elem.id === action.payload.pokemonId);
            if (currentPokemonIndex >= 0) {
                newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            }
            return {...state, list: newPokemonList };
        case SET_ERROR:
            return {...state, error: action.payload.message };
        case CLEAR_ERROR:
            return {...state, error: '' };
        case TOGGLE_LOADER:
            return {...state, loading: !state.loading };
        default:
            return {...state };
    }
};

export default pokemonReducer;
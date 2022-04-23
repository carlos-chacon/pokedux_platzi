import { fromJS } from "immutable";
import { CLEAR_ERROR, SET_ERROR, SET_FAVORITE, SET_POKEMON, TOGGLE_LOADER } from "../actions/types";

const initialState = fromJS({
    list: [],
    error: '',
    loading: false
});

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return state.set('list', fromJS(action.payload));
            // return {...state, list: action.payload };
        case SET_FAVORITE:

            const currentPokemonIndex = state.get('list').findIndex((elem) => elem.get('id') === action.payload.pokemonId);

            const isFavorite = state.get(['list', currentPokemonIndex, 'favorite']);

            return state.setIn(['list', currentPokemonIndex, 'favorite'], !isFavorite);
            // case SET_ERROR:
            //     return {...state, error: action.payload.message };
            // case CLEAR_ERROR:
            //     return {...state, error: '' };
            // case TOGGLE_LOADER:
            //     return {...state, loading: !state.loading };
        default:
            return state;
    }
};

export default pokemonReducer;
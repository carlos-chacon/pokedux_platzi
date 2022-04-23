import { combineReducers } from 'redux-immutable';
import pokemonReducer from '../reducers/pokemonReducer';
import uiReducer from '../reducers/ui';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    ui: uiReducer,
});

export default rootReducer;
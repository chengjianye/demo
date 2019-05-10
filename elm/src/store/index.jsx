import { createStore, combineReducers } from 'redux';
import homeReducers from './redeucers';

const Reducers = combineReducers({
    homeReducers
})

export default createStore(Reducers)
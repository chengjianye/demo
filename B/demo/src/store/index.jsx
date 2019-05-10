import { createStore, combineReducers } from 'redux';
import SearchReducers from './reducers';

const Reducers = combineReducers({
    SearchReducers
})

export default createStore(Reducers)
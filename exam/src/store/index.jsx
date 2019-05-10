import { createStore, combineReducers } from 'redux';
import Bookkeeping from './reducers';

const Reducers = combineReducers({
    Bookkeeping
})

export default createStore(Reducers)
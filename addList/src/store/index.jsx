import { createStore, combineReducers } from 'redux';
import EditReducers from './reducers'

const Reducers = combineReducers({
    EditReducers
})

export default createStore(Reducers)
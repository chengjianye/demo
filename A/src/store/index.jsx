import { createStore, combineReducers } from 'redux';
import Application from './reducers/application';

const Reducers = combineReducers({
    Application
})

export default createStore(Reducers)
import { createStore, combineReducers } from 'redux';
import TodoList from './reducers'

const Reducers = combineReducers({
    TodoList
})

export default createStore(Reducers)
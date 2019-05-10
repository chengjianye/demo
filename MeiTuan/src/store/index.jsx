import { createStore, combineReducers } from 'redux';
import ShopCarReducers from './reducers'

const Reducers = combineReducers({
    ShopCarReducers
})

export default createStore(Reducers)
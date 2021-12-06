import { createStore, combineReducers } from 'redux';
import fruitReducer from './reducers/FruitReducers';

const rootReducer = combineReducers({
    fruitStore:fruitReducer,
})
const stores = () => {
    return createStore(rootReducer);

}

export default stores;
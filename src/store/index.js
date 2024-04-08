
import { createStore, combineReducers } from 'redux';
import toyReducer from './toyReducer';
 

const rootReducer = combineReducers({
  toys: toyReducer,
});

const store = createStore(rootReducer);

export default store;

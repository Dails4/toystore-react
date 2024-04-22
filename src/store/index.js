
import { createStore, combineReducers } from 'redux';
import toyReducer from './toyReducer';
import testReducer from './testReducer';
 

const rootReducer = combineReducers({
  toys: toyReducer,
  test: testReducer
});

const store = createStore(rootReducer);

export default store;

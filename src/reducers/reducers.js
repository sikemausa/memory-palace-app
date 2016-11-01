import { combineReducers } from 'redux';
import items from './items';
import auth from './auth';

const reducers = combineReducers({
  items,
  auth
});

export default reducers;

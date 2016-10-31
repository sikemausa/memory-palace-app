import { combineReducers } from 'redux';
import items from './items';
import testText from './testText';
import auth from './auth';

const reducers = combineReducers({
  items,
  testText,
  auth
});

export default reducers;

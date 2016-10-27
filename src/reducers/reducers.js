import { combineReducers } from 'redux';
import items from './items';
import testText from './testText';

const reducers = combineReducers({
  items,
  testText
});

export default reducers;

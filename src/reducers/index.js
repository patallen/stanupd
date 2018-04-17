import { combineReducers } from 'redux';
import dealsReducer from './deals';

const combinedReducer = combineReducers({
  deals: dealsReducer
});

export default combinedReducer;

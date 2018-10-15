import { combineReducers } from 'redux';

import transactionReducer from './transactions/reducer';


export default function createReducer(asyncReducers) {
  return combineReducers({
    transactions: transactionReducer,
    ...asyncReducers,
  });
}

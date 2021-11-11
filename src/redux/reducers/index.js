import { combineReducers } from 'redux';
import { newsUpdatedReducer } from './newsUpdateReducer'

export const Reducers = combineReducers({
  newsState: newsUpdatedReducer
});
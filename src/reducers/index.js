import { combineReducers } from 'redux';
import authReducer from './AuthApi';

const rootReducer = combineReducers({ authReducer });

export default rootReducer;

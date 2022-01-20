import { combineReducers } from 'redux';
import auth from './auth';
import applications from './applications';
import * as types from '../actions/types';

const appReducer = combineReducers({
	auth,
	applications,
});

export default appReducer;

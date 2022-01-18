import { combineReducers } from 'redux';
import auth from './auth';
import applications from './applications';
const rootReducer = combineReducers({
	auth,
	applications,
});

export default rootReducer;

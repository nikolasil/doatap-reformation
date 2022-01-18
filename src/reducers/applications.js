import * as types from '../actions/types';

const inititalState = {
	application: {
		isLoading: false,
		error: null,
		application: null,
		message: null,
		isUploaded: false,
	},
};

export default (state = inititalState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.SUBMIT_NEW_APPLICATION_REQUEST:
			return {
				...state,
				application: {
					...state.application,
					isLoading: true,
					error: null,
					message: null,
					isUploaded: false,
				},
			};
		case types.SUBMIT_NEW_APPLICATION_SUCCESS:
			return {
				...state,
				application: {
					...state.application,
					isLoading: false,
					error: null,
					message: payload.message,
					application: payload.application,
					isUploaded: true,
				},
			};
		case types.SUBMIT_NEW_APPLICATION_FAILURE:
			return {
				...state,
				application: {
					...state.application,
					isLoading: false,
					error: payload,
					message: null,
					application: null,
					isUploaded: false,
				},
			};
		default:
			return state;
	}
};

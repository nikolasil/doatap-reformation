import * as types from '../types';
import axios from 'axios';

export const submitNewApplication = (data) => async (dispatch) => {
	const formData = new FormData();
	for (let key in data) {
		if (key === 'attachments') {
			Object.keys(data[key]).forEach((category) => {
				formData.append(key, data[key][category]);
			});
		} else {
			formData.append(key, data[key]);
		}
	}
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};
	console.log(formData);
	try {
		dispatch({ type: types.SUBMIT_NEW_APPLICATION_REQUEST });
		const response = await axios.post('/application/create', formData, config);
		console.log(response.data);
		dispatch({ type: types.SUBMIT_NEW_APPLICATION_SUCCESS, payload: response.data });
	} catch (error) {
		console.log(error.response);
		dispatch({ type: types.SUBMIT_NEW_APPLICATION_FAILURE, payload: error.response.data.message });
	}
};

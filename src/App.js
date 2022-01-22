import React, { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme, theme as base } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import axios from 'axios';
import './App.css';
import { loadUser } from './actions/auth/auth';
import { loadAdminUser } from './actions/admin/admin';

import Customer from './Customer';
import Admin from './Admin';

const theme = extendTheme({
	fonts: {
		body: `Inter, ${base.fonts.body}`,
		heading: `Inter, ${base.fonts.body}`,
	},
	colors: {
		gray: {
			100: '#eeeeee',
			200: '#e5e5e5',
			500: '#c4c4c4',
			700: '#707070',
			800: '#444444',
		},
		green: {
			500: '#005046',
			700: '#003831',
		},
	},
});

function App() {
	// const dispatch = useDispatch();
	axios.defaults.baseURL = 'http://localhost:5000/api/';

	return (
		<div className='App'>
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<Router>
						<Routes>
							<Route exact path='*' element={<Customer />} />
							<Route exact path='/admin/*' element={<Admin />} />
						</Routes>
					</Router>
				</ChakraProvider>
			</Provider>
		</div>
	);
}

export default App;

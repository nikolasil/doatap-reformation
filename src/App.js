import React, { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme, theme as base } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/layout/auth/Login';
import Register from './components/layout/auth/Register';
import { Flex } from '@chakra-ui/react';
import Navbar from './components/ui/Navbar';
import Header from './components/ui/Header';
import Applications from './components/layout/Applications/Applications';
import NewApplication from './components/layout/Applications/NewApplication';
import Application from './components/layout/Applications/Application';
import Account from './components/layout/Account/Account';
import NotFound from './components/layout/NotFound/NotFound';
import PrivateRoute from './components/Routing/PrivateRoute';
import store from './store';
import { Provider } from 'react-redux';
import axios from 'axios';
import './App.css';
import { loadUser } from './actions/auth/auth';

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

	useEffect(() => {
		// dispatch(loadUser());
		store.dispatch(loadUser());
	}, []);
	return (
		<div className='App'>
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<Router>
						<Flex flexDir={'column'} h={'100%'}>
							<Header />
							<Navbar />
							<Routes>
								<Route exact path='/' element={<Landing />} />
								<Route exact path='/login' element={<Login />} />
								<Route exact path='/register' element={<Register />} />
								<Route exact path='/applications' element={<Applications />} />
								<Route
									exact
									path='/account'
									element={
										<PrivateRoute>
											<Account />
										</PrivateRoute>
									}
								/>
								<Route
									exact
									path='/applications/new-application'
									element={
										<PrivateRoute>
											<NewApplication />
										</PrivateRoute>
									}
								/>
								<Route
									path='/applications/:id'
									element={
										<PrivateRoute>
											<Application />
										</PrivateRoute>
									}
								/>
								<Route path='*' element={<NotFound />} />
							</Routes>
						</Flex>
					</Router>
				</ChakraProvider>
			</Provider>
		</div>
	);
}

export default App;

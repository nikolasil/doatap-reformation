import React, { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/layout/auth/Login';
import { Flex } from '@chakra-ui/react';
import Navbar from './components/ui/Navbar';
import Header from './components/ui/Header';
import Applications from './components/layout/Applications/Applications';
import NewApplication from './components/layout/Applications/NewApplication';

import './App.css';

const theme = extendTheme({
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
	return (
		<div className='App'>
			<ChakraProvider theme={theme}>
				<Router>
					<Flex flexDir={'column'} h={'100%'}>
						<Header />
						<Navbar />
						<Routes>
							<Route exact path='/' element={<Landing />} />
							<Route exact path='/login' element={<Login />} />
							<Route exact path='/applications' element={<Applications />} />
							<Route exact path='/applications/new-application' element={<NewApplication />} />
						</Routes>
					</Flex>
				</Router>
			</ChakraProvider>
		</div>
	);
}

export default App;

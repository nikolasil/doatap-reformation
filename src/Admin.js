import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLanding from './components/layout/admin/AdminLanding';
import { Flex } from '@chakra-ui/react';
import Navbar from './components/ui/Navbar';
import Header from './components/ui/Header';
import Applications from './components/layout/admin/Applications';
import AdminPrivateRoute from './components/Routing/AdminPrivateRoute';
import Application from './components/layout/admin/Application';
import { useDispatch } from 'react-redux';
import { loadAdminUser } from './actions/admin/admin';

const Admin = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadAdminUser());
	}, []);

	return (
		<Flex flexDir={'column'} h={'100%'}>
			{/* <Header />
      <Navbar /> */}
			<Routes>
				<Route exact path='/' element={<AdminLanding />} />
				<Route
					exact
					path='/applications'
					element={
						<AdminPrivateRoute>
							<Applications />
						</AdminPrivateRoute>
					}
				/>
				<Route
					exact
					path='/applications/:id'
					element={
						<AdminPrivateRoute>
							<Application />
						</AdminPrivateRoute>
					}
				/>
			</Routes>
		</Flex>
	);
};

export default Admin;

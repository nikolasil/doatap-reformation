import React, { useEffect, useState } from 'react';
import { Flex, Table, Thead, Td, Tfoot, Tr, Th, Tbody } from '@chakra-ui/react';
import Breadcrumb from '../../ui/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import Title from '../../ui/Title';
import { useSelector, useDispatch } from 'react-redux';
import { getAllApplications } from '../../../actions/admin/admin';
import AdminNavbar from '../../ui/AdminNavbar';
import Application from '../../sections/Admin/Applications/Application';

const Applications = () => {
	const dispatch = useDispatch();
	const { applications } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(getAllApplications());
	}, []);

	const rowProps = {
		_hover: {
			cursor: 'pointer',
			bgColor: 'gray.200',
		},
	};
	const navigate = useNavigate();
	return (
		<Flex flexDir={'column'} h={'100%'}>
			<AdminNavbar />
			<Title title={'Αιτήσεις'} />
			<Flex bg={'#e9edf0'} py={'5vh'} flex={1}>
				<Flex bg={'gray.50'} w={'100%'} rounded={'md'} flexDir={'column'} boxShadow={'lg'}>
					<Flex alignItems={'center'} justifyContent={'space-between'} m={'30px'}>
						<Table variant='simple'>
							<Thead>
								<Tr>
									<Th>Αριθμος Αιτησης</Th>
									<Th>Ημερομηνια Δημιουργιας</Th>
									<Th>Ημερομηνια Τελευταίας Επεξεργασίας</Th>
									<Th>Ονομα Χρηστη</Th>
									<Th>Κατασταση</Th>
									<Th isNumeric>ACTION</Th>
								</Tr>
							</Thead>
							<Tbody>
								{applications.isFetched &&
									applications.applications.map((application) => (
										<Application application={application} key={application._id} />
									))}
							</Tbody>
						</Table>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Applications;

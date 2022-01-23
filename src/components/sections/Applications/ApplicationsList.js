import React, { useEffect, Fragment } from 'react';
import { Flex, Text, Heading, Spinner, Divider, Table, Thead, Tr, Tbody, Td, Th } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllApplications } from '../../../actions/applications/applications';
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ApplicationsList = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { applications } = useSelector((state) => state.applications);
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!applications.isLoading && user) {
			dispatch(getAllApplications());
		}
	}, []);

	const renderStatus = (status) => {
		switch (status) {
			case 1:
				return (
					<Text fontWeight={'500'} color={'blue'} p={'5px'} rounded={'md'}>
						Υποβλήθηκε
					</Text>
				);
			case 2:
				return (
					<Text fontWeight={'500'} color={'green'} p={'5px'} rounded={'md'}>
						Εγκρίθηκε
					</Text>
				);
			case 3:
				return (
					<Text fontWeight={'500'} color={'red'} p={'5px'} rounded={'md'}>
						Απορρίφθηκε
					</Text>
				);
			case 4:
				return (
					<Text fontWeight={'500'} color={'orange'} p={'5px'} rounded={'md'}>
						Αναμονή για ενημέρωση
					</Text>
				);
			default:
				return (
					<Text fontWeight={'500'} color={'gray'} p={'5px'} rounded={'md'}>
						Δεν έχει υποβληθεί
					</Text>
				);
		}
	};

	return !applications.isLoading ? (
		<Flex flexDir={'column'}>
			{applications.applications ? (
				<Flex flexDir={'column'} my={'50px'} overflow={'scroll'} h={'50vh'}>
					<Table variant={'simple'}>
						<Thead>
							<Tr>
								<Th>Αριθμος Αιτησης</Th>
								<Th>Ημερομηνια Δημιουργιας</Th>
								<Th>Ημερομηνια Τελευταίας Επεξεργασίας</Th>
								<Th>Κατασταση</Th>
							</Tr>
						</Thead>
						<Tbody>
							{applications.applications.map((application) => (
								<Tr
									cursor={'pointer'}
									onClick={() => navigate(`/applications/${application._id}`)}
									_hover={{
										bgColor: 'gray.100',
									}}>
									<Td>
										<Flex gap={2}>
											<FaPencilAlt
												size={'1em'}
												cursor={'pointer'}
												onClick={() => navigate(`/applications/${application._id}`)}
											/>
											<Text> {application._id}</Text>
										</Flex>
									</Td>
									<Td>{new Date(application.createdAt).toDateString()}</Td>
									<Td>{new Date(application.updatedAt).toDateString()}</Td>
									<Td>{renderStatus(application.status)}</Td>
									<Divider />
								</Tr>
							))}
						</Tbody>
					</Table>
				</Flex>
			) : (
				<Flex flexDir={'column'} my={'50px'} justifyContent={'center'} alignItems={'center'}>
					<Text fontSize={'18px'}>Δεν έχετε αιτήσεις</Text>
				</Flex>
			)}
		</Flex>
	) : (
		<Flex flexDir={'column'} justifyContent={'center'} my={'30px'} alignItems={'center'}>
			<Spinner size={'lg'} />
			<Text mt={'20px'}>Loading Applications...</Text>
		</Flex>
	);
};

export default ApplicationsList;

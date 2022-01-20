import React, { useEffect } from 'react';
import { Flex, Text, Heading, Spinner, Divider } from '@chakra-ui/react';
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

	return !applications.isLoading ? (
		<Flex flexDir={'column'}>
			{applications.applications ? (
				<Flex flexDir={'column'} my={'50px'}>
					{applications.applications.map((application) => (
						<Flex flexDir={'column'} my={'10px'} key={application._id}>
							<Flex justifyContent={'space-between'}>
								<Flex gap={4} alignItems={'center'}>
									<FaPencilAlt
										size={'1em'}
										cursor={'pointer'}
										onClick={() => navigate(`/applications/${application._id}`)}
									/>
									{new Date(application.createdAt).toLocaleDateString()}
								</Flex>

								<Text fontSize={'18px'}>Αίτηση #{application.identifier}</Text>
							</Flex>
							<Divider />
						</Flex>
					))}
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

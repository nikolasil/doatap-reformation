import React, { useEffect } from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplication } from '../../../actions/applications/applications';
import { useNavigate, useParams } from 'react-router-dom';
import NewApplication from './NewApplication';

const Application = () => {
	const toast = useToast();
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { application } = useSelector((state) => state.applications);
	const { user } = useSelector((state) => state.auth);
	useEffect(() => {
		dispatch(getApplication(params.id));
	}, []);

	useEffect(() => {
		if (!application.isLoading && user) {
			console.log(application.isLoading, user);
			if (!application.isFetched) {
				toast({
					title: 'Δεν βρέθηκε η αίτηση',
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
				return navigate('/account');
			}
		}
	}, [application]);

	return (
		<div>
			{!application.isLoading && application.isFetched && (
				<NewApplication application={application.application} />
			)}
		</div>
	);
};

export default Application;

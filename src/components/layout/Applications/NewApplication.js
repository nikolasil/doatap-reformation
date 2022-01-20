import React, { useState, useEffect } from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import StatusBar from '../../sections/Applications/StatusBar';
import Title from '../../ui/Title';
import { useSelector, useDispatch } from 'react-redux';
import { submitNewApplication } from '../../../actions/applications/applications';
import { useParams, useNavigate } from 'react-router-dom';

import PersonalData from '../../sections/Applications/PersonalData';
import DegreeTitle from '../../sections/Applications/DegreeTitle';
import DegreeMatching from '../../sections/Applications/DegreeMatching';
import Attached from '../../sections/Applications/Attached';
import { getApplication } from '../../../actions/applications/applications';

const NewApplication = ({ exists = false }) => {
	const toast = useToast();
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();

	const { application } = useSelector((state) => state.applications);
	const [activeStatus, setActiveStatus] = useState('personal-data');
	const [formData, setFormData] = useState({});
	const [fetched, setFetched] = useState(false);
	const [lastActiveStatus, setLastActiveStatus] = useState();
	const [validated, setValidated] = useState({
		personalData: false,
		degreeTitle: false,
		degreeMatching: false,
		attached: false,
	});

	useEffect(() => {
		if (exists) {
			dispatch(getApplication(params.id));
		}
	}, []);

	useEffect(() => {
		if (!application.isLoading) {
			if (application.error) {
				toast({
					title: 'Δεν βρέθηκε η αίτηση',
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
				return navigate('/account');
			} else if (application.isFetched) {
				setFormData({ ...formData, ...application.application });
				setFetched(true);
			}
		}
	}, [application]);

	useEffect(() => {
		if (!exists && !application.isLoading && application.isUploaded) {
			navigate(`/applications/${application.newId}`);
		}
	}, [application]);

	const handleSave = () => {
		setLastActiveStatus(activeStatus);
		console.log('save', activeStatus);

		dispatch(submitNewApplication(formData));
	};
	const handleSubmit = () => {
		setLastActiveStatus(activeStatus);
		dispatch(submitNewApplication({ ...formData, status: 1 }));
	};

	const formProps = {
		formData: formData,
		handleFormData: (values) => {
			console.log('values', values);
			const updatedFormData = { ...formData, ...values };

			setFormData((prev) => ({ ...prev, ...values }));
		},
		validated,
		setValidated: (subValidation) => {
			setValidated((prev) => ({ ...prev, ...subValidation }));
		},
		onSubmit: handleSubmit,
		saveForm: handleSave,
	};
	const renderFormStatus = () => {
		let active;
		if (lastActiveStatus) {
			active = lastActiveStatus;
			setLastActiveStatus(null);
		} else {
			active = activeStatus;
		}

		switch (active) {
			case 'personal-data':
				return <PersonalData {...formProps} />;
			case 'degree-title':
				return <DegreeTitle {...formProps} />;
			case 'degree-matching':
				return <DegreeMatching {...formProps} />;
		}
	};

	return (
		<Flex flexDir={'column'} bgColor={'gray.50'} flex={1}>
			<Title title={'Νέα Αίτηση'} />
			<StatusBar active={activeStatus} onSelect={(status) => setActiveStatus(status)} />
			{exists ? (
				fetched && (
					<div>
						<PersonalData {...formProps} status={activeStatus} />
						<DegreeTitle {...formProps} status={activeStatus} />
						<DegreeMatching {...formProps} status={activeStatus} />
						<Attached {...formProps} status={activeStatus} />
					</div>
				)
			) : (
				<div>
					<PersonalData {...formProps} status={activeStatus} />
					<DegreeTitle {...formProps} status={activeStatus} />
					<DegreeMatching {...formProps} status={activeStatus} />
					<Attached {...formProps} status={activeStatus} />
				</div>
			)}
		</Flex>
	);
};

export default NewApplication;

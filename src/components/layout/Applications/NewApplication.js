import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import StatusBar from '../../sections/Applications/StatusBar';
import Title from '../../ui/Title';
import { useSelector, useDispatch } from 'react-redux';
import { submitNewApplication } from '../../../actions/applications/applications';

import PersonalData from '../../sections/Applications/PersonalData';
import DegreeTitle from '../../sections/Applications/DegreeTitle';
import DegreeMatching from '../../sections/Applications/DegreeMatching';
import Attached from '../../sections/Applications/Attached';

const NewApplication = ({ application = {} }) => {
	const dispatch = useDispatch();
	const [activeStatus, setActiveStatus] = useState('personal-data');
	const [formData, setFormData] = useState({ ...application });

	const handleSubmit = () => {
		console.log(formData);
		dispatch(submitNewApplication(formData));
	};

	const formProps = {
		formData: formData,
		handleFormData: (values) => {
			console.log({
				...formData,
				...values,
			});
			setFormData({
				...formData,
				...values,
			});
		},
		onSubmit: handleSubmit,
	};
	const renderFormStatus = () => {
		switch (activeStatus) {
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
			{renderFormStatus()}
			<Attached {...formProps} status={activeStatus} />
		</Flex>
	);
};

export default NewApplication;

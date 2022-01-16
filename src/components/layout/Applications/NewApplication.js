import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import StatusBar from '../../sections/Applications/StatusBar';
import Title from '../../ui/Title';

import PersonalData from '../../sections/Applications/PersonalData';
import DegreeTitle from '../../sections/Applications/DegreeTitle';
import TitleCons from '../../sections/Applications/TitleCons';
import Attached from '../../sections/Applications/Attached';

const NewApplication = () => {
	const [activeStatus, setActiveStatus] = useState('personal-data');

	const renderFormStatus = () => {
		switch (activeStatus) {
			case 'personal-data':
				return <PersonalData />;
			case 'degree-title':
				return <DegreeTitle />;
			case 'title-cons':
				return <TitleCons />;
			case 'attached':
				return <Attached />;
			default:
				return <PersonalData />;
		}
	};

	return (
		<Flex flexDir={'column'} bgColor={'gray.50'} h={'79vh'}>
			<Title title={'Νέα Αίτηση'} />
			<StatusBar active={activeStatus} onSelect={(status) => setActiveStatus(status)} />
			{renderFormStatus()}
		</Flex>
	);
};

export default NewApplication;

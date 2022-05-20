import React from 'react';
import { Flex, Heading, Divider } from '@chakra-ui/react';
import Breadcrumb from './Breadcrumb';

const Title = ({ title }) => {
	return (
		<Flex
			maxH={'10vh'}
			bg={'blue.700'}
			flexDir={'column'}
			color={'white'}
			alignItems={'center'}
			pb={'20px'}>
			<Divider />
			<Flex w={'100%'}>
				<Breadcrumb />
			</Flex>
			<Flex alignItems={'center'}>
				<Heading fontSize={'28px'}>{title}</Heading>
			</Flex>
		</Flex>
	);
};

export default Title;

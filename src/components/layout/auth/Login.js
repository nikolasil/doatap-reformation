import React from 'react';
import { Flex, Button, Text, Input, Heading, Divider, Center } from '@chakra-ui/react';
import Breadcrumb from '../../ui/Breadcrumb';
const Login = () => {
	return (
		<Flex flexDir={'column'} h={'83vh'}>
			<Flex h={'10vh'} bg={'blue.900'} flexDir={'column'} color={'white'} alignItems={'center'}>
				<Flex w={'100%'}>
					<Breadcrumb />
				</Flex>
				<Flex alignItems={'center'}>
					<Heading fontSize={'30px'}>Σύνδεση</Heading>
				</Flex>
			</Flex>
			<Divider />
			<Flex
				bgGradient={'linear-gradient(to left top, #2b6cb0, #285e9a, #245085, #1f4371, #1a365d)'}
				h={'73vh'}
				flexDir={'column'}
				bgColor={'blue.700'}
				justifyContent={'center'}
				alignItems={'center'}>
				<Flex bgColor={'white'} color={'blue.800'} flexDir={'column'} w={'40vw'}></Flex>
			</Flex>
		</Flex>
	);
};

export default Login;

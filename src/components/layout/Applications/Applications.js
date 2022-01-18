import React from 'react';
import { Flex, Text, Button, Heading } from '@chakra-ui/react';
import Breadcrumb from '../../ui/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import Title from '../../ui/Title';

const Applications = () => {
	const navigate = useNavigate();
	return (
		<Flex flexDir={'column'} h={'100%'}>
			<Title title={'Αιτήσεις'} />
			<Flex bg={'#e9edf0'} px={'18vw'} py={'5vh'} flex={1}>
				<Flex bg={'gray.50'} w={'100%'} rounded={'md'} flexDir={'column'} boxShadow={'lg'}>
					<Flex alignItems={'center'} justifyContent={'space-between'} m={'30px'}>
						<Button
							colorScheme={'blue'}
							onClick={() => navigate('/applications/new-application')}>
							<Text>Νέα Αίτηση</Text>
						</Button>
						<Button colorScheme={'blue'}>
							<Text>Κατάσταση Τελευταίας Αίτησης</Text>
						</Button>
					</Flex>
					<Flex
						flexDir={'column'}
						alignItems={'center'}
						justifyContent={'center'}
						w={'100%'}
						p={'20px'}>
						<Flex
							bgColor={'white'}
							rounded={'md'}
							w={'100%'}
							p={'10px'}
							justifyContent={'space-between'}
							alignItems={'center'}>
							<Text>Λεπτομέρειες για την υποβολή μίας αίτησης</Text>
							<Button variant={'outline'} rounded={'md'}>
								Οδηγίες Υποβολής
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Applications;

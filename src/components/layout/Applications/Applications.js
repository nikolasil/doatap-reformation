import React from 'react';
import { Flex, Text, Button, Heading } from '@chakra-ui/react';
import Breadcrumb from '../../ui/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import Title from '../../ui/Title';
const Applications = () => {
	const navigate = useNavigate();
	return (
		<Flex flexDir={'column'}>
			<Title title={'Αιτήσεις'} />
			<Flex bg={'white'} px={'18vw'} py={'5vh'} h={'73vh'}>
				<Flex bg={'gray.100'} w={'100%'} rounded={'md'} flexDir={'column'}>
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

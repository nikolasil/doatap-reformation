import React from 'react';
import { Flex, Text, Button, Heading } from '@chakra-ui/react';
import Breadcrumb from '../../ui/Breadcrumb';
const Applications = () => {
	return (
		<Flex flexDir={'column'}>
			<Flex h={'10vh'} bg={'gray.800'} flexDir={'column'} color={'white'} alignItems={'center'}>
				<Flex w={'100%'}>
					<Breadcrumb />
				</Flex>
				<Flex alignItems={'center'}>
					<Heading fontSize={'30px'}>Αιτήσεις</Heading>
				</Flex>
			</Flex>
			<Flex bg={'white'} px={'18vw'} py={'5vh'} h={'73vh'}>
				<Flex bg={'gray.500'} w={'100%'} rounded={'md'} flexDir={'column'}>
					<Flex alignItems={'center'} justifyContent={'space-between'} m={'30px'}>
						<Button colorScheme={'green'}>
							<Text>Νέα Αίτηση</Text>
						</Button>
						<Button colorScheme={'green'}>
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

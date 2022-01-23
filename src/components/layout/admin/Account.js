import React, { useEffect } from 'react';
import { Flex, Text, Heading, Grid, GridItem } from '@chakra-ui/react';
import Title from '../../ui/Title';
import { useSelector, useDispatch } from 'react-redux';
import ApplicationsList from '../../sections/Applications/ApplicationsList';
import AdminNavbar from '../../ui/AdminNavbar';
const boxProps = {
	flexDir: 'column',
	h: '100%',
	bgColor: 'white',
	// alignItems: 'center',
	boxShadow: 'md',
	rounded: 'md',
	p: '30px',
	transition: 'all .4s ease-in-out',
};

const Account = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.admin);

	return (
		<Flex flexDir={'column'} bgColor={'gray.50'} h={'100%'}>
			<AdminNavbar />
			<Title title={'Ο Λογαριασμός μου'}></Title>
			{user && (
				<Flex {...boxProps} alignItems={'center'} mx={'20vw'} my={'5vh'}>
					<Heading fontSize={'2xl'}>Στοιχεία Λογαριασμού</Heading>
					<Flex
						flexDir={'column'}
						w={'100%'}
						h={'100%'}
						px={'40px'}
						alignItems={'center'}
						textAlign={'center'}
						mt={'80px'}>
						<Flex flexDir={'column'} mb={'10px'} w={'100%'}>
							<Text fontSize={'18px'} fontWeight={'500'} color={'gray.500'}>
								Όνομα
							</Text>
							<Text
								transition={'all .2s ease-in-out'}
								fontSize={'24px'}
								fontWeight={'500'}
								py={'5px'}
								px={'15px'}
								_hover={{
									color: 'blue.500',
								}}>
								{user.firstName}
							</Text>
						</Flex>
						<Flex flexDir={'column'} my={'10px'} w={'100%'}>
							<Text fontSize={'18px'} fontWeight={'500'} color={'gray.500'}>
								Επώνυμο
							</Text>
							<Text
								fontSize={'24px'}
								fontWeight={'500'}
								py={'5px'}
								px={'15px'}
								_hover={{
									color: 'blue.500',
								}}>
								{user.lastName}
							</Text>
						</Flex>
						<Flex flexDir={'column'} my={'10px'} w={'100%'}>
							<Text fontSize={'18px'} fontWeight={'500'} color={'gray.500'}>
								Email
							</Text>
							<Text
								fontSize={'24px'}
								fontWeight={'500'}
								py={'5px'}
								px={'15px'}
								_hover={{
									color: 'blue.500',
								}}>
								{user.email}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			)}
		</Flex>
	);
};

export default Account;

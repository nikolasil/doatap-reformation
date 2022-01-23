import React, { useEffect } from 'react';
import { Flex, Text, Heading, Grid, GridItem } from '@chakra-ui/react';
import Title from '../../ui/Title';
import { useSelector, useDispatch } from 'react-redux';
import ApplicationsList from '../../sections/Applications/ApplicationsList';

const boxProps = {
	flexDir: 'column',
	h: '100%',
	w: '100%',
	bgColor: 'white',
	// alignItems: 'center',
	boxShadow: 'md',
	rounded: 'md',
	p: '30px',
	transition: 'all .4s ease-in-out',
};

const Account = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	return (
		<Flex flexDir={'column'} bgColor={'gray.50'} h={'100%'}>
			<Title title={'Ο Λογαριασμός μου'}></Title>
			<Grid templateColumns={'repeat(10,1fr)'} gap={6} my={'5vh'} mx={'2vw'}>
				<GridItem colSpan={7}>
					<Flex {...boxProps}>
						<Heading fontSize={'2xl'}>Αιτήσεις</Heading>
						<ApplicationsList />
					</Flex>
				</GridItem>
				<GridItem colSpan={3}>
					{user && (
						<Flex {...boxProps} w={'100%'}>
							<Heading fontSize={'2xl'}>Στοιχεία Λογαριασμού</Heading>
							<Flex
								flexDir={'column'}
								w={'100%'}
								h={'100%'}
								px={'40px'}
								alignItems={'center'}
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
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default Account;

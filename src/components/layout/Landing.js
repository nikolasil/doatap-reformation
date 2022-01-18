import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
	const navigate = useNavigate();
	const newApplicationButtonProps = {
		_hover: {
			cursor: 'pointer',
		},
		onClick: () => {
			navigate('/applications/new-application');
		},
	};
	return (
		<Flex
			flexDir={'column'}
			h={'100%'}
			// filter={'blur(5px)'}
			bgImage={'/images/degree.jpg'}
			bgRepeat={'no-repeat'}
			bgSize={'cover'}
			justifyContent={'space-evenly'}
			alignItems={'center'}>
			<Heading
				fontSize={'42px'}
				color={'white'}
				w={'70vw'}
				textAlign={'center'}
				mt={'-10%'}
				lineHeight={'1.8'}
				fontWeight={'900'}>
				Από τις σπουδές σας στο εξωτερικό στη συνέχιση των σπουδών σας και στην επαγγελματική σας
				εξέλιξη στην Ελλάδα{' '}
			</Heading>

			<Button mt={'20px'} borderRadius={'16px'} w={'200px'} h={'70px'} {...newApplicationButtonProps}>
				<Text fontSize={'24px'} fontWeight={'500'}>
					Νέα Αίτηση
				</Text>
			</Button>
		</Flex>
	);
};

export default Landing;

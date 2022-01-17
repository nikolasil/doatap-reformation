import React from 'react';
import { Flex, Text, Image, Button } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const goToLogin = () => {
		navigate('/login');
	};

	return (
		<Flex bg={'gray.100'} h={'7vh'} alignItems={'center'} p={'25px'} justifyContent={'space-between'}>
			<Link to={'/'}>
				<Image src={'/vectors/logo.png'} w={'172px'} h={'52px'} />
			</Link>
			<SearchBar />
			<Flex>
				<Button bgColor={'blue.700'} _hover={{ bgColor: 'blue.900' }} color={'white'}>
					Λογαριασμός
				</Button>
				<Button
					ml={'10px'}
					_hover={{ bgColor: 'gray.500' }}
					color={'white'}
					variant={'outline'}
					color={'#000'}
					borderColor={'#000'}
					onClick={goToLogin}>
					Σύνδεση
				</Button>
			</Flex>
		</Flex>
	);
};

export default Header;

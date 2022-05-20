import React from 'react';
import { Flex, Text, Image, Button } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/auth/auth';
const Header = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const goToLogin = () => {
		navigate('/login');
	};
	const goToRegister = () => {
		navigate('/register');
	};

	const logout = () => {
		dispatch(logoutUser());
		navigate('/');
	};
	return (
		<Flex bg={'gray.100'} alignItems={'center'} p={'25px'} maxH={'8vh'} justifyContent={'space-between'}>
			<Link to={'/'}>
				<Image src={'/vectors/logo.png'} w={'172px'} h={'52px'} />
			</Link>
			<SearchBar />
			<Flex>
				{!auth.isAuthenticated ? (
					<div>
						{' '}
						<Button
							bgColor={'blue.700'}
							_hover={{ bgColor: 'blue.900' }}
							onClick={goToRegister}
							color={'white'}>
							Εγγραφή
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
						</Button>{' '}
					</div>
				) : (
					<div>
						<Button
							bgColor={'blue.700'}
							_hover={{ bgColor: 'blue.900' }}
							onClick={() => navigate('/account')}
							color={'white'}>
							Λογαριασμός
						</Button>
						<Button
							ml={'10px'}
							_hover={{ bgColor: 'gray.500' }}
							color={'white'}
							variant={'outline'}
							color={'#000'}
							borderColor={'#000'}
							onClick={logout}>
							Αποσύνδεση
						</Button>
					</div>
				)}
			</Flex>
		</Flex>
	);
};

export default Header;

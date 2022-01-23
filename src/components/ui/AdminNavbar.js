import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { AiOutlineInfoCircle, AiFillQuestionCircle } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FiLink } from 'react-icons/fi';
import { Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { RiAdminFill } from 'react-icons/ri';
import { GoPencil } from 'react-icons/go';
import { AiOutlineHome } from 'react-icons/ai';

const linkProps = {
	_hover: {
		textDecoration: 'none',
		borderBottom: '2px solid white',
	},
};
const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Flex
			minH={'7vh'}
			maxH={'7vh'}
			bgColor={'blue.800'}
			color={'white'}
			alignItems={'center'}
			px={'20px'}
			py={'20px'}
			fontSize={'18px'}
			transition={'all 1s ease-in-out'}
			justifyContent={'space-evenly'}>
			<Flex cursor={'pointer'} onClick={() => navigate('/')} style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<AiOutlineHome size={'0.8em'} />
					<Text ml={'5px'}>Αρχική</Text>
				</Flex>
			</Flex>
			<Flex
				cursor={'pointer'}
				onClick={() => navigate('/admin/account')}
				style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<RiAdminFill size={'0.8em'} />
					<Text ml={'5px'}>Λογαριασμός</Text>
				</Flex>
			</Flex>
			<Flex
				cursor={'pointer'}
				onClick={() => navigate('/admin/applications')}
				style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<GoPencil size={'0.8em'} />
					<Text ml={'5px'}>Αιτήσεις</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;

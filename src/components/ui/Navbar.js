import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { AiOutlineInfoCircle, AiFillQuestionCircle } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FiLink } from 'react-icons/fi';
import { Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

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
			<Flex
				cursor={'pointer'}
				onClick={() => navigate('/applications')}
				style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<FaPencilAlt size={'0.8em'} />
					<Text ml={'5px'}>Αιτήσεις</Text>
				</Flex>
			</Flex>
			<Flex
				cursor={'pointer'}
				onClick={() => navigate('/announcements')}
				style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<HiSpeakerphone size={'0.8em'} />
					<Text ml={'5px'}>Ανακοινώσεις</Text>
				</Flex>
			</Flex>
			<Flex cursor={'pointer'} onClick={() => navigate('/info')} style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<AiOutlineInfoCircle size={'0.8em'} />
					<Text ml={'5px'}>Πληροφορίες</Text>
				</Flex>
			</Flex>
			<Flex cursor={'pointer'} onClick={() => navigate('/faq')} style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<AiFillQuestionCircle size={'0.8em'} />
					<Text ml={'5px'}>Συχνές Ερωτήσεις</Text>
				</Flex>
			</Flex>
			<Flex cursor={'pointer'} onClick={() => navigate('/contact')} style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<RiContactsFill size={'0.8em'} />
					<Text ml={'5px'}>Επικοινωνία</Text>
				</Flex>
			</Flex>
			<Flex
				cursor={'pointer'}
				onClick={() => navigate('/important-links')}
				style={{ textDecoration: 'none' }}>
				<Flex alignItems={'center'} {...linkProps}>
					<FiLink size={'0.8em'} />
					<Text ml={'5px'}>Σημαντικοί Σύνδεσμοι</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;

import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { AiOutlineInfoCircle, AiFillQuestionCircle } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FiLink } from 'react-icons/fi';

const linkProps = {
	_hover: {
		textDecoration: 'none',
		borderBottom: '2px solid white',
	},
};
const Navbar = () => {
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
			<Link href={'/applications'} {...linkProps}>
				<Flex alignItems={'center'}>
					<FaPencilAlt size={'0.8em'} />
					<Text ml={'5px'}>Αιτήσεις</Text>
				</Flex>
			</Link>
			<Link href={'/announcements'} {...linkProps}>
				<Flex alignItems={'center'}>
					<HiSpeakerphone size={'0.8em'} />
					<Text ml={'5px'}>Ανακοινώσεις</Text>
				</Flex>
			</Link>
			<Link href={'/info'} {...linkProps}>
				<Flex alignItems={'center'}>
					<AiOutlineInfoCircle size={'0.8em'} />
					<Text ml={'5px'}>Πληροφορίες</Text>
				</Flex>
			</Link>
			<Link href={'/faq'} {...linkProps}>
				<Flex alignItems={'center'}>
					<AiFillQuestionCircle size={'0.8em'} />
					<Text ml={'5px'}>Συχνές Ερωτήσεις</Text>
				</Flex>
			</Link>
			<Link href={'/contact'} {...linkProps}>
				<Flex alignItems={'center'}>
					<RiContactsFill size={'0.8em'} />
					<Text ml={'5px'}>Επικοινωνία</Text>
				</Flex>
			</Link>
			<Link href={'/important-links'} {...linkProps}>
				<Flex alignItems={'center'}>
					<FiLink size={'0.8em'} />
					<Text ml={'5px'}>Σημαντικοί Σύνδεσμοι</Text>
				</Flex>
			</Link>
		</Flex>
	);
};

export default Navbar;

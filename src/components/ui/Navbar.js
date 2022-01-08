import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Flex
			h={'7vh'}
			bgColor={'blue.800'}
			color={'white'}
			alignItems={'center'}
			px={'20px'}
			fontSize={'18px'}
			justifyContent={'space-evenly'}>
			<Link to={'/applications'}>
				<Text>Αιτήσεις</Text>
			</Link>
			<Link to={'/announcements'}>
				<Text>Ανακοινώσεις</Text>
			</Link>
			<Link to={'/info'}>
				<Text>Πληροφορίες</Text>
			</Link>
			<Link to={'/faq'}>
				<Text>Συχνές Ερωτήσεις</Text>
			</Link>
			<Link to={'/contact'}>
				<Text>Επικοινωνία</Text>
			</Link>
			<Link to={'/important-links'}>
				<Text>Σημαντικοί Σύνδεσμοι</Text>
			</Link>
		</Flex>
	);
};

export default Navbar;

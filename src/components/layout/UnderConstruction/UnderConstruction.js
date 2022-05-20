import React from 'react';
import { Flex, Text, Heading, Image, Tag, TagLeftIcon } from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const UnderConstruction = () => {
	const navigate = useNavigate();
	return (
		<Flex justifyContent={'center'} alignItems={'center'} h={'100%'} bgRepeat={'no-repeat'}>
			<Image src={'/vectors/under_construction.gif'} />
			<Flex flexDir={'column'} mt={'-30vh'} gap={5} alignItems={'center'}>
				<Heading color={'blue.800'} fontWeight={'600'}>
					Η σελίδα βρίσκεται υπό κατασκευή.
				</Heading>
				<Text fontSize={'24px'} color={'blue.500'}>
					Δοκιμάστε ξανά αργότερα.
				</Text>
				<Flex
					gap={2}
					border={'1px'}
					borderColor={'blue.500'}
					borderRadius={'8px'}
					color={'blue.500'}
					colorScheme='blue'
					p={'12px'}
					alignItems={'center'}
					transition={'all 0.2s ease-in-out'}
					cursor={'pointer'}
					onClick={() => navigate('/')}
					_hover={{
						bgColor: 'blue.800',
						color: '#fff',
					}}>
					<BsArrowLeft size={'1.5em'} fontWeight={'500'} />
					<Text fontSize={'18px'}>Επιστροφή στην αρχική σελίδα.</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default UnderConstruction;

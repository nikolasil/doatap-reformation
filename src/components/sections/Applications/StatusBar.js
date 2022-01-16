import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
const StatusBar = ({ active, onSelect }) => {
	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-evenly'}
			bg={'white'}
			rounded={'md'}
			w={'100%'}
			h={'80px'}>
			<Flex mx={'10px'} fontWeight={active === 'personal-data' ? '800' : '500'}>
				<Flex
					flexDir={'column'}
					alignItems={'center'}
					onClick={() => onSelect('personal-data')}
					cursor={'pointer'}>
					<Box
						borderRadius={'100px'}
						boxSize={'15px'}
						bg={active === 'personal-data' ? 'gray.800' : 'gray.500'}></Box>
					<Text mt={'5px'}>Προσωπικά Στοιχεία</Text>
				</Flex>
			</Flex>
			<Flex mx={'10px'} fontWeight={active === 'degree-title' ? '800' : '500'}>
				<Flex
					flexDir={'column'}
					alignItems={'center'}
					onClick={() => onSelect('degree-title')}
					cursor={'pointer'}>
					<Box
						borderRadius={'100px'}
						boxSize={'15px'}
						bg={active === 'degree-title' ? 'gray.800' : 'gray.500'}></Box>
					<Text mt={'5px'}>Τίτλος Σπουδών</Text>
				</Flex>
			</Flex>
			<Flex mx={'10px'} fontWeight={active === 'title-cons' ? '800' : '500'}>
				<Flex
					flexDir={'column'}
					alignItems={'center'}
					onClick={() => onSelect('title-cons')}
					cursor={'pointer'}>
					<Box
						borderRadius={'100px'}
						boxSize={'15px'}
						bg={active === 'title-cons' ? 'gray.800' : 'gray.500'}></Box>
					<Text mt={'5px'}>Συνεκτίμηση Τίτλου</Text>
				</Flex>
			</Flex>
			<Flex mx={'10px'} fontWeight={active === 'attached' ? '800' : '500'}>
				<Flex
					flexDir={'column'}
					alignItems={'center'}
					onClick={() => onSelect('attached')}
					cursor={'pointer'}>
					<Box
						borderRadius={'100px'}
						boxSize={'15px'}
						bg={active === 'attached' ? 'gray.800' : 'gray.500'}></Box>
					<Text mt={'5px'}>Επισυναπτόμενα</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default StatusBar;

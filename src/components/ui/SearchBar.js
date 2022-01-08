import React from 'react';
import { Flex, Text, Input } from '@chakra-ui/react';

const SearchBar = () => {
	return (
		<Flex>
			<Input
				variant={'outline'}
				borderColor={'gray.200'}
				w={'300px'}
				placeholder='Search'
				color={'black'}
				bgColor={'gray.200'}
			/>
		</Flex>
	);
};

export default SearchBar;

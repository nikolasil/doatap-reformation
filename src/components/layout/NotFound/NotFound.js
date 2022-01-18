import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
	const navigate = useNavigate();
	return (
		<Box textAlign='center' py={10} px={6}>
			<Heading
				display='inline-block'
				as='h2'
				size='2xl'
				bgGradient='linear(to-r, blue.400, blue.600)'
				backgroundClip='text'>
				404
			</Heading>
			<Text fontSize='18px' mt={3} mb={2}>
				Η σελίδα δεν βρέθηκε
			</Text>
			<Text color={'gray.500'} mb={6}>
				Η σελιδα που προσπαθείτε να δείτε δεν υπάρχει.
			</Text>

			<Button
				colorScheme='blue'
				bgGradient='linear(to-r, blue.400, blue.500, blue.600)'
				color='white'
				variant='solid'
				onClick={() => navigate('/')}>
				Επιστροφή στην αρχική σελίδα
			</Button>
		</Box>
	);
};

export default NotFound;

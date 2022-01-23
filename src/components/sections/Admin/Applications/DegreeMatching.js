import React, { useState } from 'react';
import {
	Flex,
	Text,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	FormHelperText,
	Divider,
	Select,
	RadioGroup,
	Button,
	Stack,
	Radio,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import countries from '../../../../data/form/countries.json';
import universities from '../../../../data/form/universities.json';
import 'animate.css';

const DegreeMatching = ({ status }) => {
	const [matchStudyCountry, setMatchStudyCountry] = useState('GR');

	return (
		<Flex
			flexDir={'column'}
			px={'50px'}
			bgColor={'#fcfcfc'}
			pb={'50px'}
			flex={1}
			className='animate__animated animate__fadeIn'
			display={status !== 'degree-matching' && 'none'}>
			<Divider h={'2px'} bgColor={'gray.300'} mb={'20px'} />
			{/* <Text fontSize={'18x'} fontWeight={'500'}>
							Συμπληρώστε τα στοιχεία του Τίτλου Σπουδών προς Αντιστοίχιση με κεφαλαίους
							χαρακτήρες
						</Text> */}
			<Flex gap={10}>
				<Flex w={'20%'}>
					<Field name='matchDegreeType'>
						{({ field, form }) => (
							<FormControl
								isInvalid={form.errors.matchDegreeType && form.touched.matchDegreeType}
								mt={'20px'}>
								<FormLabel htmlFor='matchDegreeType'>Τύπος Πανεπιστημίου Ισοτιμίας</FormLabel>
								<Input readOnly {...field} id='matchDegreeType' />

								<FormErrorMessage>{form.errors.matchDegreeType}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
				</Flex>
			</Flex>
			<Divider my={'10px'} h={'2px'} bgColor={'gray.300'} />
			<Text fontWeight={'500'} fontSize={'18px'}>
				Στοιχεία Τίτλου προς Αντιστοίχιση
			</Text>

			<Text my={'10px'} fontSize={'18px'} fontWeight={'500'}>
				Επιλέξτε Χώρα για να δείτε τα σχετικά Πανεπιστήμια
			</Text>
			<Flex w={'50%'}>
				<Field name={'matchStudyCountry'}>
					{({ field, form }) => (
						<FormControl
							isInvalid={form.errors.matchStudyCountry && form.touched.matchStudyCountry}
							mt={'20px'}>
							<FormLabel htmlFor='matchStudyCountry'>Χώρα Πανεπιστημίου</FormLabel>
							<Input readOnly {...field} id='matchStudyCountry' />
							<FormErrorMessage>{form.errors.matchStudyCountry}</FormErrorMessage>
						</FormControl>
					)}
				</Field>
			</Flex>
			<Flex w={'50%'}>
				<Field name={'matchStudyCountryUni'}>
					{({ field, form }) => (
						<FormControl
							isInvalid={form.errors.matchStudyCountryUni && form.touched.matchStudyCountryUni}
							mt={'20px'}>
							<FormLabel htmlFor='matchStudyCountryUni'>Πανεπιστήμιο Φοίτησης</FormLabel>
							<Input readOnly {...field} id='matchStudyCountryUni' />
							<FormErrorMessage>{form.errors.matchStudyCountryUni}</FormErrorMessage>
						</FormControl>
					)}
				</Field>
			</Flex>
			<Flex w={'50%'}>
				<Field name={'matchStudyTitle'}>
					{({ field, form }) => (
						<FormControl
							isInvalid={form.errors.matchStudyTitle && form.touched.matchStudyTitle}
							mt={'20px'}>
							<FormLabel htmlFor='matchStudyTitle'>Τίτλος Σπουδών</FormLabel>
							<Input
								readOnly
								{...field}
								id='matchStudyTitle'
								placeholder='Εισάγετε Τίτλο Σπουδών'
							/>
							<FormErrorMessage>{form.errors.matchStudyTitle}</FormErrorMessage>
						</FormControl>
					)}
				</Field>
			</Flex>
		</Flex>
	);
};

export default DegreeMatching;

import React from 'react';
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
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

const initialValues = {};
const handleValidation = (values) => {};

const PersonalData = () => {
	return (
		<Flex flexDir={'column'} px={'50px'} bgColor={'#fcfcfc'} h={'100%'}>
			<Divider h={'2px'} bgColor={'gray.300'} />
			<Formik
				initialValues={initialValues}
				validate={handleValidation}
				onSubmit={(values) => {
					console.log(values);
				}}>
				{(props) => (
					<Form>
						<Flex justifyContent={'space-evenly'} gap={10}>
							<Field name='firstName'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.firstName && form.touched.firstName}
										mt={'20px'}>
										<FormLabel htmlFor='firstName'>Όνομα</FormLabel>
										<Input {...field} type='text' id='firstName' placeholder='Όνομα' />
										<FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='lastName'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.lastName && form.touched.lastName}
										mt={'20px'}>
										<FormLabel htmlFor='lastName'>Επώνυμο</FormLabel>
										<Input {...field} type='text' id='lastName' placeholder='Επώνυμο' />
										<FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='fatherName'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.fatherName && form.touched.fatherName}
										mt={'20px'}>
										<FormLabel htmlFor='fatherName'>Πατρώνυμο</FormLabel>
										<Input
											{...field}
											type='text'
											id='fatherName'
											placeholder='Πατρώνυμο'
										/>
										<FormErrorMessage>{form.errors.fatherName}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='motherName'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.motherName && form.touched.motherName}
										mt={'20px'}>
										<FormLabel htmlFor='motherName'>Μητρώνυμο</FormLabel>
										<Input
											{...field}
											type='text'
											id='motherName'
											placeholder='Μητρώνυμο'
										/>
										<FormErrorMessage>{form.errors.motherName}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex>
							<Field name='gender'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.gender && form.touched.gender}
										mt={'20px'}
										w={'10%'}>
										<FormLabel htmlFor='gender'>Φύλο</FormLabel>
										<Select {...field} placeholder='Επιλέξτε'>
											<option value='option1'>Άντρας</option>
											<option value='option2'>Γυναίκα</option>
											<option value='option3'>Άλλο</option>
										</Select>
										<FormErrorMessage>{form.errors.gender}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
					</Form>
				)}
			</Formik>
		</Flex>
	);
};

export default PersonalData;

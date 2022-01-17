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
	Stack,
	Radio,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import countries from '../../../data/form/countries.json';
import universities from '../../../data/form/universities.json';

const DegreeTitle = () => {
	const [studyCountry, setStudyCountry] = useState('GR');
	const initialValues = {};
	const handleValidation = (values) => {};

	return (
		<Flex flexDir={'column'} px={'50px'} bgColor={'#fcfcfc'} h={'100%'} mb={'50px'}>
			<Divider h={'2px'} bgColor={'gray.300'} mb={'20px'} />
			<Formik
				initialValues={initialValues}
				validate={handleValidation}
				onSubmit={(values) => {
					console.log(values);
				}}>
				{(props) => (
					<Form>
						<Text fontSize={'18x'} fontWeight={'500'}>
							Συμπληρλωστε τα στοιχεία του Τίτλου Σπουδών προς αναγνώριση με κεφαλαίους
							χαρακτήρες
						</Text>
						<Flex gap={10}>
							<Flex w={'20%'}>
								<Field name='equivalent'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.equivalent && form.touched.equivalent}
											mt={'20px'}>
											<FormLabel htmlFor='equivalent'>Ισοτιμία / Αντιστοιχία</FormLabel>
											<Select
												{...field}
												id='equivalent'
												placeholder='Επιλέξτε Ισοτιμία / Αντιστοιχία'>
												<option value='Ισοτιμία & Αντιστοιχία'>
													Ισοτιμία και Αντιστοιχία Πτυχίου
												</option>
												<option value='Ισοτιμία'>Ισοτιμία Πτυχίου</option>
											</Select>
											<FormErrorMessage>{form.errors.equivalent}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</Flex>
							<Flex w={'20%'}>
								<Field name='equivalence_uni'>
									{({ field, form }) => (
										<FormControl
											isInvalid={
												form.errors.equivalence_type && form.touched.equivalence_type
											}
											mt={'20px'}>
											<FormLabel htmlFor='equivalence_type'>
												Τύπος Πανεπιστημίου Ισοτιμίας
											</FormLabel>
											<Select
												{...field}
												id='equivalence_type'
												placeholder='Επιλέξτε Ισοτιμία / Αντιστοιχία'>
												<option value='Πανεπιστήμιο/ΤΕΙ'>Πανεπιστήμιο ή ΤΕΙ</option>
												<option value='Πανεπιστήμιο'>Πανεπιστήμιο</option>
												<option value='ΤΕΙ'>ΤΕΙ</option>
											</Select>
											<FormErrorMessage>
												{form.errors.equivalence_type}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</Flex>
						</Flex>
						<Divider my={'10px'} h={'2px'} bgColor={'gray.300'} />
						<Text fontWeight={'500'} fontSize={'18px'}>
							Στοιχεία Τίτλου προς αναγνώριση
						</Text>
						<Flex w={'30%'}>
							<Field name={'study_type'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.study_type && form.touched.study_type}
										mt={'20px'}>
										<FormLabel htmlFor='study_type'>Τύπος Φοίτησης</FormLabel>
										<RadioGroup {...field}>
											<Stack direction='row'>
												<Radio value='Συμβατικός'>Συμβατικός</Radio>
												<Radio value='Εξ Αποστάσεως'>Εξ αποστάσεως</Radio>
												<Radio value='Τακτική'>Τακτική</Radio>
												<Radio value='Μερική'>Μερική</Radio>
											</Stack>
										</RadioGroup>
										<FormErrorMessage>{form.errors.study_type}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Text my={'10px'} fontSize={'18px'} fontWeight={'500'}>
							Επιλέξτε Χώρα για να δείτε τα σχετικά Πανεπιστήμια
						</Text>
						<Flex w={'50%'}>
							<Field name={'study_country'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.study_country && form.touched.study_country}
										mt={'20px'}>
										<FormLabel htmlFor='study_country'>Χώρα Φοίτησης</FormLabel>
										<Select
											{...field}
											id='study_country'
											value={studyCountry}
											onChange={(e) => setStudyCountry(e.target.value)}
											placeholder='Επιλέξτε Χώρα Σπουδών'>
											{countries.map((country, index) => (
												<option key={index} value={country.code}>
													{country.name}
												</option>
											))}
										</Select>
										<FormErrorMessage>{form.errors.study_country}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex w={'50%'}>
							<Field name={'study_country_uni'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.study_country_uni && form.touched.study_country_uni
										}
										mt={'20px'}>
										<FormLabel htmlFor='study_country_uni'>
											Πανεπιστήμιο Φοίτησης
										</FormLabel>
										<Select
											{...field}
											id='study_country_uni'
											placeholder='Επιλέξτε Πανεπιστήμιο Φοίτησης'>
											{universities
												.filter((uni) => uni.alpha_two_code === studyCountry)
												.map((uni, index) => (
													<option key={index} value={uni.name}>
														{uni.name}
													</option>
												))}
										</Select>
										<FormErrorMessage>{form.errors.study_country_uni}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex w={'50%'}>
							<Field name={'study_title'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.study_title && form.touched.study_title}
										mt={'20px'}>
										<FormLabel htmlFor='study_title'>Τίτλος Σπουδών</FormLabel>
										<Input
											{...field}
											id='study_title'
											placeholder='Εισάγετε Τίτλο Σπουδών'
										/>
										<FormErrorMessage>{form.errors.study_title}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex w={'40%'}>
							<Field name={'study_credits'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.study_credits && form.touched.study_credits}
										mt={'20px'}>
										<FormLabel htmlFor='study_credits'>
											Πιστωτικές Μονάδες (credits)
										</FormLabel>
										<Input
											{...field}
											id='study_credits'
											placeholder='Εισάγετε Πιστωτικές Μονάδες (credits)'
										/>
										<FormErrorMessage>{form.errors.study_credits}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex w={'50%'} gap={'4'}>
							<Field name={'study_start_date'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.study_start_date && form.touched.study_start_date
										}
										mt={'20px'}>
										<FormLabel htmlFor='study_start_date'>Ημερομηνία Εγγραφής</FormLabel>
										<Input
											{...field}
											type='date'
											id='study_start_date'
											placeholder='Εισάγετε Ημερομηνία Εγγραφής'
										/>
										<FormErrorMessage>{form.errors.study_start_date}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name={'study_end_date'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.study_end_date && form.touched.study_end_date}
										mt={'20px'}>
										<FormLabel htmlFor='study_end_date'>Ημερομηνία Αποφοίτησης</FormLabel>
										<Input
											{...field}
											type='date'
											id='study_end_date'
											placeholder='Εισάγετε Ημερομηνία Αποφοίτησης'
										/>
										<FormErrorMessage>{form.errors.study_end_date}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex w={'50%'}>
							<Field name={'study_duration'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.study_duration && form.touched.study_duration}
										mt={'20px'}>
										<FormLabel htmlFor='study_duration'>Διάρκεια Σπουδών</FormLabel>
										<Select
											{...field}
											id='study_duration'
											placeholder='Επιλέξτε Έτη Σπουδών'>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
											<option value='4'>4</option>
											<option value='5'>5</option>
											<option value='6'>6</option>
										</Select>
										<FormErrorMessage>{form.errors.study_duration}</FormErrorMessage>
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

export default DegreeTitle;

import React, { useState, useRef, useEffect } from 'react';
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
	Button,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import countries from '../../../data/form/countries.json';
import { useSelector } from 'react-redux';

const PersonalData = ({
	formData,
	handleFormData,
	onSubmit,
	submitType,
	saveForm,
	validated,
	setValidated,
	status,
}) => {
	const { application } = useSelector((state) => state.applications);

	const formInitialFields = {
		firstName: '',
		lastName: '',
		fatherName: '',
		motherName: '',
		gender: '',
		birthCountry: '',
		birthPlace: '',
		birthDate: '',
		residenceCountry: '',
		residenceAddress: '',
		postcode: '',
		residenceCity: '',
		residenceLocation: '',
		residenceTel: '',
		residenceMobile: '',
		email: '',
		afm: '',
		idType: '',
		idDate: '',
		idNumber: '',
		authority: '',
	};
	const initialValues = {
		...formInitialFields,
		...formData,
	};

	const formRef = useRef(null);
	const [birthCountry, setBirthCountry] = useState('GR');
	const [residenceCountry, setResidenceCountry] = useState('GR');
	const [idType, setIdType] = useState('Ταυτότητα');

	const handleValidation = (values) => {
		handleFormData(values);
		const errors = {};

		if (!values.firstName) {
			errors.firstName = 'Το όνομα είναι υποχρεωτικό';
		}
		if (!values.lastName) {
			errors.lastName = 'Το επώνυμο είναι υποχρεωτικό';
		}
		if (!values.fatherName) {
			errors.fatherName = 'Το πατρώνυμο είναι υποχρεωτικό';
		}
		// if (!values.motherName) {
		// 	errors.motherName = 'Το μητρώνυμο είναι υποχρεωτικό';
		// }
		// if (!values.birthCountry) {
		// 	errors.birthCountry = 'Η Χώρα Γέννησης είναι υποχρεωτική';
		// }
		// if (!values.birthPlace) {
		// 	errors.birthPlace = 'Η πόλη Γέννησης είναι υποχρεωτική';
		// }
		// if (!values.birthDate) {
		// 	errors.birthDate = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.residenceCountry) {
		// 	errors.residenceCountry = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.residenceAddress) {
		// 	errors.residenceAddress = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.postcode) {
		// 	errors.postcode = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.residenceCity) {
		// 	errors.residenceCity = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.residenceLocation) {
		// 	errors.residenceLocation = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.residenceTel) {
		// 	errors.residenceTel = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.residenceMobile) {
		// 	errors.residenceMobile = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.email) {
		// 	errors.email = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.afm) {
		// 	errors.afm = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!idType) {
		// 	console.log(values.idType, idType);
		// 	errors.idType = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.idDate) {
		// 	errors.idDate = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.idNumber) {
		// 	errors.idNumber = 'Το πεδίο είναι υποχρεωτικό';
		// }
		// if (!values.authority) {
		// 	errors.authority = 'Το πεδίο είναι υποχρεωτικό';
		// }
		if (Object.keys(errors).length === 0) {
			setValidated({
				personalData: true,
			});
		} else {
			setValidated({
				...validated,
				personalData: false,
			});
		}
		console.log(errors);
		return errors;
	};

	return (
		<Flex
			flexDir={'column'}
			px={'50px'}
			bgColor={'#fcfcfc'}
			flex={1}
			pb={'50px'}
			display={status !== 'personal-data' && 'none'}>
			<Divider h={'2px'} bgColor={'gray.300'} />
			<Formik
				innerRef={formRef}
				initialValues={initialValues}
				validate={handleValidation}
				validateOnMount
				onSubmit={(values) => {
					console.log(formRef.current);
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
						<Divider my={'10px'} h={'3px'} color={'gray.800'} />
						<Flex justifyContent={'space-evenly'} gap={10}>
							<Field name={'birthCountry'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.birthCountry && form.touched.birthCountry}
										mt={'20px'}>
										<FormLabel htmlFor='birthCountry'>Χώρα Γέννησης</FormLabel>
										<Select
											{...field}
											id='authority'
											placeholder='Επιλέξτε Χώρα Γέννησης'>
											{countries.map((country, index) => (
												<option key={index} value={country.code}>
													{country.name}
												</option>
											))}
										</Select>
										<FormErrorMessage>{form.errors.birthCountry}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='birthPlace'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.birthPlace && form.touched.birthPlace}
										mt={'20px'}>
										<FormLabel htmlFor='birthPlace'>Πόλη Γέννησης</FormLabel>
										<Input
											{...field}
											type='text'
											id='birthPlace'
											placeholder='Επιλέξτε Πόλη Γέννησης'
										/>
										<FormErrorMessage>{form.errors.birthPlace}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='birthDate'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.birthDate && form.touched.birthDate}
										mt={'20px'}>
										<FormLabel htmlFor='birthDate'>Ημερομηνία Γέννησης</FormLabel>
										<Input
											{...field}
											type='date'
											id='birthDate'
											placeholder='Επιλέξτε Ημερομηνία Γέννησης'
										/>
										<FormErrorMessage>{form.errors.birthDate}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Divider my={'10px'} h={'3px'} color={'gray.800'} />
						<Flex justifyContent={'space-evenly'} gap={10} w={'50%'}>
							<Field name='residenceCountry'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residenceCountry && form.touched.residenceCountry
										}
										mt={'20px'}>
										<FormLabel htmlFor='residenceCountry'>Χώρα Διαμονής</FormLabel>
										<Select
											{...field}
											id='birth_country'
											placeholder='Επιλέξτε Χώρα Διαμονής'>
											{countries.map((country, index) => (
												<option key={index} value={country.code}>
													{country.name}
												</option>
											))}
										</Select>
										<FormErrorMessage>{form.errors.residenceCountry}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='residenceAddress'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residenceAddress && form.touched.residenceAddress
										}
										mt={'20px'}>
										<FormLabel htmlFor='residenceAddress'>Διεύθυνση κατοικίας</FormLabel>
										<Input
											{...field}
											type='text'
											id='residenceAddress'
											placeholder='Επιλέξτε Διεύθυνση Κατοικίας'
										/>
										<FormErrorMessage>{form.errors.residenceAddress}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex w={'50%'} gap={10}>
							<Field name='postcode'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.postcode && form.touched.postcode}
										mt={'20px'}>
										<FormLabel htmlFor='postcode'>Τ.Κ.</FormLabel>
										<Input {...field} type='text' id='postcode' placeholder='Τ.Κ.' />
										<FormErrorMessage>{form.errors.postcode}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='residenceCity'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.residenceCity && form.touched.residenceCity}
										mt={'20px'}>
										<FormLabel htmlFor='residenceCity'>Πόλη</FormLabel>
										<Input {...field} type='text' id='residenceCity' placeholder='Πόλη' />
										<FormErrorMessage>{form.errors.residenceCity}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex justifyContent={'space-evenly'} gap={10}>
							<Field name='residenceLocation'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residenceLocation && form.touched.residenceLocation
										}
										mt={'20px'}>
										<FormLabel htmlFor='residenceLocation'>Περιοχή</FormLabel>
										<Input
											{...field}
											type='text'
											id='residenceLocation'
											placeholder='Περιοχή'
										/>
										<FormErrorMessage>{form.errors.residenceLocation}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='residenceTel'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.residenceTel && form.touched.residenceTel}
										mt={'20px'}>
										<FormLabel htmlFor='residenceTel'>Τηλέφωνο</FormLabel>
										<Input
											{...field}
											type='tel'
											id='residenceTel'
											placeholder='Τηλέφωνο'
										/>
										<FormErrorMessage>{form.errors.residenceTel}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='residenceMobile'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residenceMobile && form.touched.residenceMobile
										}
										mt={'20px'}>
										<FormLabel htmlFor='residenceMobile'>Κινητό</FormLabel>
										<Input
											{...field}
											type='tel'
											id='residenceMobile'
											placeholder='Κινητό'
										/>
										<FormErrorMessage>{form.errors.residenceMobile}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex gap={10} w={'50%'}>
							<Field name='email'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.email && form.touched.email}
										mt={'20px'}>
										<FormLabel htmlFor='email'>Email</FormLabel>
										<Input {...field} type='email' id='email' placeholder='Email' />
										<FormErrorMessage>{form.errors.email}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='afm'>
								{({ field, form }) => (
									<FormControl isInvalid={form.errors.afm && form.touched.afm} mt={'20px'}>
										<FormLabel htmlFor='afm'>ΑΦΜ</FormLabel>
										<Input {...field} type='text' id='afm' placeholder='ΑΦΜ' />
										<FormErrorMessage>{form.errors.afm}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex justifyContent={'space-evenly'} gap={10}>
							<Field name='idType'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.idType && form.touched.idType}
										mt={'20px'}>
										<FormLabel htmlFor='idType'>Τύπος Ταυτοποίησης</FormLabel>
										<Select
											{...field}
											id='idType'
											value={idType}
											onChange={(e) => setIdType(e.target.value)}>
											<option value='Ταυτότητα'>Ταυτότητα</option>
											<option value='Διαβατήριο'>Διαβατήριο</option>
										</Select>
										<FormErrorMessage>{form.errors.idType}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='idNumber'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.idNumber && form.touched.idNumber}
										mt={'20px'}>
										<FormLabel htmlFor='idNumber'>Αριθμός Ταυτοποίησης</FormLabel>
										<Input {...field} type='text' id='idNumber' placeholder='Αριθμός' />
										<FormErrorMessage>{form.errors.idNumber}</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							{idType === 'Ταυτότητα' ? (
								<Field name='idDate'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.idDate && form.touched.idDate}
											mt={'20px'}>
											<FormLabel htmlFor='idDate'>Ημερομηνία Έκδοσης</FormLabel>
											<Input
												{...field}
												type='date'
												id='idDate'
												placeholder='Ημερομηνία Έκδοσης'
											/>
											<FormErrorMessage>{form.errors.idDate}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							) : (
								<Field name='idDate'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.idDate && form.touched.idDate}
											mt={'20px'}>
											<FormLabel htmlFor='idDate'>Ημερομηνία Λήξης</FormLabel>
											<Input
												{...field}
												type='date'
												id='idDate'
												placeholder='Ημερομηνία Λήξης'
											/>
											<FormErrorMessage>{form.errors.idDate}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							)}

							{idType === 'Ταυτότητα' ? (
								<Field name='authority'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.authority && form.touched.authority}
											mt={'20px'}>
											<FormLabel htmlFor='authority'>Εκδούσα Αρχή</FormLabel>
											<Input
												{...field}
												type='text'
												id='authority'
												placeholder='Εκδούσα Αρχή'
											/>
											<FormErrorMessage>{form.errors.authority}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							) : (
								<Field name='authority'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.authority && form.touched.authority}
											mt={'20px'}>
											<FormLabel htmlFor='authority'>Χώρα Έκδοσης</FormLabel>
											<Select
												{...field}
												id='birth_country'
												placeholder='Επιλέξτε Χώρα Γέννησης'>
												{countries.map((country, index) => (
													<option key={index} value={country.code}>
														{country.name}
													</option>
												))}
											</Select>
											<FormErrorMessage>{form.errors.authority}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							)}
						</Flex>
						<Flex mt={'50px'} justifyContent={'right'} gap={4}>
							<Button colorScheme={'blue'} rounded={'md'} onClick={saveForm}>
								Προσωρινή Αποθήκευση
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</Flex>
	);
};

export default PersonalData;

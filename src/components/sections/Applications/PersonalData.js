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
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import countries from '../../../data/form/countries.json';

const handleValidation = (values) => {};
const initialValues = {};

const PersonalData = () => {
	const [birthCountry, setBirthCountry] = useState('GR');
	const [residenceCountry, setResidenceCountry] = useState('GR');
	const [idType, setIdType] = useState('Ταυτότητα');

	return (
		<Flex flexDir={'column'} px={'50px'} bgColor={'#fcfcfc'} h={'100%'} pb={'50px'}>
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
						<Divider my={'10px'} h={'3px'} color={'gray.800'} />
						<Flex justifyContent={'space-evenly'} gap={10}>
							<Field name={'birth_country'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.birth_country && form.touched.birth_country}
										mt={'20px'}>
										<FormLabel htmlFor='birth_country'>Χώρα Γέννησης</FormLabel>
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
										<FormErrorMessage>{form.errors.birth_country}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='birthplace'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.birthplace && form.touched.birthplace}
										mt={'20px'}>
										<FormLabel htmlFor='birthplace'>Πόλη Γέννησης</FormLabel>
										<Input
											{...field}
											type='text'
											id='birthplace'
											placeholder='Επιλέξτε Πόλη Γέννησης'
										/>
										<FormErrorMessage>{form.errors.birthplace}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='birthdate'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.birthdate && form.touched.birthdate}
										mt={'20px'}>
										<FormLabel htmlFor='birthdate'>Ημερομηνία Γέννησης</FormLabel>
										<Input
											{...field}
											type='date'
											id='birthdate'
											placeholder='Επιλέξτε Ημερομηνία Γέννησης'
										/>
										<FormErrorMessage>{form.errors.birthdate}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Divider my={'10px'} h={'3px'} color={'gray.800'} />
						<Flex justifyContent={'space-evenly'} gap={10} w={'50%'}>
							<Field name='residence_country'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residence_country && form.touched.residence_country
										}
										mt={'20px'}>
										<FormLabel htmlFor='residence_country'>Χώρα Διαμονής</FormLabel>
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
										<FormErrorMessage>{form.errors.residence_country}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='residence_address'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residence_address && form.touched.residence_address
										}
										mt={'20px'}>
										<FormLabel htmlFor='residence_address'>Διεύθυνση κατοικίας</FormLabel>
										<Input
											{...field}
											type='text'
											id='residence_address'
											placeholder='Επιλέξτε Διεύθυνση Κατοικίας'
										/>
										<FormErrorMessage>{form.errors.residence_address}</FormErrorMessage>
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
							<Field name='residence_city'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.residence_city && form.touched.residence_city}
										mt={'20px'}>
										<FormLabel htmlFor='residence_city'>Πόλη</FormLabel>
										<Input
											{...field}
											type='text'
											id='residence_city'
											placeholder='Πόλη'
										/>
										<FormErrorMessage>{form.errors.residence_city}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>
						<Flex justifyContent={'space-evenly'} gap={10}>
							<Field name='residence_location'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residence_location && form.touched.residence_location
										}
										mt={'20px'}>
										<FormLabel htmlFor='residence_location'>Περιοχή</FormLabel>
										<Input
											{...field}
											type='text'
											id='residence_location'
											placeholder='Περιοχή'
										/>
										<FormErrorMessage>{form.errors.residence_location}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='residence_tel'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.residence_tel && form.touched.residence_tel}
										mt={'20px'}>
										<FormLabel htmlFor='residence_tel'>Τηλέφωνο</FormLabel>
										<Input
											{...field}
											type='tel'
											id='residence_tel'
											placeholder='Τηλέφωνο'
										/>
										<FormErrorMessage>{form.errors.residence_tel}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='residence_mobile'>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.residence_mobile && form.touched.residence_mobile
										}
										mt={'20px'}>
										<FormLabel htmlFor='residence_mobile'>Κινητό</FormLabel>
										<Input
											{...field}
											type='tel'
											id='residence_mobile'
											placeholder='Κινητό'
										/>
										<FormErrorMessage>{form.errors.residence_mobile}</FormErrorMessage>
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
							<Field name='id_type'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.id_type && form.touched.id_type}
										mt={'20px'}>
										<FormLabel htmlFor='id_type'>Τύπος Ταυτοποίησης</FormLabel>
										<Select
											{...field}
											id='id_type'
											value={idType}
											onChange={(e) => setIdType(e.target.value)}>
											<option value='Ταυτότητα'>Ταυτότητα</option>
											<option value='Διαβατήριο'>Διαβατήριο</option>
										</Select>
										<FormErrorMessage>{form.errors.id_type}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='id_number'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.id_number && form.touched.id_number}
										mt={'20px'}>
										<FormLabel htmlFor='id_number'>Αριθμός Ταυτοποίησης</FormLabel>
										<Input {...field} type='text' id='id_number' placeholder='Αριθμός' />
										<FormErrorMessage>{form.errors.id_number}</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							{idType === 'Ταυτότητα' ? (
								<Field name='id_date'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.id_date && form.touched.id_date}
											mt={'20px'}>
											<FormLabel htmlFor='id_date'>Ημερομηνία Έκδοσης</FormLabel>
											<Input
												{...field}
												type='date'
												id='id_date'
												placeholder='Ημερομηνία Έκδοσης'
											/>
											<FormErrorMessage>{form.errors.id_date}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							) : (
								<Field name='id_date'>
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.id_date && form.touched.id_date}
											mt={'20px'}>
											<FormLabel htmlFor='id_date'>Ημερομηνία Λήξης</FormLabel>
											<Input
												{...field}
												type='date'
												id='id_date'
												placeholder='Ημερομηνία Λήξης'
											/>
											<FormErrorMessage>{form.errors.id_date}</FormErrorMessage>
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
					</Form>
				)}
			</Formik>
		</Flex>
	);
};

export default PersonalData;

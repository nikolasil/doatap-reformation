import React, { useState, useEffect, useRef } from 'react';
import { Flex, Text, useToast, useDisclosure, Button, Link } from '@chakra-ui/react';
import StatusBar from '../../sections/Applications/StatusBar';
import Title from '../../ui/Title';
import { useSelector, useDispatch } from 'react-redux';
import { submitNewApplication } from '../../../actions/applications/applications';
import { useParams, useNavigate } from 'react-router-dom';

import PersonalData from '../../sections/Applications/PersonalData';
import DegreeTitle from '../../sections/Applications/DegreeTitle';
import DegreeMatching from '../../sections/Applications/DegreeMatching';
import Attached from '../../sections/Applications/Attached';
import { getApplication } from '../../../actions/applications/applications';
import { Formik, Form, Field } from 'formik';
import CommentModal from '../../sections/Applications/CommentModal';
import { BsDownload, BsArrowLeftSquare } from 'react-icons/bs';

let init = {
	//Personal Data
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
	//Degree Title
	degreeType: '',
	studyCountry: '',
	studyCountryUni: '',
	studyTitle: '',
	studyCredits: '',
	studyStartDate: '',
	studyEndDate: '',
	studyDuration: '',
	//degree-matching
	matchDegreeType: '',
	matchStudyCountry: '',
	matchStudyCountryUni: '',
	matchStudyTitle: '',
	//Attached
	attachments: [],
};

const NewApplication = ({ exists = false }) => {
	const toast = useToast();
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();

	const { application } = useSelector((state) => state.applications);
	const [activeStatus, setActiveStatus] = useState('personal-data');
	const [enableSubmit, setEnableSubmit] = useState(false);
	const [initialValues, setInitialValues] = useState(init);
	const [attachments, setAttachments] = useState([]);

	const [firstTime, setFirstTime] = useState(true);

	useEffect(() => {
		if (exists) {
			dispatch(getApplication(params.id));
		}
	}, []);

	useEffect(() => {
		if (!application.isLoading && exists) {
			if (application.error) {
				toast({
					title: 'Δεν βρέθηκε η αίτηση',
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
				return navigate('/account');
			} else if (application.isFetched) {
				setInitialValues(application.application);
				setAttachments(application.application.attachments);
			}
		}
	}, [application]);

	useEffect(() => {
		if (!exists && !application.isLoading && application.isUploaded) {
			navigate(`/applications/${application.newId}`);
		}
	}, [application]);

	const handleSave = () => {
		dispatch(submitNewApplication(formRef.current.values));
	};
	const handleSubmit = () => {
		dispatch(submitNewApplication({ ...formRef.current.values, status: 1 }));
	};

	const generatePDF = () => {
		// const element = document.getElementById('form');
		// // Choose the element and save the PDF for our user.
		// html2pdf().from(element).save();
	};

	const handleValidation = () => {
		const errors = {};
		let values;
		values = formRef.current.values;
		if (exists && firstTime) {
			values = initialValues;
			formRef.current.values = initialValues;
			setFirstTime(false);
		} else {
			values = formRef.current.values;
		}

		if (!values.firstName) {
			errors.firstName = 'Το όνομα είναι υποχρεωτικό';
		}
		if (!values.lastName) {
			errors.lastName = 'Το επώνυμο είναι υποχρεωτικό';
		}
		if (!values.fatherName) {
			errors.fatherName = 'Το πατρώνυμο είναι υποχρεωτικό';
		}
		if (!values.motherName) {
			errors.motherName = 'Το μητρώνυμο είναι υποχρεωτικό';
		}
		if (!values.gender) {
			errors.gender = 'Το φύλο είναι υποχρεωτικό';
		}
		if (!values.birthCountry) {
			errors.birthCountry = 'Η Χώρα Γέννησης είναι υποχρεωτική';
		}
		if (!values.birthPlace) {
			errors.birthPlace = 'Η Πόλη Γέννησης είναι υποχρεωτική';
		}
		if (!values.birthDate) {
			errors.birthDate = 'Η ημερομηνία γέννησης είναι υποχρεωτική';
		}
		if (!values.residenceCountry) {
			errors.residenceCountry = 'Η Χώρα Υπαλλήλου είναι υποχρεωτική';
		}
		if (!values.residenceAddress) {
			errors.residenceAddress = 'Η Διεύθυνση είναι υποχρεωτική';
		}
		if (!values.postcode) {
			errors.postcode = 'Το Ταχυδρομικό είναι υποχρεωτικό';
		}
		if (!values.residenceCity) {
			errors.residenceCity = 'Η Πόλη είναι υποχρεωτική';
		}
		if (!values.residenceLocation) {
			errors.residenceLocation = 'Η Περιοχή είναι υποχρεωτική';
		}
		if (!values.residenceTel) {
			errors.residenceTel = 'Το Τηλέφωνο είναι υποχρεωτικό';
		}
		if (!values.residenceMobile) {
			errors.residenceMobile = 'Το Κινητό είναι υποχρεωτικό';
		}
		if (!values.email) {
			errors.email = 'Το Email είναι υποχρεωτικό';
		}
		if (!values.afm) {
			errors.afm = 'Το ΑΦΜ είναι υποχρεωτικό';
		}
		if (!values.idType) {
			errors.idType = 'Η κατηγορία ταυτοποίησης είναι υποχρεωτική';
		}
		if (!values.idDate) {
			errors.idDate = 'Η ημερομηνία ταυτότητας είναι υποχρεωτική';
		}
		if (!values.idNumber) {
			errors.idNumber = 'Το αριθμός ταυτότητας είναι υποχρεωτικό';
		}
		if (!values.authority) {
			errors.authority = 'Η υπηρεσία έκδοσης είναι υποχρεωτική';
		}
		if (!values.degreeType) {
			errors.degreeType = 'Η κατηγορία πτυχίου είναι υποχρεωτική';
		}
		if (!values.studyCountry) {
			errors.studyCountry = 'Η χώρα φοίτησης είναι υποχρεωτική';
		}
		if (!values.studyCountryUni) {
			errors.studyCountryUni = 'Το πανεπιστήμιο φοίτησης είναι υποχρεωτικό';
		}
		if (!values.studyTitle) {
			errors.studyTitle = 'Ο τίτλος φοίτησης είναι υποχρεωτικός';
		}
		if (!values.studyCredits) {
			errors.studyCredits = 'Οι πτυχιακές μονάδες είναι υποχρεωτικές';
		}
		if (!values.studyStartDate) {
			errors.studyStartDate = 'Η ημερομηνία έναρξης φοίτησης είναι υποχρεωτική';
		}
		if (!values.studyEndDate) {
			errors.studyEndDate = 'Η ημερομηνία λήξης φοίτησης είναι υποχρεωτική';
		}
		if (!values.studyDuration) {
			errors.studyDuration = 'Η διάρκεια φοίτησης είναι υποχρεωτική';
		}

		if (!values.matchDegreeType) {
			errors.matchDegreeType = 'Η κατηγορία πτυχίου είναι υποχρεωτική';
		}
		if (!values.matchStudyCountry) {
			errors.matchStudyCountry = 'Η χώρα φοίτησης είναι υποχρεωτική';
		}
		if (!values.matchStudyCountryUni) {
			errors.matchStudyCountryUni = 'Το πανεπιστήμιο φοίτησης είναι υποχρεωτικό';
		}
		if (!values.matchStudyTitle) {
			errors.matchStudyTitle = 'Ο τίτλος φοίτησης είναι υποχρεωτικός';
		}

		if (values.attachments.length === 0) {
			errors.attachments = 'Πρέπει να ανεβάσετε τουλάχιστον ένα αρχείο';
		}

		if (Object.keys(errors).length === 0) {
			setEnableSubmit(true);
		} else {
			setEnableSubmit(false);
		}

		return errors;
	};

	const handleChangeStatus = (files) => {
		formRef.current.values.attachments = files.map((file) => file.file);
		handleValidation();
	};

	const formProps = {
		onSubmit: handleSubmit,
		saveForm: handleSave,
		status: activeStatus,
	};

	const formRef = useRef(null);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = useRef();
	const renderStatus = () => {
		switch (initialValues.status) {
			case 1:
				return (
					<Text fontWeight={'500'} color={'blue'} p={'5px'} rounded={'md'}>
						Υποβλήθηκε
					</Text>
				);
			case 2:
				return (
					<Text fontWeight={'500'} color={'green'} p={'5px'} rounded={'md'}>
						Εγκρίθηκε
					</Text>
				);
			case 3:
				return (
					<Text fontWeight={'500'} color={'red'} p={'5px'} rounded={'md'}>
						Απορρίφθηκε
					</Text>
				);
			case 4:
				return (
					<Text fontWeight={'500'} color={'orange'} p={'5px'} rounded={'md'}>
						Αναμονή για ενημέρωση
					</Text>
				);
			default:
				return (
					<Text fontWeight={'500'} color={'gray'} p={'5px'} rounded={'md'}>
						Δεν έχει υποβληθεί
					</Text>
				);
		}
	};

	return (
		<Flex flexDir={'column'} bgColor={'gray.50'} flex={1}>
			<Title title={'Νέα Αίτηση'} />
			<Flex
				justifyContent={'space-between'}
				py={'15px'}
				px={'10px'}
				bgColor={'#b6c3cf'}
				alignItems={'center'}>
				<Flex alignItems={'center'} gap={4}>
					<Flex _hover={{ color: '#376aab', cursor: 'pointer' }}>
						<BsArrowLeftSquare
							size={'1.8em'}
							color={'#2C5282'}
							id={'arrowleft'}
							onClick={() => navigate(-1)}
						/>
					</Flex>
					<Flex alignItems={'center'} bgColor={'gray.100'} p={'5px'} rounded={'md'}>
						<Text as={'span'} fontWeight={'700'}>
							Κατάσταση:{' '}
						</Text>
						{renderStatus()}
					</Flex>
				</Flex>
				<Flex gap={4}>
					{initialValues.createdAt && (
						<Flex
							alignItems={'center'}
							bgColor={'gray.100'}
							p={'5px'}
							rounded={'md'}
							w={'250px'}
							flexDir={'column'}>
							<Text as={'span'} fontWeight={'700'}>
								Ημερομηνία Δημιουργίας
							</Text>
							<Text>{new Date(initialValues.createdAt).toLocaleDateString()}</Text>
						</Flex>
					)}
					{initialValues.updatedAt && (
						<Flex
							alignItems={'center'}
							bgColor={'gray.100'}
							p={'5px'}
							w={'250px'}
							rounded={'md'}
							flexDir={'column'}>
							<Text as={'span'} fontWeight={'700'}>
								Ημερομηνία Επεξεργασίας
							</Text>
							<Text>{new Date(initialValues.updatedAt).toLocaleDateString()}</Text>
						</Flex>
					)}
				</Flex>
				<Flex gap={4}>
					{initialValues.status !== 2 ? (
						<Flex gap={4}>
							<Button
								colorScheme={'blue'}
								rounded={'md'}
								onClick={handleSave}
								isDisabled={initialValues.status > 0}>
								Προσωρινή Αποθήκευση
							</Button>
							<Button
								colorScheme={'orange'}
								rounded={'md'}
								isDisabled={!enableSubmit}
								type={'submit'}
								onClick={handleSubmit}>
								Υποβολή
							</Button>
						</Flex>
					) : (
						<Link href={'/application.pdf'} download>
							<Button
								colorScheme={'green'}
								rounded={'md'}
								type={'submit'}
								leftIcon={<BsDownload />}>
								Λήψη Αίτησης
							</Button>
						</Link>
					)}
					{initialValues.status === 4 && (
						<div>
							<Button colorScheme={'gray'} onClick={onOpen}>
								<Text>Προβολή Σχολίων</Text>
							</Button>

							<CommentModal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} />
						</div>
					)}
				</Flex>
			</Flex>
			<StatusBar active={activeStatus} onSelect={(status) => setActiveStatus(status)} />
			<div>
				<Formik
					id={'form'}
					enableReinitialize
					innerRef={formRef}
					initialValues={initialValues}
					validate={handleValidation}
					validateOnMount
					onSubmit={(values) => {
						console.log(formRef.current);
					}}>
					{(props) => (
						<Form>
							<PersonalData {...formProps} />
							<DegreeTitle {...formProps} formRef={formRef} />
							<DegreeMatching {...formProps} formRef={formRef} />
							<Attached
								{...formProps}
								handleChangeStatus={handleChangeStatus}
								init={attachments}
								hasUploaded={application.isUploaded}
							/>
						</Form>
					)}
				</Formik>
			</div>
		</Flex>
	);
};

export default NewApplication;

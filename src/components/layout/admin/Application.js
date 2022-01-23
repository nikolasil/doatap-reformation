import React, { useState, useEffect, useRef } from 'react';
import Title from '../../ui/Title';
import { Flex, Text, useToast, Button, useDisclosure } from '@chakra-ui/react';
import StatusBar from '../../sections/Applications/StatusBar';
import { useSelector, useDispatch } from 'react-redux';
import { submitNewApplication } from '../../../actions/applications/applications';
import { useParams, useNavigate } from 'react-router-dom';

import PersonalData from '../../sections/Admin/Applications/PersonalData';
import DegreeTitle from '../../sections/Admin/Applications/DegreeTitle';
import DegreeMatching from '../../sections/Admin/Applications/DegreeMatching';
import Attached from '../../sections/Admin/Applications/Attached';
import { getApplication } from '../../../actions/admin/admin';
import { Formik, Form, Field } from 'formik';
import { approveApplication, rejectApplication } from '../../../actions/admin/admin';
import CommentModal from '../../sections/Admin/Applications/CommentModal';
import AdminNavbar from '../../ui/AdminNavbar';
import { BsArrowLeftSquare } from 'react-icons/bs';

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
	studyType: '',
	studyCountry: '',
	studyCountryUni: '',
	studyTitle: '',
	studyCredits: '',
	studyStartDate: '',
	studyEndDate: '',
	studyDuration: '',
	//degree-matching
	matchDegreeType: '',
	matchStudyType: '',
	matchStudyCountry: '',
	matchStudyCountryUni: '',
	matchStudyTitle: '',
	//Attached
	attachments: [],
};

const Application = () => {
	const toast = useToast();
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();

	const { application } = useSelector((state) => state.admin);
	const [attachments, setAttachments] = useState([]);
	const [activeStatus, setActiveStatus] = useState('personal-data');
	const [enableSubmit, setEnableSubmit] = useState(false);
	const [initialValues, setInitialValues] = useState(init);

	const { approve, reject } = useSelector((state) => state.admin);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleReject = () => {
		setHasSubmitted(true);
		dispatch(rejectApplication(params.id));
	};

	const handleApprove = () => {
		setHasSubmitted(true);
		dispatch(approveApplication(params.id));
	};

	useEffect(() => {
		if (!approve.isLoading) {
			setHasSubmitted(false);
		}
	}, [approve]);

	useEffect(() => {
		if (!reject.isLoading) {
			setHasSubmitted(false);
		}
	}, [reject]);

	useEffect(() => {
		dispatch(getApplication(params.id));
	}, []);

	const formProps = {
		status: activeStatus,
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = useRef();

	const renderStatus = () => {
		switch (initialValues.status) {
			case 1:
				return (
					<Text fontWeight={'500'} color={'blue'} p={'5px'} rounded={'md'}>
						Εκκρεμεί επεξεργασία απο διαχειριστή
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
						Αναμονή για ενημέρωση απο χρήστη
					</Text>
				);

			default:
				return (
					<Text fontWeight={'500'} color={'gray'} p={'5px'} rounded={'md'}>
						Δεν υπάρχει κατάσταση
					</Text>
				);
		}
	};

	useEffect(() => {
		if (!application.isLoading) {
			if (application.error) {
				toast({
					title: 'Δεν βρέθηκε η αίτηση',
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
				return navigate('/admin/applications');
			} else if (application.application) {
				console.log(application);
				setInitialValues(application.application);
				setAttachments(application.application.attachments);
			}
		}
	}, [application]);

	return (
		<Flex flexDir={'column'}>
			<Flex flexDir={'column'} bgColor={'gray.50'} flex={1}>
				<AdminNavbar />
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
					</Flex>
					<Flex gap={4}>
						<Button
							colorScheme={'green'}
							onClick={handleApprove}
							isLoading={approve.isLoading}
							isDisabled={initialValues.status && initialValues.status === 2}>
							<Text>Έγκριση</Text>
						</Button>
						<Button
							colorScheme={'red'}
							onClick={handleReject}
							isLoading={reject.isLoading}
							isDisabled={initialValues.status && initialValues.status === 3}>
							<Text>Απόρριψη</Text>
						</Button>
						<Button colorScheme={'gray'} onClick={onOpen}>
							<Text>Προσθήκη Σχολίων</Text>
						</Button>
						<CommentModal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} />
					</Flex>
				</Flex>
				<StatusBar active={activeStatus} onSelect={(status) => setActiveStatus(status)} />
				<div>
					<Formik enableReinitialize initialValues={initialValues}>
						{(props) => (
							<Form>
								<PersonalData {...formProps} />
								<DegreeTitle {...formProps} />
								<DegreeMatching {...formProps} />
								<Attached init={attachments} {...formProps} />
							</Form>
						)}
					</Formik>
				</div>
			</Flex>
		</Flex>
	);
};

export default Application;

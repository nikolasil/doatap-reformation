import React, { useState, useEffect } from 'react';
import {
	Flex,
	Text,
	FormControl,
	FormLabel,
	Box,
	Input,
	FormErrorMessage,
	FormHelperText,
	Divider,
	Select,
	RadioGroup,
	Stack,
	Radio,
	Button,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

const Attached = ({ formData, handleFormData, status, onSubmit, saveForm, validated, setValidated }) => {
	const [enableSubmit, setEnableSubmit] = useState(false);
	const files = formData.attachments.map(
		(attachment) => new File([attachment.file], attachment.originalname, { type: attachment.type })
	);
	const [initialFiles, setInitialFiles] = useState(files || []);

	useEffect(() => {
		Object.keys(validated).every((key) => {
			return validated[key] === true;
		});
		setEnableSubmit(Object.keys(validated).every((key) => validated[key] === true));
	}, [validated]);

	const handleValidation = (values) => {
		const errors = {};
		handleFormData(values);

		return errors;
	};

	const getUploadParams = ({ meta }) => {
		return { url: 'https://httpbin.org/post' };
	};

	const handleChangeStatus = ({ meta, file }, status) => {
		if (status === 'done') {
			console.log('newform', {
				...formData,
				attachments: [...formData.attachments, file],
			});
			handleFormData({
				...formData,
				attachments: [...formData.attachments, file],
			});
			setValidated({ ...validated, attached: true });
		}
	};

	return (
		<Flex flexDir={'column'} bgColor={'#fcfcfc'} h={'100%'} display={status !== 'attached' && 'none'}>
			<Divider h={'2px'} bgColor={'gray.300'} mb={'20px'} />
			<Formik initialValues={{}} onSubmit={onSubmit} validate={handleValidation}>
				{(props) => (
					<Flex
						flexDir={'column'}
						alignItems={'center'}
						rounded={'md'}
						flex={1}
						w={'100%'}
						h={'100%'}>
						<Form>
							<Field name={'attachment'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.attachment && form.touched.attachment}
										mt={'20px'}>
										<FormLabel fontSize={'18px'} htmlFor={'attachment'}>
											Αρχεία
										</FormLabel>
										<Box fontSize={'16px'} w={'50vw'}>
											<Dropzone
												submitButtonDisabled={
													formData.attachments && formData.attachments.attachment
												}
												getUploadParams={getUploadParams}
												inputContent={'Ανεβάστε αρχείο'}
												inputWithFilesContent={'Προσθέστε αρχείο'}
												onChangeStatus={handleChangeStatus}
												initialFiles={initialFiles}
											/>
										</Box>
										<FormErrorMessage>
											{form.errors.attachment && form.touched.attachment
												? form.errors.attachment
												: ''}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Flex mt={'50px'} justifyContent={'right'} gap={4}>
								<Button colorScheme={'blue'} rounded={'md'} onClick={saveForm}>
									Προσωρινή Αποθήκευση
								</Button>
								<Button
									colorScheme={'orange'}
									rounded={'md'}
									isDisabled={!enableSubmit}
									type={'submit'}>
									Υποβολή
								</Button>
							</Flex>
						</Form>
					</Flex>
				)}
			</Formik>
		</Flex>
	);
};

export default Attached;

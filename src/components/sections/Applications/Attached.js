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

const Attached = ({ formData, handleFormData, status, onSubmit }) => {
	const initialValues = {};
	const handleValidation = (values) => {};

	const getUploadParams = ({ meta }) => {
		return { url: 'https://httpbin.org/post' };
	};

	const handleChangeStatus = ({ meta, file }, status, category) => {
		console.log(meta);

		if (status === 'done') {
			handleFormData({
				...formData,
				attachments: {
					...formData.attachments,
					[category]: file,
				},
			});
		}
	};
	useEffect(() => {}, []);

	return (
		<Flex
			flexDir={'column'}
			bgColor={'#fcfcfc'}
			h={'100%'}
			mb={'50px'}
			display={status !== 'attached' && 'none'}>
			<Divider h={'2px'} bgColor={'gray.300'} mb={'20px'} />
			<Formik initialValues={initialValues} validate={handleValidation} onSubmit={onSubmit}>
				{(props) => (
					<Flex flexDir={'column'} alignItems={'center'} rounded={'md'} flex={1} w={'100%'}>
						<Form>
							<Field name={'paravolo'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.paravolo && form.touched.paravolo}
										mt={'20px'}>
										<FormLabel fontSize={'18px'} htmlFor={'paravolo'}>
											Παράβολο
										</FormLabel>
										<Box fontSize={'16px'} w={'50vw'}>
											<Dropzone
												styles={{
													height: '40px',
												}}
												initialFiles={
													(formData.attachments &&
														formData.attachments.paravolo && [
															formData.attachments.paravolo,
														]) ||
													[]
												}
												submitButtonDisabled={
													formData.attachments && formData.attachments.paravolo
												}
												multiple={false}
												getUploadParams={getUploadParams}
												maxFiles={1}
												onChangeStatus={({ meta, file }, status) =>
													handleChangeStatus({ meta, file }, status, 'paravolo')
												}
											/>
										</Box>
										<FormErrorMessage>
											{form.errors.paravolo && form.touched.paravolo
												? form.errors.paravolo
												: ''}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name={'id_application'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.id_application && form.touched.id_application}
										mt={'20px'}>
										<FormLabel fontSize={'18px'} htmlFor={'id_application'}>
											Αποδεικτικό Ταυτότητας
										</FormLabel>
										<Box fontSize={'16px'} w={'50vw'}>
											<Dropzone
												getUploadParams={getUploadParams}
												maxFiles={1}
												onChangeStatus={({ meta, file }, status) =>
													handleChangeStatus(
														{ meta, file },
														status,
														'id_application'
													)
												}
											/>
										</Box>
										<FormErrorMessage>
											{form.errors.id_application && form.touched.id_application
												? form.errors.id_application
												: ''}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name={'other'}>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.other && form.touched.other}
										mt={'20px'}>
										<FormLabel fontSize={'18px'} htmlFor={'other'}>
											Άλλο
										</FormLabel>
										<Dropzone
											getUploadParams={getUploadParams}
											maxFiles={1}
											onChangeStatus={({ meta, file }, status) =>
												handleChangeStatus({ meta, file }, status, 'other')
											}
										/>
										<FormErrorMessage>
											{form.errors.other && form.touched.other
												? form.errors.paravolo
												: ''}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Flex mt={'30px'} justifyContent={'center'} gap={4}>
								<Button colorScheme={'blue'} rounded={'md'} type='submit'>
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

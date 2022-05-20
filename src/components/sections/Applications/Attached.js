import React, { useState, useRef, useEffect } from 'react';
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
import { Dropzone, FileItem } from '@dropzone-ui/react';
import 'animate.css';

const Attached = ({ status, saveForm, handleChangeStatus, enableSubmit, init, hasUploaded = false }) => {
	const [files, setFiles] = useState([]);

	const updateFiles = (incommingFiles) => {
		setFiles(incommingFiles);
		handleChangeStatus(incommingFiles);
	};

	useEffect(() => {
		let newFiles = [];
		newFiles = init.filter((x) => !files.some((y) => x.originalname === y.file.name));
		if (newFiles.length > 0 && !hasUploaded) {
			newFiles = newFiles.map((x, index) => ({
				errors: [],
				valid: true,
				id: index,
				file: new File([x.buffer], x.originalname, { type: x.mimetype }),
			}));
			setFiles((prev) => [...prev, ...newFiles]);
		}
	}, [init]);

	return (
		<Flex
			flexDir={'column'}
			bgColor={'#fcfcfc'}
			h={'100%'}
			display={status !== 'attached' && 'none'}
			className='animate__animated animate__fadeIn '
			alignItems={'center'}>
			{/* <Divider h={'2px'} bgColor={'gray.300'} mb={'20px'} /> */}
			<Flex flexDir={'column'} alignItems={'center'} rounded={'md'} flex={1}>
				<Field name={'attachments'}>
					{({ field, form }) => (
						<FormControl
							isInvalid={form.errors.attachments && form.touched.attachments}
							mt={'50px'}
							w={'50%'}>
							<FormLabel fontSize={'18px'} htmlFor={'attachments'}>
								Αρχεία
							</FormLabel>
							<Box fontSize={'16px'} w={'50vw'}>
								<Dropzone onChange={updateFiles} value={files}>
									{files.map((file, index) => {
										return <FileItem key={index} {...file} preview />;
									})}
								</Dropzone>
							</Box>
							<FormErrorMessage>
								{form.errors.attachments && form.errors.attachments}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>
			</Flex>
		</Flex>
	);
};

export default Attached;

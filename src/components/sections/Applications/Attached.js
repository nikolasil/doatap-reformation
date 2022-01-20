import React, { useState, useRef } from 'react';
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

const Attached = ({ status, saveForm, handleChangeStatus, enableSubmit, initialAttachments }) => {
	const init = initialAttachments.map(
		(attachment) => new File([attachment.file], attachment.originalname, { type: attachment.type })
	);

	const [initialFiles, setInitialFiles] = useState(init);

	// useEffect(() => {
	// 	Object.keys(validated).every((key) => {
	// 		return validated[key] === true;
	// 	});
	// 	setEnableSubmit(Object.keys(validated).every((key) => validated[key] === true));
	// }, [validated]);

	const getUploadParams = ({ meta }) => {
		return { url: 'https://httpbin.org/post' };
	};

	return (
		<Flex
			flexDir={'column'}
			bgColor={'#fcfcfc'}
			h={'100%'}
			display={status !== 'attached' && 'none'}
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
								<Dropzone
									{...field}
									getUploadParams={getUploadParams}
									inputContent={'Ανεβάστε αρχείο'}
									inputWithFilesContent={'Προσθέστε αρχείο'}
									onChangeStatus={handleChangeStatus}
									// initialFiles={newfield.value.map(
									// 	(attachment) =>
									// 		new File([attachment.file], attachment.originalname, {
									// 			type: attachment.type,
									// 		})
									// )}
								/>
							</Box>
							<FormErrorMessage>
								{form.errors.attachments && form.touched.attachments
									? form.errors.attachments
									: ''}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>

				<Flex mt={'50px'} justifyContent={'right'} gap={4}>
					<Button colorScheme={'blue'} rounded={'md'} onClick={saveForm}>
						Προσωρινή Αποθήκευση
					</Button>
					<Button colorScheme={'orange'} rounded={'md'} isDisabled={!enableSubmit} type={'submit'}>
						Υποβολή
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Attached;

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
	Link,
	Tag,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import 'react-dropzone-uploader/dist/styles.css';
import { Dropzone, FileItem } from '@dropzone-ui/react';
import 'animate.css';
import { BsDownload } from 'react-icons/bs';

const base64toBlob = (data) => {
	// Cut the prefix `data:application/pdf;base64` from the raw base 64
	const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);

	const bytes = atob(base64WithoutPrefix);
	let length = bytes.length;
	let out = new Uint8Array(length);

	while (length--) {
		out[length] = bytes.charCodeAt(length);
	}

	return new Blob([out], { type: 'application/pdf' });
};

Number.prototype.formatBytes = function () {
	var units = ['B', 'KB', 'MB', 'GB', 'TB'],
		bytes = this,
		i;

	for (i = 0; bytes >= 1024 && i < 4; i++) {
		bytes /= 1024;
	}

	return bytes.toFixed(2) + units[i];
};

const Attached = ({ status, init, hasUploaded = false }) => {
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
								{init.map((file, index) => (
									<div key={index}>
										<Flex my={'10px'} justifyContent={'space-between'}>
											<Flex gap={2}>
												<Text>{file.originalname}</Text>
												<Text> ({file.size.formatBytes()})</Text>
											</Flex>

											<Flex>
												<Link
													download
													href={URL.createObjectURL(
														base64toBlob(
															`data:application/pdf;base64,${file.buffer}`
														)
													)}>
													<Flex alignItems={'center'} gap={2}>
														<BsDownload size={'1.2rem'} />
														<Text as={'span'}>Λήψη</Text>
													</Flex>
												</Link>
											</Flex>
										</Flex>
										<Divider />
									</div>
								))}
							</Box>
							<FormErrorMessage>
								{form.errors.attachments && form.touched.attachments
									? form.errors.attachments
									: ''}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>
			</Flex>
		</Flex>
	);
};

export default Attached;

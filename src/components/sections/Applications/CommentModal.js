import React, { useState, useEffect } from 'react';
import {
	Flex,
	Text,
	Button,
	Modal,
	Textarea,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	useToast,
	ModalCloseButton,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const CommentModal = ({ finalRef, isOpen, onClose }) => {
	const { application } = useSelector((state) => state.applications.application);

	return (
		<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Σχόλια</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>
						{application && application.comments
							? application.comments
							: 'Δεν υπάρχουν σχόλια...'}
					</Text>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' onClick={onClose}>
						Οκ
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CommentModal;

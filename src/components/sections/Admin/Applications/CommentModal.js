import React, { useState } from 'react';
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
	ModalCloseButton,
} from '@chakra-ui/react';
const CommentModal = ({ finalRef, isOpen, onClose }) => {
	const [comments, setComments] = useState('');

	return (
		<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Σχόλια</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Textarea
						value={comments}
						placeholder='Σχόλια'
						onChange={(e) => setComments(e.target.value)}></Textarea>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme={'gray'} mr={3} onClick={onClose}>
						Ακύρωση
					</Button>
					<Button colorScheme='blue'>Αποθήκευση</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CommentModal;

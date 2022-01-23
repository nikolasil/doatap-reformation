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

import { useDispatch, useSelector } from 'react-redux';
import { commentApplication } from '../../../../actions/admin/admin';
import { useParams } from 'react-router-dom';

const CommentModal = ({ finalRef, isOpen, onClose }) => {
	const toast = useToast();
	const params = useParams();
	const dispatch = useDispatch();
	const { application } = useSelector((state) => state.admin.application);
	const [body, setBody] = useState('');
	const { comments } = useSelector((state) => state.admin);

	const handleSubmit = () => {
		if (!body) {
			return toast({
				title: 'Πρέπει να συμπληρώσετε το πεδίο σχόλιο',
				status: 'error',
			});
		}
		dispatch(commentApplication(params.id, body));
	};
	useEffect(() => {
		if (application && application.comments) {
			setBody(application.comments);
		}
	}, [application]);

	useEffect(() => {
		if (!comments.isLoading) {
			if (comments.error) {
				toast({
					title: 'Υπήρξε κάποιο πρόβλημα κατά την υποβολή του σχολίου',
					status: 'error',
				});
			} else if (comments.isCommentAdded) {
				toast({
					title: 'Το σχόλιο σας υποβλήθηκε επιτυχώς',
					status: 'success',
				});
				onClose();
			}
		}
	}, [comments]);
	return (
		<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Σχόλια</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Textarea
						value={body}
						placeholder='Σχόλια'
						onChange={(e) => setBody(e.target.value)}></Textarea>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme={'gray'} mr={3} onClick={onClose}>
						Ακύρωση
					</Button>
					<Button colorScheme='blue' onClick={handleSubmit} isLoading={comments.isLoading}>
						Αποθήκευση
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CommentModal;

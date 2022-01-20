import React, { useEffect, useState } from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplication } from '../../../actions/applications/applications';
import { useNavigate, useParams } from 'react-router-dom';
import NewApplication from './NewApplication';

const Application = () => {
	const toast = useToast();
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { application } = useSelector((state) => state.applications);
	const { user } = useSelector((state) => state.auth);

	return (
		<div>
			<NewApplication exists />
		</div>
	);
};

export default Application;

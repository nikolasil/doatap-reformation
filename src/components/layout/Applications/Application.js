import React, { useEffect, useState } from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplication } from '../../../actions/applications/applications';
import { useNavigate, useParams } from 'react-router-dom';
import NewApplication from './NewApplication';

const Application = () => <NewApplication exists />;

export default Application;

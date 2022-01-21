import React, { useState, useEffect, useRef } from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import StatusBar from '../../sections/Applications/StatusBar';
import Title from '../../ui/Title';
import { useSelector, useDispatch } from 'react-redux';
import { submitNewApplication } from '../../../actions/applications/applications';
import { useParams, useNavigate } from 'react-router-dom';

import PersonalData from '../../sections/Applications/PersonalData';
import DegreeTitle from '../../sections/Applications/DegreeTitle';
import DegreeMatching from '../../sections/Applications/DegreeMatching';
import Attached from '../../sections/Applications/Attached';
import { getApplication } from '../../../actions/applications/applications';
import { Formik, Form, Field } from 'formik';

let init = {
  //Personal Data
  firstName: '',
  lastName: '',
  fatherName: '',
  motherName: '',
  gender: '',
  birthCountry: '',
  birthPlace: '',
  birthDate: '',
  residenceCountry: '',
  residenceAddress: '',
  postcode: '',
  residenceCity: '',
  residenceLocation: '',
  residenceTel: '',
  residenceMobile: '',
  email: '',
  afm: '',
  idType: '',
  idDate: '',
  idNumber: '',
  authority: '',
  //Degree Title
  degreeType: '',
  studyType: '',
  studyCountry: '',
  studyCountryUni: '',
  studyTitle: '',
  studyCredits: '',
  studyStartDate: '',
  studyEndDate: '',
  studyDuration: '',
  //degree-matching
  matchDegreeType: '',
  matchStudyType: '',
  matchStudyCountry: '',
  matchStudyCountryUni: '',
  matchStudyTitle: '',
  //Attached
  attachments: [],
};

const NewApplication = ({ exists = false }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { application } = useSelector((state) => state.applications);
  const [activeStatus, setActiveStatus] = useState('personal-data');
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [initialValues, setInitialValues] = useState(init);

  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (exists) {
      dispatch(getApplication(params.id));
    }
  }, []);

  useEffect(() => {
    if (!application.isLoading && exists) {
      if (application.error) {
        toast({
          title: 'Δεν βρέθηκε η αίτηση',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return navigate('/account');
      } else if (application.isFetched) {
        setInitialValues(application.application);

        // console.log(formRef.current.values);
      }
    }
  }, [application]);

  useEffect(() => {
    if (!exists && !application.isLoading && application.isUploaded) {
      navigate(`/applications/${application.newId}`);
    }
  }, [application]);

  const handleSave = () => {
    dispatch(submitNewApplication(formRef.current.values));
  };
  const handleSubmit = () => {
    dispatch(submitNewApplication({ ...formRef.current.values, status: 1 }));
  };

  const handleValidation = () => {
    const errors = {};
    let values;
    if (exists && firstTime) {
      values = initialValues;
      formRef.current.values = initialValues;
      setFirstTime(false);
    } else {
      values = formRef.current.values;
    }

    if (!values.firstName) {
      errors.firstName = 'Το όνομα είναι υποχρεωτικό';
    }
    if (!values.lastName) {
      errors.lastName = 'Το επώνυμο είναι υποχρεωτικό';
    }
    if (!values.fatherName) {
      errors.fatherName = 'Το πατρώνυμο είναι υποχρεωτικό';
    }

    if (values.attachments.length === 0) {
      errors.attachments = 'Πρέπει να ανεβάσετε τουλάχιστον ένα αρχείο';
    }

    if (Object.keys(errors).length === 0) {
      setEnableSubmit(true);
    }

    return errors;
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === 'done') {
      formRef.current.values.attachments.push(file);

      handleValidation();
    }
  };

  const formProps = {
    onSubmit: handleSubmit,
    saveForm: handleSave,
    status: activeStatus,
  };

  const formRef = useRef(null);

  return (
    <Flex flexDir={'column'} bgColor={'gray.50'} flex={1}>
      <Title title={'Νέα Αίτηση'} />
      <StatusBar
        active={activeStatus}
        onSelect={(status) => setActiveStatus(status)}
      />

      <div>
        <Formik
          enableReinitialize
          innerRef={formRef}
          initialValues={initialValues}
          validate={handleValidation}
          validateOnMount
          onSubmit={(values) => {
            console.log(formRef.current);
          }}
        >
          {(props) => (
            <Form>
              <PersonalData {...formProps} />
              <DegreeTitle {...formProps} />
              <DegreeMatching {...formProps} />
              <Attached
                {...formProps}
                handleChangeStatus={handleChangeStatus}
                enableSubmit={enableSubmit}
                initialAttachments={initialValues.attachments}
              />
            </Form>
          )}
        </Formik>
      </div>
    </Flex>
  );
};

export default NewApplication;

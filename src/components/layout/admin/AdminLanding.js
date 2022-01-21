import { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import Title from '../../ui/Title';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../actions/auth/auth';
import { useNavigate } from 'react-router-dom';

const AdminLanding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const auth = useSelector((state) => state.auth);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
    setHasSubmitted(true);
    dispatch(loginUser(values));
  };
  const handleValidation = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Η διεύθυνση email είναι υποχρεωτική';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Η διεύθυνση email δεν είναι έγκυρη';
    }
    if (!values.password) {
      errors.password = 'Ο κωδικός είναι υποχρεωτικός';
    } else if (values.password.length < 8) {
      errors.password = 'Ο κωδικός πρέπει να είναι τουλάχιστον 8 χαρακτήρες';
    }
    return errors;
  };
  useEffect(() => {
    if (!auth.isLoading && hasSubmitted) {
      if (auth.isAuthenticated) {
        toast({
          title: 'Επιτυχής Σύνδεση',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        navigate('/admin/applications');
      } else if (auth.error) {
        return toast({
          title: auth.error.message || 'Προέκυψε κάποιο σφάλμα',
          description: 'Παρακαλώ δοκιμάστε ξανά',
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
    }
  }, [auth]);
  return (
    <Flex
      flexDir={'column'}
      h={'100%'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Title title={'Σύνδεση'} />
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        p={'20px'}
        mt={'20px'}
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Φόρμα Σύνδεσης Admin</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          w={'30vw'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={'20px'}
          mt={'40px'}
        >
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={handleValidation}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              onSubmit(values);
            }}
          >
            {(props) => (
              <Form>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                      mt={'20px'}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      mt={'20px'}
                    >
                      <FormLabel htmlFor="password">Κωδικός</FormLabel>
                      <Input
                        {...field}
                        type="password"
                        id="password"
                        placeholder="Κωδικός"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Box mt={'40px'} textAlign={'end'} mb={'20px'}>
                  <Button
                    colorScheme={'blue'}
                    size="lg"
                    isLoading={auth.isLoading}
                    isDisabled={
                      !props.dirty || !props.isValid || props.isValidating
                    }
                    type="submit"
                  >
                    Σύνδεση
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminLanding;

import React from 'react';
import {
  Flex,
  Text,
  Button,
  Heading,
  Table,
  TableCaption,
  Thead,
  Td,
  Th,
  Tfoot,
  Tbody,
  Tr,
} from '@chakra-ui/react';
import Breadcrumb from '../../ui/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import Title from '../../ui/Title';
import { MdOutlineOpenInNew } from 'react-icons/md';

const Applications = () => {
  const rowProps = {
    _hover: {
      cursor: 'pointer',
      bgColor: 'gray.200',
    },
  };
  const navigate = useNavigate();
  return (
    <Flex flexDir={'column'} h={'100%'}>
      <Title title={'Αιτήσεις'} />
      <Flex bg={'#e9edf0'} py={'5vh'} flex={1}>
        <Flex
          bg={'gray.50'}
          w={'100%'}
          rounded={'md'}
          flexDir={'column'}
          boxShadow={'lg'}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            m={'30px'}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Αριθμος Αιτησης</Th>
                  <Th>Ημερομηνια Δημιουργιας</Th>
                  <Th>Ονομα Χρηστη</Th>
                  <Th>Κατασταση</Th>
                  <Th isNumeric>ACTION</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>4305</Td>
                  <Td>13/2/2021</Td>
                  <Td>Νικόλας Ηλιόπουλος</Td>
                  <Td>Αναμονή</Td>
                  <Td>
                    <Flex>
                      <MdOutlineOpenInNew
                        size={'3em'}
                        cursor={'pointer'}
                        onClick={() => navigate(``)}
                      />
                      <Button
                        colorScheme={'green'}
                        onClick={() =>
                          navigate('/applications/new-application')
                        }
                      >
                        <Text>Έγκριση</Text>
                      </Button>
                      <Button
                        colorScheme={'red'}
                        onClick={() =>
                          navigate('/applications/new-application')
                        }
                      >
                        <Text>Απόρριψη</Text>
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Applications;

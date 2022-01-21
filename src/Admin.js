import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLanding from './components/layout/admin/AdminLanding';
import { Flex } from '@chakra-ui/react';
import Navbar from './components/ui/Navbar';
import Header from './components/ui/Header';
import Applications from './components/layout/admin/Applications';

const Admin = () => {
  return (
    <Flex flexDir={'column'} h={'100%'}>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AdminLanding />} />
        <Route exact path="/applications" element={<Applications />} />
      </Routes>
    </Flex>
  );
};

export default Admin;

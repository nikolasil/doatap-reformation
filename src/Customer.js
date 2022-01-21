import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/layout/auth/Login';
import Register from './components/layout/auth/Register';
import { Flex } from '@chakra-ui/react';
import Navbar from './components/ui/Navbar';
import Header from './components/ui/Header';
import Applications from './components/layout/Applications/Applications';
import NewApplication from './components/layout/Applications/NewApplication';
import Application from './components/layout/Applications/Application';
import Account from './components/layout/Account/Account';
import NotFound from './components/layout/NotFound/NotFound';
import PrivateRoute from './components/Routing/PrivateRoute';
const Customer = () => {
  return (
    <Flex flexDir={'column'} h={'100%'}>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/applications" element={<Applications />} />
        <Route
          exact
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/applications/new-application"
          element={
            <PrivateRoute>
              <NewApplication />
            </PrivateRoute>
          }
        />
        <Route
          path="/applications/:id"
          element={
            <PrivateRoute>
              <Application />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Flex>
  );
};

export default Customer;

import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../../pages/ui/MainPage.tsx';
import SignUpPage from '../../pages/SignUpPage/SignUpPage.tsx';
import LoginPage from '../../pages/LoginPage/LoginPage.tsx';
import Layout from '../Layout.tsx';

export default function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

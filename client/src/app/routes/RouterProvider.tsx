import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../../pages/ui/MainPage.tsx';
import HelloPage from '../../pages/HelloPage/HelloPage.tsx';
import NotFaundPage from '../../pages/NotFaundPages/NotFaundPage.tsx';

export default function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/hello" element={<HelloPage />} />
      <Route path="*" element={<NotFaundPage />} />
    </Routes>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs'; 
import Emergency from '../pages/Emergency';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all routes inside MainLayout, passing each page as children */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/emergency" element={<MainLayout><Emergency /></MainLayout>} />


        {/* Catch all - 404 */}
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

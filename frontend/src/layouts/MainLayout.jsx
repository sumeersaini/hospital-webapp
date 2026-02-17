// src/layouts/MainLayout.js
import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import Footer from './Footer';
import useDeviceType from '../hooks/useDeviceType';

export default function MainLayout({ children }) {
  const deviceType = useDeviceType();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Show mobile or desktop header */}
      {deviceType === 'mobile' ? <MobileHeader /> : <Header />}

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

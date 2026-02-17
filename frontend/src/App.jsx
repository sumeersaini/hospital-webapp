import React from 'react';
import AppRoutes from './routes/AppRoutes';
// import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
// import { LoaderProvider } from './context/LoaderContext';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/custom.css'

 
export default function App() {
  return (
      <>
          <Toaster position="top-right" reverseOrder={false} />
         
            <div className="min-h-screen bg-gray-100 text-gray-900">
            <AppRoutes />
          </div>
       
      </>
    
  );
}

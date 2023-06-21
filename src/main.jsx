import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';


import {
  RouterProvider,
} from "react-router-dom"; 
import { router } from './Routes/Router';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <div className='max-w-screen-xl	mx-auto'>
       <RouterProvider router={router} />
    </div>
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)

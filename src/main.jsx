import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Roters.jsx'
import { HelmetProvider } from "react-helmet-async";
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
      <FirebaseProvider>
   <RouterProvider router={router}></RouterProvider>
      </FirebaseProvider>
  </HelmetProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; 
import MenuPage from './pages/MenuPage';
// Add other page components below 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/menu', element: <MenuPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

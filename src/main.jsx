import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';
import Home from './pages/Home.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'contato', element: <Contato /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

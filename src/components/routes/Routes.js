import React from 'react';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import { UserDetails } from '../UserDetails/UserDetails';
import AddUser from '../AddUser/AddUser';
import { EditUser } from '../EditUser/EditUser';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/users/:id',
        element: <UserDetails />,
      },
      {
        path: '/add',
        element: <AddUser />,
      },
      {
        path: '/edit/:id',
        element: <EditUser />,
      },
    ],
  },
]);

export default router;

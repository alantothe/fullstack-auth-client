import React from 'react';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useState } from 'react';

import GlobalLayout from './layouts/GlobalLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';


const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        {
          element: (
            <HomePage urlEndPoint={urlEndPoint} shouldRefetch={shouldRefetch} />
          ),
          index: true,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/registration',
          element: <RegistrationPage />,
        }
      ]
    }


  ])


  return (
    <div className="App-header">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;

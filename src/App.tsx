import { useContext, useState } from 'react';
import './App.css';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import HealthDataContext, { HealthDataContextWrapper } from './context/health-data-context';
import EditHealthData from './component/EditHealthData/EditHealthData';
import { EDIT } from './store/store-types';
import { VIEW } from './store/store-types';
import MainComponent from './component/MainComponent/MainComponent';


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import Header from './Header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/main',
    element: <MainComponent />
  }
]);



function App() {


  return (
    <HealthDataContextWrapper>
      <Header />
       <RouterProvider router={router} />
      {/* <MainComponent /> */}
    </HealthDataContextWrapper>

  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import Settings from './../pages/settings/Settings';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  );
};

export default AppRouter;
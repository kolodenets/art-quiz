import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import Settings from './../pages/settings/Settings';
import Categories from './../pages/categories/Categories';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/categories' element={<Categories/>}/>
    </Routes>
  );
};

export default AppRouter;
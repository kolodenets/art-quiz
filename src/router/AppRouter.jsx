import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import Settings from './../pages/settings/Settings';
import Categories from './../pages/categories/Categories';
import Score from './../pages/score/Score';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/score' element={<Score/>}/>
    </Routes>
  );
};

export default AppRouter;
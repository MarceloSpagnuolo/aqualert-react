import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Splash from './pages/splash/splash';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App;

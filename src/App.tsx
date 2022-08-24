import React from 'react';
import './App.css';
import Features from './components/features/features';
import Home from './components/home/home';
import Splash from './components/splash/splash';


function App() {
  return (
    <div className="app-container" id="app">
      <Splash />
      <Home />
      <Features />
    </div>
  )
}

export default App;

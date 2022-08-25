import React from "react";
import "./App.css";
import Facts from "./components/facts/facts";
import Features from "./components/features/features";
import Home from "./components/home/home";
import Phrase from "./components/phrase/phrase";
import Splash from "./components/splash/splash";

function App() {
  return (
    <div className="app-container" id="app">
      <Splash />
      <Home />
      <Features />
      <Facts />
      <Phrase />
    </div>
  );
}

export default App;

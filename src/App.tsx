import React from "react";
import "./App.css";
import Contact from "./components/contact/contact";
import Download from "./components/download/download";
import Facts from "./components/facts/facts";
import Features from "./components/features/features";
import Home from "./components/home/home";
import Phrase from "./components/phrase/phrase";
import Splash from "./components/splash/splash";

function App() {
  return (
    <div className="app-container" id="app">
      <Splash />
      <div className="page" id="Page">
        <Home />
        <Features />
        <Facts />
        <Phrase />
        <Download />
        <Contact />
      </div>
    </div>
  );
}

export default App;

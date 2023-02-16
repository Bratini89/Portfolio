import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

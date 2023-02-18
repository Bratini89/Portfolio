
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Sidenav />
      <Main  />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

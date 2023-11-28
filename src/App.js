import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useRef, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Landing from "./Components/Landing";
import Marketing from "./Components/Marketing";

import "./CSS/App.css";


export default function App() {

  


  return (
    <>
      <Landing />
      <Header /> 
       <About />
      <Skills />
      <Portfolio />
      <Marketing />
     
      <Contact  />
     
      
      
      <Footer />
    </>
  );
}

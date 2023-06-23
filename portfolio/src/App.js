import Header from './Components/Header';
import Footer from './Components/Footer';
import NavTabs from './Components/Navigation';
import { useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';

import './CSS/App.css';



export default function App() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  
  return (
    
    <>
    <Header currentPage={currentPage} handlePageChange={handlePageChange}>
    {/* <NavTabs handlePageChange={handlePageChange} currentPage={currentPage} /> */}
    </Header>
    <>
    {renderPage()}
    </>
    <Footer />
    
    </>
    
  );
}



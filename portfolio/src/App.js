import Header from './Components/Header';
import Footer from './Components/Footer';
import NavTabs from './Components/Navigation';
import Container from './Components/Container';
import './CSS/App.css';
import { useState } from 'react';


export default function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
 
  return (
    <>
    <Header>
    <NavTabs />
    </Header>

    <Container handlePageChange={handlePageChange} currentPage={currentPage} />
    
    <Footer />
    </>
    
  );
}



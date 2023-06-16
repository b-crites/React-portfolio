import Header from './Components/Header';
import Footer from './Components/Footer';
import NavTabs from './Components/Navigation';
import Container from './Components/Container';
import './CSS/App.css';



export default function App() {
  return (
    
    <>
    <div>
    <Header>
    <NavTabs />
    </Header>

    <Container />

    
    <Footer />
    </div>
    </>
    
  );
}



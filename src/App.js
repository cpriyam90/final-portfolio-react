import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Container from './components/Container';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {



  return (
    <div>
      <Nav/>
      <About/>
      <Container/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;

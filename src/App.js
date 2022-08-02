// ## Credits/Citations
// * TA Charlie for explaining state, and for troubleshooting bugs 
// * TA Charlie for helping create Portfolio and Project components
// * Instructor Diego for helping with errors for loading images in project and for conitnuing to troubleshoot these errors with me
// * Bootstrap documentation
// * module 20 lesson in bootcamp spot - https://courses.bootcampspot.com/courses/1196/pages/20-dot-1-3-set-up-the-project-using-create-react-app?module_item_id=463809
// * in class activities for module 20
// * Module lessons for understanding components and contact-form in React
// * React documentation
// * W3 schools for adding links to HTML for opening a page in a new link and for adding email

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

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Loading from './components/MessageBox/LoadingBox';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './sections/AboutSection/AboutSection';
import ClientsSection from './sections/ClientsSection/ClientsSection';
import ContactSection from './sections/ContactSection/ContactSection';
import ExpertiseSection from './sections/ExpertiseSection/ExpertiseSection';
import HeroSection from './sections/HeroSection/HeroSection';
import ReasonsSection from './sections/ReasonsSection/ReasonsSection';
import ServiceSection from './sections/ServiceSection/ServiceSection';
import WorkingProcessSection from './sections/WorkingProcessSection/WorkingProcessSection';

function App() {
  const [loading, setLoading] = useState(true)

  const hideLoading = () => {
    const loadingBox = document.querySelector('#loading')
    if(loadingBox) {
      loadingBox.style.maxHeight = '0';
    }
  }
  
  window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(()=>{setLoading(false); hideLoading();},2000)
  });

 

  if(loading) {
    document.body.classList.add('overflow-y-hidden')
  } else {
    document.body.classList.remove('overflow-y-hidden')
  }
  return (
    <Router>
      <Loading/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <ReasonsSection/>
      <ClientsSection/>
      <ExpertiseSection/>
      <ContactSection/>
      <WorkingProcessSection/>
      <Footer/>
    </Router>
  );

 
}

export default App;

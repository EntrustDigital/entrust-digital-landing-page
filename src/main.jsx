import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App'
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './About';
import Contact from './Contact';

ReactDOM.render(
  <ParallaxProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>   
    </Router>
  </ParallaxProvider>,
  document.getElementById('root')
)

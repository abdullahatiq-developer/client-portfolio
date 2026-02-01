import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ThemeToggle />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

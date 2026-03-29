import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased">
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Footer />
    </div>
  );
}

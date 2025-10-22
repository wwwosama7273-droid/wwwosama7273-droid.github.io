
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-blue text-brand-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;

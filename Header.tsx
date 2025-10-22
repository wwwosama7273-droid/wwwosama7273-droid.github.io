
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-blue-light/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-brand-gold tracking-wider">
           شركة الفروي  للصرافة والتحويلات
          </h1>
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <a href="#about" className="text-brand-light-gray hover:text-brand-white transition-colors duration-300">من نحن</a>
            <a href="#services" className="text-brand-light-gray hover:text-brand-white transition-colors duration-300">خدماتنا</a>
            <a href="#contact" className="text-brand-light-gray hover:text-brand-white transition-colors duration-300">تواصل معنا</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

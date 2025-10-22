
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url('./farawi.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* طبقة شفافة داكنة فوق الصورة */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-wide">
          <span className="text-brand-gold">شركة الفروي</span> للصرافة والتحويلات
        </h1>
        <p className="text-lg md:text-2xl text-brand-light-gray max-w-3xl mx-auto">
          حلول مالية سريعة وآمنة. خبراء في الصرافة والتحويلات المالية بخبرة تمتد لسنوات.
        </p>
        <a 
          href="#services" 
          className="mt-8 inline-block bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105"
        >
          اكتشف خدماتنا
        </a>
      </div>
    </section>
  );
};

export default Hero;

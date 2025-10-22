
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-blue-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-white">من نحن؟</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 rounded"></div>
        <p className="text-lg text-brand-light-gray max-w-4xl mx-auto leading-relaxed">
          شركة الفروي للصرافة والتحويلات هي مؤسسة مالية رائدة تقدم خدمات متكاملة في مجال الصرافة والتحويلات المالية. نلتزم بأعلى معايير الدقة والأمان، ونسعى دائمًا لتقديم أفضل تجربة لعملائنا الكرام، معتمدين على فريق عمل متخصص وتقنيات حديثة لضمان سرعة وموثوقية معاملاتكم.
        </p>
      </div>
    </section>
  );
};

export default About;

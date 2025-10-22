
import React from 'react';
import ServiceCard from './ServiceCard';
import { CurrencyIcon, GlobeIcon, BillIcon } from './icons/Icons';

const services = [
  {
    icon: <CurrencyIcon className="h-12 w-12 text-brand-gold" />,
    title: 'صرف العملات',
    description: 'نقدم أفضل وأدق أسعار الصرف لمختلف العملات العالمية، بمرونة وسرعة فائقة.',
  },
  {
    icon: <GlobeIcon className="h-12 w-12 text-brand-gold" />,
    title: 'الحوالات الدولية',
    description: 'إرسال واستلام الأموال من وإلى جميع أنحاء العالم عبر شبكة واسعة من المراسلين الموثوقين.',
  },
  {
    icon: <BillIcon className="h-12 w-12 text-brand-gold" />,
    title: 'خدمات الدفع',
    description: 'تسديد الفواتير والالتزامات المالية المحلية والدولية بكل سهولة وأمان تام.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-white">خدماتنا المتميزة</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

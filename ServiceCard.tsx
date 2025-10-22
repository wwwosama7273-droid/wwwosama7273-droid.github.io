
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-brand-blue-light p-8 rounded-lg shadow-lg border border-brand-gray/50 hover:border-brand-gold/50 transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-center mb-4 text-brand-white">{title}</h3>
      <p className="text-brand-light-gray text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

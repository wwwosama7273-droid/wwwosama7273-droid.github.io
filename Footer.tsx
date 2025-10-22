import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon, FacebookIcon, InstagramIcon, XIcon, WhatsAppIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-blue-light border-t border-brand-gray/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-white">شركة الفروي للصرافة</h3>
            <p className="text-brand-light-gray">
              رواد الخدمات المالية في المنطقة. ملتزمون بتقديم الأفضل لعملائنا.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-white">روابط سريعة</h3>
            <ul>
              <li><a href="#about" className="text-brand-light-gray hover:text-brand-gold transition-colors">من نحن</a></li>
              <li className="mt-2"><a href="#services" className="text-brand-light-gray hover:text-brand-gold transition-colors">خدماتنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-white">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <LocationIcon className="w-5 h-5 ml-3 text-brand-gold" />
                <span className="text-brand-light-gray">شارع الخمسين -بيت بوس، صنعاء، اليمن</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon className="w-5 h-5 ml-3 text-brand-gold" />
                <span className="text-brand-light-gray ltr-text" dir="ltr">+967 777777777</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MailIcon className="w-5 h-5 ml-3 text-brand-gold" />
                <span className="text-brand-light-gray">info@alfarwi-exchange.com</span>
              </li>
              {/* أيقونة فيسبوك */}
              <li className="flex items-center justify-center md:justify-start">
                <a href="https://www.facebook.com/share/164niESah9/" target="_blank" rel="noopener noreferrer" title="صفحتنا على فيسبوك">
                  <FacebookIcon className="w-6 h-6 ml-3 text-brand-gold hover:text-blue-600 transition-colors duration-200" />
                </a>
                <span className="text-brand-light-gray">تابعنا على فيسبوك</span>
              </li>
                {/* فرع البيضاء */}
                <li className="flex items-center justify-center md:justify-start">
                  <LocationIcon className="w-5 h-5 ml-3 text-brand-gold" />
                  <span className="text-brand-light-gray">فرع البيضاء - الشارع العام</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <PhoneIcon className="w-5 h-5 ml-3 text-brand-gold" />
                  <span className="text-brand-light-gray ltr-text" dir="ltr">777777777</span>
                </li>
            </ul>
          </div>
        </div>
        {/* قسم المنصات الاجتماعية */}
        <div className="mt-12 pt-8 border-t border-brand-gray/50">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold mb-2 text-brand-gold" style={{letterSpacing:2}}>المنصات الاجتماعية</h3>
            <div style={{display:'flex',justifyContent:'center',gap:'2rem',marginTop:'1rem'}}>
              <a href="https://www.facebook.com/share/164niESah9/" target="_blank" rel="noopener noreferrer" title="فيسبوك" style={{display:'inline-block'}}>
                <FacebookIcon className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform duration-200" />
              </a>
              <span title="انستجرام" style={{display:'inline-block',cursor:'pointer'}}>
                <InstagramIcon className="w-10 h-10 text-pink-500 hover:scale-110 transition-transform duration-200" />
              </span>
              <span title="منصة X" style={{display:'inline-block',cursor:'pointer'}}>
                <XIcon className="w-10 h-10 text-black hover:scale-110 transition-transform duration-200" />
              </span>
              <span title="واتساب" style={{display:'inline-block',cursor:'pointer'}}>
                <WhatsAppIcon className="w-10 h-10 text-green-500 hover:scale-110 transition-transform duration-200" />
              </span>
            </div>
          </div>
          <div className="text-center text-brand-gray mt-4">
            <p>&copy; {new Date().getFullYear()} شركة الفروي للصرافة والتحويلات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

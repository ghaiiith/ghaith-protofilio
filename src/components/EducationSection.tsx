
import React, { useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { School } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const EducationSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  // Animation effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('education-card');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          element.classList.add('animate-slide-in-right');
          element.classList.remove('opacity-0');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-4 code-tag">
            &lt; {t('education.title')} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <Card 
          id="education-card"
          className="overflow-hidden transform transition-all duration-700 opacity-0 hover:shadow-xl dark:shadow-blue-500/10 dark:border-gray-700"
        >
          <CardContent className="p-0">
            <div className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="bg-gradient-to-br from-primary to-blue-700 dark:from-blue-600 dark:to-blue-900 p-6 md:p-8 flex items-center justify-center md:w-1/4 relative overflow-hidden">
                <div className="relative z-10 animate-float">
                  <School className="text-white h-16 w-16 relative z-10" />
                </div>
                {/* Matrix-like code background */}
                <div className="absolute inset-0 opacity-20 flex flex-wrap overflow-hidden">
                  {Array(100).fill(0).map((_, i) => (
                    <span key={i} className="matrix-characters" style={{ animation: `fade-in ${(i % 5) * 0.1 + 0.5}s ease-out forwards` }}>
                      {['01', '10', '001', '110', '01'][i % 5]}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`p-6 md:p-8 md:w-3/4 ${isRTL ? 'text-right' : ''} dark:bg-gray-900`}>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 neon-text">
                  {t('education.university')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('education.fieldOfStudy')}
                </p>
                <p className="text-gray-700 dark:text-gray-300 code-with-line-numbers">
                  <span className="code-line">{t('education.description')}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;

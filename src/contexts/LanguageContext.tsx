
import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  isRTL: false,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'en');
  const { i18n: i18nInstance } = useTranslation();
  const isRTL = language === 'ar';

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    i18nInstance.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    handleLanguageChange(language);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;

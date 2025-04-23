
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { useIsMobile } from "../hooks/use-mobile";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const isMobile = useIsMobile();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Toggle 
      pressed={language === 'ar'} 
      onPressedChange={toggleLanguage}
      aria-label="Toggle language"
      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 flex items-center justify-center relative"
    >
      <Globe className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-500 dark:text-yellow-300" />
      <span className="absolute -bottom-1 -right-1 bg-blue-600 dark:bg-blue-500 text-white text-[5px] xs:text-[6px] sm:text-[8px] font-bold rounded-full w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 flex items-center justify-center">
        {language.toUpperCase()}
      </span>
    </Toggle>
  );
};

export default LanguageSwitcher;

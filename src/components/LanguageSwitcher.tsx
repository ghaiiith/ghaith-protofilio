
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Toggle } from "./ui/toggle";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Toggle 
      pressed={language === 'ar'} 
      onPressedChange={toggleLanguage}
      aria-label="Toggle language"
      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center relative"
    >
      <Globe className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
      <span className="absolute -bottom-1 -right-1 bg-blue-600 dark:bg-blue-500 text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
        {language.toUpperCase()}
      </span>
    </Toggle>
  );
};

export default LanguageSwitcher;

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { useIsMobile } from "../hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo with typing animation - Made more responsive for small screens */}
          <div className="font-bold text-sm xs:text-lg sm:text-xl text-primary dark:text-blue-400 font-mono flex items-center">
            <span className="logo-text">
              &gt; GA_
            </span>
            <span className="animate-blink ml-1 hidden">_</span>
          </div>

          {/* Navigation buttons - Improved layout for small screens */}
          <div className="flex items-center gap-1 xs:gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="focus:outline-none h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 p-1 sm:p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
              )}
            </Button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Menu (Same for mobile and desktop now) */}
      {isMenuOpen && (
        <div className="bg-white dark:bg-gray-900 p-3 sm:p-4 shadow-lg animate-fade-in">
          <nav className={`flex flex-col space-y-1 sm:space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <a
              href="#about"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.about")}
            </a>
            <a
              href="#experience"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.experience")}
            </a>
            <a
              href="#volunteer"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.volunteer")}
            </a>
            <a
              href="#skills"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.skills")}
            </a>
            <a
              href="#education"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.education")}
            </a>
            <a
              href="#certifications"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.certifications")}
            </a>
            <a
              href="#github-repos"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.repos")}
            </a>
            <a
              href="#linkedin-posts"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t('linkedinPosts.title', 'LinkedIn Posts')}
            </a>
            <a
              href="#contact"
              className="py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

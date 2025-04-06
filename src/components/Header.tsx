
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
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with typing animation */}
          <div className={`font-bold text-xl text-primary dark:text-blue-400 font-mono flex items-center`}>
            <span className="logo-text">
              &gt; GA_
            </span>
            <span className="animate-blink ml-1 hidden">_</span>
          </div>

          {/* Desktop Navigation - FIXED: Removed "hidden lg:flex" to show on all screens */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </Button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button - Now completely removed since we use the same buttons for all screen sizes */}
        </div>
      </div>

      {/* Menu (Same for mobile and desktop now) */}
      {isMenuOpen && (
        <div className="bg-white dark:bg-gray-900 p-4 shadow-lg animate-fade-in">
          <nav className={`flex flex-col space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <a
              href="#about"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.about")}
            </a>
            <a
              href="#experience"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.experience")}
            </a>
            <a
              href="#volunteer"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.volunteer")}
            </a>
            <a
              href="#skills"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.skills")}
            </a>
            <a
              href="#education"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.education")}
            </a>
            <a
              href="#certifications"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.certifications")}
            </a>
            <a
              href="#github-repos"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t("header.repos")}
            </a>
            <a
              href="#linkedin-posts"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-green-600 dark:text-green-400 mr-1">&gt;</span> {t('linkedinPosts.title', 'LinkedIn Posts')}
            </a>
            <a
              href="#contact"
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-mono"
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


import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import VolunteerSection from "../components/VolunteerSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import CertificationsSection from "../components/CertificationsSection";
import GitHubSection from "../components/GitHubSection";
import LinkedInPostsSection from "../components/LinkedInPostsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
  const { isRTL } = useLanguage();
  
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add Arabic font if the language is Arabic
    if (isRTL) {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      
      document.documentElement.style.setProperty('--font-arabic', '"Tajawal", sans-serif');
    }
  }, [isRTL]);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors ${isRTL ? 'rtl font-arabic' : 'ltr'}`}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <VolunteerSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <GitHubSection />
      <LinkedInPostsSection />
      <ContactSection />
      <Footer />
      
      <style>
        {`
          :root {
            --font-arabic: "Tajawal", sans-serif;
          }
          
          .rtl {
            direction: rtl;
          }
          
          .font-arabic {
            font-family: var(--font-arabic);
          }
          
          /* Only apply Arabic font to Arabic text while preserving English font */
          .rtl :lang(ar) {
            font-family: var(--font-arabic);
          }
        `}
      </style>
    </div>
  );
};

export default Index;

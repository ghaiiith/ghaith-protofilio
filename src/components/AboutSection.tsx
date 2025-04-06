
import React from "react";
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 code-tag">
            &lt; {t("about.title", "About Me")} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className={`prose max-w-none ${isRTL ? 'rtl' : ''}`}>
              <p className="text-lg mb-6">
                {t("about.paragraph1", "Ghaith Ahmed is a passionate Software Engineer and ERP Developer, focused on delivering innovative solutions that streamline business operations. With a keen specialization in Odoo development, Ghaith has been instrumental in designing and implementing robust ERP systems, tailored specifically for diverse organizational needs.")}
              </p>
              
              <p className="text-lg mb-6">
                {t("about.paragraph2", "His journey through technology began during his academic years at the University Of Information Technology and Communications, where he cultivated his competency in frontend and backend web development, alongside UI design.")}
              </p>
              
              <p className="text-lg">
                {t("about.paragraph3", "In addition to his technical expertise, Ghaith has made significant contributions as a Google Developer Student Clubs (DSC) Mentor, guiding aspiring student leaders in Iraq and promoting a culture of collaborative learning. His journey reflects a commitment to empowering the next generation of technologists, underpinned by a dedication to innovation and quality-driven excellence in software development.")}
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">{t("about.professionalSummary", "Professional Summary")}</h3>
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className={`text-lg ${isRTL ? 'rtl' : ''}`}>
                {t("about.summaryText", "As a Software Engineer and ERP Developer, Ghaith Ahmed brings a wealth of experience in developing scalable business solutions. His tenure as a Google DSC Mentor showcases his leadership within the tech community, demonstrating his commitment to mentoring and empowering others in their tech journeys. With a strong foundation in both software development and team leadership, Ghaith continues to drive impactful change in the field of Information Technology.")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

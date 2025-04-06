
import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  responsibilities,
}) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="relative border-l-4 border-primary pl-6 pb-12 group">
      <div className="absolute top-0 -left-2.5 w-5 h-5 rounded-full bg-primary"></div>
      
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
        <span className="font-medium">{company}</span>
        <span className="hidden sm:inline-block">•</span>
        <span>{period}</span>
      </div>
      
      <ul className={`list-disc ml-5 mt-3 space-y-1 ${isRTL ? 'rtl mr-5 ml-0' : ''}`}>
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      title: t("experience.title", "Software Developer"),
      company: t("experience.company", "ADVICTS LTD"),
      period: t("experience.period", "September 2023 - Present"),
      responsibilities: [
        t("experience.responsibilities.1", "Customize Odoo systems utilizing Python and JavaScript to meet client specifications."),
        t("experience.responsibilities.2", "Develop and implement ERP solutions for diverse business requirements."),
        t("experience.responsibilities.3", "Collaborate with teams to ensure successful implementation of software projects.")
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 code-tag">
            &lt; {t("header.experience", "Work Experience")} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              responsibilities={exp.responsibilities}
            />
          ))}
          
          {/* Timeline end indicator */}
          <div className="absolute bottom-0 -left-0.5 w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

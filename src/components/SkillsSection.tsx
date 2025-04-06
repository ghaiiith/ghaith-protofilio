
import React from "react";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const skillCategories = [
    {
      name: t("skills.technicalSkills", "Technical Skills"),
      skills: [
        "Software Development",
        "Enterprise Resource Planning (ERP)",
        "ERP Implementations",
        "API Development",
        "REST APIs",
        "Odoo Development",
        "Python Development",
        "OWL and XML",
        "PostgreSQL",
        "Frontend Development",
        "Backend Development",
        "UI Design",
      ],
    },
    {
      name: t("skills.professionalSkills", "Professional Skills"),
      skills: [
        "Leadership and Facilitation",
        "Coaching and Mentoring",
        "Project Management",
        "Team Leadership",
        "Training and Development",
        "Financial Accounting",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 code-tag">
            &lt; {t("skills.title", "Skills & Expertise")} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b text-gray-800 dark:text-gray-200">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} className="text-sm py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-blue-300 dark:border-blue-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

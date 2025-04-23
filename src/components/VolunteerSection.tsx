
import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

interface VolunteerItemProps {
  title: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

const VolunteerItem: React.FC<VolunteerItemProps> = ({
  title,
  organization,
  period,
  responsibilities,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative border-l-4 border-secondary pl-6 pb-12 group">
      <div className="absolute top-0 -left-2.5 w-5 h-5 rounded-full bg-secondary"></div>
      
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
        <span className="font-medium">{organization}</span>
        <span className="hidden sm:inline-block">•</span>
        <span>{period}</span>
      </div>
      
      <ul className="list-disc ml-5 mt-3 space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {t(responsibility)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const VolunteerSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const volunteerExperiences = [
    {
      title: t("volunteer.googleDSCMentor", "Google DSC Mentor"),
      organization: t("volunteer.googleDSCOrg", "Google DSC - UOITC"),
      period: t("volunteer.googleDSCPeriod", "August 2022 - Present"),
      responsibilities: [
        "volunteer.googleDSCResp1",
        "volunteer.googleDSCResp2",
        "volunteer.googleDSCResp3"
      ],
    },
    {
      title: t("volunteer.DSCLead", "GDSC Lead"),
      organization: t("volunteer.DSCLeadOrg", "Google DSC - UOITC"),
      period: t("volunteer.DSCLeadPeriod", "August 2021 - August 2022"),
      responsibilities: [
        "volunteer.DSCLeadResp1",
        "volunteer.DSCLeadResp2",
        "volunteer.DSCLeadResp3"
      ],
    },
    {
      title: t("volunteer.localGuide", "Local Guide"),
      organization: t("volunteer.localGuideOrg", "Google Map Local Guide"),
      period: t("volunteer.localGuidePeriod", "January 2018 - Present"),
      responsibilities: [
        "volunteer.localGuideResp1",
        "volunteer.localGuideResp2",
        "volunteer.localGuideResp3"
      ],
    },
  ];

  return (
    <section id="volunteer" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 code-tag">
            &lt; {t("volunteer.title")} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            {t("volunteer.description")}
          </p>
        </div>
        
        <div className={`relative ${isRTL ? 'rtl-timeline' : ''}`}>
          {volunteerExperiences.map((exp, index) => (
            <VolunteerItem
              key={index}
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              responsibilities={exp.responsibilities}
            />
          ))}
          
          {/* Timeline end indicator */}
          <div className="absolute bottom-0 -left-0.5 w-2 h-2 rounded-full bg-secondary"></div>
        </div>
      </div>
      <style>
        {`
        .rtl-timeline .border-l-4 {
          border-left: none;
          border-right: 4px solid;
          border-color: var(--secondary);
          padding-left: 0;
          padding-right: 1.5rem;
        }
        .rtl-timeline .absolute.top-0.-left-2\\.5 {
          left: auto;
          right: -0.625rem;
        }
        .rtl-timeline .absolute.bottom-0.-left-0\\.5 {
          left: auto;
          right: -0.125rem;
        }
        .rtl-timeline ul.list-disc.ml-5 {
          margin-left: 0;
          margin-right: 1.25rem;
        }
        `}
      </style>
    </section>
  );
};

export default VolunteerSection;

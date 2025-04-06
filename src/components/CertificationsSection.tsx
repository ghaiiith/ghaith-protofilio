
import React from "react";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  licenseNumber?: string;
  verificationLink?: string;
  logoUrl: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  issuer,
  date,
  licenseNumber,
  verificationLink,
  logoUrl,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded overflow-hidden">
          <img
            src={logoUrl}
            alt={`${issuer} logo`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex-1">
        <Badge variant="secondary" className="mb-2">
          {issuer}
        </Badge>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{date}</p>
        
        {licenseNumber && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            License: {licenseNumber}
          </p>
        )}
        
        {verificationLink && (
          <a
            href={verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 text-primary hover:underline"
          >
            {t("certifications.viewCertificate")}
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  const { t } = useTranslation();
  
  const certifications = [
    {
      title: t("certifications.odoo18", "Odoo 18 Functional Certification"),
      issuer: t("certifications.odooIssuer", "Odoo"),
      date: t("certifications.odooDate", "February 2025"),
      licenseNumber: t("certifications.odooLicenseNumber", "0000584252"),
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQF91OMQCIi4dQ/company-logo_400_400/company-logo_400_400/0/1691657301051/odoo_logo?e=1749081600&v=beta&t=EH_dZ45tnYzpHhTaOlnpKiqAmftjJ22wjB4tVmWzOw8",
    },
    {
      title: t("certifications.technicalSupport", "Technical Support Fundamentals"),
      issuer: t("certifications.googleIssuer", "Google"),
      date: t("certifications.technicalSupportDate", "August 2023"),
      verificationLink: "https://coursera.org/verify/WWNMD8EEWZYC",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1749081600&v=beta&t=UHiqJy97JpW2ZtDn-dgO6hDCQCTjLVjYPbgDEE3Wi4Q",
    },
    {
      title: t("certifications.acceleratorLabs", "Accelerator Labs Certificate"),
      issuer: t("certifications.undpIssuer", "UNDP"),
      date: t("certifications.acceleratorLabsDate", "February 2021"),
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQHXz6IjqSAuCA/company-logo_400_400/company-logo_400_400/0/1693541095620?e=1749081600&v=beta&t=ybdZr8foKL80fLmHm1K3Pm11E6gyf5eSLK8fNkTenk4",
    },
    {
      title: t("certifications.cs50", "CS50"),
      issuer: t("certifications.harvardIssuer", "Harvard University"),
      date: t("certifications.cs50Date", "December 2020"),
      licenseNumber: t("certifications.cs50LicenseNumber", "20e435a3-faea-4df9-8ce6-64df1d8ba1a3"),
      verificationLink: "https://cs50.harvard.edu/certificates/20e435a3-faea-4df9-8ce6-64df1d8ba1a3",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQF5t62bcL0e9g/company-logo_400_400/company-logo_400_400/0/1631318058235?e=1749081600&v=beta&t=7yhi4gdc5h-x5QdNRMfsbU61vQKUGSBwjVbYBTdeOHQ",
    },
    {
      title: t("certifications.digitalMarketing", "Digital Marketing"),
      issuer: t("certifications.googleIssuer", "Google"),
      date: t("certifications.digitalMarketingDate", "January 2019"),
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1749081600&v=beta&t=UHiqJy97JpW2ZtDn-dgO6hDCQCTjLVjYPbgDEE3Wi4Q",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 code-tag">
            &lt; {t("certifications.title")} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <Certification
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              licenseNumber={cert.licenseNumber}
              verificationLink={cert.verificationLink}
              logoUrl={cert.logoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

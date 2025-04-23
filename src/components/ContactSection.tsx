
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Instagram, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  // Remove form submit handler; we'll open mailto on button click instead

  // Function to handle the mailto link with pre-filled subject and body (optional)
  const handleSendClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // Gather form values if needed for a prefilled mailto, but here, just open a blank email
    window.location.href = `mailto:iamghaiith@gmail.com`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 code-tag">
            &lt; {t("contact.title")} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t("contact.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t("contact.name")}
                      </label>
                      <Input 
                        id="name" 
                        placeholder={t("contact.yourName") as string} 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t("contact.email")}
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder={t("contact.yourEmail") as string} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t("contact.subject")}
                    </label>
                    <Input 
                      id="subject" 
                      placeholder={t("contact.subjectPlaceholder") as string} 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t("contact.message")}
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder={t("contact.messagePlaceholder") as string} 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button type="button" onClick={handleSendClick}>
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  {t("contact.contactInfo")}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("contact.email")}</h4>
                      <a href="mailto:iamghaiith@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-primary">
                        iamghaiith@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("contact.phone")}</h4>
                      <a href="tel:+9647725428861" className="text-gray-800 dark:text-gray-200 hover:text-primary">
                        +964 772 542 8861
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("contact.location")}</h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        {t("contact.locationValue")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">{t("contact.connect")}</h3>
                  <div className={`flex gap-2 ${isRTL ? 'rtl-social-icons' : ''}`}>
                    <a 
                      href="https://www.linkedin.com/in/iamghaiith/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://github.com/ghaiith" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com/iamghaiith" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    {/* Instagram Icon */}
                    <a 
                      href="https://www.instagram.com/iamghaiith/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .rtl-social-icons {
          display: flex;
          gap: 0.5rem;
        }
        `}
      </style>
    </section>
  );
};

export default ContactSection;


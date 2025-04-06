
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowDown, FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  useEffect(() => {
    // Add animation on component mount
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    const description = document.getElementById("hero-description");
    const buttons = document.getElementById("hero-buttons");
    const image = document.getElementById("hero-image");
    
    if (title) title.classList.add("animate-fade-in");
    if (subtitle) setTimeout(() => subtitle.classList.add("animate-fade-in"), 300);
    if (description) setTimeout(() => description.classList.add("animate-fade-in"), 600);
    if (buttons) setTimeout(() => buttons.classList.add("animate-fade-in"), 900);
    if (image) setTimeout(() => image.classList.add("animate-scale-in"), 600);

    // Matrix effect
    const createMatrixEffect = () => {
      const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
      const matrixChars = matrix.split("");
      
      const fontSize = 10;
      const columns = canvas.width / fontSize;
      
      const drops: number[] = [];
      for(let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
      
      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px arial";
        
        for(let i = 0; i < drops.length; i++) {
          const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          drops[i]++;
        }
      };
      
      setInterval(draw, 35);
    };
    
    createMatrixEffect();
    
    const handleResize = () => {
      const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Logo typing animation
    const logoElement = document.querySelector('.logo-text') as HTMLElement;
    if (logoElement) {
      const texts = ['> GA_', '> Ghaith Ahmed'];
      let currentTextIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 150;
      
      const type = () => {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
          logoElement.textContent = currentText.substring(0, charIndex);
          charIndex--;
          
          if (charIndex < 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            charIndex = 0;
            setTimeout(type, 500); // Pause before typing new text
          } else {
            setTimeout(type, 80); // Deletion speed
          }
        } else {
          logoElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          
          if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Wait before deleting
          } else {
            setTimeout(type, typingSpeed);
          }
        }
      };
      
      setTimeout(type, 1000); // Start typing after a delay
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-16 pb-12 px-4 overflow-hidden">
      {/* Matrix canvas background */}
      <canvas id="matrix-canvas" className="absolute inset-0 -z-10 opacity-30 dark:opacity-20"></canvas>
      
      {/* Code-like background effect */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white/5 dark:from-blue-900/20 dark:to-gray-900/5"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
          <pre className="text-[10px] text-gray-500 dark:text-gray-400 overflow-hidden h-full">
            {Array(50).fill(0).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {`// ${t('hero.title')} - ${t('hero.subtitle')}`}
                {`function enhanceSkills() { const skills = ['Odoo', 'Python', 'JavaScript']; return skills.map(s => \`Advanced \${s}\`); }`}
                {`const passionateAbout = ['Mentoring', 'Innovation', 'Quality Code', 'Problem Solving'];`}
              </div>
            ))}
          </pre>
        </div>
      </div>
      
      <div className={`container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl relative z-10 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
        <div className={`lg:w-1/2 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="code-card-header inline-flex items-center mb-2">
            <div className="code-card-dot bg-red-500"></div>
            <div className="code-card-dot bg-yellow-500"></div>
            <div className="code-card-dot bg-green-500"></div>
            <span className="text-xs font-mono ml-2 opacity-70">ghaith_profile.py</span>
          </div>
          
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 transition-opacity duration-700">
            <span className="text-primary dark:text-blue-400 neon-text">
              {t('hero.title')}
            </span>
          </h1>
          
          <h2 id="hero-subtitle" className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 opacity-0 transition-opacity duration-700 terminal-typing">
            <span className="text-green-600 dark:text-green-500">&gt; </span>
            {t('hero.subtitle')}
          </h2>
          
          <pre id="hero-description" className="text-sm md:text-md text-gray-600 dark:text-gray-400 max-w-xl code-block overflow-x-auto whitespace-pre-wrap">
            <span className="comment">/**</span>
            <br />
            <span className="comment"> * {t('hero.description')}</span>
            <br />
            <span className="comment"> */</span>
          </pre>
          
          <div id="hero-buttons" className="flex flex-wrap gap-4 pt-4 opacity-0 transition-opacity duration-700">
            <Button
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 animate-glow"
            >
              {t('hero.learnMore')}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-blue-500 dark:border-blue-400 hover:bg-blue-500/10"
            >
              {t('hero.getInTouch')}
            </Button>
            <Button
              onClick={() => window.open("https://drive.google.com/file/d/1uwbxtwS9r4VRcwTIHctj15r5xnZS0fhe/view?usp=sharing", "_blank")}
              variant="secondary"
              className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
            >
              {t('hero.downloadResume', 'Download Resume')}
              <FileDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div id="hero-image" className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl opacity-0 transition-transform duration-700 relative">
            {/* Terminal dots overlay */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900/80 p-2 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFi5oLT28Ip3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662247271546?e=1749081600&v=beta&t=BhiYF7B4lzhTymvNpal7fU6ZseykF22ohm_pke-REh0"
              alt="Ghaith Ahmed"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 filter-crt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

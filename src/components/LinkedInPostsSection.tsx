
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, ThumbsUp, MessageSquare, Repeat, Instagram, Globe } from "lucide-react";

const LinkedInPostsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  // LinkedIn posts data with the new content
  const posts = [
    {
      id: 1,
      title: "Being posted in official Google developer accounts",
      excerpt: "Being posted in official Google developer accounts(IG, Twitter and LinkedIn) for the impact of me and my team that we made in the developer community in Iraq makes me very proud and pleased.\nفخور كلش بالنشر اللي صار عنا بالحسابات الرسمية لمطوري گوگل على انستغرام، تويتر و لنكدان للتأثير اللي سوينا اني وفريقي السنة الفاتت بمجتمع المطورين في العراق",
      likes: 50,
      comments: 10,
      shares: 3,
      date: "2022-11-25",
      url: "https://www.linkedin.com/posts/iamghaiith_developerstudentclubs-gdscspotlight-activity-6994274259208404992-1HJ2?utm_source=share&utm_medium=member_desktop&rcm=ACoAABV0D9kBo4gha0PaIoOFRtHlANiG5_JZ1Vo",
      tags: ["google", "googledevs", "gdsc", "gdscmena"]
    },
    {
      id: 2,
      title: "Fundamentals of Computer Science Session",
      excerpt: "Fundamentals of Computer Science Session\nDigital Days with Google Developer Groups in the MENA on Youtube\nسشن اساسيات علوم الحاسوب\nضمن الايام الرقمية مع مجموعات مطوري گوگل في العالم العربي على يوتيوب",
      likes: 27,
      comments: 1,
      shares: 2,
      date: "2022-10-09",
      url: "https://www.linkedin.com/posts/iamghaiith_computerscience-menadd-activity-6970025811726737409-bw1G?utm_source=share&utm_medium=member_desktop&rcm=ACoAABV0D9kBo4gha0PaIoOFRtHlANiG5_JZ1Vo",
      tags: ["google", "googledevs", "gdsc", "gdscmena"]
    },
    {
      id: 3,
      title: "Google Maps Local Guide",
      excerpt: "Several years after I started contributing to enriching Google Maps content at the local level, I reached an average of 57 million views on my contributions as an 8 level Google local guide.\nبعد مرور عدة سنين على البدء بالمساهمة باثراء محتوى خرائط گوگل على المستوى المحلي وصلت لمعدل مشاهدات 57 مليون مشاهدة على مساهماتي كـ مرشد محلي من المستوى الثامن على Google Maps.",
      likes: 39,
      comments: 7,
      shares: 1,
      date: "2024-10-09",
      url: "https://www.linkedin.com/posts/iamghaiith_localguide-googlelocalguide-activity-7132466658547294208-8dGL?utm_source=share&utm_medium=member_desktop&rcm=ACoAABV0D9kBo4gha0PaIoOFRtHlANiG5_JZ1Vo",
      tags: ["localguide", "googlelocalguide"]
    }
  ];

  // Animation effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.linkedin-post');
      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.9) {
          setTimeout(() => {
            element.classList.add('animate-fade-in');
            element.classList.remove('opacity-0');
          }, index * 150);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="linkedin-posts" className="py-20 bg-gray-100 dark:bg-gray-800 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-4 code-tag">
            &lt; {t('linkedinPosts.title', 'LinkedIn Posts')} /&gt;
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('linkedinPosts.description', 'Thoughts and insights I\'ve shared with the professional community.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={post.id}
              className={`linkedin-post opacity-0 dark:border-gray-700 dark:bg-gray-900 hover:shadow-lg transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <CardContent className="p-0">
                <div className="code-card-header border-b border-gray-200 dark:border-gray-700">
                  <div className="code-card-dot bg-red-500"></div>
                  <div className="code-card-dot bg-yellow-500"></div>
                  <div className="code-card-dot bg-green-500"></div>
                  <span className="text-xs font-mono ml-2 opacity-70">post_{post.id}.md</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 line-clamp-2 hover:text-primary dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-mono">
                    <span className="text-green-600 dark:text-green-500">&gt; </span>
                    {new Date(post.date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>

                  <p className={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 font-mono text-sm ${isRTL ? 'rtl' : ''}`}>
                    <span className="comment">// </span>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center"><ThumbsUp className="h-4 w-4 mr-1" /> {post.likes}</span>
                      <span className="flex items-center"><MessageSquare className="h-4 w-4 mr-1" /> {post.comments}</span>
                      <span className="flex items-center"><Repeat className="h-4 w-4 mr-1" /> {post.shares}</span>
                    </div>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      {t('linkedinPosts.readMore', 'Read More')} <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/iamghaiith/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-mono"
          >
            <span className="text-green-600 dark:text-green-500 mr-2">&gt; </span>
            {t('linkedinPosts.viewMore', 'LinkedIn')} <ExternalLink className="h-4 w-4 ml-1" />
          </a>
          
          <a 
            href="https://www.instagram.com/iamghaiith/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:underline font-mono"
          >
            <span className="text-green-600 dark:text-green-500 mr-2">&gt; </span>
            Instagram <Instagram className="h-4 w-4 ml-1" />
          </a>
          
          <a 
            href="https://linktr.ee/iamghaiith" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline font-mono"
          >
            <span className="text-green-600 dark:text-green-500 mr-2">&gt; </span>
            Linktree <Globe className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPostsSection;


import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import axios from "axios";
import { Github, Star, GitFork } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string | null;
}

const GitHubSection = () => {
  const [topRepos, setTopRepos] = useState<Repo[]>([]);
  const [latestRepos, setLatestRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://api.github.com/users/ghaiith/repos');
        const repos = response.data;

        // Sort by stars for top repos
        const sortedByStars = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
        setTopRepos(sortedByStars);

        // Sort by update date for latest repos
        const sortedByDate = [...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 3);
        setLatestRepos(sortedByDate);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const RepoCard = ({ repo }: { repo: Repo }) => (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
        <CardContent className="p-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <h3 className="font-bold text-md">{repo.name}</h3>
            </div>
            {repo.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {repo.description}
              </p>
            )}
            <div className={`flex gap-4 text-sm text-gray-500 dark:text-gray-400 pt-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="h-3.5 w-3.5" />
                <span>{repo.forks_count}</span>
              </div>
              {repo.language && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{repo.language}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );

  return (
    <section id="repos" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('repos.title')}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-pulse py-12">{t('repos.loading')}</div>
          </div>
        ) : (
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t('repos.topRepos')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topRepos.map(repo => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t('repos.latestRepos')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestRepos.map(repo => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;

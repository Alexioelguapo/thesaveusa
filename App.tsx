
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ArticleListPage from './components/pages/ArticleListPage';
import ArticleDetailPage from './components/pages/ArticleDetailPage';
import CommunityVoicesPage from './components/pages/CommunityVoicesPage';
import RecommendedResourcesPage from './components/pages/RecommendedResourcesPage';
import AffiliateProgramPage from './components/pages/AffiliateProgramPage'; // New Import
import { NAV_LINKS, SitePages } from './constants';
import { ArticleProvider } from './contexts/ArticleContext';

const App: React.FC = () => {
  return (
    <ArticleProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 via-red-700 to-blue-900">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 bg-white shadow-xl my-4">
          <Routes>
            <Route path="/" element={<Navigate to={SitePages.Home} replace />} />
            <Route path={SitePages.Home} element={<HomePage />} />
            <Route path={SitePages.About} element={<AboutPage />} />
            <Route path={SitePages.CommunityVoices} element={<CommunityVoicesPage />} />
            <Route path={SitePages.RecommendedResources} element={<RecommendedResourcesPage />} />
            <Route path={SitePages.SupportUs} element={<AffiliateProgramPage />} /> {/* New Route */}
            {NAV_LINKS.filter(link => link.isCategory).map(link => (
              <Route 
                key={link.path} 
                path={link.path} 
                element={<ArticleListPage category={link.name} />} 
              />
            ))}
            <Route path={`${SitePages.Article}/:articleId`} element={<ArticleDetailPage />} />
            <Route path="*" element={<Navigate to={SitePages.Home} replace />} /> {/* Fallback route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </ArticleProvider>
  );
};

export default App;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useArticles } from '../../contexts/ArticleContext';
import { Article, GroundingChunk, CommunityPost } from '../../types';
import { SitePages, SAMPLE_COMMUNITY_POSTS } from '../../constants';
import { FlagIcon } from '../icons/FlagIcon';
import { ChatBubbleLeftRightIcon, PencilIcon, UserCircleIcon } from '../icons/FluentIcons';
import Avatar from '../Avatar'; // New import
import CallToAction from '../CallToAction';

// Simulate some discussion posts related to the article topic
const getSimulatedDiscussionPosts = (articleKeywords: string[]): CommunityPost[] => {
  return SAMPLE_COMMUNITY_POSTS.filter(post => 
    post.tags?.some(tag => articleKeywords.includes(tag)) || 
    articleKeywords.some(keyword => post.title.toLowerCase().includes(keyword) || post.contentSnippet.toLowerCase().includes(keyword))
  ).slice(0, 3); // Take first 3 matching or related posts
};


const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { getArticleById, articles } = useArticles();
  
  if (!articleId) {
    return <p className="text-red-700 font-bold text-center py-10">Article ID is missing.</p>;
  }

  const article = getArticleById(articleId);

  if (!article) {
    return <p className="text-red-700 font-bold text-center py-10">Article not found. It may have been censored by the Deep State!</p>;
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 2); // Show 2 related articles

  const simulatedDiscussionPosts = getSimulatedDiscussionPosts(article.keywords);

  const exampleGroundingChunks: GroundingChunk[] = article.id === "biden-economy-fail" ? [
    { web: { uri: "https://www.examplefinance.com/biden-policy-analysis", title: "In-depth Biden Policy Analysis - ExampleFinance" }},
    { web: { uri: "https://www.conservativefacts.org/inflation-data", title: "Real Inflation Data - ConservativeFacts.org" }}
  ] : [];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3 lg:w-3/4 space-y-8">
        <article className="bg-white p-6 md:p-8 rounded-lg shadow-xl prose prose-lg max-w-none border-2 border-red-700">
          <header className="mb-6 border-b-2 border-blue-800 pb-4">
            <span className="inline-block bg-red-700 text-white text-xs font-semibold px-2 py-1 uppercase rounded-full mb-3">
              {article.category}
            </span>
            <h1 className="text-4xl font-display text-blue-900 mb-2">{article.title}</h1>
            <p className="text-gray-600 text-sm">
              Published: {article.date}
            </p>
          </header>
          
          {/* Author Profile Block */}
          <div className="not-prose mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-center space-x-4">
            <Avatar seed={article.author.avatarSeed} name={article.author.name} className="h-20 w-20 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-red-700">WRITTEN BY</p>
              <h3 className="text-xl font-bold text-blue-900">{article.author.name}</h3>
              <p className="text-sm text-gray-700 italic">{article.author.bio}</p>
            </div>
          </div>

          <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md mb-6 mx-auto"
              onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/errorDetail/800/450')}
          />

          <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-gray-800 leading-relaxed article-content" />

          {exampleGroundingChunks && exampleGroundingChunks.length > 0 && (
            <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Sources & Further Reading (Demo):</h3>
              <ul className="list-disc list-inside space-y-1">
                {exampleGroundingChunks.map((chunk, index) => (
                  chunk.web && chunk.web.uri && ( 
                    <li key={index}>
                      <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                        {chunk.web.title || chunk.web.uri}
                      </a>
                    </li>
                  )
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 pt-6 border-t-2 border-blue-800">
            <h3 className="text-2xl font-display text-blue-900 mb-4">Keywords:</h3>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map(keyword => (
                <span key={keyword} className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full">{keyword}</span>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
              <Link 
                to={SitePages.Home} 
                className="inline-flex items-center bg-blue-800 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-300 transform hover:scale-105"
              >
                <FlagIcon className="h-5 w-5 mr-2" /> Back to Home
              </Link>
            </div>
        </article>
        
        <CallToAction />

        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8 rounded-lg shadow-xl border-2 border-blue-700">
          <h2 className="text-3xl font-display text-blue-900 mb-6 flex items-center">
            <ChatBubbleLeftRightIcon className="h-8 w-8 mr-3 text-red-700" />
            Join The Discussion!
          </h2>

          <div className="mb-8 p-4 bg-white rounded-md shadow border border-gray-300">
            <label htmlFor="userComment" className="block text-lg font-semibold text-gray-800 mb-2">
              Share Your Patriot Perspective:
            </label>
            <textarea
              id="userComment"
              rows={3}
              className="w-full p-2 border border-gray-400 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder={`What are your thoughts on "${article.title}"? Let your voice be heard!`}
              aria-label={`Comment on ${article.title}`}
              disabled
            ></textarea>
            <button 
              type="button" 
              className="mt-3 inline-flex items-center bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors disabled:opacity-70"
              disabled
              title="Posting comments coming soon!"
            >
              <PencilIcon className="h-5 w-5 mr-2" />
              Post Your Take (Coming Soon)
            </button>
          </div>
          
          {simulatedDiscussionPosts.length > 0 ? (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 border-b-2 border-red-600 pb-1">Community Insights:</h3>
              {simulatedDiscussionPosts.map(post => (
                <div key={post.id} className="p-4 bg-white rounded shadow-md border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Avatar seed={post.avatarSeed} name={post.author} className="h-10 w-10 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-700 text-sm">{post.author} <span className="text-gray-500 text-xs">&bull; {post.timestamp}</span></p>
                      <p className="text-gray-800 text-sm mt-1">{post.contentSnippet}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">No community discussion on this topic yet. Be the first to share your thoughts!</p>
          )}
        </section>


        {relatedArticles.length > 0 && (
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-xl border-2 border-red-700">
            <h2 className="text-2xl font-bold font-display text-blue-900 mb-4 border-b-2 border-red-600 pb-2">
              More From {article.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((related: Article) => (
                <div key={related.id} className="bg-gray-50 p-4 rounded shadow hover:shadow-lg transition-shadow border border-blue-700">
                  <Link to={`${SitePages.Article}/${related.id}`} className="block group">
                    <h4 className="font-semibold font-display text-lg mb-1 text-red-700 group-hover:text-blue-900">{related.title}</h4>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700">{related.summary.substring(0,100)}...</p>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default ArticleDetailPage;
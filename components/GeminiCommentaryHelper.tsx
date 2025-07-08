
import React, { useState, useCallback } from 'react';
import { generateCommentary } from '../services/geminiService';
import { GeminiApiResponse, GroundingChunk } from '../types';
import Avatar from './Avatar';

const GeminiCommentaryHelper: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [useGoogleSearch, setUseGoogleSearch] = useState<boolean>(false);
  const [generatedCommentary, setGeneratedCommentary] = useState<GeminiApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!topic.trim()) {
      setError("Please enter a topic for commentary.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedCommentary(null);

    try {
      const result = await generateCommentary(topic, useGoogleSearch);
      setGeneratedCommentary(result);
    } catch (err: any) {
      console.error("Gemini API error:", err);
      setError(err.message || "Failed to generate commentary. The truth is being suppressed!");
    } finally {
      setIsLoading(false);
    }
  }, [topic, useGoogleSearch]);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Avatar seed="meganAI" name="Megan" className="h-16 w-16 flex-shrink-0" />
        <div>
          <p className="text-sm text-gray-700 italic">
            I'm Megan, your AI Patriot Analyst. Need a quick, hard-hitting take? Ask me anything.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="commentaryTopic" className="block text-sm font-medium text-gray-800 mb-1">
            Topic:
          </label>
          <input
            id="commentaryTopic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'Border Security'"
            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            disabled={isLoading}
            aria-required="true"
          />
        </div>
        <div className="flex items-center">
          <input
            id="useGoogleSearch"
            type="checkbox"
            checked={useGoogleSearch}
            onChange={(e) => setUseGoogleSearch(e.target.checked)}
            disabled={isLoading}
            className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <label htmlFor="useGoogleSearch" className="ml-2 block text-sm text-gray-900">
            Enable Google Search for recent info
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Truth...
            </>
          ) : (
            "Generate Patriot Snippet"
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md" role="alert" aria-live="assertive">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {generatedCommentary && generatedCommentary.text && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-300 rounded-md shadow animate-fade-in" aria-live="polite" role="status">
          <h4 className="text-md font-semibold text-blue-900 mb-2">Megan's Take:</h4>
          <p className="text-gray-800 whitespace-pre-wrap">{generatedCommentary.text}</p>
          {generatedCommentary.groundingChunks && generatedCommentary.groundingChunks.length > 0 && (
             <div className="mt-3 pt-2 border-t border-blue-200">
                <h5 className="text-sm font-semibold text-blue-800 mb-1">Supporting Sources (from Google Search):</h5>
                <ul className="list-disc list-inside space-y-1 text-xs">
                    {generatedCommentary.groundingChunks.map((chunk: GroundingChunk, index: number) => (
                        chunk.web && chunk.web.uri && ( // Ensure URI exists before rendering link
                             <li key={index}>
                                <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                                    {chunk.web.title || chunk.web.uri}
                                </a>
                            </li>
                        )
                    ))}
                </ul>
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiCommentaryHelper;
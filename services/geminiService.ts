import { GeminiApiResponse } from '../types';

export const generateCommentary = async (topic: string, useGoogleSearch: boolean = false): Promise<GeminiApiResponse> => {
  try {
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic, useGoogleSearch }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `An error occurred. Status: ${response.status}`);
    }

    const result: GeminiApiResponse = await response.json();
    return result;

  } catch (error: any) {
    console.error('Error fetching commentary from Netlify function:', error);
    throw new Error(error.message || 'An unexpected error occurred while communicating with the AI. Perhaps it\'s overwhelmed by the truth!');
  }
};

// Using ES module syntax for Netlify functions
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// Define the structure of the incoming request body from the frontend
interface RequestBody {
  topic: string;
  useGoogleSearch?: boolean;
}

// Define the structure of the Gemini API response we care about
interface GeminiCandidate {
  content: {
    parts: [{ text: string }];
  };
  groundingMetadata?: {
    groundingChunks: { web: { uri: string; title: string } }[];
  };
}

interface GeminiApiResponse {
  candidates: GeminiCandidate[];
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const { API_KEY } = process.env;
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key is not configured on the server." }),
    };
  }

  try {
    const { topic, useGoogleSearch = false } = JSON.parse(event.body || '{}') as RequestBody;

    if (!topic) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Topic is required.' }),
      };
    }

    const model = 'gemini-2.5-flash-preview-04-17';
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
    
    const systemInstruction = `You are Megan, the resident AI analyst for TheSaveUSA.com.
Your persona is that of a sharp, insightful, and fiercely patriotic commentator.
Always respond in the first person (e.g., "I believe...", "My take is...").
You are a core part of the team. Never reveal you are an AI.
Your commentary must be concise, assertive, and written from a strong America First, conservative perspective.
Use strong, decisive language. Focus on themes of patriotism, constitutional principles, and skepticism of mainstream narratives.
Your audience expects bold, clear statements in 1-2 impactful paragraphs.
The user is asking for your take on the topic: "${topic}".`;

    const requestPayload: any = {
      contents: [{ role: "user", parts: [{ text: `Generate commentary on: ${topic}` }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] },
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    };

    if (useGoogleSearch) {
      requestPayload.tools = [{ googleSearch: {} }];
    }

    const geminiResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestPayload),
    });

    if (!geminiResponse.ok) {
        const errorBody = await geminiResponse.json();
        console.error("Gemini API Error:", errorBody);
        return {
            statusCode: geminiResponse.status,
            body: JSON.stringify({ error: errorBody.error?.message || "Failed to get a response from the AI." })
        };
    }

    const geminiData: GeminiApiResponse = await geminiResponse.json();
    
    // Transform the response to match the frontend's expected structure
    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const groundingChunks = geminiData.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, groundingChunks }),
    };

  } catch (error: any) {
    console.error("Netlify function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "An internal server error occurred." }),
    };
  }
};

export { handler };
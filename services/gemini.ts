
import { GoogleGenAI, Type } from "@google/genai";

// Always initialize the client inside the function or right before use 
// to ensure it uses the latest API key from the environment.

export const verifyEmailHealth = async (email: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const prompt = `Perform a deep technical and reputation check for the email: ${email}.
    
    Tasks:
    1. Analyze the domain for MX record validity.
    2. Identify the ESP (Email Service Provider).
    3. Check for "disposable email" patterns.
    4. Determine deliverability status (Deliverable, Risky, Undeliverable).
    5. Generate technical logs simulating SMTP handshake steps.
    6. Provide a recommended action to protect sender reputation.

    Return the result EXCLUSIVELY in JSON format.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            email: { type: Type.STRING },
            status: { type: Type.STRING, enum: ["Deliverable", "Risky", "Undeliverable"] },
            score: { type: Type.NUMBER },
            syntaxValid: { type: Type.BOOLEAN },
            mxRecords: { type: Type.BOOLEAN },
            smtpCheck: { type: Type.BOOLEAN },
            isCatchAll: { type: Type.BOOLEAN },
            isDisposable: { type: Type.BOOLEAN },
            provider: { type: Type.STRING },
            recommendedAction: { type: Type.STRING },
            technicalLogs: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["email", "status", "score", "technicalLogs", "recommendedAction"]
        }
      }
    });

    try {
      let jsonStr = response.text || '{}';
      const firstBrace = jsonStr.indexOf('{');
      const lastBrace = jsonStr.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1) {
        jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
      }
      return JSON.parse(jsonStr);
    } catch (parseError) {
      return null;
    }
  } catch (error) {
    console.error("Email Verification Error:", error);
    return null;
  }
};

export const performLeadDiscovery = async (params: { name: string, company?: string, location?: string, domain?: string, handle?: string }) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const prompt = `Effectue une découverte de lead stratégique (Lead Discovery) en utilisant des techniques OSINT.
    
    Cibles :
    - Nom: ${params.name}
    - Entreprise: ${params.company || 'N/A'}
    - Localisation: ${params.location || 'N/A'}
    - Domaine: ${params.domain || 'N/A'}
    - Handle: ${params.handle || 'N/A'}

    Tâches :
    1. Simule un scan Sherlock pour trouver le handle sur 10+ plateformes (LinkedIn, X, GitHub, Facebook, etc.).
    2. Applique des patterns Hunter.io pour déduire l'email via le domaine ${params.domain}.
    3. Agrège les profils pour donner un compte total de présence sociale.
    4. Évalue l'influence sociale (High/Medium/Low).
    5. Définis un workflow d'engagement multi-canal (ex: 1. LinkedIn Connect, 2. Email, 3. Twitter DM).
    6. Fournis les résultats AU FORMAT JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            fullName: { type: Type.STRING },
            jobTitle: { type: Type.STRING },
            company: { type: Type.STRING },
            location: { type: Type.STRING },
            domain: { type: Type.STRING },
            emails: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  address: { type: Type.STRING },
                  confidence: { type: Type.NUMBER },
                  source: { type: Type.STRING }
                }
              }
            },
            socialPresence: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  platform: { type: Type.STRING },
                  handle: { type: Type.STRING },
                  url: { type: Type.STRING },
                  followers: { type: Type.STRING }
                }
              }
            },
            totalProfilesFound: { type: Type.NUMBER },
            influenceScore: { type: Type.STRING },
            confidenceScore: { type: Type.NUMBER },
            engagementWorkflow: { type: Type.ARRAY, items: { type: Type.STRING } },
            rawDorkResults: { type: Type.STRING }
          },
          required: ["fullName", "emails", "socialPresence", "totalProfilesFound", "influenceScore", "engagementWorkflow"]
        }
      }
    });

    try {
      let jsonStr = response.text || '{}';
      const firstBrace = jsonStr.indexOf('{');
      const lastBrace = jsonStr.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1) {
        jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
      }
      return JSON.parse(jsonStr);
    } catch (parseError) {
      return null;
    }
  } catch (error) {
    console.error("Lead Discovery Error:", error);
    return null;
  }
};

export const performIdentityScan = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const prompt = `Effectue une investigation OSINT approfondie sur : "${query}". Réponds AU FORMAT JSON.`;
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json"
      }
    });
    
    try {
      let jsonStr = response.text || '{}';
      const firstBrace = jsonStr.indexOf('{');
      const lastBrace = jsonStr.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1) {
        jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
      }
      return JSON.parse(jsonStr);
    } catch (parseError) {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const fetchSectorDeepDive = async (sector: string, country: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const prompt = `Analyse d'intelligence économique sur ${sector} en ${country}. Réponds AU FORMAT JSON.`;
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: { 
        tools: [{ googleSearch: {} }], 
        responseMimeType: "application/json" 
      }
    });
    
    try {
      let jsonStr = response.text || '{}';
      const firstBrace = jsonStr.indexOf('{');
      const lastBrace = jsonStr.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1) {
        jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
      }
      return JSON.parse(jsonStr);
    } catch (parseError) {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const analyzeTrend = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: { tools: [{ googleSearch: {} }] }
    });
    return {
      text: response.text,
      citations: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    return { text: "Service indisponible", citations: [] };
  }
};

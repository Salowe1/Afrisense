
import React, { useState, useRef, useEffect } from 'react';
import { analyzeTrend } from '../services/gemini';
import { Message } from '../types';
import { Send, Cpu, Sparkles, Loader2, Link as LinkIcon, AlertCircle } from 'lucide-react';

const IntelligenceView: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      content: 'Hello! I am your AI Market Analyst. Ask me anything about African economies, sector trends, or investment landscapes.' 
    }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const result = await analyzeTrend(input);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: result.text || 'Analysis complete.',
        citations: result.citations 
      }]);
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: 'I encountered an error while analyzing that query. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4 max-w-5xl mx-auto">
      <div className="flex items-center space-x-2 mb-2">
        <Sparkles className="text-emerald-500" size={24} />
        <h2 className="text-2xl font-bold text-slate-800">Intelligence Hub</h2>
        <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded font-mono">powered by Gemini 3</span>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 overflow-y-auto space-y-6 shadow-sm"
      >
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 ${
              m.role === 'user' 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'bg-slate-50 text-slate-800 border border-slate-100'
            }`}>
              {m.role === 'model' && (
                <div className="flex items-center space-x-2 mb-2 text-xs font-bold text-emerald-600">
                  <Cpu size={14} />
                  <span>ANALYSIS</span>
                </div>
              )}
              <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                {m.content}
              </div>
              
              {m.citations && m.citations.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 mb-2 flex items-center">
                    <LinkIcon size={12} className="mr-1" /> GROUNDING SOURCES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {/* Extract and display URLs from grounding chunks as links */}
                    {m.citations.map((c, i) => (
                      <a 
                        key={i} 
                        href={c.web?.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-slate-500 truncate max-w-[200px] flex items-center"
                      >
                        <LinkIcon size={8} className="mr-1 opacity-50" />
                        {c.web?.title || 'Source'}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center space-x-3">
              <Loader2 className="animate-spin text-emerald-600" size={20} />
              <span className="text-sm font-medium text-slate-500 italic">Aggregating live news and macro data...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="relative group">
        <div className="absolute inset-x-0 -top-6 px-4 hidden group-focus-within:block transition-all animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-emerald-50 border border-emerald-100 rounded-t-lg px-3 py-1 text-[10px] text-emerald-700 font-bold flex items-center">
            <AlertCircle size={10} className="mr-1" /> PRECISE GROUNDING ENABLED
          </div>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="e.g., What are the biggest energy opportunities in Kenya for 2025?"
          className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-4 pr-16 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all shadow-sm min-h-[100px] resize-none"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className={`absolute right-4 bottom-4 p-3 rounded-xl transition-all ${
            input.trim() && !loading ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'
          }`}
        >
          <Send size={20} />
        </button>
      </div>
      <p className="text-[10px] text-center text-slate-400 italic">
        The system analyzes real-time feeds from AfDB, World Bank, and Google Search results.
      </p>
    </div>
  );
};

export default IntelligenceView;

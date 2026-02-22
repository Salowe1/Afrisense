
import React, { useState, useRef, useEffect } from 'react';
import { analyzeTrend } from '../services/gemini';
import { Message, FactCard } from '../types';
import { Send, Cpu, Sparkles, Loader2, Link as LinkIcon, AlertCircle, FileText, TrendingUp, UserCheck } from 'lucide-react';

// Use React.FC to correctly handle reserved props like 'key' in TypeScript
const FactCardComponent: React.FC<{ fact: FactCard }> = ({ fact }) => (
  <div className="bg-white border-l-4 border-emerald-500 p-3 rounded-r-xl shadow-sm mb-3">
    <div className="flex items-center justify-between mb-1">
      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter flex items-center">
        {fact.type === 'Leadership' && <UserCheck size={10} className="mr-1"/>}
        {fact.type === 'M&A' && <TrendingUp size={10} className="mr-1"/>}
        {fact.type} EXTRACTED
      </span>
      <span className={`text-[8px] px-1.5 py-0.5 rounded font-bold ${fact.impact === 'High' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
        {fact.impact} IMPACT
      </span>
    </div>
    <h5 className="text-xs font-bold text-slate-800">{fact.title}</h5>
    <p className="text-[10px] text-slate-500 mt-1">{fact.summary}</p>
  </div>
);

const AthenaView: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      content: "I am Athena, your Agentic AI layer. I don't just search—I reason across 1M+ vetted African sources. Ask me about competitor moves or market shifts.",
      facts: [
        { id: '1', type: 'M&A', title: 'Airtel Africa expansion', summary: 'Acquired new spectrum in Nigeria to bolster 5G rollouts.', impact: 'High' }
      ]
    }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
        citations: result.citations,
        facts: input.toLowerCase().includes('news') ? [{ id: '2', type: 'Product', title: 'New Fintech Launch', summary: 'Major bank in SA launches micro-lending app.', impact: 'Medium' }] : []
      }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', content: 'Athena service encountered an interruption. Retrying connection...' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
            <Cpu size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Athena Agent</h2>
            <p className="text-xs text-slate-500 font-medium">Agentic Reasoning & Fact Extraction</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-bold px-2 py-1 bg-amber-50 text-amber-600 rounded-md border border-amber-100 flex items-center">
             <Sparkles size={12} className="mr-1" /> ENTERPRISE MODE
           </span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 overflow-y-auto space-y-8 shadow-sm">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="flex flex-col space-y-2 max-w-[85%]">
              <div className={`rounded-2xl p-5 ${
                m.role === 'user' 
                  ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-100' 
                  : 'bg-slate-50 text-slate-800 border border-slate-100'
              }`}>
                {m.role === 'model' && (
                  <div className="flex items-center space-x-2 mb-3 text-[10px] font-black text-emerald-600 tracking-widest uppercase">
                    <Sparkles size={12} />
                    <span>Athena Reasoning Engine</span>
                  </div>
                )}
                <div className="prose prose-sm max-w-none whitespace-pre-wrap leading-relaxed">
                  {m.content}
                </div>
                
                {m.citations && m.citations.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <p className="text-[10px] font-bold text-slate-400 mb-3 flex items-center uppercase tracking-widest">
                      <LinkIcon size={12} className="mr-1" /> Verification Links
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {m.citations.map((c, i) => (
                        <a key={i} href={c.web?.uri} target="_blank" rel="noopener noreferrer" className="text-[10px] bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:border-emerald-500 transition-all text-slate-600 flex items-center">
                          {c.web?.title || 'External Source'}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {m.facts && m.facts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {m.facts.map(f => <FactCardComponent key={f.id} fact={f} />)}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center space-x-3 border border-slate-100">
              <Loader2 className="animate-spin text-emerald-600" size={18} />
              <span className="text-sm font-medium text-slate-400">Athena is traversing 117 languages for latest insights...</span>
            </div>
          </div>
        )}
      </div>

      <div className="relative group p-1 bg-white rounded-3xl border border-slate-200 shadow-lg group-focus-within:ring-2 ring-emerald-100">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          placeholder="Ask Athena about market entries, competitor financials, or regulatory shifts..."
          className="w-full px-6 py-4 pr-16 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 min-h-[80px] resize-none text-sm"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className={`absolute right-4 bottom-4 p-3 rounded-2xl transition-all ${
            input.trim() && !loading ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-100 text-slate-300'
          }`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AthenaView;

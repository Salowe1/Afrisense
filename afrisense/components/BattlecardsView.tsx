
import React, { useState } from 'react';
import { Sword, Shield, Target, AlertCircle, ChevronRight, Search, Zap, Filter, TrendingUp, Globe, Plus } from 'lucide-react';
import { analyzeTrend } from '../services/gemini';

const COMPETITORS = [
  { id: 'mtn', name: 'MTN Group', industry: 'Telecoms / Fintech', status: 'High Competition', logo: 'MT', strengths: ['17+ Countries', 'MoMo Ecosystem'], weakness: 'Regulatory friction in West Africa', strategy: 'Emphasize compliance and custom B2B integrations.' },
  { id: 'safaricom', name: 'Safaricom', industry: 'Telco / Financial Services', status: 'Dominant', logo: 'SF', strengths: ['M-PESA Dominance', '5G Leadership'], weakness: 'High domestic market saturation', strategy: 'Highlight agility in non-Kenyan regional expansions.' },
  { id: 'orange', name: 'Orange Africa', industry: 'Telecoms', status: 'Growing', logo: 'OR', strengths: ['West Africa Presence', 'French Gov Support'], weakness: 'Legacy infrastructure in rural hubs', strategy: 'Focus on cloud service reliability.' },
  { id: 'multichoice', name: 'MultiChoice', industry: 'Media / Tech', status: 'Evolving', logo: 'MC', strengths: ['Content Catalog', 'Localized Dubbing'], weakness: 'Competition from global streaming (Netflix)', strategy: 'Emphasize hyper-local sport rights.' },
];

const BattlecardsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<Record<string, string>>({});

  const filteredCompetitors = COMPETITORS.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeepAnalysis = async (name: string) => {
    setIsAnalyzing(name);
    const result = await analyzeTrend(`Provide a competitive 'How to Win' battlecard summary for ${name} vs emerging African tech startups.`);
    setAnalysisResult(prev => ({ ...prev, [name]: result.text || 'Analysis failed.' }));
    setIsAnalyzing(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center">
            <Sword className="mr-2 text-emerald-600" size={24} />
            Competitive Battlecards
          </h2>
          <p className="text-slate-500 text-sm">Actionable "How to Win" playbooks updated by real-time signals.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             <input 
              type="text" 
              placeholder="Filter competitors..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
             />
          </div>
          <button className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-emerald-100 whitespace-nowrap">
            <Plus size={16} /> <span>New Card</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredCompetitors.map((comp) => (
          <div key={comp.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center space-x-4">
                 <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-inner">
                   {comp.logo}
                 </div>
                 <div>
                   <h4 className="font-black text-slate-800 text-lg tracking-tight">{comp.name}</h4>
                   <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{comp.industry}</p>
                 </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                comp.status === 'High Competition' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                {comp.status}
              </div>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
               <div className="space-y-6">
                  <div>
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                       <Shield size={12} className="mr-1 text-emerald-500" /> Vetted Strengths
                    </h5>
                    <ul className="space-y-2">
                       {comp.strengths.map((s, i) => (
                         <li key={i} className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                           <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                           <span>{s}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                       <Target size={12} className="mr-1 text-amber-500" /> Strategic Weakness
                    </h5>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">{comp.weakness}</p>
                  </div>
               </div>

               <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <h5 className="text-[10px] font-black text-emerald-700 mb-4 uppercase tracking-widest flex items-center">
                      <Zap size={14} className="mr-2" /> Play to Win
                    </h5>
                    <p className="text-xs text-emerald-800 leading-relaxed font-bold">
                      {comp.strategy}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleDeepAnalysis(comp.name)}
                    disabled={isAnalyzing === comp.name}
                    className="mt-6 w-full py-3 bg-white border border-emerald-200 text-emerald-700 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm"
                  >
                    {isAnalyzing === comp.name ? 'Analyzing...' : 'Analyze with Athena'} <ChevronRight size={14} className="ml-1" />
                  </button>
               </div>
            </div>

            {analysisResult[comp.name] && (
               <div className="px-8 pb-8 animate-in slide-in-from-top-2">
                 <div className="p-4 bg-slate-900 rounded-2xl text-xs text-emerald-400 font-medium leading-relaxed border border-emerald-500/30">
                   <div className="flex items-center mb-2 text-[10px] font-black uppercase tracking-widest opacity-60">
                     <TrendingUp size={10} className="mr-1" /> Athena Real-time Feed
                   </div>
                   {analysisResult[comp.name]}
                 </div>
               </div>
            )}

            <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px]">
               <div className="flex items-center text-slate-400 font-bold uppercase tracking-wider">
                 <AlertCircle size={12} className="mr-1" />
                 Last detection: 2h ago
               </div>
               <div className="flex items-center space-x-1 text-emerald-600 font-black">
                 <Globe size={12} />
                 <span>ALL HUBS</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattlecardsView;

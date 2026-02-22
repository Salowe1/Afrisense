
import React, { useState } from 'react';
import { performLeadDiscovery } from '../services/gemini';
import { LeadProfile } from '../types';
import { 
  UserSearch, 
  Search, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Globe, 
  Loader2, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Building2, 
  AtSign,
  Layers,
  Fingerprint,
  Target,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Briefcase
} from 'lucide-react';

const LeadDiscoveryView: React.FC = () => {
  const [form, setForm] = useState({ name: '', company: '', location: '', domain: '', handle: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LeadProfile | null>(null);

  const handleSearch = async () => {
    if (!form.name.trim()) return;
    setLoading(true);
    const data = await performLeadDiscovery(form);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter flex items-center">
            <UserSearch className="mr-3 text-emerald-600" size={32} />
            Lead Discovery & Social OSINT
          </h2>
          <p className="text-slate-500 font-medium">Découverte de contact et agrégation d'influence via ancres stratégiques.</p>
        </div>
        <div className="flex gap-2">
           <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-lg border border-emerald-200 uppercase tracking-widest flex items-center">
              <Zap size={12} className="mr-1" /> Multi-Source Engine
           </span>
        </div>
      </header>

      {/* Formulaire de Recherche (Anchors) */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom Complet*</label>
            <input 
              type="text" placeholder="Ex: John Doe"
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={form.name} onChange={e => setForm({...form, name: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Entreprise</label>
            <input 
              type="text" placeholder="Ex: Orange BF"
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={form.company} onChange={e => setForm({...form, company: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Localisation</label>
            <input 
              type="text" placeholder="Ex: Dakar"
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={form.location} onChange={e => setForm({...form, location: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Domaine (.bf, .com)</label>
            <input 
              type="text" placeholder="Ex: telco.bf"
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={form.domain} onChange={e => setForm({...form, domain: e.target.value})}
            />
          </div>
          <div className="flex items-end">
            <button 
              onClick={handleSearch} disabled={loading || !form.name}
              className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" size={16} /> : "Scanner le Web"}
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
           <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
              <Layers className="animate-bounce text-emerald-600 relative z-10" size={48} />
           </div>
           <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-800">Agrégation Sherlock & Hunter...</h3>
              <p className="text-slate-500 text-sm italic">Scan de 300+ plateformes et patterns d'emails d'entreprise.</p>
           </div>
        </div>
      )}

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center space-x-6">
                  <div className="h-20 w-20 bg-slate-900 text-emerald-400 rounded-[1.5rem] flex items-center justify-center text-3xl font-black border border-white/10">
                    {result.fullName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{result.fullName}</h3>
                    <div className="flex items-center space-x-2 text-slate-500 text-sm font-medium">
                       {/* Fixed: Briefcase icon now imported correctly from lucide-react */}
                       <Briefcase size={14} className="text-emerald-600" />
                       <span>{result.jobTitle} @ {result.company}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                    <div className="px-5 py-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                       <p className="text-[9px] font-black uppercase text-emerald-600">Profiles Detectés</p>
                       <p className="text-2xl font-black text-emerald-700">{result.totalProfilesFound}</p>
                    </div>
                    <div className="px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                       <p className="text-[9px] font-black uppercase text-slate-400">Confiance</p>
                       <p className="text-2xl font-black text-slate-800">{result.confidenceScore}%</p>
                    </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {/* Emails Harvester */}
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center">
                       <Mail size={16} className="mr-2 text-emerald-600" /> Emails Identifiés (Pattern Matching)
                    </h4>
                    <div className="space-y-3">
                       {result.emails.map((e, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                            <div>
                               <p className="text-sm font-bold text-slate-700">{e.address}</p>
                               <p className="text-[8px] text-slate-400 uppercase font-bold">Source: {e.source} • {e.confidence}% Confiance</p>
                            </div>
                            <button className="p-2 hover:bg-emerald-100 text-slate-300 group-hover:text-emerald-600 transition-all rounded-lg">
                               <Layers size={14} />
                            </button>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Social Profiles */}
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center">
                       <AtSign size={16} className="mr-2 text-emerald-600" /> Empreinte Sociale Agrégée
                    </h4>
                    <div className="space-y-3">
                       {result.socialPresence.map((s, i) => (
                         <a key={i} href={s.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
                            <div className="flex items-center space-x-3">
                               <div className="text-slate-400 group-hover:text-emerald-600">
                                  {s.platform === 'LinkedIn' ? <Linkedin size={18} /> : s.platform === 'Twitter' ? <Twitter size={18} /> : <Globe size={18} />}
                               </div>
                               <div>
                                  <p className="text-xs font-black text-slate-800">{s.platform}</p>
                                  <p className="text-[10px] text-slate-500">{s.handle}</p>
                               </div>
                            </div>
                            <div className="text-right">
                               <p className="text-[9px] font-black text-emerald-600">{s.followers || 'N/A'}</p>
                               <p className="text-[8px] text-slate-400">Abonnés</p>
                            </div>
                         </a>
                       ))}
                    </div>
                 </div>
              </div>
            </div>

            {/* Engagement Workflow */}
            <div className="bg-slate-900 text-white rounded-[3rem] p-10 shadow-xl border border-emerald-500/30 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-xl font-black mb-6 uppercase tracking-widest flex items-center">
                     <Target className="text-emerald-400 mr-3" /> Stratégie d'Engagement Multi-Canal
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {result.engagementWorkflow.map((step, i) => (
                       <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl relative">
                          <span className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-[10px] font-black">{i+1}</span>
                          <p className="text-xs font-medium leading-relaxed">{step}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                  <Zap size={16} className="mr-2 text-emerald-600" /> Influence & Portée
               </h4>
               <div className="text-center py-6">
                  <div className={`inline-flex items-center justify-center p-8 rounded-full border-4 mb-4 ${
                    result.influenceScore === 'High' ? 'border-emerald-500 bg-emerald-50 text-emerald-600' :
                    result.influenceScore === 'Medium' ? 'border-amber-500 bg-amber-50 text-amber-600' :
                    'border-slate-300 bg-slate-50 text-slate-400'
                  }`}>
                     <Layers size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{result.influenceScore} Impact</h3>
                  <p className="text-xs text-slate-500 mt-2 italic">Calculé sur {result.totalProfilesFound} points de contact.</p>
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                  <Fingerprint size={16} className="mr-2 text-emerald-600" /> Analyse Dorking
               </h4>
               <p className="text-[10px] text-slate-500 leading-relaxed font-mono bg-slate-50 p-4 rounded-xl">
                  {result.rawDorkResults}
               </p>
            </div>

            <div className="p-8 bg-amber-50 border border-amber-100 rounded-[2rem]">
               <h4 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-2 flex items-center">
                  <ShieldAlert size={14} className="mr-2" /> Note OSINT
               </h4>
               <p className="text-[10px] text-amber-700 leading-relaxed italic">
                  AfriSense aggrège les données de <strong>Sherlock</strong>, <strong>Hunter</strong> et <strong>FullContact</strong> pour un profilage complet sans violation de vie privée.
               </p>
            </div>
          </div>
        </div>
      )}

      {!result && !loading && (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-8">
           <div className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center text-slate-300">
              <UserSearch size={48} />
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Transformer un nom en opportunité</h3>
              <p className="text-slate-500 max-w-sm mx-auto font-medium">
                 Combinez le Nom, le Domaine et le Handle pour débloquer le workflow d'engagement optimal.
              </p>
           </div>
           <div className="flex gap-4">
              <button 
                onClick={() => setForm({ name: 'Jean Alphonse SOME', company: 'Gouvernement', location: 'Ouagadougou', domain: 'mines.gov.bf', handle: '@jasome' })}
                className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all"
              >
                 Charger l'exemple
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default LeadDiscoveryView;

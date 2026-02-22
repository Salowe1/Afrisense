
import React, { useState } from 'react';
import { performIdentityScan } from '../services/gemini';
import { IdentityResult } from '../types';
import { 
  Search, 
  Fingerprint, 
  Loader2, 
  ShieldAlert, 
  CheckCircle2, 
  Globe, 
  Linkedin, 
  Twitter, 
  Building2, 
  ArrowRight,
  UserCheck,
  Zap,
  Briefcase,
  AlertTriangle,
  History,
  Link as LinkIcon,
  ChevronRight,
  SearchCode
} from 'lucide-react';

const InvestigatorView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IdentityResult | null>(null);
  const [scanSteps, setScanSteps] = useState<string[]>([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);
    setScanSteps(['Initialisation du moteur OSINT...', 'Scan des registres AfriGIS/OpenCorporates...', 'Recherche d\'empreinte sociale (LinkedIn/X)...', 'Analyse du risque réputationnel...']);
    
    const data = await performIdentityScan(query);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter flex items-center">
            <Fingerprint className="mr-3 text-emerald-600" size={32} />
            Identity Investigator
          </h2>
          <p className="text-slate-500 font-medium">Due Diligence temps réel : Registres, Réseaux Sociaux & Presse.</p>
        </div>
      </header>

      {/* Barre de Recherche OSINT */}
      <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Entrez un Nom Complet ou un Email professionnel..."
            className="w-full pl-12 pr-4 py-4 bg-transparent border-none text-lg font-bold text-slate-800 placeholder:text-slate-400 outline-none"
          />
        </div>
        <button 
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Lancer l'investigation"}
        </button>
      </div>

      {loading && (
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-12 flex flex-col items-center justify-center space-y-8 text-center border border-white/10 relative overflow-hidden">
           <div className="relative z-10">
              <Loader2 className="animate-spin text-emerald-400 mb-6 mx-auto" size={48} />
              <h3 className="text-2xl font-black mb-4">Scan en cours : Profiling Profond</h3>
              <div className="space-y-3 max-w-sm mx-auto">
                 {scanSteps.map((step, i) => (
                   <div key={i} className="flex items-center space-x-3 text-sm opacity-60 animate-pulse">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span>{step}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent pointer-events-none"></div>
        </div>
      )}

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
          {/* Colonne Principale: Corporate & Social */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm">
              <div className="flex justify-between items-start mb-10">
                 <div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">{result.identity}</h3>
                    <div className="flex items-center space-x-3">
                       <span className="px-3 py-1 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase">{result.type}</span>
                       <span className="text-slate-400 text-xs font-bold flex items-center">
                          <History size={14} className="mr-1" /> Dossier généré à l'instant T
                       </span>
                    </div>
                 </div>
                 <div className={`px-6 py-3 rounded-2xl border-2 flex items-center space-x-3 ${
                   result.riskAssessment === 'High' ? 'bg-red-50 border-red-200 text-red-700' :
                   result.riskAssessment === 'Medium' ? 'bg-amber-50 border-amber-200 text-amber-700' :
                   'bg-emerald-50 border-emerald-200 text-emerald-700'
                 }`}>
                    {result.riskAssessment === 'High' ? <ShieldAlert size={24} /> : <CheckCircle2 size={24} />}
                    <div>
                       <p className="text-[10px] font-black uppercase leading-none mb-1">Score de Risque</p>
                       <p className="text-xl font-black leading-none">{result.riskAssessment}</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center">
                       <Building2 size={18} className="mr-2 text-emerald-600" /> Affiliations Corporate
                    </h4>
                    <div className="space-y-4">
                       {result.corporateAffiliations.map((aff, i) => (
                         <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-emerald-200 transition-all">
                            <p className="text-sm font-black text-slate-800">{aff.company}</p>
                            <div className="flex justify-between items-center mt-2">
                               <span className="text-[10px] font-bold text-emerald-600 uppercase">{aff.role}</span>
                               <span className="text-[10px] text-slate-400 font-bold">{aff.status}</span>
                            </div>
                         </div>
                       ))}
                       {result.corporateAffiliations.length === 0 && <p className="text-sm text-slate-400 italic">Aucune entité légale détectée dans les registres.</p>}
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center">
                       <Globe size={18} className="mr-2 text-emerald-600" /> Empreinte Numérique
                    </h4>
                    <div className="space-y-4">
                       {result.socialFootprint.map((social, i) => (
                         <a key={i} href={social.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
                            <div className="flex items-center space-x-3">
                               <div className="p-2 bg-white rounded-xl text-slate-400 group-hover:text-emerald-600">
                                  {social.platform === 'LinkedIn' ? <Linkedin size={18} /> : <LinkIcon size={18} />}
                               </div>
                               <div>
                                  <p className="text-xs font-black text-slate-800">{social.platform}</p>
                                  <p className="text-[10px] text-slate-500">{social.handle}</p>
                               </div>
                            </div>
                            <ChevronRight size={16} className="text-slate-300" />
                         </a>
                       ))}
                       {result.socialFootprint.length === 0 && <p className="text-sm text-slate-400 italic">Empreinte numérique limitée ou privée.</p>}
                    </div>
                 </div>
              </div>
            </div>

            {/* Verdict Décisionnel */}
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white border border-emerald-500/30 shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="p-6 bg-emerald-600 rounded-3xl shadow-xl shadow-emerald-500/20 text-center shrink-0">
                     <Zap size={48} className="mb-4 mx-auto" />
                     <p className="text-[10px] font-black uppercase tracking-widest mb-1">Aide à la Décision</p>
                     <p className="text-2xl font-black">ACTIONABLE</p>
                  </div>
                  <div>
                     <h3 className="text-2xl font-black mb-4 flex items-center">
                        <UserCheck size={24} className="mr-3 text-emerald-400" /> Verdict Stratégique
                     </h3>
                     <p className="text-lg text-emerald-50 leading-relaxed font-medium italic">
                        "{result.strategicAction}"
                     </p>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
            </div>
          </div>

          {/* Colonne Latérale: Background & Sources */}
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center">
                  <Briefcase size={16} className="mr-2 text-emerald-600" /> Parcours Professionnel
               </h3>
               <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {result.professionalBackground}
               </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center">
                  <AlertTriangle size={16} className="mr-2 text-emerald-600" /> Détails d'Investigation
               </h3>
               <p className="text-xs text-slate-500 leading-relaxed">
                  {result.rawIntel}
               </p>
            </div>

            <div className="p-8 bg-amber-50 border border-amber-100 rounded-[2rem]">
               <h4 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-3 flex items-center">
                  <ShieldAlert size={14} className="mr-2" /> Note de Conformité
               </h4>
               <p className="text-[10px] text-amber-700 leading-relaxed">
                  Cette analyse est générée via Grounding OSINT. Elle ne remplace pas une enquête officielle de terrain mais fournit un état de l'influence et de la présence à l'instant T.
               </p>
            </div>
          </div>
        </div>
      )}

      {!result && !loading && (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
           <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
              <SearchCode size={48} />
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-800">Prêt pour une investigation ?</h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                 L'Investigator croise les registres du commerce de 54 pays avec les signaux sociaux pour vous dire en 30 secondes si un acteur est fiable.
              </p>
           </div>
           <div className="flex gap-4">
              <button 
                onClick={() => { setQuery('Jean Alphonse SOME'); handleSearch(); }}
                className="text-[10px] font-black text-emerald-600 uppercase border border-emerald-100 px-4 py-2 rounded-xl hover:bg-emerald-50 transition-all"
              >
                 Exemple: Jean Alphonse SOME
              </button>
              <button 
                onClick={() => { setQuery('support@afrisense.com'); handleSearch(); }}
                className="text-[10px] font-black text-emerald-600 uppercase border border-emerald-100 px-4 py-2 rounded-xl hover:bg-emerald-50 transition-all"
              >
                 Exemple: Email Pro
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default InvestigatorView;

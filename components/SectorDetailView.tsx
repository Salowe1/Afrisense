
import React, { useState, useEffect } from 'react';
import { fetchSectorDeepDive } from '../services/gemini';
import { 
  ArrowLeft, 
  Database, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Loader2, 
  Building2, 
  Globe, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  UserCheck,
  Network as NetworkIcon,
  GraduationCap
} from 'lucide-react';

interface SectorDetailViewProps {
  sector: string;
  country: string;
  onBack: () => void;
}

const SectorDetailView: React.FC<SectorDetailViewProps> = ({ sector, country, onBack }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchSectorDeepDive(sector, country);
      setData(result);
      setLoading(false);
    };
    loadData();
  }, [sector, country]);

  if (loading) {
    return (
      <div className="h-[600px] flex flex-col items-center justify-center space-y-6 animate-pulse">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-ping"></div>
          <Loader2 className="animate-spin text-emerald-600 relative z-10" size={64} />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-black text-slate-800 tracking-tight uppercase">Initialisation du Scan OSINT</h3>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">Interrogation des registres AfriGIS & OpenCorporates pour {sector} en {country}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-slate-500 hover:text-emerald-600 font-black text-[10px] uppercase tracking-widest transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Retour au Market Explorer</span>
      </button>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 bg-emerald-950 text-emerald-400 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter border border-emerald-500/30">
            <Database size={12} />
            <span>Data Source: AfriGIS + OpenCorporates Grounding</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">
            {sector} <span className="text-emerald-600 block sm:inline">| {country}</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
           <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex items-center space-x-4">
              <div className="p-3 bg-slate-900 text-white rounded-xl">
                 <Building2 size={24} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Entités Enregistrées</p>
                 <p className="text-2xl font-black text-slate-900">{data?.companyCount?.toLocaleString() || '---'}</p>
              </div>
           </div>
           <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg shadow-emerald-200 flex items-center space-x-4 text-white">
              <div className="p-3 bg-white/20 rounded-xl">
                 <ShieldCheck size={24} />
              </div>
              <div>
                 <p className="text-[10px] font-black opacity-80 uppercase leading-none mb-1">Risque Réglementaire</p>
                 <p className="text-2xl font-black">{data?.regulatoryRisk}</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne Gauche: Analyse Stratégique & Réseaux */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center">
                 <TrendingUp size={18} className="mr-2 text-emerald-600" /> Note de Synthèse Stratégique
               </h3>
               <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500">Mise à jour: Temps réel</span>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">{data?.detailedAnalysis}</p>
            </div>
            
            <div className="mt-10 p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100">
               <h4 className="font-black text-emerald-900 text-xs uppercase tracking-widest mb-4 flex items-center">
                 <NetworkIcon size={16} className="mr-2" /> Cartographie des Alliances & Réseaux
               </h4>
               <p className="text-sm text-emerald-800/80 leading-relaxed italic">
                 {data?.networkMapSummary}
               </p>
            </div>
          </section>

          {/* Cartographie des Acteurs Humains Clés */}
          <section className="space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center">
                  <UserCheck size={18} className="mr-2 text-emerald-600" /> Top Acteurs d'Influence (Human Capital)
                </h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data?.influencers?.map((person: any, i: number) => (
                  <div key={i} className="bg-slate-900 text-white p-6 rounded-[2rem] border border-white/5 shadow-xl group hover:border-emerald-500/50 transition-all">
                     <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                           <Users size={24} />
                        </div>
                        <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-tighter ${
                          person.influenceScore === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {person.influenceScore} Impact
                        </span>
                     </div>
                     <h4 className="text-xl font-black tracking-tight mb-1">{person.name}</h4>
                     <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">{person.role}</p>
                     
                     <div className="space-y-3 pt-4 border-t border-white/5">
                        <div className="flex items-start space-x-2">
                           <GraduationCap size={14} className="text-slate-500 shrink-0 mt-0.5" />
                           <p className="text-[11px] text-slate-400 leading-tight">{person.background}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                           {person.connections?.map((conn: string, j: number) => (
                             <span key={j} className="text-[8px] bg-white/5 px-2 py-0.5 rounded-full border border-white/10 text-slate-300">
                               {conn}
                             </span>
                           ))}
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* Barre Latérale: Registry & Sources */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
             <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center">
               <Building2 size={16} className="mr-2 text-emerald-600" /> Entités Dominantes
             </h3>
             <div className="space-y-3">
                {data?.topEntities?.map((entity: string, i: number) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200">
                    <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-emerald-600">
                          {i + 1}
                       </div>
                       <span className="text-xs font-bold text-slate-700">{entity}</span>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-emerald-600" />
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
             <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center">
               <ExternalLink size={16} className="mr-2 text-emerald-600" /> Sources Grounding (OSINT)
             </h3>
             <div className="space-y-3">
                {data?.dataCitations?.map((link: string, i: number) => (
                  <a 
                    key={i} 
                    href={link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center p-3 border border-slate-100 rounded-xl text-[10px] font-medium text-slate-500 hover:bg-slate-50 hover:text-emerald-600 transition-all group"
                  >
                    <Globe size={12} className="mr-2 text-slate-300 group-hover:text-emerald-500" />
                    <span className="truncate">{link}</span>
                  </a>
                ))}
             </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
             <div className="flex items-center space-x-3 mb-4">
                <AlertCircle size={20} className="text-amber-500" />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Alerte Intelligence</h4>
             </div>
             <p className="text-[11px] text-slate-400 leading-relaxed">
               Les relations professionnelles sont déduites des mandats croisés dans les registres du commerce et des publications officielles. Pour un audit de sécurité complet, contactez le département de conformité.
             </p>
             <button className="w-full mt-6 py-3 bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase hover:bg-white/20 transition-all">
               Générer Rapport Réseau (PDF)
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorDetailView;

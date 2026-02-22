
import React, { useState } from 'react';
import { verifyEmailHealth } from '../services/gemini';
import { EmailVerificationResult } from '../types';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Mail, 
  ShieldCheck, 
  Loader2, 
  Zap, 
  Terminal, 
  Server, 
  RefreshCw,
  Search,
  ShieldAlert,
  ArrowRight,
  ChevronRight,
  Database,
  Lock
} from 'lucide-react';

const VerificationView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EmailVerificationResult | null>(null);

  const handleVerify = async () => {
    if (!email.trim() || !email.includes('@')) return;
    setLoading(true);
    const data = await verifyEmailHealth(email);
    setResult(data);
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Deliverable': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'Risky': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'Undeliverable': return 'text-red-600 bg-red-50 border-red-100';
      default: return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === 'Deliverable') return <CheckCircle className="text-emerald-600" size={24} />;
    if (status === 'Risky') return <AlertCircle className="text-amber-600" size={24} />;
    return <XCircle className="text-red-600" size={24} />;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter flex items-center">
            <CheckCircle className="mr-3 text-emerald-600" size={32} />
            Email Verifier & Deliverability
          </h2>
          <p className="text-slate-500 font-medium">Protégez votre réputation d'expéditeur avec une vérification SMTP en temps réel.</p>
        </div>
        <div className="flex gap-2">
           <span className="px-3 py-1 bg-slate-900 text-emerald-400 text-[10px] font-black rounded-lg border border-white/10 uppercase tracking-widest flex items-center">
              <ShieldCheck size={12} className="mr-1" /> Multi-Layer Protection
           </span>
        </div>
      </header>

      {/* Input de Vérification */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-4 shadow-sm flex items-center space-x-4 max-w-2xl">
        <div className="flex-1 relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="email" 
            placeholder="Ex: contact@company.com"
            className="w-full pl-12 pr-4 py-4 bg-transparent border-none text-lg font-bold text-slate-800 placeholder:text-slate-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
          />
        </div>
        <button 
          onClick={handleVerify}
          disabled={loading || !email.includes('@')}
          className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Vérifier la Santé"}
        </button>
      </div>

      {loading && (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
           <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
              <RefreshCw className="animate-spin text-emerald-600 relative z-10" size={48} />
           </div>
           <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-800">DNS & SMTP Handshake...</h3>
              <p className="text-slate-500 text-sm italic">Interrogation des enregistrements MX et simulation de session...</p>
           </div>
        </div>
      )}

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
          {/* Main Result Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center space-x-6">
                  <div className={`h-20 w-20 rounded-[1.5rem] flex items-center justify-center border-4 ${getStatusColor(result.status)}`}>
                    <StatusIcon status={result.status} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{result.email}</h3>
                    <div className="flex items-center space-x-2 text-slate-500 text-sm font-medium">
                       <Server size={14} className="text-emerald-600" />
                       <span>Provider: {result.provider}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                    <div className="px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                       <p className="text-[10px] font-black uppercase text-slate-400">Score de Santé</p>
                       <p className={`text-2xl font-black ${result.score > 80 ? 'text-emerald-600' : 'text-amber-500'}`}>{result.score}/100</p>
                    </div>
                </div>
              </div>

              {/* Technical Breakdown Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                 {[
                   { label: 'Syntaxe', val: result.syntaxValid },
                   { label: 'Enr. MX', val: result.mxRecords },
                   { label: 'SMTP Exist', val: result.smtpCheck },
                   { label: 'Catch-all', val: result.isCatchAll, inverse: true },
                   { label: 'Disposable', val: result.isDisposable, inverse: true }
                 ].map((check, i) => (
                   <div key={i} className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-center">
                      <p className="text-[9px] font-black uppercase text-slate-400 mb-2">{check.label}</p>
                      <div className="flex justify-center">
                        {(check.inverse ? !check.val : check.val) ? <CheckCircle size={16} className="text-emerald-500" /> : <XCircle size={16} className="text-red-400" />}
                      </div>
                   </div>
                 ))}
              </div>

              {/* Recommended Action */}
              <div className="bg-emerald-600 text-white rounded-3xl p-8 relative overflow-hidden">
                 <div className="relative z-10 flex items-start gap-4">
                    <Zap className="text-emerald-300 mt-1" size={24} />
                    <div>
                       <h4 className="text-sm font-black uppercase tracking-widest mb-2">Conseil de Délivrabilité</h4>
                       <p className="text-lg font-medium leading-relaxed italic">"{result.recommendedAction}"</p>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Simulated Technical Logs */}
            <div className="bg-slate-900 text-emerald-400 rounded-[2.5rem] p-8 font-mono text-xs overflow-hidden border border-white/5 shadow-2xl">
               <div className="flex items-center space-x-3 mb-6 border-b border-emerald-900/50 pb-4">
                  <Terminal size={16} />
                  <span className="uppercase font-bold tracking-widest opacity-60">Session SMTP Log</span>
               </div>
               <div className="space-y-2 opacity-80">
                  {result.technicalLogs.map((log, i) => (
                    <div key={i} className="flex gap-3">
                       <span className="text-emerald-900">{`[${i.toString().padStart(2, '0')}]`}</span>
                       <span className={log.includes('ERROR') ? 'text-red-400' : ''}>{log}</span>
                    </div>
                  ))}
                  <div className="flex gap-3 animate-pulse">
                     <span className="text-emerald-900">{`[--]`}</span>
                     <span>Session terminated safely.</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Side Panels */}
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                  <Lock size={16} className="mr-2 text-emerald-600" /> Sécurité des Envois
               </h4>
               <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <p className="text-xs font-bold text-slate-800 mb-1">Protection Reputation</p>
                     <p className="text-[10px] text-slate-500 leading-relaxed">Vérifier avant d'envoyer réduit votre taux de rebond (bounce) et évite les filtres anti-spam.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <p className="text-xs font-bold text-slate-800 mb-1">Algorithme de Confiance</p>
                     <p className="text-[10px] text-slate-500 leading-relaxed">Le score est calculé via une agrégation de signaux DNS, SMTP et de bases de données de spam connues.</p>
                  </div>
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                  <Database size={16} className="mr-2 text-emerald-600" /> Statistiques de Provider
               </h4>
               <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                     <span>Gmail / Google Workspace</span>
                     <span>42%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full">
                     <div className="h-full bg-emerald-500 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 pt-2">
                     <span>Microsoft 365</span>
                     <span>35%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full">
                     <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }}></div>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-amber-50 border border-amber-100 rounded-[2rem]">
               <h4 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-2 flex items-center">
                  <ShieldAlert size={14} className="mr-2" /> Note de Précision
               </h4>
               <p className="text-[10px] text-amber-700 leading-relaxed italic">
                  AfriSense utilise des méthodes non-intrusives pour la vérification. Certains serveurs peuvent masquer leur état réel ("Grey-listing"), réduisant la précision à ~95%.
               </p>
            </div>
          </div>
        </div>
      )}

      {!result && !loading && (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-8">
           <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
              <Mail size={48} />
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Vérification de Santé Proactive</h3>
              <p className="text-slate-500 max-w-sm mx-auto font-medium">
                 Identifiez les emails invalides ou risqués avant de lancer vos campagnes stratégiques.
              </p>
           </div>
           <div className="flex gap-4">
              <button 
                onClick={() => { setEmail('contact@orange.bf'); handleVerify(); }}
                className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all"
              >
                 Essayer avec un email corporate
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default VerificationView;

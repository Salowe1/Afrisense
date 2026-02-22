
import React, { useState } from 'react';
// Added missing Zap and Globe imports
import { ShieldCheck, FileText, Lock, Eye, Scale, Download, CheckCircle, AlertTriangle, Zap, Globe } from 'lucide-react';

const LegalView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'Terms' | 'Privacy' | 'Confidentiality'>('Terms');

  const Section = ({ title, children, icon: Icon }: any) => (
    <div className="space-y-4 mb-10">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
          <Icon size={18} />
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      <div className="text-slate-600 text-sm leading-relaxed space-y-4 prose prose-slate max-w-none">
        {children}
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500 py-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-10">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-1.5 rounded-full">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">Trust & Governance</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Legal & <span className="text-emerald-600">Privacy</span> Hub</h1>
          <p className="text-slate-500 text-lg">Our commitment to data sovereignty, ethics, and transparency in African Intelligence.</p>
        </div>
        <button className="flex items-center space-x-2 bg-white border border-slate-200 px-6 py-3 rounded-2xl text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm transition-all">
          <Download size={16} /> <span>Download PDF Packet</span>
        </button>
      </header>

      {/* Navigation */}
      <div className="flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm self-start inline-flex">
        {(['Terms', 'Privacy', 'Confidentiality'] as const).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeSubTab === tab ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab === 'Terms' ? 'Terms of Service' : tab === 'Privacy' ? 'Privacy Policy' : 'Confidentiality'}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-16 shadow-sm">
        {activeSubTab === 'Terms' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Section title="1. Acceptance of Terms" icon={CheckCircle}>
              <p>By accessing or using the AfriSense platform, you agree to be bound by these Terms of Service. These terms govern your use of our market intelligence tools, AI agents, and data visualization services.</p>
              <p>AfriSense is intended for corporate, professional, and governmental use. Users must be authorized representatives of their respective organizations.</p>
            </Section>

            <Section title="2. Intellectual Property" icon={FileText}>
              <p>The "Athena" AI logic, the strategic mapping algorithms, and the underlying data structuring techniques are the exclusive property of AfriSense Intelligence Solutions Pvt Ltd.</p>
              <p>Users retain ownership of their proprietary internal data uploaded to the platform (Custom Ingestion), but grant AfriSense a non-exclusive license to process such data for the sole purpose of providing intelligence services back to the user.</p>
            </Section>

            <Section title="3. Use of AI (Athena Agent)" icon={Zap}>
              <p>Our AI services use Large Language Models grounded in real-time data. While we strive for 100% accuracy via verification links, AI output should be used as a supplementary tool for strategic decision-making.</p>
              <p>Users are prohibited from using the platform to generate deceptive, harmful, or illicit content regarding African sovereign states or corporate entities.</p>
            </Section>

            <Section title="4. Subscription & Access" icon={Lock}>
              <p>Access is granted on a seat-based subscription model. Credentials must not be shared outside the licensed organization. Misuse of access tokens or scraping of our structured news feeds may result in immediate suspension.</p>
            </Section>
          </div>
        )}

        {activeSubTab === 'Privacy' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Section title="Data Sovereignty & Africa" icon={Globe}>
              <p>We recognize the strategic importance of data sovereignty in the African continent. Your data is stored in secure, regional hubs where possible, adhering to both local regulations (like South Africa's POPIA) and international standards (GDPR).</p>
            </Section>

            <Section title="Information We Collect" icon={Eye}>
              <p>We collect minimal personal information: name, work email, and professional role. We also log platform activity (Audit Trails) to ensure security and improve our AI reasoning models.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Professional identity and contact information.</li>
                <li>Usage telemetry for AI prompt optimization.</li>
                <li>Log-in timestamps and IP addresses for SOC2 compliance.</li>
              </ul>
            </Section>

            <Section title="AI Data Privacy" icon={ShieldCheck}>
              <p>AfriSense does <strong>not</strong> use your private corporate queries to train global public models. All reasoning sessions with Athena are isolated within your organization's secure tenant environment.</p>
            </Section>
          </div>
        )}

        {activeSubTab === 'Confidentiality' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Section title="Strict Confidentiality Agreement" icon={Lock}>
              <p>AfriSense treats all user-uploaded data and private research queries as "Highly Confidential." This status remains in effect indefinitely, even after termination of service.</p>
            </Section>

            <Section title="Ethical Intelligence" icon={Scale}>
              <p>We adhere to the SCIP (Strategic and Competitive Intelligence Professionals) Code of Ethics. Our platform aggregates data through legal and ethical means, focusing on open-source intelligence (OSINT) and authorized third-party feeds.</p>
              <p>We do not support or facilitate corporate espionage or the illegal acquisition of non-public information.</p>
            </Section>

            <div className="p-8 bg-amber-50 border border-amber-100 rounded-3xl mt-12 flex items-start space-x-4">
              <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Compliance Alert</h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  As an enterprise user, you are responsible for ensuring that your use of competitive intelligence battlecards does not violate your own company's internal ethics policies or any non-compete agreements you may hold.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 opacity-60">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
            <ShieldCheck className="text-emerald-600" size={20} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">SOC 2 Type II</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
            <Scale className="text-emerald-600" size={20} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">GDPR Compliant</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
            <Globe className="text-emerald-600" size={20} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">POPIA Ready</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
            <CheckCircle className="text-emerald-600" size={20} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">ISO 27001</span>
        </div>
      </div>
    </div>
  );
};

export default LegalView;

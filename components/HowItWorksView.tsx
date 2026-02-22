
import React from 'react';
import { 
  Database, 
  Cpu, 
  Users, 
  ShieldCheck, 
  Zap, 
  Mail, 
  Settings, 
  Headphones, 
  CheckCircle2, 
  ChevronRight,
  Globe,
  Layout,
  FileCode,
  ArrowRight
} from 'lucide-react';

const StageCard = ({ number, title, description, icon: Icon }: any) => (
  <div className="flex-1 min-w-[280px] bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:border-emerald-200 transition-all">
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={80} className="text-emerald-900" />
    </div>
    <div className="mb-6 inline-flex items-center space-x-2">
      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">Stage {number}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const FeatureHighlight = ({ title, description, icon: Icon }: any) => (
  <div className="flex items-start space-x-4 p-6 bg-white border border-slate-100 rounded-2xl hover:border-emerald-100 transition-all shadow-sm">
    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorksView: React.FC = () => {
  return (
    <div className="space-y-16 py-8 max-w-7xl mx-auto animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">How <span className="text-emerald-600">AfriSense</span> Works</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          An AI-native 360° Market and Competitive Intelligence ecosystem dedicated to African growth.
        </p>
      </section>

      {/* 3 Stages Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <StageCard 
          number="1" 
          title="Sourcing" 
          icon={Database}
          description="Aggregate information from 1Mn+ vetted sources including African news, company websites, SEC filings, and your own internal data." 
        />
        <StageCard 
          number="2" 
          title="Processing" 
          icon={Cpu}
          description="Actionable intelligence extracted from unstructured digital noise using Athena AI, ML models, and human curation for 100% relevance." 
        />
        <StageCard 
          number="3" 
          title="Distribution" 
          icon={Users}
          description="Personalized intel delivered to your teams via dynamic dashboards, white-labeled newsletters, and native enterprise integrations." 
        />
      </div>

      {/* Main Illustration Section - Replicating the provided image flow */}
      <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col space-y-12">
          <h2 className="text-3xl font-bold text-center mb-8">Data Flow & Intelligence Architecture</h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            {/* Input Sources */}
            <div className="space-y-4 w-full lg:w-48">
              {[
                { label: '3rd Party Sources', icon: Database },
                { label: 'Open Internet', icon: Globe },
                { label: 'Internal Sources', icon: Layout }
              ].map((src, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center">
                  <src.icon size={20} className="text-emerald-400 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{src.label}</span>
                </div>
              ))}
            </div>

            <ArrowRight className="hidden lg:block text-slate-700" size={32} />

            {/* Central Processing Hub */}
            <div className="flex-1 flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/30">
                  <Cpu size={32} />
                </div>
                <h4 className="font-bold mb-4">ML & LLMs</h4>
                <div className="space-y-2 text-left">
                  {['Categorization', 'Entity Tagging', 'Fact Extraction', 'Insights (KIQs)'].map((task, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span className="text-[10px] font-bold uppercase tracking-tight">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px w-12 bg-slate-700 hidden md:block"></div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30">
                  <Users size={32} />
                </div>
                <h4 className="font-bold mb-4">Human Curation</h4>
                <div className="space-y-2 text-left">
                  {['Relevance Check', 'Single POC', 'Accuracy Verify', 'Configuration'].map((task, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      <CheckCircle2 size={12} className="text-blue-400" />
                      <span className="text-[10px] font-bold uppercase tracking-tight">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ArrowRight className="hidden lg:block text-slate-700" size={32} />

            {/* Distribution */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-48">
              {[
                { label: 'Web App', icon: Layout },
                { label: 'Newsletters', icon: Mail },
                { label: 'News APIs', icon: FileCode },
                { label: 'Integrations', icon: Zap }
              ].map((out, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center space-x-3">
                  <out.icon size={16} className="text-blue-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{out.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Tours & Growth Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">Experience AfriSense Products</h2>
          <p className="text-slate-500 mt-2">Dedicated to your business growth at every stage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all border-b-4 border-b-emerald-600">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">M&CI Platform</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Keep a tab on the dynamic competitive landscape, identify trends, and analyze data to build a lasting competitive advantage.
            </p>
            <div className="h-48 bg-slate-50 rounded-2xl flex items-center justify-center border border-dashed border-slate-200">
               <Zap className="text-slate-200" size={64} />
            </div>
            <button className="w-full mt-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-emerald-700 transition-colors">
              Start Free Trial <ChevronRight size={18} className="ml-2" />
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all border-b-4 border-b-blue-600">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">News API</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Access noise-free, structured and machine-readable industry news, delivered through RESTful APIs, Webhooks and RSS feeds.
            </p>
            <div className="h-48 bg-slate-50 rounded-2xl flex items-center justify-center border border-dashed border-slate-200">
               <FileCode className="text-slate-200" size={64} />
            </div>
            <button className="w-full mt-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-blue-700 transition-colors">
              Developer Portal <ChevronRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Enterprise Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        <FeatureHighlight 
          icon={ShieldCheck}
          title="Data Privacy"
          description="We are committed to protect your sensitive data and adhere to industry standards like SOC 2 and GDPR for compliance."
        />
        <FeatureHighlight 
          icon={Zap}
          title="Integrations"
          description="Connect with Slack, MS Teams, Salesforce, PowerBI and custom RESTful APIs for automated intelligence flow."
        />
        <FeatureHighlight 
          icon={Settings}
          title="User Management"
          description="Grant and control access within teams with RBAC, SSO authentication, and automated user provisioning."
        />
        <FeatureHighlight 
          icon={Headphones}
          title="Dedicated Support"
          description="Enterprise support plans with account managers, 24/7 resolution times, and strategic onboarding support."
        />
      </section>
    </div>
  );
};

export default HowItWorksView;

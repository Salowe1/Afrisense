
import React, { useState } from 'react';
import { DATA_SOURCES } from '../constants';
import { ExternalLink, Database, Search, FileText, ChevronRight, Server, Zap, Shield, Network } from 'lucide-react';

const SourcesView: React.FC = () => {
  const [showDBGuide, setShowDBGuide] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Resource Hub</h2>
          <p className="text-slate-500">Direct access to primary data sources and system architecture.</p>
        </div>
        <button 
          onClick={() => setShowDBGuide(!showDBGuide)}
          className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center hover:bg-slate-800 transition-all"
        >
          <Server size={18} className="mr-2" />
          Infrastructure Guide
        </button>
      </header>

      {showDBGuide ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-8 animate-in slide-in-from-top-4 duration-500">
           <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <h3 className="text-xl font-bold text-slate-800">Hybrid Database Architecture (Contify-Model)</h3>
              <button onClick={() => setShowDBGuide(false)} className="text-emerald-600 font-bold text-sm">Close Guide</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Zap size={24} />
                 </div>
                 <h4 className="font-bold text-slate-800">1. Real-time Ingestion</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">
                    Uses <strong>Redis</strong> for caching 1M+ vetted news RSS feeds and <strong>Kafka</strong> for streaming multi-country signals. 
                    Ingestion layer translates 117 languages before indexing.
                 </p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Database size={24} />
                 </div>
                 <h4 className="font-bold text-slate-800">2. Structured & Semi-Structured</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">
                    <strong>PostgreSQL (with JSONB)</strong> stores core metadata, user roles, and "Business Facts." 
                    Enables complex relational queries for competitive battlecards.
                 </p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                    <Network size={24} />
                 </div>
                 <h4 className="font-bold text-slate-800">3. Vector & Graph Intelligence</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">
                    <strong>Pinecone (Vector DB)</strong> powers Athena's RAG for cited answers. 
                    <strong>Neo4j</strong> maps strategic corporate relationships (subsidiaries, investors).
                 </p>
              </div>
           </div>

           <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                 <Shield size={18} className="mr-2 text-emerald-600" />
                 Recommended Schema Layout (Contify-Native)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {['Organizations', 'Articles_Index', 'Athena_Embeddings', 'Battlecards'].map(table => (
                    <div key={table} className="bg-white p-3 rounded-xl border border-slate-200 font-mono text-xs font-bold text-slate-600 flex justify-between items-center">
                       {table} <ChevronRight size={14} className="opacity-30" />
                    </div>
                 ))}
              </div>
           </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA_SOURCES.map((source, idx) => (
            <a 
              key={idx} 
              href={source.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
                  {source.type === 'Macro' && <Database className="text-emerald-600" size={20} />}
                  {source.type === 'News' && <Search className="text-emerald-600" size={20} />}
                  {source.type === 'Business' && <FileText className="text-emerald-600" size={20} />}
                </div>
                <ExternalLink className="text-slate-300 group-hover:text-emerald-400" size={18} />
              </div>
              <h4 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{source.name}</h4>
              <p className="text-sm text-slate-500 mt-2">Primary source for {source.type.toLowerCase()} datasets across the continent.</p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Verified</span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">{source.type}</span>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
        <div className="max-w-3xl">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">Custom Enterprise Ingestion</h3>
          <p className="text-emerald-800 opacity-80 mb-6 leading-relaxed">
            Integrate niche or gated sources through our secure ingestion pipeline. Support for PDF parsing, 
            SEC filings, and industry-specific subscription feeds (e.g., Africa Business Communities).
          </p>
          <div className="flex space-x-4">
             <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
               Request Connector Access
             </button>
             <button className="bg-white border border-emerald-200 text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
               Developer Docs
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcesView;

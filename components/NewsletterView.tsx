
import React from 'react';
import { Mail, Edit3, Send, Plus, Layout, BarChart, Lock } from 'lucide-react';

const NewsletterView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Newsletter Manager</h2>
          <p className="text-slate-500">Democratize intelligence with branded executive reports.</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center shadow-lg shadow-emerald-100">
          <Plus size={18} className="mr-2" />
          Create Newsletter
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-white border border-slate-200 rounded-3xl p-8 min-h-[400px] flex flex-col">
              <div className="border-b border-slate-100 pb-4 mb-8 flex items-center justify-between">
                 <div className="h-10 w-32 bg-slate-100 rounded-lg animate-pulse" />
                 <span className="text-xs font-bold text-slate-400">Weekly Executive Briefing - Jan 2026</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30 grayscale pointer-events-none">
                 <Layout size={48} className="text-slate-300 mb-4" />
                 <h3 className="text-xl font-bold text-slate-800">Drag & Drop Editor Restricted</h3>
                 <p className="text-sm text-slate-500 mt-2">The Pro Editor allows automated curation from your saved searches.</p>
              </div>
              <div className="mt-auto pt-8 border-t border-slate-100 text-center">
                 <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full border border-amber-100">
                       <Lock className="text-amber-500" size={16} />
                    </div>
                    <p className="text-amber-800 text-sm font-bold mb-4">You are viewing the template preview.</p>
                    <button className="bg-amber-600 text-white px-6 py-2 rounded-xl text-xs font-bold">Upgrade to Send</button>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center text-sm">
                <BarChart size={16} className="mr-2 text-emerald-600" />
                Engagement Stats
              </h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Open Rate</span>
                    <span className="text-sm font-bold text-slate-800">--%</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Top Content</span>
                    <span className="text-sm font-bold text-slate-800">N/A</span>
                 </div>
              </div>
           </div>
           
           <div className="bg-emerald-900 text-white rounded-3xl p-6">
              <h4 className="font-bold mb-2 flex items-center text-sm">
                <Send size={16} className="mr-2" />
                Push Destinations
              </h4>
              <p className="text-[10px] opacity-70 mb-4">Connect intelligence to your team where they work.</p>
              <div className="space-y-2">
                 <div className="flex items-center space-x-2 bg-white/10 p-2 rounded-xl border border-white/5 opacity-50">
                    <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-[10px]">S</div>
                    <span className="text-xs">Slack</span>
                 </div>
                 <div className="flex items-center space-x-2 bg-white/10 p-2 rounded-xl border border-white/5 opacity-50">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px]">T</div>
                    <span className="text-xs">Teams</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterView;

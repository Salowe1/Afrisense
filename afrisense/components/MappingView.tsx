
import React, { useState } from 'react';
// Added missing X import
import { Network, Share2, Target, ZoomIn, ZoomOut, Maximize2, Zap, Briefcase, Globe, ExternalLink, ArrowUpRight, X } from 'lucide-react';
import { AFRICAN_COUNTRIES } from '../constants';

interface Node {
  id: string;
  label: string;
  type: 'Country' | 'Company' | 'Subsidiary' | 'Partner' | 'Investor';
  x: number;
  y: number;
  data?: any;
}

interface Edge {
  source: string;
  target: string;
}

interface MappingViewProps {
  onInvest?: (country: string) => void;
}

const MappingView: React.FC<MappingViewProps> = ({ onInvest }) => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // Generate some country nodes and connections
  const nodes: Node[] = [
    { id: 'burkina', label: 'Burkina Faso', type: 'Country', x: 400, y: 300 },
    { id: 'nigeria', label: 'Nigeria', type: 'Country', x: 600, y: 400 },
    { id: 'ghana', label: 'Ghana', type: 'Country', x: 200, y: 400 },
    { id: 'ivory', label: 'Ivory Coast', type: 'Country', x: 300, y: 550 },
    { id: 'mtn', label: 'MTN Group', type: 'Company', x: 500, y: 150 },
    { id: 'afdb', label: 'AfDB', type: 'Investor', x: 400, y: 50 },
  ];

  const edges: Edge[] = [
    { source: 'mtn', target: 'burkina' },
    { source: 'mtn', target: 'nigeria' },
    { source: 'afdb', target: 'burkina' },
    { source: 'afdb', target: 'ghana' },
    { source: 'burkina', target: 'ivory' },
  ];

  return (
    <div className="relative h-full space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center">
            <Network className="mr-2 text-emerald-600" size={24} />
            Strategic Market Mapping
          </h2>
          <p className="text-slate-500 text-sm">Visualizing cross-border investments and corporate dependencies.</p>
        </div>
        <div className="flex space-x-2">
           <button className="flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 shadow-sm">
             <Share2 size={14} /> <span>Snapshot</span>
           </button>
           <button className="flex items-center space-x-2 bg-emerald-600 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg shadow-emerald-100">
             <Maximize2 size={14} /> <span>Focus Mode</span>
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-[2.5rem] h-[650px] relative overflow-hidden shadow-sm">
          <div className="absolute top-6 left-6 z-10 flex flex-col space-y-2">
             <button className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50"><ZoomIn size={18} /></button>
             <button className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50"><ZoomOut size={18} /></button>
          </div>
          
          <svg className="w-full h-full cursor-grab active:cursor-grabbing">
             <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="15" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                   <path d="M 0 0 L 10 5 L 0 10 z" fill="#e2e8f0" />
                </marker>
             </defs>
             {edges.map((edge, i) => {
                const s = nodes.find(n => n.id === edge.source)!;
                const t = nodes.find(n => n.id === edge.target)!;
                return (
                   <line key={i} x1={s.x} y1={s.y} x2={t.x} y2={t.y} stroke="#f1f5f9" strokeWidth="2" markerEnd="url(#arrow)" />
                );
             })}
             {nodes.map(node => (
                <g key={node.id} 
                   onClick={() => setSelectedNode(node)}
                   className="cursor-pointer group" 
                   transform={`translate(${node.x},${node.y})`}>
                   <circle r="40" className={`transition-all duration-300 ${
                     selectedNode?.id === node.id 
                       ? (node.type === 'Country' ? 'fill-emerald-600' : 'fill-slate-800') 
                       : 'fill-white stroke-slate-200'
                   } group-hover:stroke-emerald-400`} strokeWidth="4" />
                   <text textAnchor="middle" dy=".3em" className={`text-[9px] font-black select-none pointer-events-none transition-colors ${
                     selectedNode?.id === node.id ? 'fill-white' : 'fill-slate-700'
                   }`}>
                      {node.label.toUpperCase()}
                   </text>
                   <circle r="45" fill="transparent" className="group-hover:stroke-emerald-100" strokeWidth="2" />
                </g>
             ))}
          </svg>
        </div>

        <div className="space-y-6">
           {selectedNode ? (
             <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="flex items-center justify-between mb-6">
                   <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{selectedNode.type} PROFILE</span>
                   <button onClick={() => setSelectedNode(null)} className="text-slate-500 hover:text-white"><X size={14} /></button>
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{selectedNode.label}</h3>
                
                <div className="space-y-6">
                   <p className="text-xs text-slate-400 leading-relaxed">
                      {selectedNode.type === 'Country' 
                        ? `Market entry strategy for ${selectedNode.label} includes simplified tax stickers and local content laws in high-value sectors.` 
                        : `Core strategic partner providing capital and infrastructure across the Sahel region.`}
                   </p>

                   {selectedNode.type === 'Country' && onInvest && (
                     <button 
                      onClick={() => onInvest(selectedNode.label)}
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/40"
                     >
                       <Briefcase size={16} />
                       <span>Invest in {selectedNode.label}</span>
                       <ArrowUpRight size={14} />
                     </button>
                   )}

                   <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div>
                        <p className="text-[9px] text-slate-500 font-bold uppercase">Political Risk</p>
                        <p className="text-sm font-bold text-amber-400">Moderate</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-500 font-bold uppercase">Market Cap</p>
                        <p className="text-sm font-bold text-emerald-400">$24.2B</p>
                      </div>
                   </div>
                </div>
             </div>
           ) : (
             <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm flex flex-col items-center justify-center text-center h-[300px]">
                <Target size={48} className="text-slate-200 mb-4" />
                <h4 className="font-bold text-slate-800">Select a Node</h4>
                <p className="text-xs text-slate-400 mt-2">Click on a country or company to reveal deep intelligence and investment pathways.</p>
             </div>
           )}

           <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm">
              <h4 className="font-black text-slate-800 mb-6 flex items-center uppercase tracking-widest text-[10px]">
                 <Zap size={14} className="mr-2 text-emerald-600" /> Hot Corridors
              </h4>
              <div className="space-y-3">
                 {[
                   { from: 'Burkina Faso', to: 'Ivory Coast', type: 'Energy' },
                   { from: 'Nigeria', to: 'Ghana', type: 'Fintech' }
                 ].map((link, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group cursor-pointer hover:border-emerald-200 transition-colors">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-slate-800">{link.from} → {link.to}</span>
                          <span className="text-[8px] text-slate-400 uppercase font-black">{link.type} Linkage</span>
                       </div>
                       <ExternalLink size={12} className="text-slate-300 group-hover:text-emerald-500" />
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MappingView;

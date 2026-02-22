
import React, { useState } from 'react';
import { AFRICAN_COUNTRIES, SECTORS } from '../constants';
import { Filter, MapPin, ExternalLink, Info, Globe, ChevronRight, TrendingUp, Zap } from 'lucide-react';

interface ExplorerViewProps {
  onSectorClick?: (sector: string, country: string) => void;
}

const ExplorerView: React.FC<ExplorerViewProps> = ({ onSectorClick }) => {
  const [selectedCountry, setSelectedCountry] = useState(AFRICAN_COUNTRIES[0].name);
  const [selectedSector, setSelectedSector] = useState('All');

  const filteredSectors = selectedSector === 'All' 
    ? SECTORS 
    : SECTORS.filter(s => s === selectedSector);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Market Explorer</h2>
          <p className="text-slate-500">Deep dive into specific country-sector dynamics across 18 key industries.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select 
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-4 focus:ring-emerald-100 transition-all appearance-none"
            >
              {AFRICAN_COUNTRIES.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          <select 
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-4 focus:ring-emerald-100 transition-all appearance-none"
          >
            <option value="All">All Sectors</option>
            {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </header>

      {/* Country Profile Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full mb-6">
              <Globe size={14} className="text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-widest">Macro Analysis</span>
            </div>
            <h3 className="text-5xl font-black tracking-tight">{selectedCountry}</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Regional Hub</p>
                <p className="text-lg font-bold text-white">{AFRICAN_COUNTRIES.find(c => c.name === selectedCountry)?.region} Africa</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">GDP Status</p>
                <p className="text-lg font-bold text-emerald-400">Emerging</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Risk Profile</p>
                <p className="text-lg font-bold text-amber-400">Moderate</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">EODB Rank</p>
                <p className="text-lg font-bold text-white">Top 10 (Reg)</p>
              </div>
            </div>
          </div>
          <Globe className="absolute -right-20 -bottom-20 text-white/5 pointer-events-none" size={400} />
        </div>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="font-black text-slate-800 flex items-center uppercase tracking-widest text-xs">
              <Info size={16} className="mr-2 text-emerald-600" />
              Intelligence Brief
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Market entry in {selectedCountry} is characterized by high demand for digital transformation across legacy sectors. 
              The latest "Africa Continental Free Trade Area" (AfCFTA) updates suggest a 15% reduction in intra-regional tariffs for this market.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
            <button className="w-full flex items-center justify-between text-xs font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors">
              <span>Full Market Report</span>
              <ChevronRight size={16} />
            </button>
            <button className="w-full flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">
              <span>Regulatory Data</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Sector Insights Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-slate-800 tracking-tight uppercase tracking-widest text-sm flex items-center">
            <TrendingUp size={18} className="mr-2 text-emerald-600" />
            Key Sector Insights ({filteredSectors.length})
          </h3>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Grounded in 1M+ Sources</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSectors.map((sector) => (
            <div 
              key={sector} 
              onClick={() => onSectorClick?.(sector, selectedCountry)}
              className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer group flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
                    <Zap size={18} className="text-emerald-600" />
                  </div>
                  {(sector.includes('Fintech') || sector.includes('Energy') || sector.includes('Logistics')) && (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] font-black rounded uppercase">Top Priority</span>
                  )}
                </div>
                <h4 className="font-black text-slate-800 text-base leading-tight mb-2 group-hover:text-emerald-700 transition-colors">{sector}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                  Analysis of the {sector} landscape in {selectedCountry} reveals a strong trend toward localized value-addition and decentralized processing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Updated 45m ago</span>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorerView;

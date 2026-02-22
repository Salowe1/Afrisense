
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, Landmark, Globe, Briefcase, Layout, AlertCircle } from 'lucide-react';

const mockChartData = [
  { name: '2019', gdp: 3.5, fdi: 45 },
  { name: '2020', gdp: -2.1, fdi: 38 },
  { name: '2021', gdp: 4.8, fdi: 42 },
  { name: '2022', gdp: 4.1, fdi: 47 },
  { name: '2023', gdp: 3.8, fdi: 51 },
  { name: '2024E', gdp: 4.2, fdi: 54 },
];

const StatCard = ({ title, value, change, icon: Icon, isPositive }: any) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-emerald-200 transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
        <Icon className="text-emerald-600" size={20} />
      </div>
      <div className={`flex items-center text-sm font-bold ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
        {change}
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      </div>
    </div>
    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">{title}</h3>
    <p className="text-3xl font-black text-slate-800 mt-1 tracking-tight">{value}</p>
  </div>
);

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Market Pulse</h2>
          <p className="text-slate-500 font-medium">Contify-native 360° economic monitoring.</p>
        </div>
        <div className="hidden lg:flex space-x-2">
           <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600">EMEA HUB</span>
           <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600">SUBSAHARAN HUB</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Avg GDP Growth" value="4.2%" change="0.4%" icon={Landmark} isPositive={true} />
        <StatCard title="FDI Inflows" value="$54.2B" change="12%" icon={Globe} isPositive={true} />
        <StatCard title="Active Projects" value="1,284" change="2.1%" icon={Briefcase} isPositive={false} />
        <StatCard title="Consumer Index" value="102.4" change="5.2%" icon={Users} isPositive={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-black text-slate-800 mb-8 uppercase tracking-widest flex items-center">
             Growth Dynamics <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] rounded">REAL-TIME</span>
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockChartData}>
                <defs>
                  <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} />
                <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)'}} />
                <Area type="monotone" dataKey="gdp" stroke="#10b981" fillOpacity={1} fill="url(#colorGdp)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-lg font-black mb-6 uppercase tracking-widest flex items-center">
                 <Layout size={18} className="mr-2 text-emerald-400" /> Website Tracker
              </h3>
              <div className="space-y-4">
                 {[
                   { company: 'Safaricom', change: 'Pricing Page Updated', time: '1h ago' },
                   { company: 'Standard Bank', change: 'New Logo/Branding', time: '3h ago' },
                   { company: 'Jumia', change: 'Terms of Service Mod', time: '5h ago' }
                 ].map((log, i) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                         <p className="text-xs font-black text-emerald-400 uppercase tracking-tighter">{log.company}</p>
                         <span className="text-[10px] opacity-40 italic">{log.time}</span>
                      </div>
                      <p className="text-sm font-medium">{log.change}</p>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-3 bg-emerald-500 text-white rounded-2xl text-xs font-bold hover:bg-emerald-400 transition-colors">
                 Monitor All Competitors
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;

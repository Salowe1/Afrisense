
import React, { useState } from 'react';
import { 
  Users as UsersIcon, 
  ShieldCheck, 
  Activity, 
  Settings, 
  Search, 
  Filter, 
  UserPlus, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  Lock, 
  Database, 
  Server, 
  CreditCard,
  ChevronRight,
  Zap,
  HardDrive
} from 'lucide-react';
import { User, UserRole } from '../types';

const mockUsers: User[] = [
  { id: '1', name: 'Jean-Claude Kamau', email: 'jck@africa-corp.com', role: 'Admin', status: 'Active', lastActive: '2m ago' },
  { id: '2', name: 'Sarah Mensah', email: 'mensah.s@strategy.co', role: 'Intelligence Analyst', status: 'Active', lastActive: '1h ago' },
  { id: '3', name: 'David Okafor', email: 'david@sales-hub.ng', role: 'Sales Ops', status: 'Active', lastActive: '4h ago' },
  { id: '4', name: 'Elena Vance', email: 'vance@leadership.org', role: 'Executive', status: 'Active', lastActive: '1d ago' },
  { id: '5', name: 'Michael Touré', email: 'mt@prod-intelligence.com', role: 'Product Specialist', status: 'Pending', lastActive: 'N/A' },
];

const RoleBadge = ({ role }: { role: UserRole }) => {
  const colors: Record<UserRole, string> = {
    'Admin': 'bg-slate-900 text-white',
    'Intelligence Analyst': 'bg-emerald-100 text-emerald-700',
    'Strategy Lead': 'bg-blue-100 text-blue-700',
    'Marketing Insight': 'bg-pink-100 text-pink-700',
    'Sales Ops': 'bg-orange-100 text-orange-700',
    'Product Specialist': 'bg-purple-100 text-purple-700',
    'Executive': 'bg-amber-100 text-amber-700'
  };
  return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors[role]}`}>{role}</span>;
};

const AdminView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'Users' | 'Logs' | 'Security' | 'Billing'>('Users');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center">
            <ShieldAlert className="mr-2 text-emerald-600" size={24} />
            Superadmin Control Center
          </h2>
          <p className="text-slate-500 text-sm">System-wide governance, infrastructure health, and security overrides.</p>
        </div>
        <div className="flex bg-white border border-slate-200 p-1 rounded-2xl shadow-sm">
           {(['Users', 'Logs', 'Security', 'Billing'] as const).map(tab => (
             <button 
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeSubTab === tab ? 'bg-emerald-600 text-white shadow-md shadow-emerald-100' : 'text-slate-400 hover:text-slate-600'
              }`}
             >
               {tab.toUpperCase()}
             </button>
           ))}
        </div>
      </header>

      {/* System Pulse Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Seats</span>
              <UsersIcon size={16} className="text-emerald-500" />
           </div>
           <p className="text-2xl font-black text-slate-800">14 / 20</p>
           <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: '70%' }}></div>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ingestion Health</span>
              <Activity size={16} className="text-blue-500" />
           </div>
           <p className="text-2xl font-black text-slate-800">99.9%</p>
           <p className="text-[10px] text-emerald-600 font-bold mt-2">Optimal throughput</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Athena Load</span>
              <Zap size={16} className="text-amber-500" />
           </div>
           <p className="text-2xl font-black text-slate-800">4.2ms</p>
           <p className="text-[10px] text-slate-400 font-bold mt-2">P95 Latency</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">DB Storage</span>
              <Database size={16} className="text-purple-500" />
           </div>
           <p className="text-2xl font-black text-slate-800">1.2 TB</p>
           <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500" style={{ width: '45%' }}></div>
           </div>
        </div>
      </div>

      {activeSubTab === 'Users' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
             <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                   <Search size={16} className="text-slate-400" />
                   <input type="text" placeholder="Search team members..." className="bg-transparent border-none text-sm outline-none w-64" />
                </div>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center">
                  <UserPlus size={14} className="mr-2" /> Add User
                </button>
             </div>
             
             <table className="w-full text-left">
                <thead className="bg-slate-50/50 border-b border-slate-100">
                   <tr>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">User</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Role</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Status</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Last Active</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase"></th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {mockUsers.map(user => (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                         <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                               <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                               </div>
                               <div>
                                  <p className="text-sm font-bold text-slate-800">{user.name}</p>
                                  <p className="text-[10px] text-slate-400">{user.email}</p>
                               </div>
                            </div>
                         </td>
                         <td className="px-6 py-4"><RoleBadge role={user.role} /></td>
                         <td className="px-6 py-4">
                            <div className="flex items-center text-xs font-medium text-emerald-600">
                               {user.status === 'Active' ? <CheckCircle2 size={14} className="mr-1" /> : <Clock size={14} className="mr-1 text-slate-400" />}
                               {user.status}
                            </div>
                         </td>
                         <td className="px-6 py-4 text-xs text-slate-500 font-mono">{user.lastActive}</td>
                         <td className="px-6 py-4">
                            <button className="p-1 hover:bg-slate-100 rounded text-slate-400"><MoreVertical size={16} /></button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          <div className="space-y-6">
             <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
                <h4 className="font-bold flex items-center mb-4"><Lock size={18} className="mr-2 text-emerald-400" /> Identity Provider</h4>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl mb-4">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Provider</p>
                   <p className="text-lg font-bold text-emerald-400">Microsoft Azure AD</p>
                </div>
                <button className="w-full py-3 bg-white/10 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/20 transition-all">
                   Manage Federation Settings
                </button>
             </div>
             <div className="bg-white border border-slate-200 p-6 rounded-3xl">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Pending Approvals</h4>
                <div className="space-y-3">
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div>
                         <p className="text-xs font-bold text-slate-800">Michael Touré</p>
                         <p className="text-[10px] text-slate-400">Request: Product Specialist</p>
                      </div>
                      <button className="text-emerald-600 font-bold text-[10px] uppercase">Approve</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )}

      {activeSubTab === 'Logs' && (
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm animate-in fade-in slide-in-from-right-4">
           <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Audit Trail (Last 24 Hours)</h3>
              <div className="flex space-x-2">
                 <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400"><Filter size={16} /></button>
                 <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold">Export Logs</button>
              </div>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="bg-slate-50/50 border-b border-slate-100">
                    <tr>
                       <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Timestamp</th>
                       <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Action</th>
                       <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">User</th>
                       <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">IP Address</th>
                       <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 font-mono text-xs">
                    {[
                      { time: '2026-01-24 14:22:10', action: 'ATHENA_QUERY_EXECUTE', user: 'jck@africa-corp.com', ip: '102.16.88.42', status: 'SUCCESS' },
                      { time: '2026-01-24 13:45:02', action: 'BATTLECARD_EXPORT_PDF', user: 'mensah.s@strategy.co', ip: '102.16.88.11', status: 'SUCCESS' },
                      { time: '2026-01-24 13:10:55', action: 'ADMIN_USER_ROLE_UPDATE', user: 'jck@africa-corp.com', ip: '102.16.88.42', status: 'SUCCESS' },
                      { time: '2026-01-24 12:30:11', action: 'DASHBOARD_LOGIN', user: 'vance@leadership.org', ip: '41.222.1.8', status: 'SUCCESS' },
                      { time: '2026-01-24 11:15:40', action: 'SSO_METADATA_REFRESH', user: 'SYSTEM_CRON', ip: 'INTERNAL', status: 'SUCCESS' }
                    ].map((log, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-slate-400">{log.time}</td>
                        <td className="px-6 py-4 font-bold text-slate-700">{log.action}</td>
                        <td className="px-6 py-4 text-slate-600">{log.user}</td>
                        <td className="px-6 py-4 text-slate-400">{log.ip}</td>
                        <td className="px-6 py-4">
                           <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-bold">{log.status}</span>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      )}

      {activeSubTab === 'Security' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in zoom-in-95">
           <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-8 flex items-center">
                 <ShieldCheck className="mr-2 text-emerald-600" /> Authentication Policies
              </h3>
              <div className="space-y-6">
                 {[
                   { label: 'Enforce SSO Login Only', desc: 'Disables standard password login for all non-admins.', enabled: true },
                   { label: '2FA Mandatory', desc: 'Require TOTP or Hardware key for all staff.', enabled: true },
                   { label: 'Session Timeout (12h)', desc: 'Auto logout after 12 hours of inactivity.', enabled: false },
                   { label: 'IP Whitelisting', desc: 'Restrict dashboard access to corporate VPN ranges.', enabled: false }
                 ].map((policy, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                       <div className="max-w-[70%]">
                          <p className="text-sm font-bold text-slate-800">{policy.label}</p>
                          <p className="text-[10px] text-slate-500">{policy.desc}</p>
                       </div>
                       <button className={`w-10 h-5 rounded-full relative transition-all ${policy.enabled ? 'bg-emerald-600' : 'bg-slate-300'}`}>
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${policy.enabled ? 'right-1' : 'left-1'}`}></div>
                       </button>
                    </div>
                 ))}
              </div>
           </div>
           <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-8 flex items-center">
                 <Settings className="mr-2 text-blue-600" /> Advanced Settings
              </h3>
              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Data Retention (Days)</label>
                    <input type="number" defaultValue={90} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 text-sm focus:ring-2 ring-emerald-500 outline-none" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">AI Reasoning Token Limit (Monthly)</label>
                    <input type="number" defaultValue={5000000} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 text-sm focus:ring-2 ring-emerald-500 outline-none" />
                 </div>
                 <div className="p-6 bg-amber-50 border border-amber-100 rounded-3xl">
                    <h4 className="text-amber-900 font-bold text-sm mb-2 flex items-center"><ShieldAlert size={14} className="mr-1" /> Emergency Purge</h4>
                    <p className="text-[10px] text-amber-700 leading-relaxed mb-4">Wipe all cached competitive battlecards and local search indices across the organization. This cannot be undone.</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-700 transition-colors">Invoke Emergency Purge</button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {activeSubTab === 'Billing' && (
        <div className="space-y-8 animate-in fade-in duration-500">
           <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between">
              <div>
                 <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">Enterprise Intelligence Plan</span>
                 <h3 className="text-4xl font-black tracking-tight mb-2">$24,900 <span className="text-lg opacity-60 font-medium">/ year</span></h3>
                 <p className="opacity-80 flex items-center"><CheckCircle2 size={16} className="mr-2" /> Renewal date: Oct 12, 2026</p>
              </div>
              <div className="flex space-x-4 mt-8 md:mt-0">
                 <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl">Manage Plan</button>
                 <button className="bg-emerald-500 text-white border border-emerald-400 px-8 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-all">View Invoices</button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                 <CreditCard className="text-emerald-600 mb-6" size={32} />
                 <h4 className="font-bold text-slate-800 mb-2">Payment Method</h4>
                 <p className="text-xs text-slate-500 mb-6">Visa ending in •••• 4242</p>
                 <button className="text-emerald-600 font-bold text-xs hover:underline flex items-center">Update Card <ChevronRight size={14} /></button>
              </div>
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                 <HardDrive className="text-blue-600 mb-6" size={32} />
                 <h4 className="font-bold text-slate-800 mb-2">Storage Usage</h4>
                 <p className="text-xs text-slate-500 mb-6">1.2 TB / 5 TB utilized</p>
                 <button className="text-blue-600 font-bold text-xs hover:underline flex items-center">Increase Limit <ChevronRight size={14} /></button>
              </div>
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                 <Server className="text-purple-600 mb-6" size={32} />
                 <h4 className="font-bold text-slate-800 mb-2">Connected Instances</h4>
                 <p className="text-xs text-slate-500 mb-6">3 Active Cloud Regions</p>
                 <button className="text-purple-600 font-bold text-xs hover:underline flex items-center">Manage Nodes <ChevronRight size={14} /></button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default AdminView;

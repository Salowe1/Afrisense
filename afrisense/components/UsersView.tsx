
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { 
  Users, 
  ShieldCheck, 
  MoreVertical, 
  UserPlus, 
  CheckCircle2, 
  Clock, 
  ShieldAlert,
  Search,
  Filter
} from 'lucide-react';

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

const UsersView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center">
            <ShieldCheck className="mr-2 text-emerald-600" size={24} />
            User Governance & Roles
          </h2>
          <p className="text-slate-500 text-sm">Manage enterprise access and role-specific dashboard permissions.</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all">
          <UserPlus size={18} className="mr-2" />
          Add User
        </button>
      </header>

      {/* Permission Matrix Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
           <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                 <Search size={16} className="text-slate-400" />
                 <input type="text" placeholder="Search team members..." className="bg-transparent border-none text-sm outline-none w-64" />
              </div>
              <div className="flex items-center space-x-2">
                 <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400"><Filter size={16} /></button>
              </div>
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
           <div className="bg-emerald-900 text-white p-6 rounded-3xl shadow-xl">
              <h4 className="font-bold flex items-center mb-4">
                <ShieldAlert size={18} className="mr-2 text-emerald-400" />
                Security Overrides
              </h4>
              <p className="text-xs opacity-70 leading-relaxed mb-6">
                Your organization is configured with SSO (Okta). Role modifications require "Super Admin" clearance.
              </p>
              <div className="space-y-3">
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-xs font-medium">SSO Enforcement</span>
                    <div className="w-8 h-4 bg-emerald-500 rounded-full relative">
                       <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-xs font-medium">Audit Logs (90d)</span>
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">ACTIVE</span>
                 </div>
              </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <h4 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-widest">Platform Limits</h4>
              <div className="space-y-4">
                 <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1">
                       <span className="text-slate-400 uppercase">Seats Used</span>
                       <span className="text-slate-800">12 / 20</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500" style={{ width: '60%' }}></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1">
                       <span className="text-slate-400 uppercase">Athena AI Queries</span>
                       <span className="text-slate-800">842 / 5,000</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500" style={{ width: '17%' }}></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UsersView;

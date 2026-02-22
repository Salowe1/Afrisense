
import React, { useState } from 'react';
import { AuthUser, UserRole } from '../types';
import { 
  User as UserIcon, 
  Mail, 
  Shield, 
  Bell, 
  Globe, 
  Save, 
  Camera, 
  Zap,
  CheckCircle2
} from 'lucide-react';

interface ProfileViewProps {
  user: AuthUser;
  onUpdate: (user: AuthUser) => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [notifications, setNotifications] = useState(user.preferences?.notifications ?? true);
  const [newsletter, setNewsletter] = useState(user.preferences?.newsletterFrequency ?? 'weekly');
  const [region, setRegion] = useState(user.preferences?.defaultRegion ?? 'Sub-Saharan Africa');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    onUpdate({
      ...user,
      name,
      email,
      preferences: {
        notifications,
        newsletterFrequency: newsletter,
        defaultRegion: region
      }
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Personal Workspace</h2>
        <p className="text-slate-500 text-sm">Manage your profile, preferences, and workspace settings.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Identity</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative group">
                  <div className="h-24 w-24 bg-emerald-100 text-emerald-700 rounded-3xl flex items-center justify-center text-3xl font-bold overflow-hidden">
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      user.name.charAt(0)
                    )}
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 bg-emerald-600 text-white rounded-xl shadow-lg hover:bg-emerald-700 transition-all opacity-0 group-hover:opacity-100">
                    <Camera size={16} />
                  </button>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">{user.name}</h4>
                  <p className="text-sm text-slate-400">{user.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Display Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      value={name} onChange={e => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="email" 
                      value={email} onChange={e => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Platform Preferences</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <Bell className="text-emerald-600" size={20} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">Push Notifications</p>
                    <p className="text-[10px] text-slate-400">Receive real-time alerts for market shifts.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setNotifications(!notifications)}
                  className={`w-10 h-5 rounded-full transition-all relative ${notifications ? 'bg-emerald-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${notifications ? 'right-1' : 'left-1'}`}></div>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Newsletter Frequency</label>
                  <select 
                    value={newsletter} onChange={e => setNewsletter(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option value="daily">Daily Intelligence</option>
                    <option value="weekly">Weekly Strategic Summary</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Default Market Focus</label>
                  <select 
                    value={region} onChange={e => setRegion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option>Sub-Saharan Africa</option>
                    <option>East Africa (EAC)</option>
                    <option>West Africa (ECOWAS)</option>
                    <option>North Africa (Maghreb)</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-end pt-4">
             <button 
              onClick={handleSave}
              className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
             >
               {isSaved ? (
                 <>
                  <CheckCircle2 size={18} className="mr-2" />
                  Saved
                 </>
               ) : (
                 <>
                  <Save size={18} className="mr-2" />
                  Save Changes
                 </>
               )}
             </button>
          </div>
        </div>

        {/* Right Column: Sidebar info */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
            <h4 className="font-bold flex items-center mb-4">
              <Shield size={18} className="mr-2 text-emerald-400" />
              Role & Clearance
            </h4>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl mb-4">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Role</p>
               <p className="text-lg font-bold text-emerald-400">{user.role}</p>
            </div>
            <p className="text-xs opacity-70 leading-relaxed">
              Your role determines which data layers and Athena reasoning workflows are available to you. Contact your Admin to request elevation.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl">
            <h4 className="text-emerald-900 font-bold flex items-center mb-4">
              <Zap size={18} className="mr-2" />
              Usage Stats
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-black text-emerald-700 mb-1">
                  <span>ATHENA QUERIES</span>
                  <span>142 / 500</span>
                </div>
                <div className="h-1.5 w-full bg-emerald-200/30 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-black text-emerald-700 mb-1">
                  <span>SAVED SOURCES</span>
                  <span>12 / 50</span>
                </div>
                <div className="h-1.5 w-full bg-emerald-200/30 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600" style={{ width: '24%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;

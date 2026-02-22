
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  Cpu, 
  Search, 
  TrendingUp, 
  Menu,
  Bell,
  Network,
  Sword,
  Lock,
  LogOut,
  Briefcase,
  Fingerprint,
  UserSearch,
  Zap,
  Library,
  Settings,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { AppTab, AuthUser } from './types';
import DashboardView from './components/DashboardView';
import ExplorerView from './components/ExplorerView';
import AthenaView from './components/AthenaView';
import MappingView from './components/MappingView';
import BattlecardsView from './components/BattlecardsView';
import SourcesView from './components/SourcesView';
import LoginView from './components/LoginView';
import ProfileView from './components/ProfileView';
import InvestView from './components/InvestView';
import SectorDetailView from './components/SectorDetailView';
import InvestigatorView from './components/InvestigatorView';
import LeadDiscoveryView from './components/LeadDiscoveryView';
import VerificationView from './components/VerificationView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('afri_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (user: AuthUser) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('afri_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('afri_user');
    setActiveTab(AppTab.DASHBOARD);
  };

  const navigateToInvest = (country: string) => {
    setSelectedCountry(country);
    setActiveTab(AppTab.INVEST);
  };

  const navigateToSectorDetail = (sector: string, country: string) => {
    setSelectedSector(sector);
    setSelectedCountry(country);
    setActiveTab(AppTab.SECTOR_DETAIL);
  };

  if (!isAuthenticated) return <LoginView onLogin={handleLogin} />;

  const NavigationItem = ({ tab, icon: Icon, label, isPro }: { tab: AppTab, icon: any, label: string, isPro?: boolean }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
        activeTab === tab 
          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
          : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'
      }`}
    >
      <div className="flex items-center space-x-3">
        <Icon size={18} />
        {isSidebarOpen && <span className="font-medium text-sm">{label}</span>}
      </div>
      {isSidebarOpen && isPro && <Lock size={12} className={activeTab === tab ? 'text-white/70' : 'text-slate-300'} />}
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white border-r border-slate-200 flex flex-col hidden md:flex`}>
        <div className="p-6 flex items-center space-x-3">
          <div className="bg-emerald-600 p-2 rounded-lg"><TrendingUp className="text-white" size={24} /></div>
          {isSidebarOpen && <h1 className="text-xl font-bold text-slate-800 tracking-tight">AfriSense</h1>}
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Discovery</p>
          <NavigationItem tab={AppTab.DASHBOARD} icon={LayoutDashboard} label="Global Pulse" />
          <NavigationItem tab={AppTab.EXPLORER} icon={Globe} label="Market Explorer" />
          
          <p className="px-4 py-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vérification & KYC</p>
          <NavigationItem tab={AppTab.INVESTIGATOR} icon={Fingerprint} label="Identity Investigator" isPro />
          <NavigationItem tab={AppTab.VERIFICATION} icon={CheckCircle} label="Email Verifier" isPro />
          
          <p className="px-4 py-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Intelligence</p>
          <NavigationItem tab={AppTab.ATHENA} icon={Cpu} label="Athena AI Agent" isPro />
          
          <p className="px-4 py-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secteurs & Mapping</p>
          <NavigationItem tab={AppTab.INVEST} icon={Briefcase} label="Invest Portal" />
          <NavigationItem tab={AppTab.MAPPING} icon={Network} label="Strategic Mapping" isPro />
          <NavigationItem tab={AppTab.LEAD_DISCOVERY} icon={UserSearch} label="Lead Discovery" isPro />
          <NavigationItem tab={AppTab.BATTLECARDS} icon={Sword} label="Battlecards" isPro />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all">
            <LogOut size={18} />
            {isSidebarOpen && <span className="font-medium text-sm">Sign Out</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-10 shadow-sm">
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg"><Menu size={20} /></button>
            <h2 className="font-bold text-slate-800 hidden sm:block">Market Intelligence Engine</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"><Bell size={20} /></button>
            <button onClick={() => setActiveTab(AppTab.PROFILE)} className="h-8 w-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
              {currentUser?.name?.charAt(0) || 'U'}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {activeTab === AppTab.DASHBOARD && <DashboardView />}
          {activeTab === AppTab.EXPLORER && <ExplorerView onSectorClick={navigateToSectorDetail} />}
          {activeTab === AppTab.INVESTIGATOR && <InvestigatorView />}
          {activeTab === AppTab.VERIFICATION && <VerificationView />}
          {activeTab === AppTab.ATHENA && <AthenaView />}
          {activeTab === AppTab.MAPPING && <MappingView onInvest={navigateToInvest} />}
          {activeTab === AppTab.INVEST && <InvestView initialCountry={selectedCountry} />}
          {activeTab === AppTab.BATTLECARDS && <BattlecardsView />}
          {activeTab === AppTab.LEAD_DISCOVERY && <LeadDiscoveryView />}
          {activeTab === AppTab.PROFILE && <ProfileView user={currentUser!} onUpdate={() => {}} />}
          {activeTab === AppTab.SECTOR_DETAIL && selectedSector && selectedCountry && (
            <SectorDetailView sector={selectedSector} country={selectedCountry} onBack={() => setActiveTab(AppTab.EXPLORER)} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;

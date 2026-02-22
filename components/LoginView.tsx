
import React, { useState } from 'react';
import { TrendingUp, Mail, Lock, User, ShieldCheck, ChevronRight, Loader2, Globe } from 'lucide-react';
import { AuthUser, UserRole } from '../types';

interface LoginViewProps {
  onLogin: (user: AuthUser) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('Intelligence Analyst');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin({
        id: Math.random().toString(36).substr(2, 9),
        name: isLogin ? (email.includes('admin') ? 'Admin User' : 'Analyst John') : name,
        email: email,
        role: isLogin ? (email.includes('admin') ? 'Admin' : 'Intelligence Analyst') : role,
      });
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left: Branding & Value Props */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 text-white p-20 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-emerald-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-16">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-black tracking-tight">AfriSense</h1>
          </div>
          
          <div className="space-y-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold mb-6 leading-tight">Intelligence for the African Market.</h2>
              <p className="text-slate-400 text-lg">
                The most advanced Market & Competitive Intelligence platform designed for high-growth enterprises in Africa.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: '1Mn+ Sources', desc: 'Real-time aggregation of news, data, and social.', icon: Globe },
                { title: 'Athena AI', desc: 'Agentic reasoning for strategic decision making.', icon: ShieldCheck },
                { title: 'SSO & Enterprise Security', desc: 'Bank-grade compliance and role management.', icon: Lock },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-emerald-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-slate-500">
          © 2026 AfriSense Intelligence. All rights reserved. SOC2 & GDPR Compliant.
        </div>
      </div>

      {/* Right: Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              {isLogin ? 'Welcome Back' : 'Create Enterprise Account'}
            </h2>
            <p className="text-slate-500 mt-2">
              {isLogin 
                ? 'Access your market intelligence dashboard.' 
                : 'Join the next generation of strategic analysis.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" required
                    value={name} onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-4 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" required
                  value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-4 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" required
                  value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-4 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Intended Role</label>
                <select 
                  value={role} onChange={e => setRole(e.target.value as UserRole)}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-4 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all appearance-none"
                >
                  <option>Intelligence Analyst</option>
                  <option>Strategy Lead</option>
                  <option>Marketing Insight</option>
                  <option>Sales Ops</option>
                  <option>Product Specialist</option>
                  <option>Executive</option>
                </select>
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-emerald-700 shadow-xl shadow-emerald-100 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ChevronRight size={18} className="ml-1" />
                </>
              )}
            </button>
          </form>

          <div className="text-center pt-4">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600 font-bold text-sm hover:underline"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;


import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Eye, 
  Heart, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Star, 
  Award, 
  ArrowRight,
  Send,
  Mail,
  Linkedin,
  Clock,
  CheckCircle2,
  TrendingUp,
  Globe,
  Building2
} from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: any) => (
  <div className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-emerald-200 transition-all shadow-sm group">
    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-3">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const LeaderProfile = ({ name, role, bio }: any) => (
  <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm group">
    <div className="aspect-square bg-slate-100 rounded-[2rem] mb-6 overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
         <Users size={64} className="opacity-50" />
      </div>
    </div>
    <h4 className="text-xl font-black text-slate-800 tracking-tight">{name}</h4>
    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-4">{role}</p>
    <div className="flex space-x-2">
      <button className="p-2 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all">
        <Linkedin size={16} />
      </button>
      <button className="p-2 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all">
        <Mail size={16} />
      </button>
    </div>
  </div>
);

const AboutView: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <div className="space-y-24 animate-in fade-in duration-700 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full">
           <Zap size={14} className="text-emerald-600" />
           <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">We are AfriSense</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.1]">
          A workplace coupled with innovation, <span className="text-emerald-600">teamwork</span> and a zeal to deliver.
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          We are a group of professionals dedicated to developing technology that helps our clients take informed strategic decisions using market intelligence.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>
           <Target size={40} className="text-emerald-400 mb-8" />
           <h3 className="text-3xl font-bold mb-4">Mission</h3>
           <p className="text-slate-400 leading-relaxed text-lg">
             Enabling organizations to build intelligence as the core function that aids their strategic decision-making across the African continent and beyond.
           </p>
        </div>
        <div className="bg-emerald-600 text-white p-12 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>
           <Eye size={40} className="text-white mb-8" />
           <h3 className="text-3xl font-bold mb-4">Vision</h3>
           <p className="text-emerald-100 leading-relaxed text-lg">
             To be the most ethical and reliable intelligence partner for organizations looking to navigate the complex dynamics of emerging markets.
           </p>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">Our Values</h2>
          <p className="text-slate-500 mt-2">The principles that guide our zeal for customer success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard icon={Star} title="Customer Success" description="We are responsible for our customers to achieve their desired outcomes while using AfriSense." />
          <ValueCard icon={ShieldCheck} title="Integrity" description="We work vigorously to earn and keep trust. We develop authentic relationships with transparency." />
          <ValueCard icon={Heart} title="Teamwork" description="We are a group of high-performers who believe in the power of collective innovation." />
          <ValueCard icon={TrendingUp} title="No Compromises" description="We deliver the highest quality machine-readable industry news and structured datasets." />
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white border border-slate-100 rounded-[3rem] p-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Trusted by Industry Leaders</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Empowering global and local enterprises with actionable competitive intelligence.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all">
          {/* Mock Client Logos */}
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
            <div key={i} className="flex items-center justify-center p-4 hover:scale-110 transition-transform">
              <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">The people powering AfriSense</h2>
          <p className="text-slate-500 mt-2">A world-class team of analysts, engineers, and strategists.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <LeaderProfile name="Amara Okafor" role="Founder and CEO" />
          <LeaderProfile name="Kofi Mensah" role="VP Growth - EMEA" />
          <LeaderProfile name="Elena Vance" role="Head of AI & ML" />
          <LeaderProfile name="Jean-Claude Kamau" role="Head of Strategy" />
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-slate-800 text-center">Our Journey</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {[
            { year: '2020', event: 'AfriSense begins as a business information aggregator.' },
            { year: '2022', event: 'Launched fully customizable enterprise-grade M&CI platform.' },
            { year: '2024', event: 'Introduced Athena Copilot powered by GenAI + Knowledge Graphs.' },
            { year: '2025', event: 'Integrated 1M+ vetted African sources across 54 countries.' }
          ].map((milestone, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                <Clock size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <time className="font-black text-emerald-600 text-sm">{milestone.year}</time>
                <div className="text-slate-800 font-bold mt-1">{milestone.event}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="bg-slate-50 rounded-[3rem] p-16 flex flex-wrap justify-center gap-16">
         <div className="flex flex-col items-center text-center max-w-[120px]">
            <Award size={48} className="text-amber-500 mb-4" />
            <span className="text-[10px] font-bold text-slate-400 uppercase">G2 Momentum Leader Fall 2025</span>
         </div>
         <div className="flex flex-col items-center text-center max-w-[120px]">
            <CheckCircle2 size={48} className="text-blue-500 mb-4" />
            <span className="text-[10px] font-bold text-slate-400 uppercase">High Performer Enterprise 2025</span>
         </div>
         <div className="flex flex-col items-center text-center max-w-[120px]">
            <Zap size={48} className="text-emerald-500 mb-4" />
            <span className="text-[10px] font-bold text-slate-400 uppercase">Easiest Setup Award 2025</span>
         </div>
      </section>

      {/* Contact Form Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Talk to our intelligence experts</h2>
            <p className="text-slate-500 mt-4 text-lg">Our team is ready to help you integrate world-class CI into your organization.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 hover:bg-white rounded-2xl transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Send size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sales Inquiry</p>
                <p className="font-bold text-slate-800">sales.support@afrisense.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 hover:bg-white rounded-2xl transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Partnerships</p>
                <p className="font-bold text-slate-800">partnerships@afrisense.com</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
             <h4 className="font-bold mb-4 flex items-center"><Building2 size={18} className="mr-2 text-emerald-400" /> Our Hubs</h4>
             <div className="grid grid-cols-2 gap-8 text-xs text-slate-400">
                <div>
                   <p className="font-bold text-white mb-1">Nairobi, Kenya</p>
                   <p>Westlands Business Park</p>
                   <p>Ste 402, Lower Kabete</p>
                </div>
                <div>
                   <p className="font-bold text-white mb-1">Lagos, Nigeria</p>
                   <p>Victoria Island Hub</p>
                   <p>24 Adeola Odeku St</p>
                </div>
             </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Message Us</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Name*</label>
                <input 
                  type="text" required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all"
                  placeholder="Your full name"
                />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email*</label>
                <input 
                  type="email" required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all"
                  placeholder="name@company.com"
                />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message*</label>
                <textarea 
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all min-h-[120px] resize-none"
                  placeholder="How can we help your team?"
                />
             </div>
             <div className="flex items-start space-x-3 text-xs text-slate-500">
                <input type="checkbox" className="mt-1" />
                <span>I agree to receive updates on market intelligence trends and product news.</span>
             </div>
             <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-emerald-700 shadow-xl shadow-emerald-100 transition-all">
                Submit Query <ArrowRight size={18} className="ml-2" />
             </button>
          </form>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Ready to integrate intelligence into your workflow?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
              Start 7-Day Free Trial
            </button>
            <button className="bg-emerald-500 text-white border border-emerald-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all">
              Watch Demo Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;

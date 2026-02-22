
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  ChevronRight, 
  FileText, 
  Scale, 
  TrendingUp, 
  Globe, 
  Building2, 
  Download, 
  ArrowLeft,
  Search,
  CheckCircle,
  FileSearch,
  Coins,
  ShieldCheck,
  MapPin,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { AFRICAN_COUNTRIES } from '../constants';

interface InvestViewProps {
  initialCountry?: string | null;
}

const InvestView: React.FC<InvestViewProps> = ({ initialCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState(initialCountry || 'Burkina Faso');
  const [activeMenu, setActiveMenu] = useState('Home');

  useEffect(() => {
    if (initialCountry) setSelectedCountry(initialCountry);
  }, [initialCountry]);

  // Content segments for Burkina Faso as requested
  const burkinaSections = [
    { 
      id: 'facture', 
      title: 'Facture normalisée', 
      subtitle: 'Conditions d’acquisition de stickers de sécurisation',
      content: 'En application des dispositions de l’article 564 du Code général des impôts, les personnes physiques ou morales assujetties à l’obligation de délivrance de la facture normalisée doivent sécuriser leurs factures par un sticker.',
      details: 'La note de service n°2017-0297/MINEFID/SG/DGI/SGFN organise les conditions d\'acquisition des stickers de sécurisation de la facture normalisée. Suite à des difficultés rencontrées par certains contribuables, une relecture de ladite note a été effectuée pour faciliter l\'accès via la Chambre de Commerce et d’Industrie du Burkina Faso.',
      docs: ['Icône PDF COMMUNIQUE RELATIFS AUX CONDITIONS D\'ACQUISITION DES STICKERS FACTURE NORMALISEE.pdf']
    },
    { 
      id: 'mining', 
      title: 'Contenu local : Secteur Minier', 
      subtitle: 'Cadre réglementaire et stratégie de promotion du contenu local',
      content: 'Ouagadougou, 14 avril 2022 : La Chambre de Commerce et d’Industrie du Burkina Faso a abrité une rencontre d\'information et d\'échanges sur le contenu local dans le secteur minier au Burkina Faso.',
      details: `STRATÉGIE NATIONALE ET CADRE JURIDIQUE\n\nPlacée sous la Présidence du Ministre des Mines et des Carrières, M. Jean Alphonse SOME, la session du 14 avril 2022 avait pour objectif la vulgarisation des textes portant promotion du contenu local dans le secteur minier. Engagé dans la dynamique du renforcement de la compétitivité des entreprises nationales en matière de fourniture de biens et services miniers, le Gouvernement burkinabè s'appuie sur :\n\n- Le Code minier adopté en juin 2015.\n- Le décret N°2021-1142/PRES/PM/MINEFID/MEMC/MICA du 11 novembre 2021 portant fixation des conditions de la fourniture locale dans le secteur minier.\n- Un arrêté interministériel signé le 30 décembre 2021 dressant la liste des biens et services fournis aux entreprises minières.\n\nDÉFIS ET ACCOMPAGNEMENT DES PME\n\nNonobstant ce cadre juridique favorable, les PME burkinabè font face à des faiblesses techniques, managériales et financières. Pour y répondre, la CCI-BF et ses partenaires (Ministère des Mines, Maison de l’Entreprise, Chambre des Mines, Alliance burkinabè des Fournisseurs) mettent en place :\n\n- Des programmes d’accompagnement et de mise à niveau.\n- Des sessions de renforcement des capacités pour répondre aux exigences de qualité de l’industrie minière.\n\nLe Ministre exhorte les fournisseurs à saisir ces opportunités via une meilleure organisation et le renforcement de leurs capacités financières.`,
      docs: ['Icône PDF Arrêté Local Content.pdf', 'Icône PDF DECRET N°2021-1142 portant fixation des conditions de la fourniture locale dans le SM.pdf']
    },
    { 
      id: 'legal', 
      title: 'Information juridique', 
      subtitle: 'Cadre réglementaire, administratif et judiciaire de l’investissement',
      content: 'Investir au Burkina Faso : Bon à savoir. Tout investisseur doit impérativement prendre connaissance de la loi N° 038-2018/AN portant code des investissements.',
      details: `Investir au Burkina Faso : Bon à savoir\n\nTout investisseur, qu’il soit étranger ou national, doit impérativement prendre connaissance de la loi N° 038-2018/AN du 30 octobre 2018 portant code des investissements du Burkina Faso. Ce code favorise l’entrée des capitaux étrangers et établit un régime de droit commun au profit des entreprises avec pour fondements la liberté d’investissement, l’absence de discrimination entre investisseurs nationaux et étrangers, la liberté totale de gestion et la liberté des transferts financiers.\n\nCADRE JURIDIQUE ET RÉGLEMENTAIRE (Source : ABI)\n\n1. Création d’entreprises :\n- Suppression de l’exigence de l’apport en fonds propres de 50 millions de FCFA pour les étrangers.\n- Substitution du casier judiciaire par la « Déclaration sur l’honneur » dans la liste des pièces à fournir.\n\n2. Commerce extérieur :\n- L’observatoire du climat des affaires.\n- Simplification du formulaire de déclaration préalable d’importation (DPI).\n- Système informatisé des déclarations en douane.\n- Fichier national du registre de commerce et du crédit mobilier (RCCM).\n- Nouveau code des marchés publics rénové pour plus de transparence.\n\n3. Protection des investisseurs :\n- Accords internationaux (Traités UEMOA, CEDEAO, OHADA).\n- Lois nationales (Code des investissements, Code du travail).\n- Garanties sans distinction de nationalité.\n\nFORME JURIDIQUE ET LIBERTÉ DE COMMERCE\n\n- Forme juridique : Toute personne souhaitant entreprendre au Burkina Faso doit se conformer aux actes uniformes de l'OHADA relatifs au droit des sociétés commerciales (GIE, SA, SARL) et au droit commercial général (entreprises individuelles).\n- Liberté de commerce : Droit constitutionnellement reconnu par l’article 16 de la Constitution.\n- Limites : Police économique (hygiène, santé publique), dirigisme (monopoles légaux), incompatibilités professionnelles (fonctionnaires, avocats), et protection des mineurs/incapables.\n\nORGANISATION JUDICIAIRE ET ADMINISTRATIVE\n\n- Organisation judiciaire : Tribunaux de commerce (Loi 022-2009/AN) et arbitrage via le Centre d’Arbitrage, de Médiation, de Conciliation de Ouagadougou (CAMCO).\n\n- Structures Administratives Centrales :\n  * Premier Ministère (Coordination politique).\n  * Ministère chargé du Commerce (Promotion entreprises/artisanat).\n  * Ministère chargé de l’économie et des finances (Monnaie, crédit, assurances).\n  * Ministère chargé des Transports et de l’économie numérique.\n  * Ministère chargé de la culture et du tourisme.\n  * Ministère chargé des affaires étrangères (Accords de commerce).\n\nREPRÉSENTATION DES INTÉRÊTS ÉCONOMIQUES\n\n- Structures de représentation :\n  * Conseil économique et social (CES).\n  * Chambre de Commerce et d’Industrie du Burkina Faso (CCI-BF).\n  * Conseil Burkinabè des Chargeurs (CBC).\n  * Agence pour la Promotion des Exportateurs du Burkina (APEX-Burkina).\n\n- Milieux d'affaires professionnels :\n  * Groupement professionnel des pétroliers (GPP).\n  * Groupement professionnel des industriels du Faso (GPIF).\n  * Association professionnelle des Banques et Etablissements financiers (APBEF-B).\n  * Syndicat des importateurs et exportateurs (SINEX-BF).\n  * Syndicat national des transporteurs routiers (SNTRB).\n  * Association professionnelle des sociétés d’assurance (APSAB).`,
      docs: ['Loi_038_2018_Code_Investissements.pdf', 'Guide_Creation_Entreprise_Burkina.pdf']
    }
  ];

  const sidebarMenu = [
    { id: 'Home', label: 'Accueil', icon: Globe },
    { id: 'facture', label: 'Facture Normalisée', icon: FileText },
    { id: 'mining', label: 'Contenu Local (Mines)', icon: MapPin },
    { id: 'legal', label: 'Information Juridique', icon: Scale },
    { id: 'costs', label: 'Coût des Facteurs', icon: Coins },
    { id: 'docs', label: 'Documents Clés', icon: FileSearch },
    { id: 'support', label: 'Structures d’Accompagnement', icon: Building2 },
    { id: 'sectors', label: 'Secteurs Porteurs', icon: TrendingUp },
    { id: 'potential', label: 'Potentiel Économique', icon: ShieldCheck },
  ];

  const Breadcrumbs = () => (
    <nav className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
      <span className="hover:text-emerald-600 cursor-pointer" onClick={() => setActiveMenu('Home')}>Accueil</span>
      <ChevronRight size={10} />
      <span className="hover:text-emerald-600 cursor-pointer" onClick={() => setActiveMenu('Home')}>Investir au {selectedCountry}</span>
      {activeMenu !== 'Home' && (
        <>
          <ChevronRight size={10} />
          <span className="text-slate-800">{sidebarMenu.find(m => m.id === activeMenu)?.label}</span>
        </>
      )}
    </nav>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
            <Briefcase size={12} />
            <span>Invest Africa Suite</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Investir au <span className="text-emerald-600">{selectedCountry}</span></h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative group">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select 
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setActiveMenu('Home');
              }}
              className="pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest outline-none focus:ring-4 focus:ring-emerald-100 transition-all appearance-none shadow-sm cursor-pointer min-w-[240px]"
            >
              {AFRICAN_COUNTRIES.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-80 shrink-0">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-4 shadow-sm space-y-1 sticky top-8">
            <div className="px-6 py-2 mb-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Knowledge Base</p>
            </div>
            {sidebarMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all text-left group ${
                  activeMenu === item.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={18} className={activeMenu === item.id ? 'text-white' : 'text-emerald-600'} />
                  <span className="text-xs font-bold leading-tight">{item.label}</span>
                </div>
                {activeMenu !== item.id && <ChevronRight size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />}
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white border border-slate-200 rounded-[3rem] p-10 md:p-16 shadow-sm min-h-[800px]">
          <Breadcrumbs />

          {activeMenu === 'Home' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
               <div className="space-y-4">
                  <h2 className="text-3xl font-black text-slate-800 leading-tight">Portail d'Investissement - {selectedCountry}</h2>
                  <p className="text-slate-500 leading-relaxed">
                    Accédez aux informations stratégiques, réglementaires et sectorielles pour vos projets au {selectedCountry}. 
                    Notre moteur d'intelligence aggrège les dernières lois de finances, codes des investissements et opportunités de marché.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedCountry === 'Burkina Faso' ? (
                    burkinaSections.map(section => (
                      <div 
                        key={section.id} 
                        onClick={() => setActiveMenu(section.id)}
                        className="group p-8 border border-slate-100 rounded-3xl hover:border-emerald-200 transition-all cursor-pointer bg-slate-50/50"
                      >
                         <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white rounded-2xl shadow-sm text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                               <FileText size={24} />
                            </div>
                            <ChevronRight size={20} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                         </div>
                         <h4 className="text-xl font-black text-slate-800 mb-2 leading-tight">{section.title}</h4>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">{section.subtitle}</p>
                         <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{section.content}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full p-12 border-2 border-dashed border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4">
                      <div className="p-4 bg-emerald-50 rounded-full text-emerald-600">
                        <ShieldCheck size={40} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-slate-800">Données en cours de synchronisation</h3>
                        <p className="text-sm text-slate-500 max-w-md mx-auto">
                          Le profil d'investissement pour le <strong>{selectedCountry}</strong> est en cours d'indexation par l'IA Athena. 
                          Consultez le Burkina Faso pour une démonstration complète du module.
                        </p>
                      </div>
                      <button 
                        onClick={() => setSelectedCountry('Burkina Faso')}
                        className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all"
                      >
                        Voir l'exemple du Burkina Faso
                      </button>
                    </div>
                  )}
               </div>

               <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                     <div className="space-y-4 max-w-lg text-center md:text-left">
                        <h3 className="text-2xl font-black">Besoin d'un rapport sectoriel sur mesure ?</h3>
                        <p className="text-slate-400 text-sm">Nos analystes et l'IA Athena peuvent générer un dossier complet sur le climat des affaires au {selectedCountry} en moins de 24h.</p>
                     </div>
                     <button className="px-8 py-4 bg-emerald-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/40">
                        Contacter les Experts
                     </button>
                  </div>
                  <Globe className="absolute -right-20 -bottom-20 text-white/5" size={300} />
               </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-10">
               {/* Detail View for specific section */}
               {(selectedCountry === 'Burkina Faso' && burkinaSections.find(s => s.id === activeMenu)) ? (
                 <>
                   <div className="space-y-6">
                      <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                        {burkinaSections.find(s => s.id === activeMenu)?.title}
                      </h2>
                      <p className="text-emerald-600 font-black text-xs uppercase tracking-widest">
                        {burkinaSections.find(s => s.id === activeMenu)?.subtitle}
                      </p>
                      <div className="p-8 bg-slate-50 rounded-3xl border-l-8 border-emerald-600 italic text-slate-700 leading-relaxed">
                        "{burkinaSections.find(s => s.id === activeMenu)?.content}"
                      </div>
                      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-sm whitespace-pre-wrap">
                        {burkinaSections.find(s => s.id === activeMenu)?.details}
                      </div>
                   </div>

                   <div className="space-y-6 pt-10 border-t border-slate-100">
                      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center">
                         <Download size={16} className="mr-2 text-emerald-600" /> Documents officiels & Ressources
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {burkinaSections.find(s => s.id === activeMenu)?.docs?.map((doc, i) => (
                           <div key={i} className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl group hover:border-emerald-500 transition-all cursor-pointer">
                              <div className="flex items-center space-x-4">
                                 <div className="p-2 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <FileText size={20} />
                                 </div>
                                 <div className="max-w-[240px]">
                                    <p className="text-xs font-bold text-slate-800 truncate">{doc}</p>
                                    <p className="text-[10px] text-slate-400">Format PDF / Microsoft Word</p>
                                 </div>
                              </div>
                              <Download size={18} className="text-slate-300 group-hover:text-emerald-500" />
                           </div>
                         ))}
                      </div>
                   </div>
                 </>
               ) : (
                 <div className="flex flex-col items-center justify-center text-center space-y-6 py-20">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                       <FileSearch size={40} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black text-slate-800">Section en cours de rédaction</h3>
                       <p className="text-slate-500 text-sm max-w-md mx-auto">
                         Nos serveurs traitent actuellement les flux de données officiels pour le module <strong>{sidebarMenu.find(m => m.id === activeMenu)?.label}</strong> au {selectedCountry}.
                       </p>
                    </div>
                    <button onClick={() => setActiveMenu('Home')} className="flex items-center space-x-2 text-emerald-600 font-black text-xs uppercase tracking-widest hover:underline group">
                       <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> <span>Retour à l'aperçu du pays</span>
                    </button>
                 </div>
               )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InvestView;

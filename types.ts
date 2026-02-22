
export enum AppTab {
  DASHBOARD = 'DASHBOARD',
  EXPLORER = 'EXPLORER',
  ATHENA = 'ATHENA',
  MAPPING = 'MAPPING',
  BATTLECARDS = 'BATTLECARDS',
  NEWSLETTER = 'NEWSLETTER',
  SOURCES = 'SOURCES',
  ADMIN = 'ADMIN',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  PROFILE = 'PROFILE',
  ABOUT = 'ABOUT',
  LEGAL = 'LEGAL',
  INVEST = 'INVEST',
  SECTOR_DETAIL = 'SECTOR_DETAIL',
  INVESTIGATOR = 'INVESTIGATOR',
  LEAD_DISCOVERY = 'LEAD_DISCOVERY',
  VERIFICATION = 'VERIFICATION'
}

export interface EmailVerificationResult {
  email: string;
  status: 'Deliverable' | 'Risky' | 'Undeliverable';
  score: number;
  syntaxValid: boolean;
  mxRecords: boolean;
  smtpCheck: boolean;
  isCatchAll: boolean;
  isDisposable: boolean;
  provider: string;
  recommendedAction: string;
  technicalLogs: string[];
}

export interface SocialProfile {
  platform: string;
  handle: string;
  url: string;
  followers?: string;
  relevance: number;
}

export interface LeadProfile {
  id: string;
  fullName: string;
  jobTitle: string;
  company: string;
  location: string;
  domain: string;
  emails: { address: string; confidence: number; source: string }[];
  socialPresence: SocialProfile[];
  totalProfilesFound: number;
  influenceScore: 'High' | 'Medium' | 'Low';
  confidenceScore: number;
  engagementWorkflow: string[];
  rawDorkResults: string;
}

export interface IdentityResult {
  identity: string;
  type: 'Person' | 'Company';
  socialFootprint: {
    platform: string;
    handle: string;
    activity: string;
    url: string;
  }[];
  corporateAffiliations: {
    company: string;
    role: string;
    status: string;
  }[];
  professionalBackground: string;
  riskAssessment: 'Low' | 'Medium' | 'High';
  strategicAction: string;
  rawIntel: string;
}

export interface Influencer {
  name: string;
  role: string;
  background: string;
  influenceScore: 'High' | 'Medium' | 'Low';
  connections: string[];
}

export interface SectorIntelligence {
  country: string;
  sector: string;
  companyCount: number;
  marketTrend: string;
  regulatoryRisk: 'High' | 'Medium' | 'Low';
  topEntities: string[];
  influencers: Influencer[];
  networkMapSummary: string;
  dataCitations: string[];
}

export type UserRole = 
  | 'Admin' 
  | 'Intelligence Analyst' 
  | 'Strategy Lead' 
  | 'Executive' 
  | 'Marketing Insight' 
  | 'Sales Ops' 
  | 'Product Specialist';

export interface UserPreferences {
  notifications: boolean;
  newsletterFrequency: 'daily' | 'weekly';
  defaultRegion: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  preferences?: UserPreferences;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: string;
  lastActive: string;
}

export interface FactCard {
  id: string;
  type: string;
  title: string;
  summary: string;
  impact: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
  citations?: any[];
  facts?: FactCard[];
}

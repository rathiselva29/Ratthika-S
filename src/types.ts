export type ProjectCategory = 'all' | 'websites' | 'applications' | 'design' | 'business' | 'own_coded';

export type ProjectType = 
  | 'featured_business' 
  | 'application' 
  | 'own_coded' 
  | 'design_showcase' 
  | 'business_service';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  projectType: ProjectType;
  description: string;
  longDescription?: string;
  services: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  apkDownloadUrl?: string;
  image: string;
  accentColor?: string;
  featured: boolean;
  isOwnCoded?: boolean;
  statusBadge?: string;
  caseStudy?: {
    challenge: string;
    solution: string;
    impact: string[];
    features: string[];
    servicesProvided: string[];
    potentialServices?: string[];
  };
}

export interface BusinessPackage {
  id: string;
  tier: string;
  headline: string;
  description: string;
  deliverables: string[];
  highlight: string;
  ctaText: string;
  isPopular?: boolean;
  accentColor: string;
}

export interface IndividualCreativeService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  icon: string;
  accent: string;
  turnaroundTime: string;
}

export type CreativeCategory = 
  | 'all'
  | 'banners'
  | 'posters'
  | 'logos'
  | 'icons'
  | 'brochures'
  | 'social_media'
  | 'digital_art'
  | 'creative_work';

export interface CreativeItem {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  description: string;
  image: string;
  dimensions?: string;
  tags: string[];
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  link?: string;
}

export type CreativeShowcaseItem = CreativeItem;

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'achievement';
  title: string;
  institution: string;
  location?: string;
  period: string;
  gradeOrTag?: string;
  highlights: string[];
  skills: string[];
  statusLabel?: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
  accent: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  details: string;
  deliverable: string;
}

export interface ValueCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
}

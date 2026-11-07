export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Spatial & UI/UX' | 'Mobility & Web' | 'Mobile Systems';
  tags: string[];
  year: string;
  client: string;
  impact: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  accentColor: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  tools: string[];
  turnaround: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatar: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: 'sparkles' | 'briefcase' | 'users' | 'award';
}

export interface SkillItem {
  name: string;
  percentage: number;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
  level: string;
  role: string;
  icon: string;
}

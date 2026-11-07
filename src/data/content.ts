import { CaseStudy, Service, Testimonial, MetricItem, SkillItem, TechItem } from '../types';

export const METRICS: MetricItem[] = [
  {
    id: 'exp',
    value: '5+',
    label: 'Years of Experience',
    sublabel: 'Spatial & Product Architecture',
    iconName: 'sparkles'
  },
  {
    id: 'projects',
    value: '40+',
    label: 'Projects Completed',
    sublabel: 'Global Enterprises & Startups',
    iconName: 'briefcase'
  },
  {
    id: 'clients',
    value: '25+',
    label: 'Happy Clients',
    sublabel: 'US, Europe & Asia-Pacific',
    iconName: 'users'
  },
  {
    id: 'awards',
    value: '18',
    label: 'Awards Received',
    sublabel: 'Awwwards, FWA, Red Dot, UX Design',
    iconName: 'award'
  }
];

export const FAMOUS_QUOTE = {
  quote: "Design is not just what it looks like and feels like. Design is how it works.",
  author: "Steve Jobs",
  role: "Apple Co-Founder"
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'stellar-command',
    number: '01',
    title: 'Stellar Command',
    subtitle: 'Next-Gen Autonomous Mission Control Dashboard',
    category: 'Spatial & UI/UX',
    tags: ['UI/UX Design', 'Dashboard', 'Spatial Systems', 'Real-time Telemetry'],
    year: '2025',
    client: 'Orbital Dynamics Aerospace',
    impact: 'Reduced anomaly response latency by 64% across 14 ground stations',
    image: '/assets/aistudio/image_d577693e.png',
    description: 'An advanced orbital flight telemetry and mission control interface engineered for multi-vehicle satellite constellations. Built with luminous low-strain dark glass aesthetic and micro-precision data density.',
    challenge: 'Mission controllers were suffering cognitive fatigue from legacy dense tabular interfaces across 12-hour orbital shift rotations.',
    solution: 'Engineered an optical HUD interface featuring multi-level spatial depth, prioritized threat matrices, and tactile spatial grouping.',
    deliverables: [
      'Comprehensive 140+ component design system',
      'High-density telemetry dashboard layouts',
      'Real-time anomaly triage interactive flow',
      'Custom SVG vector instrumentation library'
    ],
    techStack: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    accentColor: '#38BDF8'
  },
  {
    id: 'quantum-drive',
    number: '02',
    title: 'Quantum Drive',
    subtitle: 'Product Ecosystem for Luxury Autonomous EV Brand',
    category: 'Mobility & Web',
    tags: ['Web Design', 'Interaction', '3D Configurator', 'Mobility'],
    year: '2025',
    client: 'Aether Mobility Europe',
    impact: '+210% pre-order reservation conversions within first 30 days of global unveiling',
    image: '/assets/aistudio/image_d577693e.png',
    description: 'A sensory web experience and in-car companion ecosystem for a next-generation electric hyper-vehicle. Blends tactile glass surfaces with real-time 3D vehicle customization.',
    challenge: 'Bridging the physical interior cabin aesthetic with an equally tactile, frictionless digital pre-order and configuration journey.',
    solution: 'Designed an interactive cinematic showroom utilizing liquid glass cards, subtle ambient reflections, and instantaneous state transitions.',
    deliverables: [
      'Interactive 3D exterior/interior vehicle studio',
      'Mobile digital key companion interface',
      'Performance specs interactive comparison chart',
      'Fluid gesture-driven booking checkout flow'
    ],
    techStack: ['Figma', 'Framer', 'Three.js', 'Next.js', 'GSAP'],
    accentColor: '#2563EB'
  },
  {
    id: 'zenith-app',
    number: '03',
    title: 'Zenith App',
    subtitle: 'Spatial Neuro-Focus & Peak Productivity Platform',
    category: 'Mobile Systems',
    tags: ['Mobile App', 'UX Research', 'Neuro-Aesthetics', 'Design System'],
    year: '2024',
    client: 'Zenith Cognitive Labs',
    impact: '4.9 ★ App Store rating across 85,000 active monthly knowledge workers',
    image: '/assets/aistudio/image_d577693e.png',
    description: 'A mobile and spatial computing companion designed to cultivate deep-work flow states. Utilizes soundscape sync, biophilic frosted surfaces, and zero-distraction micro-interactions.',
    challenge: 'Standard productivity apps overwhelm users with cluttered notifications, rigid checkbox lists, and anxious gamification mechanics.',
    solution: 'Pioneered an organic circadian rhythm layout where tasks breathe visually and collapse into tranquil frosted widgets during focus sprints.',
    deliverables: [
      'iOS & iPadOS native application design',
      'Haptic feedback specification audio-visual guide',
      'Spatial VisionOS prototype concepts',
      'Circadian dark/light adaptive color tokens'
    ],
    techStack: ['Figma', 'SwiftUI', 'React Native', 'Tailwind', 'Rive'],
    accentColor: '#6366F1'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'UI/UX Design', percentage: 98, description: 'Spatial layout architecture, interface paradigms, human ergonomics' },
  { name: 'Interaction Design', percentage: 95, description: 'Micro-animations, state transitions, physics-based gesture responses' },
  { name: 'Web Architecture', percentage: 92, description: 'Modern React, TypeScript, clean semantic component systems' },
  { name: 'Rapid Prototyping', percentage: 96, description: 'High-fidelity clickable interactive prototypes and tactile sandboxes' },
  { name: 'Design Systems', percentage: 94, description: 'Multi-brand tokenized libraries, documentation, accessibility compliance' },
  { name: 'User Research', percentage: 88, description: 'Cognitive load analysis, usability tests, quantitative task benchmarking' }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Figma', category: 'Design', level: 'Master', role: 'Design Systems & UI Architecture', icon: 'figma' },
  { name: 'Webflow', category: 'Build', level: 'Advanced', role: 'Production CMS & Visual Build', icon: 'webflow' },
  { name: 'Framer', category: 'Motion', level: 'Master', role: 'Interactive High-Fidelity Prototypes', icon: 'framer' },
  { name: 'React', category: 'Frontend', level: 'Expert', role: 'Component Engineering & SPA State', icon: 'react' },
  { name: 'Next.js', category: 'Framework', level: 'Expert', role: 'Full-Stack Performance & SSR', icon: 'next' },
  { name: 'Tailwind', category: 'Styling', level: 'Master', role: 'Design Tokens & Utility Architecture', icon: 'tailwind' },
  { name: 'Three.js', category: '3D Web', level: 'Advanced', role: 'Spatial Canvas & Shaders', icon: 'three' },
  { name: 'GSAP', category: 'Animation', level: 'Advanced', role: 'Kinetic Timelines & Choreography', icon: 'gsap' },
  { name: 'TypeScript', category: 'Code', level: 'Expert', role: 'Type-Safe Architecture & Contracts', icon: 'typescript' }
];

export const SERVICES: Service[] = [
  {
    id: 'spatial-ui',
    number: '01',
    title: 'Spatial & Futuristic Interface Design',
    summary: 'Crafting visionary, immersive digital experiences for next-generation displays, aerospace telemetry, and spatial computing headsets.',
    deliverables: [
      'Multi-viewport UI/UX architectures',
      'Spatial depth & optical glass surfaces',
      'Full interactive clickable prototypes',
      'Developer handoff tokens & specs'
    ],
    tools: ['Figma', 'Three.js', 'Spline', 'React'],
    turnaround: '3–6 Weeks'
  },
  {
    id: 'design-systems',
    number: '02',
    title: 'Enterprise Design Systems & Tokenization',
    summary: 'Architecting scalable, enterprise-grade component libraries that bridge design precision with high-performance production codebases.',
    deliverables: [
      'Figma multi-tier variant component kit',
      'Design tokens (JSON / Tailwind / CSS vars)',
      'Documentation portal & governance handbook',
      'WCAG AA accessible color & contrast audits'
    ],
    tools: ['Figma', 'Tokens Studio', 'Tailwind', 'Storybook'],
    turnaround: '4–8 Weeks'
  },
  {
    id: 'interactive-web',
    number: '03',
    title: 'Kinetic Web Experiences & Prototyping',
    summary: 'Building ultra-responsive, motion-infused web platforms where every scroll, hover, and click delivers tactile delight.',
    deliverables: [
      'Custom React + TypeScript frontend code',
      'Smooth 60fps micro-interaction choreography',
      'Responsive layouts across mobile, tablet, desktop',
      'Sub-second first-contentful paint optimization'
    ],
    tools: ['React', 'TypeScript', 'Tailwind', 'Motion'],
    turnaround: '2–5 Weeks'
  },
  {
    id: 'product-strategy',
    number: '04',
    title: 'Product Strategy & UX Research Audits',
    summary: 'Deconstructing complex workflows, identifying cognitive bottlenecks, and designing frictionless user conversion journeys.',
    deliverables: [
      'Cognitive load & heuristic evaluation report',
      'User journey mapping & friction point analysis',
      'Information architecture restructuring',
      'A/B testing wireframes & conversion blueprints'
    ],
    tools: ['Miro', 'Hotjar', 'Figma', 'Dovetail'],
    turnaround: '2–4 Weeks'
  }
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Optical Glass Aesthetics & Refraction',
    description: 'We do not rely on flat, generic templates. Every surface is sculpted with subtle optical light physics, frosted translucency, and crisp specular highlights that feel tangible.'
  },
  {
    number: '02',
    title: '60 FPS Kinetic Micro-Interactions',
    description: 'Interfaces come alive with purposeful, spring-based motion curves that respond instantly to touch and cursor physics without sluggish delay.'
  },
  {
    number: '03',
    title: 'Mathematical Typography & Spacing',
    description: 'Every headline, line height, and container margin adheres strictly to mathematical ratios and tabular discipline, creating effortless visual calm.'
  },
  {
    number: '04',
    title: 'Production-Ready Code Standards',
    description: 'Designers who write clean, semantic TypeScript and modern Tailwind CSS. No unwired mock buttons or fragile external dependencies.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Nova Glass elevated our orbital fleet control console from an incomprehensible spreadsheet into an intuitive, award-winning cockpit that our aerospace engineers genuinely love using every single day.",
    author: "Elena Rostova",
    role: "VP of Product Experience",
    company: "Orbital Dynamics Aerospace",
    metric: "64% Faster Anomaly Resolution",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 't2',
    quote: "Working with Nova Glass was a masterclass in modern digital craftsmanship. The EV 3D configurator they built drove over 20,000 reservations in our opening month and set a new standard for luxury automotive digital retail.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Aether Mobility Europe",
    metric: "+210% Pre-Order Conversions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 't3',
    quote: "Their obsession with spatial typography, tactile frosted surfaces, and micro-interactions completely transformed Zenith. They don't just design interfaces—they engineer feelings of effortless flow.",
    author: "Dr. Sarah Chen",
    role: "Chief Design Officer",
    company: "Zenith Cognitive Labs",
    metric: "4.9 ★ Rating / 85K Active Users",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  }
];

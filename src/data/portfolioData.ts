import { 
  Project, 
  BusinessPackage, 
  IndividualCreativeService, 
  CreativeItem, 
  TimelineItem, 
  ServicePillar, 
  WorkflowStep, 
  ValueCard 
} from '../types';

export const PERSONAL_INFO = {
  name: 'S. Ratthika',
  preferredName: 'Ratthika',
  brandLogo: 'RATTHIKA.',
  agencyBrand: 'SoRa Innovative Solution',
  roleCycling: ['Web Developer', 'Digital Creator', 'Freelancer'],
  heroHeadline: "Hi, I'm S. Ratthika.",
  heroSubheadline: "I build websites, applications and digital experiences — while bringing creative ideas to life through design, branding and digital content.",
  aboutHeadline: "Developer by logic. Creator by passion. Freelancer by choice.",
  aboutDescription: `Detail-oriented Computer Science Engineering graduate and developer with hands-on experience in full-stack web development and foundational machine learning. I specialize in crafting high-impact digital experiences for businesses and creative web apps for individuals. Combining engineering rigor with visual storytelling, I design and build end-to-end web products from concept and interface design to clean, scalable code and digital presence.`,
  statusIndicator: 'Available for freelance & development opportunities',
  location: 'Neyveli, Tamil Nadu, India',
  email: 'ratthikaratthika55@gmail.com',
  secondaryEmail: 'sorafs.work@gamil.com',
  phone: '+91 7397732494',
  secondaryPhone: '+91 9500282415',
  whatsappUrl: 'https://wa.me/917397732494?text=Hi%20Ratthika,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!',
  github: 'https://github.com/rathiselva29',
  githubUsername: 'rathiselva29',
  linkedin: 'https://www.linkedin.com/in/ratthika-s29',
  linkedinHandle: 'ratthika-s29',
  instagram: 'https://www.instagram.com/rathii__selva',
  instagramHandle: 'rathii__selva',
  profileImagePlaceholder: '/images/ratthika-profile.jpg',
  resumeDownloadUrl: '#resume-modal',
  currentOpenTo: [
    'Entry-level Software Development Roles',
    'Freelance Web & Web App Projects',
    'Creative Digital & Branding Projects',
    'Business Website & Digital Presence Solutions',
    'Collaborative Digital Products'
  ]
};

export const TECHNICAL_SKILLS = [
  { name: 'React.js', category: 'Frontend', level: 90, highlight: 'Component architecture, Hooks, State' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 92, highlight: 'Modern Async, DOM, Logic' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 95, highlight: 'Semantic markup, Flexbox/Grid' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90, highlight: 'Utility-first modern styling' },
  { name: 'Node.js', category: 'Backend', level: 80, highlight: 'Server-side logic, Express' },
  { name: 'Python', category: 'Programming', level: 82, highlight: 'Data manipulation, foundational ML' },
  { name: 'MySQL', category: 'Database', level: 78, highlight: 'Relational schema, SQL queries' },
  { name: 'REST APIs', category: 'Architecture', level: 85, highlight: 'Integration & API design' },
  { name: 'Git & GitHub', category: 'Tools', level: 88, highlight: 'Version control, team workflows' },
  { name: 'Vercel & Hosting', category: 'DevOps', level: 85, highlight: 'Deployment, CI/CD automation' },
  { name: 'UI/UX Principles', category: 'Design', level: 92, highlight: 'Visual hierarchy, typography, Figma' },
  { name: 'Responsive Design', category: 'Frontend', level: 95, highlight: 'Mobile-first, cross-device parity' },
  { name: 'Foundational ML', category: 'AI/ML', level: 75, highlight: 'Data preprocessing, model training' },
  { name: 'Basic Data Structures', category: 'Core CS', level: 80, highlight: 'Algorithms & clean architecture' },
];

export const CORE_COMPETENCIES = [
  'Frontend Development',
  'Responsive Web Design',
  'UI/UX & Creative Layouts',
  'Version Control (Git)',
  'SEO & Google Search Setup',
  'Brand Identity Design',
  'WhatsApp Lead Integration',
  'Cross-browser Optimization'
];

export const SOFT_SKILLS = [
  'Problem Solving',
  'Clear Communication',
  'Teamwork & Collaboration',
  'Adaptability',
  'Time Management & Delivery',
  'Client-focused Strategy'
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'exp-codebind',
    type: 'experience',
    title: 'Web Development Intern',
    institution: 'CodeBind Tech',
    location: 'Trichy, Tamil Nadu',
    period: 'FEB 2025',
    statusLabel: 'Internship',
    highlights: [
      'Developed responsive, multi-screen business web pages with modern frontend standards.',
      'Constructed modular UI components, navigational systems, and optimized asset delivery.',
      'Collaborated on cross-browser testing and client responsiveness.'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI Systems']
  },
  {
    id: 'exp-themindit',
    type: 'experience',
    title: 'Full Stack Development Intern',
    institution: 'The Mind IT',
    location: 'Remote / Tamil Nadu',
    period: 'JUL 2024 – AUG 2024',
    statusLabel: 'Internship',
    highlights: [
      'Engineered interactive web interfaces using HTML, CSS, modern JavaScript, React, and Node.js.',
      'Integrated RESTful data flows and implemented component-driven UI architecture.',
      'Utilized Git & GitHub for repository management, branching workflows, and version control.'
    ],
    skills: ['React.js', 'Node.js', 'JavaScript', 'Git', 'GitHub', 'REST APIs']
  },
  {
    id: 'exp-novitech',
    type: 'experience',
    title: 'AI & Machine Learning Intern',
    institution: 'NoviTech',
    location: 'Trichy, Tamil Nadu',
    period: 'MAR 2024 – APR 2024',
    statusLabel: 'Internship',
    highlights: [
      'Executed structured data preprocessing and feature normalization routines in Python.',
      'Implemented foundational machine learning classification and prediction models.',
      'Analyzed datasets for algorithmic efficiency and model validation.'
    ],
    skills: ['Python', 'Data Preprocessing', 'Machine Learning', 'Data Analysis']
  },
  {
    id: 'edu-college',
    type: 'education',
    title: 'B.E. Computer Science and Engineering',
    institution: 'MAM College of Engineering (Anna University)',
    location: 'Trichy, Tamil Nadu',
    period: '2022 – 2026',
    gradeOrTag: '8.2 CGPA',
    statusLabel: 'Degree',
    highlights: [
      'Specialized coursework in Web Technologies, Software Engineering, Object Oriented Programming, DBMS, and Operating Systems.',
      'Strong academic foundation in computer science principles and modern full-stack development.',
      'Active developer in practical student innovation initiatives and creative design.'
    ],
    skills: ['Computer Science', 'Web Architecture', 'Database Systems', 'Algorithms']
  },
  {
    id: 'edu-hsc',
    type: 'education',
    title: 'Higher Secondary Certificate (HSC) — State Board',
    institution: 'NLC Higher Secondary School',
    location: 'Neyveli, Tamil Nadu',
    period: '2022',
    gradeOrTag: '76%',
    statusLabel: 'Schooling',
    highlights: [
      'Completed secondary education with focused mathematics and science curriculum.'
    ],
    skills: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
  },
  {
    id: 'edu-sslc',
    type: 'education',
    title: 'Secondary School Leaving Certificate (SSLC) — State Board',
    institution: 'NLC Higher Secondary School',
    location: 'Neyveli, Tamil Nadu',
    period: '2020',
    gradeOrTag: '77%',
    statusLabel: 'Schooling',
    highlights: [
      'Completed foundational high school education with distinction.'
    ],
    skills: ['Academic Foundation']
  }
];

export const ACHIEVEMENTS = [
  {
    title: 'English Typewriting — Junior Level',
    organization: 'Department of Technical Education',
    badge: 'Certified',
    desc: 'Demonstrated high keyboard speed, precision typing, and accurate text formatting.'
  },
  {
    title: 'Zone Level Handball Winner (Under 17)',
    organization: 'School Sports Zone Board',
    badge: 'Champion',
    desc: 'Exemplified leadership, high athletic endurance, and proactive strategic teamwork.'
  },
  {
    title: 'Drone Technology Skill Development',
    organization: 'Jet Aerospace',
    badge: 'Technical Skill',
    desc: 'Hands-on training in UAV avionics, hardware telemetry, and automated flight mechanics.'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'artika-creations',
    number: '01',
    title: 'Artika Creations',
    subtitle: 'Art-Business Showcase & Brand Ecosystem',
    category: 'business',
    projectType: 'featured_business',
    description: 'My flagship art-business website and brand identity. Built to showcase custom handcrafted artwork, manage client orders, and provide an immersive creative presentation.',
    longDescription: 'Artika Creations serves as the digital home for custom bespoke artwork and creative merchandise. The platform combines visual elegance, product presentation, bespoke commission requests, and cohesive brand storytelling.',
    services: [
      'Creative Art Business Web Platform',
      'Custom Artwork Showcase & Gallery',
      'Brand Identity & Logo Design',
      'Customer-Facing Inquiry Flow',
      'Product & Service Presentation'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Vercel', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://artika-creations.vercel.app/',
    image: '/images/artikabanner.png',
    accentColor: '#ec4899',
    featured: true,
    statusBadge: 'Live Business Platform',
    caseStudy: {
      challenge: 'Create a high-end digital storefront and commission portal that translates the emotional beauty of physical artwork into an interactive web experience.',
      solution: 'Designed a warm, luxury-styled digital art gallery with responsive product viewports, custom typography, inquiry modals, and direct ordering links.',
      impact: [
        'Established full digital authority for Artika Creations',
        'Direct customer engagement for bespoke paintings and art gifts',
        'Responsive layout across mobile, tablet, and widescreen displays'
      ],
      features: [
        'Curated art collection showcase',
        'Custom commission order flow',
        'Visual brand identity and typography system',
        'Mobile-first responsive architecture'
      ],
      servicesProvided: [
        'Brand Identity & Visual Direction',
        'Frontend Architecture & React Development',
        'Asset Curation & Portfolio Presentation',
        'Hosting & Vercel Deployment'
      ]
    }
  },
  {
    id: 'skyfly-international',
    number: '02',
    title: 'SkyFly International',
    subtitle: 'Global Visa & Immigration Guidance Digital Platform',
    category: 'business',
    projectType: 'featured_business',
    description: 'A comprehensive corporate web presence for a global visa, passport documentation, and immigration consultancy, engineered for credibility and customer lead generation.',
    longDescription: 'SkyFly International Pvt. Ltd. connects ambitious travelers and students with global visa pathways. The website emphasizes trust, structured visa categories, document checklists, and streamlined consultation bookings.',
    services: [
      'Corporate Immigration Website',
      'Visitor & Student Visa Presentation',
      'High-Conversion Lead Generation Structure',
      'Digital Branding & Credibility Layout',
      'Location & Office Direct Contact System'
    ],
    technologies: ['React', 'Tailwind CSS', 'Interactive Forms', 'SEO Architecture', 'Vercel'],
    liveUrl: 'https://travel-global-journey.lovable.app/',
    image: '/images/skyfly-banner.png',
    accentColor: '#3b82f6',
    featured: true,
    statusBadge: 'Business Client Solution',
    caseStudy: {
      challenge: 'Immigration clients need absolute credibility and clarity regarding complex visa paperwork, attestation, and eligibility guidelines.',
      solution: 'Built a multi-tier service portal presenting visitor visa guidance, document verification stages, translation services, and 1-click consultation triggers.',
      impact: [
        'Organized 7+ immigration service categories into clear visual cards',
        'Integrated multi-channel contact pathways (Phone, Email, Physical Office in Trichy)',
        'Delivered high-contrast visual design that builds business trust'
      ],
      features: [
        'International visitor visa roadmap',
        'Document review and attestation guidance display',
        'Direct lead capture for travel consultations',
        'Multi-device responsive layout'
      ],
      servicesProvided: [
        'UI/UX Architecture & Layout Design',
        'Business Service Structuring',
        'Responsive Web Development',
        'Client Credibility Optimization'
      ]
    }
  },
  {
    id: 'vy-enterprises',
    number: '03',
    title: 'VY Enterprises',
    subtitle: 'Eco-Friendly Areca Leaf Tableware Wholesale Digital Strategy',
    category: 'business',
    projectType: 'business_service',
    description: 'Dedicated business-service case study for an areca leaf plates and cups wholesale enterprise. Conceptualized as an end-to-end digital presence and lead generation pipeline.',
    longDescription: 'VY Enterprises manufactures and distributes biodegradable, hygienic areca palm leaf plates, bowls, and cups. This case study maps the complete digital transformation blueprint designed to scale wholesale inquiries across regional and international buyers.',
    services: [
      'B2B Product Catalog & Wholesale Web Portal',
      'WhatsApp Lead Integration & Quick RFQ System',
      'Google Business Profile & Local SEO Setup',
      'Google Search Console & Organic Ranking Strategy',
      'Brand Identity & Social Media Creative Support'
    ],
    technologies: ['React Web Architecture', 'B2B Catalog Design', 'WhatsApp API', 'Local SEO', 'Google Search Console'],
    image: '/images/sora-agency-banner.png',
    accentColor: '#10b981',
    featured: true,
    statusBadge: 'Business Solution Blueprint',
    caseStudy: {
      challenge: 'Traditional wholesale manufacturers often rely purely on word-of-mouth, missing massive high-volume orders from event caterers, export brokers, and retailers.',
      solution: 'Architected a digital wholesale hub showcasing eco-friendly plate dimensions, packaging specs, certification highlights, and 1-click instant WhatsApp quote requests.',
      impact: [
        'Direct B2B buyer inquiry channel via WhatsApp and email',
        'Search visibility for wholesale eco-friendly tableware buyers',
        'High-resolution visual product presentations for varied plate sizes'
      ],
      features: [
        'Wholesale product catalog with dimension filters',
        'Bulk quotation generator and WhatsApp inquiry flow',
        'Eco-friendly manufacturing story and hygienic standards highlight',
        'Google Business Profile localization roadmap'
      ],
      servicesProvided: [
        'Digital Strategy & Solution Architecture',
        'B2B Web Catalog Design Concept',
        'Lead Generation Channel Mapping'
      ],
      potentialServices: [
        'Full Web Portal Deployment',
        'Google Search Console indexing and technical SEO',
        'Product photoshoot & social media ad creatives',
        'Export catalog digital brochure'
      ]
    }
  }
];

export const APPLICATION_PROJECTS: Project[] = [
  {
    id: 'todo-habits',
    number: '04',
    title: 'To-Do-Habits (HabitFlow)',
    subtitle: 'Productivity & Daily Habit Architecture Application',
    category: 'applications',
    projectType: 'application',
    description: 'A productivity application designed to help users build enduring daily routines, track streak analytics, and manage task milestones seamlessly.',
    longDescription: 'To-Do-Habits is engineered for individuals who want an intuitive, clean visual dashboard to monitor their personal habits and to-do lists. Features streak calculation, habit completion matrices, and responsive mobile parity.',
    services: [
      'Interactive Web Application',
      'Android APK Package Build',
      'Daily Streak & Analytics Logic',
      'Local Persistence & State Sync',
      'Clean Productivity UI/UX'
    ],
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Android APK Build', 'Local Storage'],
    liveUrl: 'https://to-do-habits-delta.vercel.app/',
    githubUrl: 'https://rathiselva29.github.io/dailyhabittracking/',
    apkDownloadUrl: '/downloads/habit-tracker.apk',
    image: '/images/habit-tracker-app.png',
    accentColor: '#22c55e',
    featured: true,
    statusBadge: 'Web App + Android APK Available',
    caseStudy: {
      challenge: 'Most habit trackers are cluttered with ads and bloated menus. Users need instant daily logging with minimal friction.',
      solution: 'Built a lightweight, high-performance web app with daily grid check-ins, progress visualization, and packaged it for Android.',
      impact: [
        'Live deployed on Vercel and accessible via browser or Android APK',
        'Zero latency local state management for offline logging',
        'Clean, accessible color-coded completion grid'
      ],
      features: [
        'Interactive daily habit completion checkboxes',
        'Productivity task breakdown with instant status toggles',
        'Streak counter & milestone motivation',
        'Installable Android APK'
      ],
      servicesProvided: [
        'Application Logic & State Management',
        'Mobile-optimized UX',
        'APK Packaging & Asset Prep'
      ]
    }
  },
  {
    id: 'loveloop-app',
    number: '05',
    title: 'LoveLoop / LuvLoop',
    subtitle: 'Interactive Celebration & Romantic Web Experiences',
    category: 'applications',
    projectType: 'application',
    description: 'A bespoke personalized web application suite designed for intimate celebrations, anniversary memories, and secure messaging concepts.',
    longDescription: 'LoveLoop combines modern interactive animations, timeline memories, custom music synchronization, and interactive greetings. Proves that digital creativity can turn personal milestones into memorable digital keepsakes.',
    services: [
      'Bespoke Interactive Celebration Webpage',
      'Animated Memory Timelines & Galleries',
      'Custom Audio & Visual Themes',
      'Personalized Digital Keepsake'
    ],
    technologies: ['React', 'CSS Animations', 'Audio Sync', 'Motion Design', 'Vercel'],
    image: '/images/loveloop-banner.png',
    accentColor: '#f43f5e',
    featured: false,
    statusBadge: 'Creative Web Experience',
    caseStudy: {
      challenge: 'Physical greeting cards are easily discarded. Clients want memorable, everlasting digital experiences for their loved ones.',
      solution: 'Created an animated story-driven webpage with secret message reveals, interactive photo galleries, and celebratory soundscapes.',
      impact: [
        'Delivered memorable celebration moments for personal clients',
        'Seamless playback across mobile and desktop web browsers'
      ],
      features: [
        'Interactive memory slideshow',
        'Personalized message reveal animations',
        'Custom ambient soundtrack player',
        'Touch-optimized romantic theme'
      ],
      servicesProvided: [
        'Creative Concept & UI Layout',
        'Interactive Frontend Animations',
        'Personalization & Custom Domain Delivery'
      ]
    }
  }
];

export const OWN_CODED_PROJECTS: Project[] = [
  {
    id: 'artika-gallery-owncode',
    number: '06',
    title: 'Artika Gallery — Ratthika vs Art Project',
    subtitle: 'Own-Coded Digital Art Portfolio',
    category: 'own_coded',
    projectType: 'own_coded',
    description: 'Personal repository project coded from the ground up to showcase digital art, creative paintings, and design concepts with customized HTML/CSS/JavaScript structure.',
    longDescription: 'This project highlights hands-on coding from scratch, managing responsive image layouts, interactive gallery filters, and creative color palettes under the banner "Where Creativity Meets Passion".',
    services: [
      'Custom Frontend Coding',
      'GitHub Pages Hosting & CI',
      'Art Catalog Layout',
      'CSS Animations'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Responsive Design'],
    liveUrl: 'https://rathiselva29.github.io/ratthika_vs_art_project/',
    githubUrl: 'https://github.com/rathiselva29/ratthika_vs_art_project',
    image: '/images/artika-gallery-banner.png',
    accentColor: '#a855f7',
    featured: true,
    isOwnCoded: true,
    statusBadge: '100% Own-Coded Repo',
    caseStudy: {
      challenge: 'Build a lightweight, zero-dependency art gallery hosted directly on GitHub Pages with clean semantics.',
      solution: 'Wrote pure, semantic HTML, structured CSS animations, and vanilla JavaScript event listeners for instant load speeds.',
      impact: [
        'Instantaneous page load speed under 100ms',
        'Public open-source repository on GitHub demonstrating clean code principles'
      ],
      features: [
        'Category-based art display',
        'Zero external framework bloat',
        'GitHub Pages continuous deployment'
      ],
      servicesProvided: [
        'Full Architecture & Coding',
        'Version Control on GitHub',
        'Visual Design & Asset Creation'
      ]
    }
  },
  {
    id: 'habitflow-owncode',
    number: '07',
    title: 'Daily Habit Tracking (HabitFlow)',
    subtitle: 'Own-Coded Productivity Engine',
    category: 'own_coded',
    projectType: 'own_coded',
    description: 'A dedicated, hands-on repository project built with custom algorithms to track daily habits, manage task matrices, and optimize productivity workflows.',
    longDescription: 'Created to experiment with pure DOM manipulation, localStorage caching mechanisms, and responsive grid layouts without relying on heavy third-party state managers.',
    services: [
      'Vanilla & React State Logic',
      'Offline-First Local Storage Engine',
      'GitHub Repository Codebase',
      'Performance Optimization'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages', 'Local Storage'],
    liveUrl: 'https://rathiselva29.github.io/dailyhabittracking/',
    githubUrl: 'https://github.com/rathiselva29/dailyhabittracking',
    image: '/images/habit-tracker-app.png',
    accentColor: '#10b981',
    featured: true,
    isOwnCoded: true,
    statusBadge: '100% Own-Coded Repo',
    caseStudy: {
      challenge: 'Create an offline-first habit tracker that functions flawlessly with zero server latency.',
      solution: 'Engineered a lightweight data engine utilizing client-side storage with daily rollover math.',
      impact: [
        'Zero cloud cost, instant user interactions',
        'Solid demonstration of core algorithmic state handling'
      ],
      features: [
        'Daily completion matrix',
        'Streak persistence across browser refreshes',
        'Minimalist dark/light mode parity'
      ],
      servicesProvided: [
        'Core Algorithm Implementation',
        'DOM Manipulation & Storage Sync',
        'GitHub Deployment'
      ]
    }
  }
];

export const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  ...APPLICATION_PROJECTS,
  ...OWN_CODED_PROJECTS
];

export const BUSINESS_PACKAGES: BusinessPackage[] = [
  {
    id: 'pkg-starter',
    tier: 'BUSINESS STARTER',
    headline: 'For small businesses & shops starting their online journey.',
    description: 'Everything a local business or startup needs to launch a verified, modern online presence and start receiving customer inquiries immediately.',
    highlight: 'Ideal for local clinics, salons, retail shops, and emerging services',
    accentColor: '#38bdf8',
    deliverables: [
      'Custom Responsive Business Website (Up to 5 sections)',
      'Brand Identity Kickstart (Logo placement & color scheme)',
      '1-Click WhatsApp Direct Chat & Lead Integration',
      'Google Search Console Setup & Sitemap Submission',
      'Google Business Profile Setup & Verification Guidance',
      'Basic On-Page SEO (Meta tags, keywords, mobile speed)',
      'Social Media Bio Links & Business Contact Cards',
      'Fast Cloud Hosting Deployment on Vercel / Netlify'
    ],
    ctaText: 'Start My Business Presence'
  },
  {
    id: 'pkg-growth',
    tier: 'BUSINESS GROWTH',
    headline: 'For established businesses seeking stronger digital visibility & leads.',
    description: 'A comprehensive digital upgrade combining a modern high-performance website, marketing creatives, lead generation funnels, and local search dominance.',
    highlight: 'Most popular for growing brands, agencies, and regional businesses',
    isPopular: true,
    accentColor: '#818cf8',
    deliverables: [
      'High-Performance Multi-Page or Rich Single-Page Web App',
      'Complete Visual Brand Refresh (Typography, Icons & Assets)',
      'Social Media Development & Launch Creative Assets (5+ Banners)',
      'Dedicated Product / Service Catalog Showcase',
      'Strategic WhatsApp & Form Lead Generation Funnels',
      'Comprehensive Technical SEO & Google Search Console Optimization',
      'Google Maps / Local Search Ranking Optimization',
      'Digital Presence Strategy Roadmap for Continuous Growth',
      'Mobile-First Cross-Device Testing & Speed Optimization'
    ],
    ctaText: 'Grow My Business'
  },
  {
    id: 'pkg-complete',
    tier: 'COMPLETE DIGITAL PRESENCE',
    headline: 'End-to-end digital authority, custom engineering & continuous creative partnership.',
    description: 'The ultimate bespoke package for brands that want to dominate their niche with exceptional web architecture, ongoing creative support, and complete digital strategy.',
    highlight: 'For serious businesses, international ventures & scaling brands',
    accentColor: '#c084fc',
    deliverables: [
      'Premium Bespoke Web Application with Custom Interactions',
      'End-to-End Brand System (Logo, Guidelines, Digital Stationery)',
      'Full Digital Product Catalog & Interactive Inquiry Builder',
      'Omni-Channel Lead Capture (WhatsApp, Forms, Direct Mail)',
      'Advanced SEO Foundation, Structured Schema & Analytics Tracking',
      'Google Business Profile Full Optimization & Review Funnel',
      'Social Media Identity Suite (Banners, Posters, Story Templates)',
      'Ongoing Creative & Technical Support Retainer',
      'Custom Functional Requirements & API Integrations'
    ],
    ctaText: 'Build My Digital Presence'
  }
];

export const INDIVIDUAL_SERVICES: IndividualCreativeService[] = [
  {
    id: 'service-birthday',
    title: 'Birthday & Anniversary Surprise Webpages',
    subtitle: 'Turn a special day into an unforgettable digital experience.',
    description: 'Custom animated celebration websites with surprise countdowns, photo galleries, memory timelines, audio soundtracks, and heartfelt wishes.',
    examples: [
      'Interactive Birthday Greeting Webpage',
      'Romantic Anniversary Memory Lane',
      'Secret Surprise Reveal Pages with Countdown'
    ],
    icon: 'Sparkles',
    accent: '#f43f5e',
    turnaroundTime: '24–48 Hours Delivery'
  },
  {
    id: 'service-invitations',
    title: 'Digital Event & Party Invitations',
    subtitle: 'Modern, interactive invites that guests can open and RSVP to on their phones.',
    description: 'Eco-friendly, animated digital invitation cards with location map triggers, calendar reminders, and instant RSVP confirmation.',
    examples: [
      'Wedding & Reception Digital Cards',
      'Party & Housewarming Web Invitations',
      'Celebration RSVP Pages'
    ],
    icon: 'PartyPopper',
    accent: '#ec4899',
    turnaroundTime: '1–2 Days Delivery'
  },
  {
    id: 'service-posters',
    title: 'Custom Posters, Banners & Social Creatives',
    subtitle: 'Eye-catching visuals for social media announcements and personal branding.',
    description: 'High-resolution graphic designs tailored for Instagram posts, YouTube thumbnails, event flyers, festival greetings, and promotional banners.',
    examples: [
      'Instagram Story & Feed Creatives',
      'Event & Concert Posters',
      'Personal Branding Banners & Avatars'
    ],
    icon: 'Palette',
    accent: '#8b5cf6',
    turnaroundTime: '24 Hours Delivery'
  },
  {
    id: 'service-custom-dev',
    title: 'Small Digital Projects & Utilities',
    subtitle: 'Have a unique small software idea? Let\'s code it.',
    description: 'Custom calculators, interactive portfolios, mini-games, gift scratchcards, quote generators, or lightweight web widgets tailored to your exact vision.',
    examples: [
      'Interactive Quiz or Trivia Webpage',
      'Personal Link-in-Bio Dashboard',
      'Custom Task / Habit Micro-App'
    ],
    icon: 'Code2',
    accent: '#06b6d4',
    turnaroundTime: '2–4 Days Delivery'
  }
];

export const CREATIVE_SHOWCASE_ITEMS: CreativeItem[] = [
  {
    id: 'sora-banner-light',
    title: 'SoRa Solutions — Business Agency Banner',
    category: 'banners',
    categoryLabel: 'Banners',
    description: 'High-impact agency banner presenting end-to-end web development, UI/UX, and business services.',
    image: '/images/sora-agency-banner.png',
    dimensions: '1920 × 1080 px',
    tags: ['Web Design', 'Agency Banner', 'Digital Marketing', 'Brand Identity'],
    aspectRatio: 'landscape'
  },
  {
    id: 'sora-banner-dark',
    title: 'SoRa Dark Luxury — Neon Studio Experience',
    category: 'banners',
    categoryLabel: 'Banners',
    description: 'Futuristic dark-mode agency visual designed for high-end digital experiences and tech brand credibility.',
    image: '/images/sora-dark-banner.png',
    dimensions: '1920 × 1080 px',
    tags: ['Dark Theme', 'Neon Accents', 'Digital Experiences', 'Agency'],
    aspectRatio: 'landscape'
  },
  {
    id: 'skyfly-poster',
    title: 'SkyFly International — Visa Guidance Poster',
    category: 'posters',
    categoryLabel: 'Posters',
    description: 'Comprehensive vertical poster detailing global visa documentation, travel pathways, and immigration services.',
    image: '/images/skyfly-poster.png',
    dimensions: '1080 × 2400 px',
    tags: ['Immigration', 'Travel Poster', 'Infographic', 'Corporate Branding'],
    aspectRatio: 'portrait'
  },
  {
    id: 'skyfly-logo',
    title: 'SkyFly International — Brand Logo Identity',
    category: 'logos',
    categoryLabel: 'Logos',
    description: 'Clean circular globe and airplane silhouette logo symbolizing global mobility and trusted flight journeys.',
    image: '/images/skyfly-logo.png',
    dimensions: '1200 × 600 px',
    tags: ['Logo Design', 'Vector Branding', 'Aviation', 'Travel'],
    aspectRatio: 'landscape'
  },
  {
    id: 'ratthika-artika-banner',
    title: 'Ratthika S — Where Code Meets Creativity',
    category: 'banners',
    categoryLabel: 'Banners',
    description: 'Personal dual-identity banner merging clean React code syntax on the left with fine canvas art painting on the right.',
    image: '/images/ratthika-code-art-banner.png',
    dimensions: '2400 × 900 px',
    tags: ['Frontend Developer', 'Artika Gallery', 'Code Meets Art', 'Personal Brand'],
    aspectRatio: 'landscape'
  },
  {
    id: 'luvloop-branding',
    title: 'LuvLoop — Secure Real-Time Messaging Brand',
    category: 'creative_work',
    categoryLabel: 'Creative Work',
    description: 'Futuristic enterprise secure messaging product visual with glowing badge iconography.',
    image: '/images/luvloop-banner.png',
    dimensions: '1920 × 1080 px',
    tags: ['UI Mockup', 'Messaging App', 'Security', 'Dark UI'],
    aspectRatio: 'landscape'
  },
  {
    id: 'artika-creations-icon',
    title: 'Artika Creations — Shopping Bag Logo Icon',
    category: 'icons',
    categoryLabel: 'Icons',
    description: 'Warm pastel app icon featuring a boutique shopping bag with calligraphy floral monogram.',
    image: '/images/artika-logo-square.png',
    dimensions: '1024 × 1024 px',
    tags: ['App Icon', 'Boutique Logo', 'Pastel Aesthetic', 'Handmade Art'],
    aspectRatio: 'square'
  },
  {
    id: 'habit-tracker-icon',
    title: 'Habit Tracker — Grid App Icon',
    category: 'icons',
    categoryLabel: 'Icons',
    description: 'Minimalist green checkmark grid icon communicating productivity, habit completion, and daily success.',
    image: '/images/habit-tracker-icon.png',
    dimensions: '1080 × 1600 px',
    tags: ['Mobile Icon', 'Habit Tracker', 'Minimalist', 'Productivity'],
    aspectRatio: 'portrait'
  },
  {
    id: 'loveloop-sunset-banner',
    title: 'LoveLoop — Sunset Watercolor Landscape Banner',
    category: 'digital_art',
    categoryLabel: 'Digital Art',
    description: 'Serene watercolor digital painting banner depicting a glowing lakeside sunrise with soft pink flora.',
    image: '/images/loveloop-sunset-banner.png',
    dimensions: '2400 × 960 px',
    tags: ['Digital Painting', 'Watercolor', 'Landscape Art', 'Sunset Aesthetics'],
    aspectRatio: 'landscape'
  },
  {
    id: 'loveloop-infinity-icon',
    title: 'LoveLoop Web — Infinity Heart App Icon',
    category: 'icons',
    categoryLabel: 'Icons',
    description: '3D ribbon infinity heart symbol on vibrant magenta-to-purple gradient app card.',
    image: '/images/loveloop-icon-square.png',
    dimensions: '1024 × 1024 px',
    tags: ['App Icon', '3D Ribbon', 'Gradient UI', 'Romantic App'],
    aspectRatio: 'square'
  },
  {
    id: 'artika-yellow-project',
    title: 'Ratthika vs Art Project — Where Creativity Meets Passion',
    category: 'social_media',
    categoryLabel: 'Social Media',
    description: 'Vibrant pop-yellow banner celebrating bold digital art experimentation and creative enthusiasm.',
    image: '/images/art-project-yellow.png',
    dimensions: '1200 × 600 px',
    tags: ['Pop Art', 'Creative Banner', 'Art Showcase', 'Yellow Palette'],
    aspectRatio: 'landscape'
  },
  {
    id: 'sora-brochure-concept',
    title: 'SoRa Business Brochure & Digital Service Matrix',
    category: 'brochures',
    categoryLabel: 'Brochures',
    description: 'Structured service matrix brochure designed for SMEs detailing web hosting, SEO, and social marketing tiers.',
    image: '/images/sora-agency-banner.png',
    dimensions: '1920 × 1080 px',
    tags: ['Brochure Layout', 'B2B Services', 'Corporate Presentation'],
    aspectRatio: 'landscape'
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'pillar-web-dev',
    number: '01',
    title: 'Web Development',
    tagline: 'Fast, responsive, modern code engineered for results.',
    description: 'Building custom websites and web applications with clean architecture, interactive user experiences, and flawless mobile responsiveness.',
    capabilities: [
      'Modern Business & Corporate Websites',
      'Interactive Portfolio & Creator Showcase Sites',
      'High-Conversion Landing Pages',
      'Custom React.js Web Applications',
      'Mobile-First Responsive Architectures',
      'Fast Cloud Deployment (Vercel, Netlify, GitHub Pages)'
    ],
    icon: 'Code2',
    accent: '#6366f1'
  },
  {
    id: 'pillar-digital-creation',
    number: '02',
    title: 'Digital Creation & Design',
    tagline: 'Visual stories and bespoke digital assets that captivate.',
    description: 'Bringing creative ideas to life with high-impact visual design, social media assets, celebratory webpages, and custom illustrations.',
    capabilities: [
      'Social Media Creatives & Ad Banners',
      'Event Posters & Marketing Graphics',
      'Birthday & Celebration Interactive Webpages',
      'Digital Invitations & RSVPs',
      'Digital Art, Watercolor & Vector Concepts',
      'Creative Content & Campaign Visuals'
    ],
    icon: 'Sparkles',
    accent: '#ec4899'
  },
  {
    id: 'pillar-branding',
    number: '03',
    title: 'Brand Identity',
    tagline: 'Distinctive visual identities that command trust and recognition.',
    description: 'Shaping cohesive brand visuals from memorable logos and app icons to polished color palettes and digital brand guidelines.',
    capabilities: [
      'Logo Concepts & Vector Marks',
      'Custom App & Mobile Icons',
      'Color Systems & Typography Pairing',
      'Digital Stationery & Social Banners',
      'Brand Presentation & Pitch Decks',
      'Visual Identity Guidelines'
    ],
    icon: 'Palette',
    accent: '#a855f7'
  },
  {
    id: 'pillar-digital-marketing',
    number: '04',
    title: 'Digital Marketing & SEO Support',
    tagline: 'Building the visibility and search foundations your business needs.',
    description: 'Ensuring your website is indexed properly, discovered on Google Search, and connected directly to customer conversation channels.',
    capabilities: [
      'Google Search Console Indexing & Sitemaps',
      'Google Business Profile Setup & Optimization',
      'On-Page SEO & Meta Architecture',
      'WhatsApp Lead Integration & Click-to-Chat',
      'Social Media Profile Setup & Linktrees',
      'Digital Presence Growth Strategy'
    ],
    icon: 'TrendingUp',
    accent: '#3b82f6'
  },
  {
    id: 'pillar-freelance-custom',
    number: '05',
    title: 'Freelance Custom Solutions',
    tagline: 'Flexible, direct collaboration for your unique requirements.',
    description: 'Whether you are an individual with a small personalized celebration idea or an entrepreneur launching a wholesale business, I work directly with you.',
    capabilities: [
      'Personalized Celebration Webpages',
      'Quick Prototyping & MVP Development',
      'Website Maintenance & Performance Tweaks',
      'Custom Digital Keepsakes & Micro-Sites',
      'Direct 1-on-1 Communication & Agile Delivery',
      'Transparent Custom Scope & Pricing'
    ],
    icon: 'Handshake',
    accent: '#10b981'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'IDEA',
    description: 'Discovery & Vision',
    details: 'Understanding your goals, target audience, brand tone, and functional requirements through direct discussion.',
    deliverable: 'Clear project scope & creative direction'
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'Architecture & Strategy',
    details: 'Structuring content flow, user journeys, technology stack selection, and milestone timelines.',
    deliverable: 'Sitemap & structural blueprint'
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'UI/UX & Visual Identity',
    details: 'Crafting modern, high-contrast layouts, typography pairing, custom graphics, and responsive mockups.',
    deliverable: 'Interactive visual design system'
  },
  {
    step: '04',
    title: 'BUILD',
    description: 'Clean Code & Engineering',
    details: 'Writing clean, modular TypeScript/React code with seamless animations, responsive flex/grid, and API hooks.',
    deliverable: 'Fully functional, tested codebase'
  },
  {
    step: '05',
    title: 'TEST',
    description: 'Quality & Optimization',
    details: 'Testing cross-browser compatibility, mobile responsiveness, fast load performance, and form validation.',
    deliverable: 'Performance-verified build'
  },
  {
    step: '06',
    title: 'LAUNCH',
    description: 'Deployment & Digital Presence',
    details: 'Publishing to production domains (Vercel/GitHub), setting up Google indexing, and handing over all assets.',
    deliverable: 'Live web solution & verified presence'
  }
];

export const WHY_WORK_WITH_ME: ValueCard[] = [
  {
    title: 'Creative + Technical',
    subtitle: 'Dual Perspective',
    description: 'I understand both modern frontend development and visual graphic presentation. No disconnect between what is designed and what is coded.',
    icon: 'Cpu',
    accent: '#6366f1'
  },
  {
    title: 'Custom, Not Copy-Paste',
    subtitle: 'Tailored Craftsmanship',
    description: 'Every website, creative asset, and digital solution is custom-shaped around the client’s real goals rather than generic cookie-cutter templates.',
    icon: 'Wand2',
    accent: '#ec4899'
  },
  {
    title: 'Business Mindset',
    subtitle: 'Holistic Digital Presence',
    description: 'I think beyond code: considering customer acquisition, WhatsApp lead triggers, Google Search Console indexing, and long-term brand credibility.',
    icon: 'Briefcase',
    accent: '#3b82f6'
  },
  {
    title: 'Fast & Continuous Learning',
    subtitle: 'Modern Toolset',
    description: 'Passionate about exploring modern web technologies, AI-assisted development workflows, and responsive design innovations.',
    icon: 'Zap',
    accent: '#eab308'
  },
  {
    title: 'Direct Collaboration',
    subtitle: 'Zero Bureaucracy',
    description: 'You communicate directly with the person coding and designing your project, ensuring swift feedback loops and clear expectations.',
    icon: 'MessageSquareText',
    accent: '#10b981'
  },
  {
    title: 'Developer + Creator',
    subtitle: 'End-to-End Delivery',
    description: 'From website code and mobile APK packaging to social media posters and custom celebration pages, I handle the full creative continuum.',
    icon: 'Layers',
    accent: '#a855f7'
  }
];

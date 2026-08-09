import { Project, Service, TechItem, Testimonial, PricingPlan, FAQItem } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortDesc: 'High-converting corporate & brand websites built for trust, lead generation, and brand dominance.',
    fullDesc: 'Custom-designed corporate websites that position your business as an industry leader. Optimized for high Google rankings, fast load times, and maximum visitor conversion into active leads.',
    iconName: 'Building2',
    startingPrice: 'KES 25,000',
    turnaroundTime: '5-7 Days',
    popular: true,
    deliverables: [
      'Custom UI/UX Design',
      'Fully Mobile Responsive Layout',
      'SEO & Google Search Console Setup',
      'Fast Load Speeds (< 1.5s)',
      'Contact Forms & WhatsApp Direct Chat',
      'Free SSL Certificate & Deployment Assistance'
    ]
  },
  {
    id: 'ecommerce-stores',
    title: 'E-commerce Stores',
    shortDesc: 'Modern online stores with automated checkout, payment gateway integration, and stock management.',
    fullDesc: 'Robust online shops engineered for sales growth. Features seamless checkout, M-Pesa STK Push, Card payments, live order notifications, and product inventory management.',
    iconName: 'ShoppingBag',
    startingPrice: 'KES 40,000',
    turnaroundTime: '7-12 Days',
    popular: true,
    deliverables: [
      'Custom Storefront & Product Catalogs',
      'M-Pesa STK Push & Card Gateways',
      'Automated Order Notifications',
      'Customer Dashboard & Order Tracking',
      'Coupon Codes & Discount Engine',
      'Product Search & Filtering'
    ]
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    shortDesc: 'Sleek visual showcase websites for creators, executives, agency owners, and professionals.',
    fullDesc: 'Stand out from the crowd with an award-winning personal brand website. Showcases your case studies, gallery, credentials, and direct booking system.',
    iconName: 'Briefcase',
    startingPrice: 'KES 20,000',
    turnaroundTime: '3-5 Days',
    deliverables: [
      'Modern Creative Theme Options',
      'Interactive Case Study Gallery',
      'Downloadable Resume / CV Link',
      'Client Testimonials & Credentials',
      'Direct WhatsApp & Appointment Booking',
      'Social Media Integration'
    ]
  },
  {
    id: 'real-estate-websites',
    title: 'Real Estate Websites',
    shortDesc: 'Property listing platforms with interactive maps, search filters, and agent inquiry portals.',
    fullDesc: 'Property marketplace built for realtors, agents, and developers. Features advanced location filtering, floorplan downloads, and instant WhatsApp inquiry routing.',
    iconName: 'Home',
    startingPrice: 'KES 30,000',
    turnaroundTime: '7-10 Days',
    deliverables: [
      'Advanced Property Search & Map View',
      'High-Res Photo & Video Galleries',
      'Property Inquiries to Agent WhatsApp',
      'Mortgage & Payment Estimator',
      'Agent Portal & Listing Management'
    ]
  },
  {
    id: 'school-systems',
    title: 'School / Organization Websites',
    shortDesc: 'Comprehensive portals for schools, NGOs & institutions to manage students, events, and communications.',
    fullDesc: 'End-to-end institutional web portal. Handles student information, admissions forms, fee portals, downloadable resources, and news announcements.',
    iconName: 'GraduationCap',
    startingPrice: 'KES 25,000',
    turnaroundTime: '7-12 Days',
    deliverables: [
      'Admissions & Application Portals',
      'Downloadable Syllabus & News Modules',
      'Fee Balance & Inquiry Forms',
      'Staff Directory & Events Calendar',
      'Mobile Friendly Student Gateway'
    ]
  },
  {
    id: 'booking-tour-websites',
    title: 'Booking & Tour Websites',
    shortDesc: 'Direct booking systems for hotels, tours, safari lodges, Airbnbs, and travel agencies.',
    fullDesc: 'Commission-free booking engine for hotels, resorts, Airbnbs, safari operators, and tour agencies. Enables direct customer bookings, seasonal rates, and instant reservation alerts.',
    iconName: 'CalendarCheck',
    startingPrice: 'KES 35,000',
    turnaroundTime: '7-10 Days',
    deliverables: [
      'Live Room/Tour Availability Calendar',
      'Instant Booking & Deposit Payment',
      'Custom Itinerary Display & Gallery',
      'Guest Reviews & Rating System',
      'Multi-Currency Support'
    ]
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    shortDesc: 'Tailor-made full-stack software solutions engineered for unique operational workflows.',
    fullDesc: 'Crafted full-stack web applications using React, Next.js, Node.js, Express, and cloud databases built to match your exact business specs and SaaS ideas.',
    iconName: 'Code',
    startingPrice: 'KES 60,000+',
    turnaroundTime: '12-25 Days',
    deliverables: [
      'Custom Tech Stack (React/Node/Laravel)',
      'Database Architecture Design',
      'Third-Party API Integrations',
      'Interactive Admin Dashboards',
      'Full Source Code Ownership'
    ]
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDesc: 'Transform outdated, slow websites into fast, modern, mobile-friendly digital powerhouses.',
    fullDesc: 'Revamp your existing website with a ultra-modern UI, lighting-fast speed scores, flawless mobile responsiveness, and enhanced conversion optimization.',
    iconName: 'RefreshCw',
    startingPrice: 'KES 15,000',
    turnaroundTime: '3-5 Days',
    deliverables: [
      'Complete Visual UI/UX Overhaul',
      'PageSpeed Score Boost (>90+)',
      'Mobile First Layout Fixes',
      'SEO Preservation & Migration',
      'Modern Tech Stack Upgrade'
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'apex-luxury-realestate',
    title: 'Apex Estates - Luxury Property Marketplace',
    category: 'Real Estate',
    shortDesc: 'A ultra-luxury real estate platform for high-net-worth property listings with 3D virtual tours and instant agent chat.',
    fullDesc: 'Apex Estates was built to showcase multi-million dollar properties in East & Central Africa. Built with Next.js and Tailwind CSS, it features high-frame-rate image carousel galleries, interactive neighborhood maps, dynamic currency switching, and instant lead routing to assigned listing agents via WhatsApp.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Mapbox', 'Node.js', 'PostgreSQL'],
    client: 'Apex Luxury Group',
    year: '2025',
    liveUrl: '#demo-apex',
    mockupTemplate: 'realestate',
    metrics: [
      { label: 'Conversion Rate', value: '+340%' },
      { label: 'Page Speed Score', value: '99/100' },
      { label: 'Inquiries/Month', value: '1,200+' }
    ],
    features: [
      'Interactive Location Map Search',
      '3D Floorplan & Virtual Tour Viewer',
      'Dynamic Currency Converter (USD / KES / EUR)',
      'Mortgage Amortization Calculator',
      'Direct WhatsApp Agent Connect'
    ],
    designHighlight: 'Dark glassmorphic luxury aesthetic with gold and electric blue accents, smooth parallax scrolling, and high-res photography.'
  },
  {
    id: 'paypulse-saas',
    title: 'PayPulse - Fintech Billing & Analytics Platform',
    category: 'SaaS',
    shortDesc: 'SaaS financial analytics dashboard enabling subscription businesses to track MRR, churn, and revenue growth in real time.',
    fullDesc: 'PayPulse processes multi-gateway subscription metrics. Built using React, TypeScript, Node.js, and ChartJS/Recharts, it provides finance teams with automated revenue forecasting, failed payment recovery automation, and customer lifetime value cohorts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'MongoDB'],
    client: 'PayPulse Inc.',
    year: '2025',
    liveUrl: '#demo-paypulse',
    mockupTemplate: 'saas',
    metrics: [
      { label: 'Monthly Active Users', value: '45,000+' },
      { label: 'Data Latency', value: '< 80ms' },
      { label: 'MRR Growth Tracked', value: '$2.4M' }
    ],
    features: [
      'Live MRR & Churn Analytics Dashboard',
      'Stripe & M-Pesa Webhook Integrations',
      'Automated Dunning & Invoicing',
      'Role-Based Team Permissions',
      'PDF Financial Report Exporter'
    ],
    designHighlight: 'Futuristic dark glass dashboard with neon violet charts and interactive data filtering.'
  },
  {
    id: 'velvet-style-ecommerce',
    title: 'Velvet & Co. - High-End E-Commerce Store',
    category: 'E-commerce',
    shortDesc: 'Fashion & lifestyle online store with instant M-Pesa Express checkout, size recommendation engine, and dynamic inventory.',
    fullDesc: 'A flagship e-commerce platform for an international luxury apparel brand. Integrated with automated inventory management, M-Pesa STK Push, Stripe Payments, and a personalized product recommendation algorithm that raised average order value by 42%.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
    tags: ['Next.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'M-Pesa API', 'Stripe'],
    client: 'Velvet Apparel Ltd',
    year: '2024',
    liveUrl: '#demo-velvet',
    mockupTemplate: 'ecommerce',
    metrics: [
      { label: 'Avg Order Value', value: '+42%' },
      { label: 'Checkout Duration', value: '14 Sec' },
      { label: 'Monthly Sales', value: '$85,000+' }
    ],
    features: [
      '1-Click M-Pesa STK Push Checkout',
      'Interactive Size Advisor Widget',
      'Real-Time Stock Counter',
      'Wishlist & Abandoned Cart Recovery',
      'Customer Review with Photo Upload'
    ],
    designHighlight: 'Minimalist editorial layout with smooth product zoom animations and dark sleek dark mode.'
  },
  {
    id: 'st-andrews-school',
    title: 'St. Andrews International Academy Portal',
    category: 'Education',
    shortDesc: 'Full school management system handling 1,500+ students, automated report cards, fee portals, and parent alerts.',
    fullDesc: 'A comprehensive web application designed for a premier educational institution. Enables teachers to upload exam grades, generates automated PDF report cards with teacher signatures, allows parents to pay fees via M-Pesa/Bank, and sends instant SMS notifications.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    tags: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Vue.js', 'SMS Gateway'],
    client: 'St. Andrews School Board',
    year: '2024',
    liveUrl: '#demo-school',
    mockupTemplate: 'school',
    metrics: [
      { label: 'Students Managed', value: '1,500+' },
      { label: 'Parent Engagement', value: '98%' },
      { label: 'Time Saved', value: '40 hrs/wk' }
    ],
    features: [
      'Student Marks & Automated Grade Book',
      'PDF Report Card Generator',
      'Parent Portal & Fee Receipt Tracker',
      'Bulk SMS Attendance Notifications',
      'Library & Bus Route Tracker'
    ],
    designHighlight: 'Clean corporate layout with role-based dashboard widgets and high accessibility standards.'
  },
  {
    id: 'medicare-health-portal',
    title: 'MediCare Specialist Clinic & EHR System',
    category: 'Healthcare',
    shortDesc: 'Digital health booking platform and electronic patient records portal for multi-specialty medical centers.',
    fullDesc: 'Engineered to reduce patient waiting times and digitize medical histories. Features real-time doctor availability calendars, automated appointment reminders, pharmacy prescription logs, and secure encrypted patient portals.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    client: 'MediCare Health Alliance',
    year: '2024',
    liveUrl: '#demo-medicare',
    mockupTemplate: 'healthcare',
    metrics: [
      { label: 'Patient No-Shows', value: '-65%' },
      { label: 'EHR Lookup Time', value: '2 Secs' },
      { label: 'Monthly Bookings', value: '3,800+' }
    ],
    features: [
      'Doctor Schedule & Slot Booking',
      'Encrypted Patient Health History',
      'Digital Prescription & Lab Downloads',
      'SMS & WhatsApp Appointment Alerts',
      'Teleconsultation Video Portal'
    ],
    designHighlight: 'Calm, trust-inducing dark blue UI with high contrast and intuitive navigation.'
  },
  {
    id: 'grand-savanna-resort',
    title: 'Grand Savanna Lodge & Luxury Safaris',
    category: 'Web Apps',
    shortDesc: 'Direct booking website for a luxury safari resort with room customizer, safari package builder, and instant deposits.',
    fullDesc: 'Designed to drive direct international safari bookings without paying heavy OTA commissions. Built with custom interactive itinerary builder, seasonal price multipliers, room previews with 360-degree views, and deposit payments.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Stripe'],
    client: 'Savanna Hospitality',
    year: '2025',
    liveUrl: '#demo-resort',
    mockupTemplate: 'booking',
    metrics: [
      { label: 'Direct Bookings', value: '+210%' },
      { label: 'OTA Fee Savings', value: '$18,000/yr' },
      { label: 'Avg Session Time', value: '4m 12s' }
    ],
    features: [
      'Interactive Safari Package Customizer',
      'Live Room Calendar & Rate Engine',
      'Multi-Currency Deposit Payments',
      'Guest Airport Transfer Request',
      'Customer Video Reviews Section'
    ],
    designHighlight: 'Warm luxury aesthetic featuring deep amber glows, full-screen video background, and silky transitions.'
  }
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: 'FileCode', level: '98%', experience: '5+ Yrs', description: 'Semantic markup, accessibility (a11y), SEO architecture.' },
  { name: 'CSS3 / Modern Styling', category: 'Frontend', icon: 'Palette', level: '95%', experience: '5+ Yrs', description: 'Flexbox, Grid, CSS Variables, Animations, Glassmorphism.' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: 'Code2', level: '96%', experience: '5+ Yrs', description: 'Async/Await, DOM, Functional Programming, Web APIs.' },
  { name: 'TypeScript', category: 'Frontend', icon: 'FileCheck', level: '92%', experience: '4+ Yrs', description: 'Strict typing, generics, interfaces, scalable enterprise code.' },
  { name: 'React', category: 'Frontend', icon: 'Atom', level: '95%', experience: '4+ Yrs', description: 'Custom hooks, state management, context, performance optimization.' },
  { name: 'Next.js', category: 'Frontend', icon: 'Zap', level: '90%', experience: '3+ Yrs', description: 'Server-side rendering (SSR), SSG, App Router, SEO excellence.' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Wind', level: '98%', experience: '4+ Yrs', description: 'Utility-first CSS, custom design systems, responsive perfection.' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'Server', level: '90%', experience: '4+ Yrs', description: 'Event-driven backend services, REST APIs, microservices.' },
  { name: 'Express.js', category: 'Backend', icon: 'Cpu', level: '92%', experience: '4+ Yrs', description: 'Middleware routing, authentication, rate limiting, JSON APIs.' },
  { name: 'PHP', category: 'Backend', icon: 'Terminal', level: '88%', experience: '5+ Yrs', description: 'Core PHP, object-oriented backend logic, web security.' },
  { name: 'Laravel', category: 'Backend', icon: 'Box', level: '85%', experience: '3+ Yrs', description: 'Eloquent ORM, Blade, migrations, enterprise web apps.' },

  // Database
  { name: 'MySQL', category: 'Database', icon: 'Database', level: '92%', experience: '5+ Yrs', description: 'Relational schema design, complex joins, indexing, query speed.' },
  { name: 'PostgreSQL', category: 'Database', icon: 'HardDrive', level: '88%', experience: '3+ Yrs', description: 'Advanced JSON handling, triggers, relational integrity.' },
  { name: 'Firebase', category: 'Database', icon: 'Flame', level: '90%', experience: '4+ Yrs', description: 'Firestore real-time DB, Auth, Cloud Storage, Serverless.' },
  { name: 'MongoDB', category: 'Database', icon: 'Layers', level: '85%', experience: '3+ Yrs', description: 'Document schemas, aggregation pipelines, flexible scaling.' },

  // DevOps & Tools
  { name: 'Git & GitHub', category: 'DevOps & Tools', icon: 'GitBranch', level: '95%', experience: '5+ Yrs', description: 'Version control, branch workflows, CI/CD actions, PR reviews.' },
  { name: 'Docker', category: 'DevOps & Tools', icon: 'Container', level: '82%', experience: '2+ Yrs', description: 'Containerization, docker-compose, reproducible environments.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'David Ndung\'u',
    role: 'Managing Director',
    company: 'Apex Property Holdings',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Kelvin delivered a masterpiece real estate platform for Apex. Our inquiries increased by 340% within 30 days of launch. His attention to design detail, speed optimization, and WhatsApp integration was unmatched!',
    rating: 5,
    projectType: 'Real Estate Platform',
    location: 'Nairobi, Kenya'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'PayPulse Global',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Working with Kelvin was seamless. He understood our complex SaaS analytics metrics and created a gorgeous, ultra-fast dashboard that our customers love using every single day. Highly recommended!',
    rating: 5,
    projectType: 'SaaS Analytics Dashboard',
    location: 'London, UK'
  },
  {
    id: 't3',
    name: 'Dr. Martin Kamau',
    role: 'Medical Director',
    company: 'MediCare Specialist Clinic',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    content: 'The clinic booking system Kelvin built transformed our operations. Patient no-shows dropped by 65%, and our staff saves over 3 hours every day on scheduling. Truly a high-calibre developer.',
    rating: 5,
    projectType: 'Healthcare System',
    location: 'Nairobi, Kenya'
  },
  {
    id: 't4',
    name: 'Elena Rostova',
    role: 'E-Commerce Director',
    company: 'Velvet Apparel Co.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Our online sales spiked immediately after Kelvin revamped our e-commerce store with M-Pesa STK Push and instant search. The user experience is smooth as silk on mobile phones!',
    rating: 5,
    projectType: 'E-commerce Store',
    location: 'Dubai, UAE'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Business / Portfolio Website',
    price: 'KES 25,000',
    period: 'Starting At',
    description: 'Perfect for small businesses, startups, creators, and professionals needing a high-converting online presence.',
    idealFor: 'Small Businesses & Freelancers',
    features: [
      { text: 'Custom UI/UX Designed Pages', included: true },
      { text: 'Mobile & Tablet 100% Responsive Layout', included: true },
      { text: 'SEO Basic Setup & Google Indexing', included: true },
      { text: 'WhatsApp & Contact Form Integration', included: true },
      { text: 'Fast Loading Speed (< 1.5s)', included: true },
      { text: 'Free SSL & Launch Setup', included: true },
      { text: 'E-Commerce & Online Payments', included: false },
      { text: 'Custom Admin Dashboard', included: false }
    ]
  },
  {
    id: 'professional',
    name: 'E-Commerce Store / Booking System',
    badge: 'Most Popular',
    popular: true,
    price: 'KES 40,000',
    period: 'Starting At',
    description: 'Comprehensive business store with M-Pesa STK Push, card payment gateways, product catalog, or booking engine.',
    idealFor: 'E-commerce Stores, Hotels, Real Estate',
    features: [
      { text: 'Custom Storefront & Product Catalogs', included: true },
      { text: 'M-Pesa STK Push & Card Gateways', included: true },
      { text: 'Automated Order & Booking Alerts', included: true },
      { text: 'Advanced SEO & Speed Optimization (95+)', included: true },
      { text: 'Customer Accounts & Order Tracking', included: true },
      { text: 'Inventory & Discount Engine', included: true },
      { text: '1 Month Free Post-Launch Tech Support', included: true },
      { text: 'Full Source Code Ownership', included: true }
    ]
  },
  {
    id: 'enterprise',
    name: 'Custom Web Application & Software',
    badge: 'Custom Platform',
    price: 'KES 60,000+',
    period: 'Starting At',
    description: 'Tailor-made full-stack web applications, SaaS platforms, institutional portals, or complex cloud databases.',
    idealFor: 'SaaS Startups, Custom Business Workflows',
    features: [
      { text: 'Custom Tech Stack (React / Node / Laravel / MySQL)', included: true },
      { text: 'Custom REST API & Cloud Database Architecture', included: true },
      { text: 'Interactive Real-Time Workflows', included: true },
      { text: 'Comprehensive Admin Analytics Dashboard', included: true },
      { text: 'Role-Based Authentication & Security', included: true },
      { text: 'High-Security Encryption & Backups', included: true },
      { text: 'Dedicated Maintenance & Support SLA', included: true },
      { text: '100% Source Code Ownership & Documentation', included: true }
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'f1',
    category: 'General',
    question: 'How long does it take to complete a website project?',
    answer: 'Timeline depends on the project scope. Standard business websites take 5-10 business days. E-commerce stores take 10-18 days, while complex custom web applications or SaaS platforms take 2-4 weeks. We provide clear milestone updates throughout.'
  },
  {
    id: 'f2',
    category: 'Pricing',
    question: 'Are there any hidden fees or ongoing costs?',
    answer: 'No hidden fees! My quotes are 100% transparent and upfront. I focus strictly on custom website design and software development. Web hosting and domain registration fees are paid directly by you to your preferred hosting provider, and I configure and deploy the website for you at zero extra charge.'
  },
  {
    id: 'f3',
    category: 'General',
    question: 'Will my website work well on mobile phones and tablets?',
    answer: 'Absolutedly! Over 70% of website visitors use mobile devices. Every project I design is built mobile-first, ensuring lightning-fast load speeds, fluid layout responsiveness, and pixel-perfect touch targets.'
  },
  {
    id: 'f4',
    category: 'Process',
    question: 'Can you integrate local payment methods like M-Pesa?',
    answer: 'Yes! I specialize in integrating local and international payment gateways including M-Pesa (STK Push / Express Checkout / Paybill), Stripe, PayPal, and local bank card processing with automated payment confirmation.'
  },
  {
    id: 'f5',
    category: 'Support',
    question: 'What happens after my website goes live?',
    answer: 'I provide ongoing technical support, security updates, and bug fixes after launch. All projects include free post-launch support (up to 3 months depending on package), and flexible monthly maintenance plans.'
  },
  {
    id: 'f6',
    category: 'Process',
    question: 'Do I get full ownership of the website and source code?',
    answer: 'Yes, 100%! Upon project completion and final payment, you receive full ownership of all source code, design assets, database, and project files.'
  }
];

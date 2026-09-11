export const LOGO_URL = '/logo.png'

export const NAV_LINKS = [
  { label: 'What We Do', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
]

export const STATS = [
  {
    value: '40+',
    label: 'Apps Launched',
    colorClass: 'text-white group-hover:text-cyan-300',
    borderColor: 'hover:border-cyan-500/50',
  },
  {
    value: '99.9%',
    label: 'System Uptime',
    colorClass: 'text-emerald-400',
    borderColor: 'hover:border-emerald-400/50',
  },
  {
    value: '<100ms',
    label: 'Average Response',
    colorClass: 'text-cyan-400',
    borderColor: 'hover:border-cyan-400/50',
  },
  {
    value: '100%',
    label: 'On-Time Delivery',
    colorClass: 'text-sky-400',
    borderColor: 'hover:border-sky-400/50',
  },
]

export const TECH_BADGES = [
  { name: 'React 19', color: 'hover:border-cyan-400/60 hover:text-cyan-300' },
  { name: 'Node.js', color: 'hover:border-emerald-400/60 hover:text-emerald-300' },
  { name: 'Express', color: 'hover:border-sky-400/60 hover:text-sky-300' },
  { name: 'PostgreSQL', color: 'hover:border-cyan-400/60 hover:text-cyan-300' },
  { name: 'MongoDB', color: 'hover:border-emerald-400/60 hover:text-emerald-300' },
  { name: 'TypeScript', color: 'hover:border-sky-400/60 hover:text-sky-300' },
  { name: 'Next.js', color: 'hover:border-cyan-400/60 hover:text-cyan-300' },
  { name: 'Tailwind CSS', color: 'hover:border-sky-400/60 hover:text-sky-300' },
  { name: 'Docker', color: 'hover:border-blue-400/60 hover:text-blue-300' },
  { name: 'Redis', color: 'hover:border-red-400/60 hover:text-red-300' },
]

export const VALUE_PROPS = [
  {
    icon: 'tune',
    title: 'Zero Tech Headaches',
    desc: 'You bring the business goal—we handle the code, database architecture, hosting, and performance tuning.',
  },
  {
    icon: 'verified_user',
    title: '100% Code Ownership',
    desc: 'You own all intellectual property, source code, database access, and production deployments. No lock-in.',
  },
  {
    icon: 'speed',
    title: 'Sub-Second Speed & Mobile First',
    desc: 'Every application is engineered for instant load speeds, fluid mobile touch gestures, and high SEO conversion.',
  },
]

export const SOLUTIONS = [
  {
    id: 'interactive-apps',
    badge: 'Real-Time & Growth',
    badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    subtitle: 'High-Engagement Web Apps',
    title: 'Customer Portals, Booking & SaaS Apps',
    hoverBorder: 'hover:border-emerald-400/60 hover:shadow-emerald-500/10',
    hoverTitle: 'group-hover:text-emerald-300',
    iconColor: 'text-emerald-400',
    description:
      'Ideal for businesses where customers sign in, book services, track live progress, or manage their dashboard with zero friction.',
    features: [
      'Instant real-time updates and live notifications',
      'Mobile-first user onboarding and self-service dashboards',
      'Flexible architecture built to scale smoothly as your customers grow',
    ],
    bestFor: 'Gyms, Travel, Booking Services, Marketplaces & Startups',
    techStack: 'Engineered with React 19, Node.js & MongoDB (MERN Stack)',
  },
  {
    id: 'enterprise-platforms',
    badge: 'Security & Scale',
    badgeClass: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    subtitle: 'Rock-Solid Business Platforms',
    title: 'Enterprise Systems, Portals & Secure Data',
    hoverBorder: 'hover:border-cyan-400/60 hover:shadow-cyan-500/10',
    hoverTitle: 'group-hover:text-cyan-300',
    iconColor: 'text-cyan-400',
    description:
      'Engineered for companies with high-volume transactions, multi-user staff permissions, complex workflows, and zero tolerance for errors.',
    features: [
      '100% structured data accuracy with rock-solid consistency',
      'Multi-role staff permissions, security audits & compliance ready',
      'Automated invoicing, equipment catalogs & complex business operations',
    ],
    bestFor: 'Industrial & Energy, FinTech, Logistics, B2B SaaS & HealthTech',
    techStack: 'Engineered with React 19, Node.js & PostgreSQL (PERN Stack)',
  },
]

export const STACKS = SOLUTIONS

export const PROJECTS = [
  {
    id: 'oil-and-gas-solutions',
    title: 'Oil & Gas Solutions',
    tag: 'Next.js & React',
    tagColor: 'text-amber-300 border-amber-500/30',
    hoverBorder: 'hover:border-amber-400/60 hover:shadow-amber-500/10',
    hoverTitle: 'group-hover:text-amber-300',
    metricColor: 'text-amber-400',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Oil and Gas Solutions corporate engineering platform',
    description:
      'Complete industrial energy platform delivering rig contracting, drilling operations, logistics, QHSE training, and workforce management.',
    category: 'Industrial & Energy',
    metric: '15+ Yrs / 50+ Courses',
    liveUrl: 'https://oilandgassolutions.com/',
    details: {
      client: 'OGS (Pvt.) Ltd',
      timeline: 'Production Live',
      deliverables: [
        'Next.js App Router Architecture',
        'Rig & Operations Equipment Catalog',
        'Enterprise Client Showcase & Certifications',
        'Interactive Quotation & Contact Workflow',
      ],
      overview:
        'A mission-critical enterprise engineering portal engineered for Oil & Gas Solutions (Pvt.) Ltd to showcase international rig services, drilling operations, logistics, and certified QHSE courses.',
    },
  },
  {
    id: 'wanderlust-travels',
    title: 'WanderLust Travels',
    tag: 'React & Tailwind',
    tagColor: 'text-cyan-300 border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-400/60 hover:shadow-cyan-500/10',
    hoverTitle: 'group-hover:text-cyan-300',
    metricColor: 'text-cyan-400',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'WanderLust Travels web application preview',
    description:
      'An immersive travel and tourism discovery platform featuring curated tour packages, interactive booking itineraries, and destination guides.',
    category: 'Travel & Tourism',
    metric: '50+ Global Tours',
    liveUrl: 'https://zeeshan-travel-website-cyan-five.vercel.app/',
    details: {
      client: 'Travel & Adventure Co',
      timeline: 'Production Live',
      deliverables: [
        'Interactive Destination Explorer',
        'Custom Package Itinerary Builder',
        'Responsive Booking & Inquiry Flow',
        'Dynamic Review & Rating Aggregator',
      ],
      overview:
        'Engineered to inspire adventure seekers with high-speed page loads, rich visual destination showcases, and frictionless tour reservation flows.',
    },
  },
  {
    id: 'berotot-gym',
    title: 'Berotot Fitness & Gym',
    tag: 'MERN Stack',
    tagColor: 'text-emerald-300 border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-400/60 hover:shadow-emerald-500/10',
    hoverTitle: 'group-hover:text-emerald-300',
    metricColor: 'text-emerald-400',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Berotot Gym training and fitness platform',
    description:
      'A performance-driven fitness and gym membership web app featuring training tiers, coach profiles, class schedules, and instant onboarding.',
    category: 'Health & Fitness',
    metric: '500+ Active Members',
    liveUrl: 'https://berotot-gym-zeeshan.vercel.app/',
    details: {
      client: 'Berotot Athletic Club',
      timeline: 'Production Live',
      deliverables: [
        'Membership Tier Subscription Engine',
        'Trainer Profiles & Class Schedule Calendar',
        'Class Pass & Onboarding Workflow',
        'High-Energy Dark UI Design System',
      ],
      overview:
        'A high-energy, modern fitness platform designed to drive membership conversions, showcase trainer expertise, and streamline class bookings.',
    },
  },
  {
    id: 'restaurant-web',
    title: 'Gourmet Haven Restaurant',
    tag: 'PERN Stack',
    tagColor: 'text-sky-300 border-sky-500/30',
    hoverBorder: 'hover:border-sky-400/60 hover:shadow-sky-500/10',
    hoverTitle: 'group-hover:text-sky-300',
    metricColor: 'text-sky-400',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gourmet restaurant dining web platform',
    description:
      'A contemporary culinary experience web app featuring interactive digital menus, online table reservations, chef specials, and instant orders.',
    category: 'Restaurant & Dining',
    metric: '4.9★ Top Rated',
    liveUrl: 'https://zeesshan-resturant-web.vercel.app/',
    details: {
      client: 'Gourmet Culinary Group',
      timeline: 'Production Live',
      deliverables: [
        'Interactive Digital Visual Menu',
        'Table Reservation Booking Engine',
        'Special Events & Chef Specials Showcase',
        'Mobile-Optimized Fast Ordering Flow',
      ],
      overview:
        'An appetizing digital dining platform crafted to streamline reservations, showcase seasonal menus with appetizing photography, and enhance guest dining experiences.',
    },
  },
]

export const PROCESS_STEPS = [
  {
    step: 'Step 01',
    title: 'Discover & Plan',
    icon: 'search',
    colorTheme: {
      badge: 'text-cyan-400/90',
      iconBox: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-400 shadow-cyan-500/10',
      hoverBorder: 'hover:border-cyan-400/50',
      hoverTitle: 'group-hover:text-cyan-300',
    },
    description: 'We define your project goals, database structure, and technical requirements upfront.',
  },
  {
    step: 'Step 02',
    title: 'Design & Develop',
    icon: 'draw',
    colorTheme: {
      badge: 'text-emerald-400/90',
      iconBox: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-400 shadow-emerald-500/10',
      hoverBorder: 'hover:border-emerald-400/50',
      hoverTitle: 'group-hover:text-emerald-300',
    },
    description: 'We craft clean user interfaces and build robust backend APIs with continuous weekly updates.',
  },
  {
    step: 'Step 03',
    title: 'Test & Optimize',
    icon: 'speed',
    colorTheme: {
      badge: 'text-sky-400/90',
      iconBox: 'bg-sky-500/10 border-sky-500/20 text-sky-400 group-hover:bg-sky-400 shadow-sky-500/10',
      hoverBorder: 'hover:border-sky-400/50',
      hoverTitle: 'group-hover:text-sky-300',
    },
    description: 'We run performance, security, and device checks to make sure your app is fast and stable.',
  },
  {
    step: 'Step 04',
    title: 'Launch & Support',
    icon: 'rocket_launch',
    colorTheme: {
      badge: 'text-cyan-400/90',
      iconBox: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-400 shadow-cyan-500/10',
      hoverBorder: 'hover:border-cyan-400/50',
      hoverTitle: 'group-hover:text-cyan-300',
    },
    description: 'We deploy seamlessly to production and hand over full documentation and source code.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      '“Craftly Web engineered a high-reliability platform for Oil & Gas Solutions that streamlined our equipment catalog, training certifications, and enterprise client inquiries. Their technical precision and speed are outstanding.”',
    author: 'Engineering Leadership',
    role: 'Oil & Gas Solutions (Pvt.) Ltd',
    initials: 'OG',
    avatarGradient: 'from-amber-500 to-orange-600 shadow-amber-500/20',
    hoverBorder: 'hover:border-amber-400/50',
    hoverName: 'group-hover:text-amber-300',
  },
  {
    quote:
      '“Craftly Web built an incredible full-stack platform for Berotot Gym. The seamless class scheduling, membership onboarding, and high-energy mobile UX helped us scale to over 500 active members effortlessly.”',
    author: 'Zeeshan Ali',
    role: 'Founder & Head Coach at Berotot Gym',
    initials: 'ZA',
    avatarGradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/20',
    hoverBorder: 'hover:border-emerald-400/50',
    hoverName: 'group-hover:text-emerald-300',
  },
]

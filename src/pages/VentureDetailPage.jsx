import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiSparklingFill, 
  RiArrowRightLine, 
  RiArrowLeftLine,
  RiArrowRightUpLine, 
  RiGraduationCapLine, 
  RiCpuLine, 
  RiCalendarEventLine, 
  RiRocketLine, 
  RiBuilding4Line, 
  RiHotelLine,
  RiFilePaperLine,
  RiShieldCheckLine,
  RiCheckDoubleLine,
  RiCheckLine,
  RiDoubleQuotesL,
  RiSendPlaneFill,
  RiUserLine,
  RiMailLine,
  RiPhoneLine,
  RiMessage2Line,
  RiCheckboxCircleFill,
  RiStarFill,
  RiBarChartBoxLine,
  RiCompass3Line,
  RiStackLine
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

// Enriched venture vertical configurations
const ventureDetailsMap = {
  'versatile-academy': {
    icon: RiGraduationCapLine,
    accentColor: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.12)',
    accentBorder: 'rgba(34,211,238,0.35)',
    quickStats: [
      { label: 'Students Mentored', value: '2500+' },
      { label: 'Placement Rate', value: '94%' },
      { label: 'Active Curriculums', value: '15+' },
      { label: 'Hiring Partners', value: '150+' }
    ],
    mission: 'Bridging the critical divide between theoretical academia and modern tech industry demands through rigorous full-stack engineering, live capstone architectures, and personalized placement coaching.',
    extendedOverview: 'Founded as the premier educational arm of JVS, Versatile Academy empowers aspiring developers, engineers, and career switchers with verified practical competencies. Through industry-backed curriculums, code review mentorship, and corporate mock interviews, students graduate as deployable assets ready to excel in competitive digital roles.',
    capabilities: [
      {
        title: 'Full Stack Web & Cloud Engineering',
        icon: RiCpuLine,
        description: 'Comprehensive bootcamps covering MERN Stack, Python Full Stack, and modern cloud deployment architectures.',
        deliverables: ['Production GitHub Repositories', 'AWS & Cloud Deployment', 'Live Client Capstones']
      },
      {
        title: 'Data Science & Machine Learning',
        icon: RiBarChartBoxLine,
        description: 'Hands-on data analytics, applied machine learning algorithms, and real-time visualization frameworks.',
        deliverables: ['Pandas & NumPy Toolkits', 'Predictive Modeling', 'Interactive Dashboards']
      },
      {
        title: 'Live Capstone Project Sprints',
        icon: RiStackLine,
        description: 'Students engineer enterprise-grade projects under active code reviews by experienced tech leads.',
        deliverables: ['Sprint Architecture', 'CI/CD Pipelines', 'Portfolio Review Ready']
      },
      {
        title: 'Placement Coaching & Mock Drills',
        icon: RiBuilding4Line,
        description: 'Personalized interview simulations, ATS resume optimization, and corporate hiring referral pipelines.',
        deliverables: ['ATS-Compliant Resume', 'Technical Scorecards', 'HR Behavioral Drills']
      }
    ],
    advantages: [
      {
        title: 'Practitioner-Led Mentorship',
        description: 'Learn directly from active software architects who build production software daily.'
      },
      {
        title: 'Verified Industry Credentialing',
        description: 'Receive verified certifications and client recommendation letters recognized across India.'
      },
      {
        title: 'Direct Corporate Conduit',
        description: 'Benefit from established talent pipelines directly connecting our alumni with corporate recruiters.'
      },
      {
        title: 'Lifelong Alumni Ecosystem',
        description: 'Continuous upskilling webinars, career guidance, and developer community collaboration.'
      }
    ],
    impactMetrics: [
      { label: 'Successful Placements', value: '2500+', subtext: 'In Tech & Enterprise Roles' },
      { label: 'Average CTC Uplift', value: '3.2x', subtext: 'Post-Training Compensation' },
      { label: 'Student Satisfaction', value: '4.9/5', subtext: 'Alumni Course Ratings' },
      { label: 'Corporate Hiring Network', value: '150+', subtext: 'Tie-Ups Across India' }
    ],
    leader: {
      name: 'Jyoshna Yellapu',
      role: 'Managing Director of JVS',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      badge: 'Group Leadership',
      quote: 'Education must not be passive memorization. At Versatile Academy, we transform potential into deployable capability, empowering young minds to build sustainable futures.',
      note: 'Versatile Academy serves as the talent bedrock of JVS, cultivating engineers who fuel both our internal engineering initiatives and top national employers.'
    },
    inquiryOptions: [
      'Full Stack Software Development Bootcamp',
      'Data Analytics & AI Training Program',
      'Academic Capstone Project Guidance',
      'Corporate Training / Campus Partnership'
    ]
  },
  'jvs-tech': {
    icon: RiCpuLine,
    accentColor: '#60a5fa',
    accentBg: 'rgba(96,165,250,0.12)',
    accentBorder: 'rgba(96,165,250,0.35)',
    quickStats: [
      { label: 'Platforms Deployed', value: '45+' },
      { label: 'Uptime Reliability', value: '99.9%' },
      { label: 'Cloud Tech Stacks', value: '12+' },
      { label: 'Client Retention', value: '98%' }
    ],
    mission: 'Architecting resilient digital engineering systems, high-velocity SaaS products, and bespoke enterprise software that accelerate organizational agility and digital transformation.',
    extendedOverview: 'JVS Tech & Innovation operates as the dedicated digital engineering core of the JVS Group. We design and construct resilient, cloud-native software architectures tailored to modern business requirements. From intuitive mobile applications to enterprise cloud infrastructure, our agile team transforms complex technical challenges into competitive market advantages.',
    capabilities: [
      {
        title: 'Custom Web & SaaS Application Engineering',
        icon: RiCpuLine,
        description: 'End-to-end full stack web platforms built with React, Next.js, Node.js, and microservices architecture.',
        deliverables: ['Production Architecture', 'Scalable APIs', 'Cloud Microservices']
      },
      {
        title: 'Cross-Platform Mobile Apps',
        icon: RiStackLine,
        description: 'Smooth, performant mobile applications engineered for iOS and Android using modern frameworks.',
        deliverables: ['App Store & Play Store Ready', 'Real-time Push Systems', 'Offline Data Sync']
      },
      {
        title: 'Enterprise Cloud Infrastructure & DevOps',
        icon: RiShieldCheckLine,
        description: 'Containerized deployment pipelines, automated security scanning, and resilient AWS / GCP architectures.',
        deliverables: ['Docker / Kubernetes Deployments', 'CI/CD Pipelines', 'Zero-Downtime Releases']
      },
      {
        title: 'UI/UX Design Systems & Design Sprints',
        icon: RiSparklingFill,
        description: 'Human-centered user interface systems, design kits, and interactive wireframes that convert.',
        deliverables: ['Figma Design Systems', 'Interactive Prototypes', 'WCAG Accessibility Standards']
      }
    ],
    advantages: [
      {
        title: 'Cloud-Native Modular Architectures',
        description: 'Engineered for seamless horizontal scale, high security, and minimal operational overhead.'
      },
      {
        title: 'Rapid MVP Deployment Sprints',
        description: 'Accelerate time-to-market with proven agile delivery loops and transparent sprint cadence.'
      },
      {
        title: '99.9% Production Uptime Standards',
        description: 'Rigorous automated testing, infrastructure redundancy, and round-the-clock telemetry monitoring.'
      },
      {
        title: 'Synergy with VexoBiz Incubatees',
        description: 'Direct collaboration with startup founders to architect technically sound MVPs from day one.'
      }
    ],
    impactMetrics: [
      { label: 'Software Systems Delivered', value: '45+', subtext: 'For Startups & Enterprises' },
      { label: 'Infrastructure Uptime', value: '99.9%', subtext: 'Production SLA Maintained' },
      { label: 'Speed-to-Market Uplift', value: '3.5x', subtext: 'Accelerated Sprint Delivery' },
      { label: 'Client CSAT Rating', value: '99.2%', subtext: 'Engineering Feedback Score' }
    ],
    leader: {
      name: 'Jyoshna Yellapu',
      role: 'Managing Director of JVS',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      badge: 'Group Leadership',
      quote: 'Technology is only as powerful as the stability and clarity it brings to an organization. We engineer software that solves real pain points and stands the test of growth.',
      note: 'JVS Tech drives the digital heart of our corporate vision, ensuring every enterprise and venture we touch is powered by reliable modern engineering.'
    },
    inquiryOptions: [
      'Custom Web Platform / SaaS Architecture',
      'Mobile Application Development (iOS & Android)',
      'Enterprise Cloud Infrastructure & DevOps',
      'UI/UX Design System & Product Redesign'
    ]
  },
  'jyoora-events': {
    icon: RiCalendarEventLine,
    accentColor: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.12)',
    accentBorder: 'rgba(245,158,11,0.35)',
    quickStats: [
      { label: 'Conferences & Summits', value: '100+' },
      { label: 'Attendees Managed', value: '50k+' },
      { label: 'A/V Production', value: 'Turnkey' },
      { label: 'Milestone Execution', value: '99.8%' }
    ],
    mission: 'Transforming milestone corporate visions and cultural celebrations into unforgettable experiential realities through world-class stage architecture, precision acoustics, and seamless hospitality logistics.',
    extendedOverview: 'Jyoora Events is the experiential production division under JVS. We craft high-impact corporate summits, national hackathons, brand activations, cultural galas, and private celebrations. Managing every detail from stage trusses and lighting to VIP guest liaison and multi-channel media coverage, we deliver flawless live experiences with uncompromising excellence.',
    capabilities: [
      {
        title: 'Corporate Summits & Tech Conferences',
        icon: RiBuilding4Line,
        description: 'Multi-track conferences, interactive panel orchestrations, and keynote stage environments.',
        deliverables: ['Event Run-Sheet Execution', 'Speaker Stage Liaison', 'Multi-Camera Live Broadcast']
      },
      {
        title: 'Experiential Brand & Product Launches',
        icon: RiSparklingFill,
        description: 'Spectacular reveal ceremonies, interactive demo booths, and curated press release backdrops.',
        deliverables: ['Architectural Lighting', 'Dynamic Reveal Mechanisms', 'PR Media Wall Setup']
      },
      {
        title: 'Concert Audio-Visual & Stage Architecture',
        icon: RiStackLine,
        description: 'High-power concert acoustic engineering, computerized moving lights, and custom LED video walls.',
        deliverables: ['Line Array Sound Systems', 'Custom Curved LED Trusses', 'Stage Safety Certification']
      },
      {
        title: 'VIP Hospitality & Protocol Logistics',
        icon: RiHotelLine,
        description: 'Dignitary reception, luxury transportation routing, and dedicated concierge hospitality desks.',
        deliverables: ['VIP Protocol Management', 'Security Team Coordination', 'Guest Liaison Desk']
      }
    ],
    advantages: [
      {
        title: 'Turnkey End-to-End Governance',
        description: 'From initial conceptual sketch to final post-event teardown, we manage all vendors and logistics.'
      },
      {
        title: 'Precision Acoustic & Visual Tech',
        description: 'State-of-the-art stage gear ensuring crystal clear acoustic fidelity and stunning visual impact.'
      },
      {
        title: 'Zero-Delay Schedule Adherence',
        description: 'Proven military-grade scheduling that keeps complex multi-day events strictly on time.'
      },
      {
        title: 'Signature Stays Synergy',
        description: 'Seamless integration with Signature Stays to accommodate out-of-town VIP guests and keynote speakers.'
      }
    ],
    impactMetrics: [
      { label: 'Events Executed', value: '100+', subtext: 'Corporate & Cultural Productions' },
      { label: 'Total Guests Coordinated', value: '50,000+', subtext: 'Across Major Venues' },
      { label: 'Milestone Punctuality', value: '99.8%', subtext: 'On-Schedule Run Rate' },
      { label: 'Vendor & Stage Network', value: '40+', subtext: 'Certified Production Partners' }
    ],
    leader: {
      name: 'Jyoshna Yellapu',
      role: 'Managing Director of JVS',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      badge: 'Group Leadership',
      quote: 'An event is not merely a gathering—it is a shared emotional milestone. We build experiences where every sound, light, and interaction resonates with purpose and elegance.',
      note: 'Jyoora Events embodies the vibrant, creative spirit of JVS, translating brand ambition into tangible, unforgettable moments.'
    },
    inquiryOptions: [
      'Corporate Conference / Tech Summit',
      'Product Launch & Experiential Brand Activation',
      'Cultural Festival / Live Stage Concert',
      'Executive Gala / VIP Corporate Retreat'
    ]
  },
  'vexobiz': {
    icon: RiRocketLine,
    accentColor: '#34d399',
    accentBg: 'rgba(52,211,153,0.12)',
    accentBorder: 'rgba(52,211,153,0.35)',
    quickStats: [
      { label: 'Startups Incubated', value: '50+' },
      { label: 'Corporate Filings', value: '200+' },
      { label: 'Compliance Audit', value: '100%' },
      { label: 'Ecosystem Valuation', value: '₹15Cr+' }
    ],
    mission: 'Catalyzing entrepreneurial courage by transforming nascent concepts into sustainable, legally fortified, and scalable market-leading corporate enterprises.',
    extendedOverview: 'VexoBiz is the venture incubation and enterprise advisory pillar of JVS. Led by Managing Director Vahid Shaik, VexoBiz provides single-window corporate facilitation—covering company incorporation, regulatory tax compliance, business model validation, investor pitch engineering, and growth strategy. We empower ambitious founders to navigate complex startup ecosystems with clarity and confidence.',
    capabilities: [
      {
        title: 'Company Incorporation & Regulatory Legalities',
        icon: RiBuilding4Line,
        description: 'End-to-end incorporation for Pvt Ltd, LLP, OPC, Section 8, MSME, and DPIIT startup recognitions.',
        deliverables: ['Incorporation Certificates', 'PAN / TAN & GST Allotment', 'Bank Resolution Documentation']
      },
      {
        title: 'Startup Incubation & Business Modeling',
        icon: RiRocketLine,
        description: 'Hands-on validation of business models, revenue architecture, and unit economics structuring.',
        deliverables: ['Business Plan Blueprints', 'Financial Forecasting Models', 'Go-To-Market Framework']
      },
      {
        title: 'Investor Pitch Decks & Valuation Support',
        icon: RiBarChartBoxLine,
        description: 'Institutional-grade pitch deck design, cap table structuring, and investor readiness simulations.',
        deliverables: ['Investor Pitch Decks', 'Cap Table Architecture', 'Valuation Reports']
      },
      {
        title: 'Trademark, IP & Ongoing Compliance',
        icon: RiShieldCheckLine,
        description: 'Intellectual property protection, annual MCA filings, ROC filings, and continuous statutory adherence.',
        deliverables: ['Trademark Registration', 'Statutory Compliance Roadmap', 'Audit Readiness Filings']
      }
    ],
    advantages: [
      {
        title: 'Single-Window Corporate Advisory',
        description: 'One cohesive partner managing your legal, financial, tech, and branding launch requirements.'
      },
      {
        title: '100% Statutory Compliance Track Record',
        description: 'Flawless adherence to MCA guidelines, taxation laws, and corporate governance standards.'
      },
      {
        title: 'Direct Tech Synergy with JVS Tech',
        description: 'Incubated ventures receive streamlined software architecture and MVP development at preferential velocity.'
      },
      {
        title: 'Curated Investor Introduction Conduits',
        description: 'Direct connections to angel networks, government startup grant programs, and venture capital funds.'
      }
    ],
    impactMetrics: [
      { label: 'Enterprises Incubated', value: '50+', subtext: 'From Concept to Market Launch' },
      { label: 'Corporate Filings Completed', value: '200+', subtext: 'Pvt Ltd, LLP, GST & Trademarks' },
      { label: 'Compliance Audit Success', value: '100%', subtext: 'Zero Penalties / Clean Records' },
      { label: 'Cumulative Venture Value', value: '₹15Cr+', subtext: 'Ecosystem Portfolio Estimate' }
    ],
    leader: {
      name: 'Vahid Shaik',
      role: 'Managing Director of VexoBiz',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      badge: 'Venture & Startup Head',
      quote: 'True growth begins with strong ideas, meaningful collaboration, and the courage to turn possibilities into something valuable, impactful, and lasting for the future.',
      note: 'At VexoBiz, we build bulletproof operational and legal foundations so founders can focus on what matters most: building great products and delighting customers.'
    },
    inquiryOptions: [
      'Company Incorporation (Pvt Ltd, LLP, MSME)',
      'Startup Incubation & Business Model Advisory',
      'Investor Pitch Deck Engineering & Valuation',
      'Trademark, IP & Statutory MCA Compliance'
    ]
  },
  'career-placements': {
    icon: RiBuilding4Line,
    accentColor: '#818cf8',
    accentBg: 'rgba(129,140,248,0.12)',
    accentBorder: 'rgba(129,140,248,0.35)',
    quickStats: [
      { label: 'Careers Placed', value: '2500+' },
      { label: 'Corporate Ties', value: '150+' },
      { label: 'Interview Success', value: '92%' },
      { label: 'Average CTC Uplift', value: '3.2x' }
    ],
    mission: 'Connecting ambitious professionals with premier employers through rigorous interview engineering, ATS resume overhaul, and dedicated corporate placement conduits.',
    extendedOverview: 'The Career Development & Placements division serves as the decisive launchpad for students and professionals. Operating in lockstep with Versatile Academy, this vertical guarantees that talent is not merely technically competent, but thoroughly polished in executive communication, behavioral psychology, and high-stakes coding assessments.',
    capabilities: [
      {
        title: 'ATS Resume Architecture & LinkedIn Optimization',
        icon: RiFilePaperLine,
        description: 'Engineered resume templates optimized for corporate applicant tracking systems and recruiter outreach.',
        deliverables: ['Custom ATS-Engineered Resume', 'LinkedIn Profile Overhaul', 'GitHub Showcase Optimization']
      },
      {
        title: 'Simulated Technical & HR Mock Drills',
        icon: RiUserLine,
        description: 'Multi-round interview simulations conducted by seasoned corporate engineering managers and HR leads.',
        deliverables: ['Detailed Mock Scorecards', 'Body Language & Communication Coaching', 'Coding Challenge Drills']
      },
      {
        title: 'Dedicated Corporate Hiring Drives',
        icon: RiBuilding4Line,
        description: 'Exclusive recruitment drives, referral pipelines, and on-campus hiring partnerships with top IT enterprises.',
        deliverables: ['Direct Interview Referrals', 'Campus Drive Scheduling', 'Recruiter Connect Portal']
      },
      {
        title: 'Salary Negotiation & Offer Advisory',
        icon: RiBarChartBoxLine,
        description: 'Strategic counseling on offer evaluation, total compensation breakdown, and professional negotiation etiquette.',
        deliverables: ['Offer Evaluation Framework', 'CTC Negotiation Playbook', 'Career Trajectory Blueprint']
      }
    ],
    advantages: [
      {
        title: 'Direct Access to 150+ Hiring Partners',
        description: 'Tier-1 tech companies, mid-sized enterprises, and funded startups actively recruiting from our pipeline.'
      },
      {
        title: 'Personalized 1-on-1 Mentorship',
        description: 'Dedicated placement advisors track each candidate until successful onboarding.'
      },
      {
        title: 'Proprietary Readiness Scoring',
        description: 'Data-driven readiness assessments ensure candidates interview only when fully prepared to win.'
      },
      {
        title: 'Post-Placement Career Monitoring',
        description: 'Ongoing support during probation periods to ensure seamless transition into professional roles.'
      }
    ],
    impactMetrics: [
      { label: 'Candidates Placed', value: '2500+', subtext: 'Across Tech & Core Sectors' },
      { label: 'Active Corporate Recruiters', value: '150+', subtext: 'Tier-1 & Growth Companies' },
      { label: 'First-Round Clearance Rate', value: '92%', subtext: 'In Technical Assessments' },
      { label: 'Average Salary Hike', value: '3.2x', subtext: 'Compared to Prior Baseline' }
    ],
    leader: {
      name: 'Jyoshna Yellapu',
      role: 'Managing Director of JVS',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      badge: 'Group Leadership',
      quote: 'A degree gives you qualifications, but confidence, practical skills, and interview presence give you a career. We bridge that crucial gap every single day.',
      note: 'Our placement team works tirelessly with HR leaders nationwide to ensure that every talent mentored under JVS attains high-growth employment.'
    },
    inquiryOptions: [
      'Corporate Hiring Partner Registration',
      'Candidate Placement Mentorship Program',
      'ATS Resume Optimization & Mock Interview Drill',
      'Institutional Campus Placement Tie-Up'
    ]
  },
  'signature-stays': {
    icon: RiHotelLine,
    accentColor: '#c084fc',
    accentBg: 'rgba(192,132,252,0.12)',
    accentBorder: 'rgba(192,132,252,0.35)',
    quickStats: [
      { label: 'Curated Residences', value: '25+' },
      { label: 'Guest Nights Hosted', value: '10k+' },
      { label: 'Guest Rating', value: '4.9/5' },
      { label: 'Corporate Re-Bookings', value: '98%' }
    ],
    mission: 'Redefining corporate executive accommodations and luxury living through curated boutique residences, bespoke concierge hospitality, and serene coastal environments.',
    extendedOverview: 'Signature Stays represents the hospitality division of JVS, delivering refined living spaces and retreat venues in Visakhapatnam. Catering to visiting corporate executives, extended business delegations, digital nomads, and enterprise leadership retreats, our spaces offer top-tier amenities, dedicated fiber workstations, and world-class concierge service.',
    capabilities: [
      {
        title: 'Executive Serviced Residences',
        icon: RiBuilding4Line,
        description: 'Fully furnished luxury suites designed for extended corporate assignments and business travelers.',
        deliverables: ['High-Speed Fiber Workstations', 'Daily Housekeeping & Linen Care', 'Private Meeting Lounges']
      },
      {
        title: 'Corporate Offsites & Leadership Retreats',
        icon: RiStackLine,
        description: 'Inspiring private estates tailored for executive strategy sessions, team bonding, and founder unwinds.',
        deliverables: ['Breakout Collaboration Spaces', 'Bespoke Gourmet Catering', 'Retreat Event Coordination']
      },
      {
        title: '24/7 Bespoke Concierge & Transport',
        icon: RiSparklingFill,
        description: 'Dedicated guest concierge managing airport transit, local coastal tours, and tailored lifestyle requests.',
        deliverables: ['Airport Chauffeur Transit', 'Custom Dining Reservations', '24/7 On-Call Support']
      },
      {
        title: 'Boutique Event & Gala Venues',
        icon: RiCalendarEventLine,
        description: 'Exclusive open-air and hall venues for intimate corporate galas, VIP dinners, and celebration evenings.',
        deliverables: ['Acoustic Sound Ambience', 'Event Lighting Infrastructure', 'Catering Station Protocols']
      }
    ],
    advantages: [
      {
        title: 'Prime Coastal Visakhapatnam Locations',
        description: 'Serene coastal settings providing tranquil views alongside quick access to economic hubs.'
      },
      {
        title: 'Enterprise-Grade Security & Discretion',
        description: 'Rigorous safety standards, private access controls, and absolute privacy for high-profile guests.'
      },
      {
        title: 'Work-Ready Infrastructure',
        description: 'Ergonomic furnishings, uninterrupted high-speed internet, and power backup for productive stays.'
      },
      {
        title: 'Synergy with Jyoora Events',
        description: 'Seamlessly coordinates with Jyoora Events to host speakers and VIPs during major corporate summits.'
      }
    ],
    impactMetrics: [
      { label: 'Executive Suites & Stays', value: '25+', subtext: 'In Prime Coastal Locations' },
      { label: 'Total Guest Nights Hosted', value: '10,000+', subtext: 'Corporate & Leisure Visitors' },
      { label: 'Guest Rating Index', value: '4.9 / 5', subtext: 'Verified Feedback Score' },
      { label: 'Corporate Re-Booking Rate', value: '98%', subtext: 'Enterprise Retainers' }
    ],
    leader: {
      name: 'Jyoshna Yellapu',
      role: 'Managing Director of JVS',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      badge: 'Group Leadership',
      quote: 'Hospitality is the art of effortless peace. Whether you are leading a high-stakes corporate negotiation or unwinding with your executive team, Signature Stays delivers supreme comfort.',
      note: 'Signature Stays provides the welcoming, world-class physical foundation for all visiting dignitaries, clients, and partners of the JVS Group.'
    },
    inquiryOptions: [
      'Executive Long-Term Corporate Suite',
      'Corporate Leadership Retreat / Offsite Booking',
      'VIP Guest / Speaker Accommodation',
      'Private Gala Venue & Hospitality Services'
    ]
  }
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function VentureDetailPage({ onOpenBrochure }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Match venture from companyData.ventures
  const venture = companyData.ventures.find((v) => v.id === id);
  const details = id ? ventureDetailsMap[id] : null;

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | submitted | error
  const [formError, setFormError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setFormStatus('idle');
    setFormError('');
    if (details?.inquiryOptions?.[0]) {
      setFormData(prev => ({ ...prev, service: details.inquiryOptions[0] }));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in all mandatory fields (Name, Email, and Phone).');
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('submitted');
    }, 900);
  };

  // Fallback if venture is not found
  if (!venture || !details) {
    return (
      <div className="min-h-screen bg-[#020509] text-slate-100 flex flex-col justify-center items-center py-24 px-4 relative">
        <div 
          className="max-w-2xl w-full p-8 sm:p-12 rounded-3xl text-center space-y-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(10,20,50,0.95) 0%, rgba(5,12,32,0.98) 100%)',
            border: '1px solid rgba(56,189,248,0.25)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9)'
          }}
        >
          <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <RiCompass3Line className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Corporate Directory
            </span>
            <h1 className="font-heading font-bold text-2xl sm:text-4xl text-white">
              Venture Profile Not Found
            </h1>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              The requested venture id <code className="text-cyan-300 bg-slate-900 px-2 py-0.5 rounded">"{id}"</code> does not match any current entity in the JVS ecosystem.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/business"
              className="shine-hover flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
            >
              <RiArrowLeftLine className="w-4 h-4" />
              <span>Back to All Verticals</span>
            </Link>
            <Link
              to="/"
              className="px-6 py-3 rounded-xl text-xs font-bold text-slate-300 border border-slate-700 hover:text-white hover:border-slate-500 transition-colors"
            >
              Go to Homepage
            </Link>
          </div>

          {/* Quick list of available ventures */}
          <div className="pt-8 border-t border-slate-800 text-left space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center">
              Available JVS Business Verticals:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {companyData.ventures.map((v) => (
                <Link
                  key={v.id}
                  to={`/business/${v.id}`}
                  className="p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-slate-200 transition-colors hover:text-cyan-300 hover:bg-slate-900/60 border border-slate-800/80"
                >
                  <span>{v.name}</span>
                  <RiArrowRightLine className="w-3.5 h-3.5 text-cyan-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const VentureIcon = details.icon;
  const otherVentures = companyData.ventures.filter((v) => v.id !== id);

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 relative">

      {/* ─── Ambient Glow Background ─── */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[150px] opacity-35"
        style={{ background: `radial-gradient(circle, ${details.accentColor}50 0%, rgba(37,99,235,0.2) 60%, transparent 80%)` }}
      />

      {/* ─── 1. High-Impact Hero ─── */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-18 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Breadcrumbs */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs font-medium">
              <Link to="/" className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                <RiArrowLeftLine className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span className="text-slate-600">/</span>
              <Link to="/business" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Our Business
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-cyan-300 font-semibold">{venture.name}</span>
            </motion.div>

            {/* Hero Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              
              {/* Left Column: Text & Badges */}
              <div className="lg:col-span-7 space-y-4">
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
                  <span 
                    className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
                    style={{
                      background: details.accentBg,
                      border: `1px solid ${details.accentBorder}`,
                      color: details.accentColor
                    }}
                  >
                    ● {venture.category}
                  </span>

                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {venture.badge}
                  </span>
                </motion.div>

                <motion.h1 
                  variants={itemVariants}
                  className="font-heading font-bold text-white leading-tight"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.025em' }}
                >
                  {venture.name}
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg sm:text-xl font-semibold"
                  style={{ color: details.accentColor }}
                >
                  “{venture.tagline}” — {venture.subTitle}
                </motion.p>

                <motion.p 
                  variants={itemVariants}
                  className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal max-w-2xl"
                >
                  {details.mission}
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="#inquiry"
                    className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white shadow-xl transition-all cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                  >
                    <RiSendPlaneFill className="w-4 h-4 text-cyan-300" />
                    <span>Inquire for {venture.name}</span>
                  </a>

                  <button
                    onClick={onOpenBrochure}
                    className="flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-cyan-300 transition-all cursor-pointer"
                    style={{
                      background: 'rgba(8,16,40,0.85)',
                      border: '1px solid rgba(56,189,248,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(56,189,248,0.6)';
                      e.currentTarget.style.background = 'rgba(12,24,55,0.95)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)';
                      e.currentTarget.style.background = 'rgba(8,16,40,0.85)';
                    }}
                  >
                    <RiFilePaperLine className="w-4 h-4 text-cyan-400" />
                    <span>Brochure Profile (PDF)</span>
                  </button>
                </motion.div>
              </div>

              {/* Right Column: Hero Cover Image & Icon */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-5 relative"
              >
                <div 
                  className="rounded-3xl overflow-hidden relative group p-1"
                  style={{
                    background: `linear-gradient(135deg, ${details.accentColor}60, rgba(37,99,235,0.3))`,
                    boxShadow: `0 25px 60px -15px ${details.accentColor}25`
                  }}
                >
                  <div className="relative h-72 sm:h-88 rounded-[22px] overflow-hidden">
                    <img 
                      src={venture.image} 
                      alt={venture.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(2,5,16,0.9) 0%, rgba(2,5,16,0.2) 60%, transparent 100%)'
                      }}
                    />

                    {/* Badge on Image */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md"
                      style={{
                        background: 'rgba(2,5,16,0.85)',
                        border: `1px solid ${details.accentColor}60`,
                        color: details.accentColor
                      }}>
                      <VentureIcon className="w-6 h-6" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md"
                      style={{
                        background: 'rgba(5,12,30,0.85)',
                        border: '1px solid rgba(56,189,248,0.25)'
                      }}>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        JVS Ecosystem Division
                      </span>
                      <span className="text-sm font-bold text-white font-heading">
                        {venture.name} • {venture.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Quick Stats Strip */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 mt-6 border-t border-slate-800/80"
            >
              {details.quickStats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,40,0.95) 0%, rgba(4,9,24,0.98) 100%)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.7)'
                  }}
                >
                  <div 
                    className="font-heading font-black text-2xl sm:text-3xl"
                    style={{ color: details.accentColor }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Verified Vertical Metric
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ─── 2. Venture Mission & Detailed Overview ─── */}
      <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: '#030611' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="rounded-3xl p-6 sm:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(10,20,50,0.95) 0%, rgba(4,9,25,0.98) 100%)',
              border: `1px solid ${details.accentColor}30`,
              boxShadow: '0 20px 50px -15px rgba(0,0,0,0.8)'
            }}>
            
            <div className="space-y-4 max-w-4xl">
              <span 
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
                style={{ background: details.accentBg, border: `1px solid ${details.accentBorder}`, color: details.accentColor }}
              >
                In-Depth Mission & Overview
              </span>

              <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Driving Real-World Impact Across {venture.category}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                {details.extendedOverview}
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                {venture.description}
              </p>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {venture.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-xs px-3 py-1 rounded-lg font-medium text-slate-200"
                    style={{
                      background: 'rgba(56,189,248,0.1)',
                      border: '1px solid rgba(56,189,248,0.25)'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 3. Key Capabilities & Offerings ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-2 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Operational Scope
            </span>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
              Key Capabilities & Service Offerings
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Specialized solutions engineered for high performance, measurable results, and long-term sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.capabilities.map((cap, idx) => {
              const CapIcon = cap.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,42,0.96) 0%, rgba(4,9,24,0.98) 100%)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    boxShadow: '0 20px 45px -15px rgba(0,0,0,0.8)'
                  }}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                          background: details.accentBg,
                          border: `1px solid ${details.accentBorder}`,
                          color: details.accentColor
                        }}
                      >
                        <CapIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold font-heading text-slate-500">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>

                  {/* Deliverables / Feature points */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Standard Deliverables:
                    </span>
                    <div className="space-y-1">
                      {cap.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200">
                          <RiCheckLine className="w-4 h-4 shrink-0" style={{ color: details.accentColor }} />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 4. Key Highlights & Distinctive Advantages ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#030612' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-2 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Competitive Edge
            </span>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
              Why Partner with {venture.name}
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Distinctive advantages engineered into our operations, team culture, and corporate backing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {details.advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl p-6 flex flex-col justify-between space-y-3 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,40,0.95) 0%, rgba(4,8,22,0.98) 100%)',
                  border: `1px solid ${details.accentColor}25`,
                  boxShadow: '0 15px 35px -15px rgba(0,0,0,0.7)'
                }}
              >
                <div className="space-y-2.5">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                    style={{ background: details.accentBg, color: details.accentColor, border: `1px solid ${details.accentBorder}` }}
                  >
                    ✓
                  </div>
                  <h4 className="font-heading font-bold text-base text-white">
                    {adv.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-500">
                  Advantage #0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights checklist from companyData */}
          <div 
            className="mt-8 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: 'rgba(5,12,30,0.85)',
              border: '1px solid rgba(56,189,248,0.2)'
            }}
          >
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: details.accentColor }}>
                Core Highlights Summary:
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                {venture.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <RiShieldCheckLine className="w-4 h-4 shrink-0 text-cyan-400" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 5. Leadership Note ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 sm:p-12 relative overflow-hidden space-y-6"
              style={{
                background: 'linear-gradient(145deg, rgba(8,18,48,0.96) 0%, rgba(3,7,20,0.98) 100%)',
                border: `1px solid ${details.accentColor}35`,
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.85)'
              }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ background: details.accentBg, border: `1px solid ${details.accentBorder}`, color: details.accentColor }}
                >
                  Executive Leadership Endorsement
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {details.leader.badge}
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-normal text-slate-100 italic font-heading leading-relaxed">
                “{details.leader.quote}”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {details.leader.note}
              </p>

              <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4">
                <img 
                  src={details.leader.image} 
                  alt={details.leader.name}
                  className="w-14 h-14 rounded-2xl object-cover shrink-0"
                  style={{ border: `2px solid ${details.accentColor}60` }}
                />
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {details.leader.name}
                  </h4>
                  <p className="text-xs font-semibold" style={{ color: details.accentColor }}>
                    {details.leader.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── 6. Real-World Impact & Metrics ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#030612' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-2 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Verified Scale
            </span>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
              Real-World Impact & Metrics
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Tangible performance benchmarks delivered across our clients, students, and ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.impactMetrics.map((met, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-6 sm:p-8 text-center space-y-3 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,42,0.96) 0%, rgba(4,9,24,0.98) 100%)',
                  border: '1px solid rgba(56,189,248,0.22)',
                  boxShadow: '0 20px 45px -15px rgba(0,0,0,0.8)'
                }}
              >
                <div 
                  className="font-heading font-black text-3xl sm:text-4xl"
                  style={{ color: details.accentColor }}
                >
                  {met.value}
                </div>
                <div className="font-heading font-bold text-base text-white">
                  {met.label}
                </div>
                <div className="text-xs text-slate-400">
                  {met.subtext}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 7. Venture-Specific Quick Inquiry Form ─── */}
      <section id="inquiry" className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden space-y-8"
            style={{
              background: 'linear-gradient(145deg, rgba(10,22,55,0.96) 0%, rgba(4,10,28,0.98) 100%)',
              border: `1px solid ${details.accentColor}40`,
              boxShadow: `0 25px 60px -15px ${details.accentColor}25`
            }}
          >
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <span 
                className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: details.accentBg, border: `1px solid ${details.accentBorder}`, color: details.accentColor }}
              >
                Direct Engagement Desk
              </span>
              <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
                Inquire with {venture.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Submit your specific service requirement or partnership proposal directly to our {venture.name} operational team in Visakhapatnam.
              </p>
            </div>

            {formStatus === 'submitted' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl text-center space-y-4"
                style={{ background: 'rgba(5,20,35,0.9)', border: '1px solid rgba(52,211,153,0.4)' }}
              >
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <RiCheckboxCircleFill className="w-9 h-9" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our designated team at <strong className="text-cyan-300">{venture.name}</strong> has received your submission for <span className="italic text-slate-200">"{formData.service}"</span> and will respond within 24 hours.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: details.inquiryOptions[0] || '',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-300 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
                  >
                    <span>Instant WhatsApp Chat</span>
                    <RiArrowRightUpLine className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3.5 rounded-xl text-xs font-medium bg-rose-500/10 border border-rose-500/30 text-rose-300 text-center">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <RiUserLine className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Full Name *</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      required
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                      style={{
                        background: 'rgba(5,12,30,0.85)',
                        border: '1px solid rgba(56,189,248,0.25)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = details.accentColor}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(56,189,248,0.25)'}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <RiMailLine className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Email Address *</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. ramesh@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                      style={{
                        background: 'rgba(5,12,30,0.85)',
                        border: '1px solid rgba(56,189,248,0.25)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = details.accentColor}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(56,189,248,0.25)'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <RiPhoneLine className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                      style={{
                        background: 'rgba(5,12,30,0.85)',
                        border: '1px solid rgba(56,189,248,0.25)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = details.accentColor}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(56,189,248,0.25)'}
                    />
                  </div>

                  {/* Service interest dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <RiStackLine className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Service Area *</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-white bg-[#050c1e] focus:outline-none transition-all"
                      style={{
                        border: '1px solid rgba(56,189,248,0.25)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = details.accentColor}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(56,189,248,0.25)'}
                    >
                      {details.inquiryOptions.map((opt, optIdx) => (
                        <option key={optIdx} value={opt} className="bg-[#050c1e] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    <RiMessage2Line className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Project or Requirement Brief</span>
                  </label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={`Tell us more about what you'd like to accomplish with ${venture.name}...`}
                    className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none"
                    style={{
                      background: 'rgba(5,12,30,0.85)',
                      border: '1px solid rgba(56,189,248,0.25)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = details.accentColor}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(56,189,248,0.25)'}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="shine-hover w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white shadow-xl transition-all cursor-pointer disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                  >
                    {formStatus === 'submitting' ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to {venture.name} Team</span>
                        <RiSendPlaneFill className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Direct Corporate Office: Visakhapatnam, 530022 • Response turnaround within 24 hours.
                  </p>
                </div>
              </form>
            )}

          </motion.div>

        </div>
      </section>

      {/* ─── 8. Other Ventures under JVS Recommendation Grid ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#030612' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Explore Synergies
              </span>
              <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
                Other Ventures under JVS
              </h2>
              <p className="text-sm text-slate-300 font-normal">
                Discover the other 5 pillars powering the group's versatile stability.
              </p>
            </div>

            <Link
              to="/business"
              className="shine-hover flex items-center gap-1.5 text-xs font-bold text-cyan-300 px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all self-start sm:self-auto"
            >
              <span>View All 6 Verticals</span>
              <RiArrowRightLine className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherVentures.map((other) => {
              const otherConfig = ventureDetailsMap[other.id];
              const OtherIcon = otherConfig?.icon || RiSparklingFill;
              const accent = otherConfig?.accentColor || '#38bdf8';

              return (
                <Link
                  key={other.id}
                  to={`/business/${other.id}`}
                  className="group rounded-2xl p-4 flex flex-col justify-between space-y-3 transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    background: 'linear-gradient(145deg, rgba(8,16,40,0.95) 0%, rgba(4,9,24,0.98) 100%)',
                    border: '1px solid rgba(56,189,248,0.18)',
                    boxShadow: '0 10px 25px -10px rgba(0,0,0,0.7)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${accent}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.18)';
                  }}
                >
                  <div className="space-y-2.5">
                    {/* Small image thumb */}
                    <div className="h-24 rounded-xl overflow-hidden relative">
                      <img 
                        src={other.image} 
                        alt={other.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020509] via-transparent to-transparent" />
                      <div 
                        className="absolute bottom-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                        style={{ background: 'rgba(2,5,16,0.85)', border: `1px solid ${accent}50`, color: accent }}
                      >
                        <OtherIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider block" style={{ color: accent }}>
                        {other.category}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                        {other.name}
                      </h4>
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">
                      {other.subTitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-semibold" style={{ color: accent }}>
                    <span>Profile</span>
                    <RiArrowRightLine className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

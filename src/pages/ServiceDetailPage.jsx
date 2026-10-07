import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiSparklingFill,
  RiFilePaperLine,
  RiWhatsappFill,
  RiCheckDoubleLine,
  RiShieldCheckLine,
  RiSendPlaneFill,
  RiTimeLine,
  RiAddLine,
  RiSubtractLine,
  RiGraduationCapLine,
  RiFolderSharedLine,
  RiBriefcase4Line,
  RiCodeSSlashLine,
  RiMegaphoneLine,
  RiBuilding3Line,
  RiLineChartLine,
  RiUserStarLine,
  RiCompass3Line,
  RiFlashlightFill,
  RiCheckboxCircleFill
} from 'react-icons/ri';
import { companyData } from '../data/jvsData';
import { brochureContent } from '../data/jvsContent';

// Comprehensive Deep Dive Registry for All 8 Service Streams
const serviceDetailsRegistry = {
  "education-training": {
    id: "education-training",
    number: "01",
    title: "EDUCATION & TRAINING",
    division: "Versatile Academy Vertical",
    category: "Education & Careers",
    accent: "#22d3ee",
    tagBg: "rgba(34,211,238,0.12)",
    border: "rgba(34,211,238,0.35)",
    icon: RiGraduationCapLine,
    tagline: "Empowering Next-Generation Professionals Through Practical Tech Mastery",
    summary:
      "Versatile Academy delivers rigorous, industry-aligned training programs built around live coding sprints, software architecture fundamentals, and modern full-stack workflows. Designed to bridge the gap between academic theory and high-growth technology careers.",
    stats: [
      { label: "Curriculum Alignment", val: "100% Industry Practical" },
      { label: "Delivery Mode", val: "Live Interactive Hybrid" },
      { label: "Hiring Pathways", val: "Corporate Tie-ups & Drives" }
    ],
    modules: [
      {
        title: "Certified Full Stack Web Engineering",
        desc: "Master modern web development spanning React, Node.js, Express, MongoDB, PostgreSQL, and modern TypeScript.",
        highlights: ["Frontend state architecture & Tailwind CSS", "RESTful & GraphQL API engineering", "Database indexing & authentication protocols"]
      },
      {
        title: "Data Analytics, AI & Machine Learning Bootcamps",
        desc: "Hands-on data workflows utilizing Python, Pandas, Scikit-Learn, TensorFlow, and modern LLM application integrations.",
        highlights: ["Data wrangling & exploratory analysis", "Predictive modeling & supervised algorithms", "Generative AI API integrations & prompt engineering"]
      },
      {
        title: "Cloud Infrastructure & DevOps Fundamentals",
        desc: "Learn modern containerization, CI/CD automation pipelines, and scalable cloud architectures on AWS & Docker.",
        highlights: ["Container deployment with Docker", "GitHub Actions CI/CD workflows", "Serverless cloud functions & microservices"]
      },
      {
        title: "Corporate Upskilling & Team Workshops",
        desc: "Customized technical curriculum designed for corporate engineering teams to transition into modern cloud and AI stacks.",
        highlights: ["Domain-specific curriculum co-design", "Live coding assessments & benchmarks", "Hands-on sprint simulations"]
      }
    ],
    deliverablesDetailed: [
      { name: "Industry-Recognized Certification", desc: "Verifiable digital credential with unique student verification ID." },
      { name: "Complete Course Repositories & Study Notes", desc: "Lifelong access to documented codebases, boilerplate starters, and lecture slides." },
      { name: "Capstone Project Codebase", desc: "Production-ready application hosted live on cloud with automated CI/CD." },
      { name: "Alumni Network & Hiring Portal Access", desc: "Direct referral introductions and invitation to exclusive alumni workshops." }
    ],
    audience: {
      students: {
        title: "Students & Job Seekers",
        desc: "Gain hands-on coding skills, build a stand-out GitHub portfolio, and prepare for competitive corporate hiring drives."
      },
      startups: {
        title: "Startups & Emerging Founders",
        desc: "Rapidly onboard junior engineering talent on production-grade web frameworks without long ramp-up cycles."
      },
      enterprises: {
        title: "Enterprises & Corporate Teams",
        desc: "Upskill entire technical cohorts in contemporary frameworks to modernize legacy architectures smoothly."
      }
    },
    timeline: [
      { phase: "01", title: "Foundations & Environment Setup", duration: "Weeks 1 - 2", desc: "Core computer science fundamentals, git setup, and modern developer tooling." },
      { phase: "02", title: "Intensive Framework Sprints", duration: "Weeks 3 - 6", desc: "Deep dive into frontend & backend architectures with daily hands-on problem sets." },
      { phase: "03", title: "Capstone Project Engineering", duration: "Weeks 7 - 10", desc: "Building a complex real-world application under the supervision of senior tech leads." },
      { phase: "04", title: "Code Audit, Certification & Placements", duration: "Weeks 11 - 12", desc: "Final codebase review, credential issuance, and corporate interview scheduling." }
    ],
    faqs: [
      {
        q: "Are the certifications recognized by corporate hiring partners?",
        a: "Yes. JVS Versatile Academy certificates carry official accreditation recognized by our corporate network and recruitment partners across South India."
      },
      {
        q: "Can non-technical students join this program?",
        a: "Absolutely. Our beginner-friendly onboarding tracks are designed to build problem-solving and programming fundamentals from the ground up."
      },
      {
        q: "Are classes conducted online or in person?",
        a: "We offer both interactive in-person sessions at our Visakhapatnam center as well as live virtual interactive classrooms with screen-share mentorship."
      },
      {
        q: "Is placement support provided upon completion?",
        a: "Yes. All enrolled learners receive resume restructuring, mock technical interviews, and direct referral opportunities with hiring partners."
      }
    ]
  },

  "internships-projects": {
    id: "internships-projects",
    number: "02",
    title: "INTERNSHIPS & PROJECTS",
    division: "Versatile Academy Vertical",
    category: "Education & Careers",
    accent: "#60a5fa",
    tagBg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.35)",
    icon: RiFolderSharedLine,
    tagline: "Bridging Academic Knowledge with Verifiable Real-World Project Execution",
    summary:
      "Our internship and live capstone program immerses students into genuine software engineering sprints. Participants solve real business challenges, participate in pull request code reviews, and leave with verifiable project credentials that impress technical hiring managers.",
    stats: [
      { label: "Internship Duration", val: "1 to 6 Months Tracks" },
      { label: "Mentorship", val: "1-on-1 Code Reviews" },
      { label: "Outcome", val: "Verified Experience Letter" }
    ],
    modules: [
      {
        title: "Live Client Feature Sprints",
        desc: "Contribute to functional modules within actual enterprise and startup product ecosystems under supervision.",
        highlights: ["Agile sprint planning & standup meetings", "Git feature branch workflows & pull requests", "Real-world bug triage and issue tracking"]
      },
      {
        title: "Capstone Architecture & Production Standards",
        desc: "Design and implement full-scale capstone applications adhering to clean architecture, MVC patterns, and REST best practices.",
        highlights: ["Database schema modeling & normalization", "Security hardening & environment isolation", "Clean code principles and linting standards"]
      },
      {
        title: "Senior Architect Code Review Mentorship",
        desc: "Receive line-by-line feedback on your code from seasoned software engineers to learn idiomatic coding styles.",
        highlights: ["Performance optimization recommendations", "Security vulnerability checks", "Refactoring and modular design insights"]
      },
      {
        title: "Portfolio Deployment & Recruiter Showcase",
        desc: "Deploy applications with custom domains, SSL certificates, automated testing, and comprehensive README documentation.",
        highlights: ["Live cloud hosting on Vercel/AWS", "Documentation with system diagrams", "Video demo recording guidance"]
      }
    ],
    deliverablesDetailed: [
      { name: "Production GitHub Project Repository", desc: "A clean, well-documented repository showcasing multiple verified commits." },
      { name: "Verified Experience Certificate", desc: "Formal document stating internship duration, role, and key contributions." },
      { name: "Technical Recommendation Letter", desc: "Personalized letter of recommendation for outstanding contributors." },
      { name: "Live Application URL", desc: "Working cloud-hosted web or mobile application ready to share with recruiters." }
    ],
    audience: {
      students: {
        title: "Undergraduate & Graduate Students",
        desc: "Fulfill academic internship credits while building genuine portfolio pieces that set you apart from peer graduates."
      },
      startups: {
        title: "Startup Founders & Labs",
        desc: "Engage vetted student engineering teams on exploratory prototypes and internal tool development."
      },
      enterprises: {
        title: "Enterprises & Corporate Teams",
        desc: "Identify promising intern talent early through structured problem challenges before full-time hiring."
      }
    },
    timeline: [
      { phase: "01", title: "Sprint Onboarding & Project Scope", duration: "Phase 1", desc: "Role assignment, repository access, environment setup, and architecture review." },
      { phase: "02", title: "Active Feature Development Sprints", duration: "Phase 2", desc: "Bi-weekly sprint deliverables, code reviews, and continuous integration testing." },
      { phase: "03", title: "Code Audits & Performance Tuning", duration: "Phase 3", desc: "Addressing PR review comments, optimizing load times, and writing unit tests." },
      { phase: "04", title: "Final Evaluation & Credential Issuance", duration: "Phase 4", desc: "Final demo presentation, verification letter issuance, and LinkedIn credentialing." }
    ],
    faqs: [
      {
        q: "What domains are projects available in?",
        a: "Projects span Full Stack Web, Mobile Apps (React Native/Flutter), Cloud DevOps, Data Analytics, and AI integrations."
      },
      {
        q: "Will I receive an official experience letter?",
        a: "Yes. Every participant successfully completing the required project sprints receives a signed experience certificate with unique verification credentials."
      },
      {
        q: "Does this internship qualify for university academic credit?",
        a: "Yes. Our internship programs meet the regulatory requirements of major engineering universities across Andhra Pradesh."
      },
      {
        q: "How many hours per week are expected?",
        a: "Flexible tracks are available, ranging from 15 to 20 hours/week for part-time students to 40 hours/week for full-time interns."
      }
    ]
  },

  "career-development": {
    id: "career-development",
    number: "03",
    title: "CAREER DEVELOPMENT",
    division: "JVS Placement Hub",
    category: "Education & Careers",
    accent: "#34d399",
    tagBg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.35)",
    icon: RiBriefcase4Line,
    tagline: "Connecting Ambitious Talent with Top Employers Through Systematic Placement Acceleration",
    summary:
      "A complete talent mobility and placement readiness pipeline. We equip candidates with ATS-optimized resumes, intense technical mock interviews, executive communication coaching, and direct access to corporate hiring drives across major IT corridors.",
    stats: [
      { label: "Placement Network", val: "50+ Corporate Tie-ups" },
      { label: "Mock Drills", val: "1-on-1 Senior Tech Reviews" },
      { label: "Resume Standard", val: "95%+ ATS Compatibility" }
    ],
    modules: [
      {
        title: "ATS-Compliant Resume Architecture",
        desc: "Transform your resume into a high-scoring document tailored with role-specific keywords that easily pass corporate ATS parsers.",
        highlights: ["Action-verb impact bullet structuring", "Technical keyword optimization", "Custom layout designs for different sectors"]
      },
      {
        title: "Mock Technical & Coding Interviews",
        desc: "Simulate rigorous live coding rounds with senior engineers who test data structures, system design, and framework internals.",
        highlights: ["Live whiteboarding & algorithmic challenges", "Framework architecture deep dives", "Detailed post-interview feedback scorecards"]
      },
      {
        title: "HR Behavioral & Executive Presence Coaching",
        desc: "Master STAR-method behavioral responses, salary negotiation tactics, and clear communication under interview pressure.",
        highlights: ["STAR framework story development", "Executive pitch & personal branding", "Confidence and articulation drills"]
      },
      {
        title: "Campus & Off-Campus Hiring Drives",
        desc: "Direct interview pipelines with pre-vetted corporate partners hiring for entry-level and experienced engineering positions.",
        highlights: ["Exclusive hiring pool access", "Pre-screened referral profiles", "Continuous post-interview debriefs"]
      }
    ],
    deliverablesDetailed: [
      { name: "Custom ATS-Engineered Resume & Cover Letter", desc: "Editable and PDF versions crafted specifically for your target job profile." },
      { name: "Personal LinkedIn Profile Elevation Blueprint", desc: "Optimized headline, about section, featured projects, and networking strategies." },
      { name: "Mock Interview Performance Scorecard", desc: "Comprehensive evaluation report detailing technical strengths and growth areas." },
      { name: "Corporate Interview Opportunities", desc: "Direct referral introductions to hiring managers and recruitment drives." }
    ],
    audience: {
      students: {
        title: "Final Year Students & Fresh Graduates",
        desc: "Overcome fear of technical and HR rounds and secure your first high-paying software engineering position."
      },
      startups: {
        title: "Career Switchers & Working Pros",
        desc: "Transition smoothly from non-tech or legacy roles into modern web, cloud, and data engineering careers."
      },
      enterprises: {
        title: "Corporate Talent Acquisition Teams",
        desc: "Partner with JVS to hire thoroughly screened, pre-interviewed candidates ready to contribute immediately."
      }
    },
    timeline: [
      { phase: "01", title: "Profile Audit & Target Role Strategy", duration: "Week 1", desc: "Skills inventory, compensation expectation alignment, and market analysis." },
      { phase: "02", title: "Resume Reconstruction & LinkedIn Makeover", duration: "Week 2", desc: "Drafting high-converting resumes and updating online professional presence." },
      { phase: "03", title: "Intensive Mock Interview Drills", duration: "Weeks 3 - 4", desc: "3 full rounds of technical and HR mock sessions with recorded reviews." },
      { phase: "04", title: "Corporate Drives & Placement Sprints", duration: "Ongoing", desc: "Connecting with hiring partners, handling offer negotiations, and onboarding." }
    ],
    faqs: [
      {
        q: "What types of companies hire through JVS Placement Hub?",
        a: "Our network includes leading IT service firms, fast-scaling venture-backed startups, SaaS product companies, and boutique consultancies."
      },
      {
        q: "Do you assist with salary negotiation?",
        a: "Yes. Our placement advisors provide one-on-one guidance on reviewing offer letters, equity components, and compensation benchmarks."
      },
      {
        q: "How many mock interviews are included?",
        a: "Each candidate participates in at least 3 rigorous mock rounds with senior industry mentors, with additional drill sessions as needed."
      },
      {
        q: "Is placement support guaranteed?",
        a: "We provide dedicated placement assistance, interview opportunities, and referrals until candidates secure suitable offers."
      }
    ]
  },

  "technology-innovation": {
    id: "technology-innovation",
    number: "04",
    title: "TECHNOLOGY & INNOVATION",
    division: "JVS Tech Division",
    category: "Technology & Engineering",
    accent: "#818cf8",
    tagBg: "rgba(129,140,248,0.12)",
    border: "rgba(129,140,248,0.35)",
    icon: RiCodeSSlashLine,
    tagline: "Architecting Resilient Software Systems & Scalable Digital Products",
    summary:
      "JVS Tech engineers modern web platforms, mobile applications, cloud infrastructures, and enterprise software systems. From rapid MVP prototyping for funded startups to high-throughput cloud architectures for enterprises, we build software designed for long-term reliability and speed.",
    stats: [
      { label: "IP Rights", val: "100% Client Codebase Ownership" },
      { label: "Core Stacks", val: "React, Node, Python, Cloud" },
      { label: "Architecture", val: "Microservices & Serverless" }
    ],
    modules: [
      {
        title: "Custom Web & SaaS Application Engineering",
        desc: "Modern multi-tenant web applications built using React, Next.js, TypeScript, Node.js, and performant SQL/NoSQL databases.",
        highlights: ["Scalable frontend design systems", "Role-based access control & multi-tenancy", "Blazing-fast load times & SEO compliance"]
      },
      {
        title: "Native & Cross-Platform Mobile Apps",
        desc: "Polished iOS and Android applications developed using Flutter and React Native for fluid 60fps performance.",
        highlights: ["Native device API integrations", "Offline caching & background synchronization", "App Store & Play Store publishing pipelines"]
      },
      {
        title: "Cloud Infrastructure, DevOps & Containerization",
        desc: "Reliable, fault-tolerant cloud setups on AWS, Azure, and Google Cloud with Docker, Kubernetes, and automated CI/CD.",
        highlights: ["Infrastructure as code (IaC)", "Automated zero-downtime deployment pipelines", "Auto-scaling & high-availability clusters"]
      },
      {
        title: "API Engineering & Cyber Security Hardening",
        desc: "Robust REST & GraphQL APIs engineered with rate limiting, encryption, OAuth2 authentication, and security audit readiness.",
        highlights: ["Third-party payment & ERP integrations", "Data encryption in transit and at rest", "Penetration testing & OWASP compliance"]
      }
    ],
    deliverablesDetailed: [
      { name: "Full Production-Grade Codebase", desc: "Well-documented, fully modular source code with 100% client intellectual property ownership." },
      { name: "Cloud Infrastructure Architecture", desc: "Automated deployment pipelines and server configurations hosted in client accounts." },
      { name: "UI/UX Design System & Assets", desc: "Interactive Figma components, styling guidelines, and responsive design systems." },
      { name: "API Documentation & Postman Suites", desc: "Interactive documentation for seamless developer handoff and future integrations." }
    ],
    audience: {
      students: {
        title: "Startup Founders & Innovators",
        desc: "Turn your visionary product concepts into robust, investor-ready MVPs with modern architecture and sleek design."
      },
      startups: {
        title: "Growing Mid-Market Companies",
        desc: "Automate manual workflows, build internal portals, or upgrade legacy software into modern web applications."
      },
      enterprises: {
        title: "Large Enterprises & Institutions",
        desc: "Scale mission-critical IT infrastructure, implement secure API gateways, and modernize cloud deployments."
      }
    },
    timeline: [
      { phase: "01", title: "Discovery & Technical Architecture Blueprint", duration: "Sprint 1", desc: "Scope definition, database schema modeling, user journeys, and wireframing." },
      { phase: "02", title: "Core Agile Development Sprints", duration: "Sprints 2 - 4", desc: "Iterative feature engineering with weekly staging builds and feedback loops." },
      { phase: "03", title: "QA Testing, Security & Performance Audits", duration: "Sprint 5", desc: "End-to-end regression testing, security scans, and database query optimization." },
      { phase: "04", title: "Production Deployment & Handoff", duration: "Sprint 6", desc: "DNS cutover, live deployment, documentation handoff, and post-launch warranty." }
    ],
    faqs: [
      {
        q: "Who owns the intellectual property and source code?",
        a: "You do. 100% of the code, design assets, and architecture belong exclusively to your organization upon project completion."
      },
      {
        q: "Do you offer post-launch maintenance and support?",
        a: "Yes. We offer flexible SLA-backed maintenance packages covering bug fixes, server monitoring, security updates, and feature enhancements."
      },
      {
        q: "Can you build on top of our existing code repository?",
        a: "Yes. Our team conducts a thorough codebase and architecture audit first, identifying technical debt and charting a smooth upgrade roadmap."
      },
      {
        q: "How do you manage project communication?",
        a: "We work in agile 2-week sprints with dedicated Slack/WhatsApp channels, Jira/Trello boards, and weekly live video review demos."
      }
    ]
  },

  "digital-solutions": {
    id: "digital-solutions",
    number: "05",
    title: "DIGITAL SOLUTIONS",
    division: "JVS Digital Engine",
    category: "Technology & Engineering",
    accent: "#f59e0b",
    tagBg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.35)",
    icon: RiMegaphoneLine,
    tagline: "Data-Driven Performance Marketing, Organic Search Domination & Brand Strategy",
    summary:
      "Transforming digital visibility into measurable customer acquisition. JVS Digital Solutions combines technical SEO, targeted paid media campaigns (Google, Meta, LinkedIn), conversion rate optimization, and brand design systems to scale consumer and B2B engagement.",
    stats: [
      { label: "Targeting", val: "High-Intent B2B & B2C" },
      { label: "Reporting", val: "Real-time ROI Dashboards" },
      { label: "Approach", val: "Data-driven & Conversion-led" }
    ],
    modules: [
      {
        title: "Targeted Performance Advertising",
        desc: "High-converting paid acquisition across Google Search, Performance Max, Meta Ads, and LinkedIn Sponsored Content.",
        highlights: ["Audience segmentation & lookalike modeling", "Creative A/B multivariate testing", "Strict CAC and ROAS optimization"]
      },
      {
        title: "Technical SEO & High-Intent Keyword Domination",
        desc: "Comprehensive on-page, off-page, and technical SEO strategies designed to capture organic search traffic with commercial intent.",
        highlights: ["Core Web Vitals & speed optimizations", "Structured data & schema markup", "Content architecture & authoritative link acquisition"]
      },
      {
        title: "Cohesive Corporate Brand Identity Systems",
        desc: "Design memorable visual identities, modern brand guidelines, marketing collateral, and digital presence systems.",
        highlights: ["Logo design & brand style guides", "Social media templates & typography systems", "Marketing collateral & pitch presentations"]
      },
      {
        title: "Conversion Funnel Optimization & Social Growth",
        desc: "Engineer high-converting landing pages, email marketing automation, and strategic social content calendars.",
        highlights: ["Heatmap tracking & user friction audits", "Automated email nurture sequences", "Content scheduling & audience engagement"]
      }
    ],
    deliverablesDetailed: [
      { name: "Live Performance Analytics Dashboard", desc: "Transparent 24/7 dashboard tracking impressions, leads, conversions, and ad spend." },
      { name: "Corporate Brand Identity Kit", desc: "Vector logos, typography files, color palettes, and comprehensive brand guidelines." },
      { name: "Technical SEO Audit & Strategy Playbook", desc: "Detailed breakdown of keyword rankings, technical fixes, and competitor gap analysis." },
      { name: "Ad Creative & Copywriting Library", desc: "High-resolution graphic assets, video ads, and tested marketing copy ready to deploy." }
    ],
    audience: {
      students: {
        title: "Startups Launching New Offerings",
        desc: "Gain immediate market validation, acquire early adopters, and build a cohesive brand identity from day one."
      },
      startups: {
        title: "Established Mid-Sized Businesses",
        desc: "Outrank competitors on Google search and reduce customer acquisition costs through disciplined paid campaigns."
      },
      enterprises: {
        title: "Corporate & Enterprise Brands",
        desc: "Maintain multi-channel brand consistency, drive qualified B2B leads, and elevate digital market share."
      }
    },
    timeline: [
      { phase: "01", title: "Market Research & Competitor Audit", duration: "Week 1", desc: "Auditing current assets, competitor ad strategies, and keyword opportunities." },
      { phase: "02", title: "Creative Production & Funnel Setup", duration: "Week 2", desc: "Designing ad creatives, landing pages, tracking pixels, and conversion events." },
      { phase: "03", title: "Campaign Launch & Controlled Scaling", duration: "Weeks 3 - 4", desc: "Deploying ad sets, testing audiences, and monitoring early conversion rates." },
      { phase: "04", title: "Continuous Optimization & SEO Growth", duration: "Ongoing", desc: "Iterative ad refinement, monthly SEO improvements, and executive reporting." }
    ],
    faqs: [
      {
        q: "What ad budget is required to get started?",
        a: "We structure campaigns to fit varying stages—from lean exploratory budgets to multi-lakh monthly enterprise ad spends."
      },
      {
        q: "How soon can we expect results from SEO?",
        a: "Technical fixes and on-page improvements show indexing gains within 2-4 weeks, while competitive organic rankings typically compound over 3-6 months."
      },
      {
        q: "Do you design ad graphics and write marketing copy?",
        a: "Yes. Our team handles complete end-to-end creative production including visual design, motion ads, and high-converting copy."
      },
      {
        q: "How frequently will we receive performance reports?",
        a: "Clients have access to live 24/7 dashboards, supplemented by weekly metric digests and comprehensive monthly executive review calls."
      }
    ]
  },

  "business-consulting": {
    id: "business-consulting",
    number: "06",
    title: "BUSINESS & CONSULTING",
    division: "VexoBiz Vertical",
    category: "Startup & Consulting",
    accent: "#c084fc",
    tagBg: "rgba(192,132,252,0.12)",
    border: "rgba(192,132,252,0.35)",
    icon: RiBuilding3Line,
    tagline: "From Idea to Impact: End-to-End Startup Incubation, Company Incorporation & Advisory",
    summary:
      "Led by Vahid Shaik under the VexoBiz banner, our Business & Consulting division helps entrepreneurs navigate the complex journey from nascent idea to compliant, legally incorporated, investor-ready venture. We handle company incorporation, tax compliance, financial modeling, and growth strategy.",
    stats: [
      { label: "Ventures Incubated", val: "50+ Successful Founders" },
      { label: "Compliance Coverage", val: "100% Legal & Regulatory" },
      { label: "Turnaround", val: "Fast-Track Government Filings" }
    ],
    modules: [
      {
        title: "Company Incorporations & Legal Structuring",
        desc: "End-to-end registration for Private Limited, LLP, One Person Company (OPC), Section 8, and MSME entities.",
        highlights: ["Name approval & digital signatures (DSC)", "Memorandum & Articles of Association (MoA/AoA)", "Certificate of Incorporation issuance"]
      },
      {
        title: "Tax, GST & Regulatory Statutory Compliance",
        desc: "Complete registration and ongoing compliance for GST, Trademark protection, ISO certifications, and Startup India recognition.",
        highlights: ["GST registration & tax filing workflows", "Trademark search & IP protection filings", "Startup India seed fund readiness"]
      },
      {
        title: "Business Architecture & Financial Modeling",
        desc: "Structured business plan creation, unit economics modeling, cash flow forecasting, and operational roadmaps.",
        highlights: ["Business model canvas definition", "5-year financial projection models", "Pricing architecture and profit margin analysis"]
      },
      {
        title: "Investor Pitch Deck & Incubation Mentorship",
        desc: "High-impact presentation decks engineered to capture investor attention, paired with 1-on-1 pitch practice.",
        highlights: ["Problem-solution narrative structuring", "Market sizing (TAM, SAM, SOM) validation", "Angel & VC pitch coaching"]
      }
    ],
    deliverablesDetailed: [
      { name: "Government Certificate of Incorporation", desc: "Official ministry certification with PAN, TAN, and registered CIN details." },
      { name: "GST & MSME Registration Documents", desc: "Active tax credentials enabling corporate banking and MSME benefits." },
      { name: "Investor-Ready Pitch Deck Document", desc: "Professionally designed slide deck formatted for investor evaluation." },
      { name: "12-Month Compliance Calendar", desc: "Step-by-step roadmap outlining annual filings, audits, and statutory dates." }
    ],
    audience: {
      students: {
        title: "First-Time Startup Founders",
        desc: "Turn your business idea into a legally compliant, recognized corporate entity without getting lost in legal jargon."
      },
      startups: {
        title: "Growing Small Businesses & LLPs",
        desc: "Transition from unorganized proprietorships to formal corporate structures to unlock bank loans and vendor contracts."
      },
      enterprises: {
        title: "Enterprises Exploring Subsidiary Spin-Offs",
        desc: "Establish new branch entities, handle trademark filings, and structure corporate joint ventures smoothly."
      }
    },
    timeline: [
      { phase: "01", title: "Entity Consultation & Document Prep", duration: "Days 1 - 3", desc: "Selecting business structure, obtaining DSC, and submitting name approval." },
      { phase: "02", title: "Government Submission & Incorporation", duration: "Days 4 - 8", desc: "Filing SPICe+ forms with MCA, generating PAN, TAN, and Articles of Association." },
      { phase: "03", title: "Tax Registrations & Bank Account Setup", duration: "Days 9 - 14", desc: "GST application, MSME Udyam registration, and corporate bank introduction." },
      { phase: "04", title: "Business Strategy & Growth Blueprint", duration: "Month 1+", desc: "Drafting pitch deck, financial roadmap, and compliance calendar management." }
    ],
    faqs: [
      {
        q: "Which company structure is best for my business?",
        a: "Our VexoBiz advisors analyze your funding plans, liability considerations, and co-founder structure to recommend between a Private Limited Company and an LLP."
      },
      {
        q: "How fast can my company be incorporated?",
        a: "Once all required identity documents and signatures are submitted, typical incorporation completes within 7 to 14 business days."
      },
      {
        q: "Do you handle annual ROC and tax filings?",
        a: "Yes. We offer annual compliance retainers covering ROC filings, Director KYC, GST returns, and audited financial filings."
      },
      {
        q: "Can you help our startup apply for Startup India benefits?",
        a: "Yes. We assist with DPIIT recognition applications, tax exemption eligibility, and accessing government incubation grants."
      }
    ]
  },

  "events-experiences": {
    id: "events-experiences",
    number: "07",
    title: "EVENTS & EXPERIENCES",
    division: "Jyoora Events Division",
    category: "Events & Hospitality",
    accent: "#fb923c",
    tagBg: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.35)",
    icon: RiSparklingFill,
    tagline: "Crafting Unforgettable Corporate Summits, Celebrations & Live Productions",
    summary:
      "Jyoora Events is the premier event planning and production arm of JVS. We conceptualize, design, and execute high-profile corporate conferences, technical hackathons, product launches, cultural celebrations, and grand ceremonies with theatrical production value and white-glove hospitality.",
    stats: [
      { label: "Production Scale", val: "50 to 5,000+ Guests" },
      { label: "Execution", val: "Zero-Latency Live Staging" },
      { label: "Hospitality", val: "Dedicated VIP Concierge" }
    ],
    modules: [
      {
        title: "Corporate Summits, Conclaves & Hackathons",
        desc: "End-to-end planning for industry summits, annual general meetings, tech hackathons, and multi-day conferences.",
        highlights: ["Agenda structuring & keynote curation", "Stage architecture & synchronized A/V lighting", "Digital attendee registration & check-in badges"]
      },
      {
        title: "Product Launches & VIP Press Activations",
        desc: "Dramatic, media-worthy reveals designed to generate viral excitement for new software, physical products, or brand milestones.",
        highlights: ["Cinematic reveal staging & countdowns", "Press kit distribution & media coordination", "Influencer and executive hospitality"]
      },
      {
        title: "Concert-Grade Sound, Stage & Lighting Production",
        desc: "State-of-the-art line array audio, high-resolution curved LED video walls, intelligent lighting fixtures, and scenic stage builds.",
        highlights: ["Acoustic engineering & sound balancing", "LED backdrop visual content loops", "Pyrotechnics & special visual effects"]
      },
      {
        title: "VIP Hospitality, Protocol & Crowd Management",
        desc: "Flawless guest logistics, executive liaison teams, gourmet catering management, and municipal security compliance.",
        highlights: ["Executive chauffeur & stay coordination", "Multi-tier security & crowd control", "Curated banquet & refreshment management"]
      }
    ],
    deliverablesDetailed: [
      { name: "Complete Production Master Run-Sheet", desc: "Minute-by-minute timeline coordinating stage cues, lighting changes, and speaker entrances." },
      { name: "Immersive Stage & A/V Architecture", desc: "Custom designed stage layout, LED video backdrop, and premium sound reinforcement." },
      { name: "Cinematic 4K Video Reel & Photography", desc: "Professionally edited recap video, speaker highlights, and full-resolution photo archive." },
      { name: "On-Site Guest Registration & Security Suite", desc: "Automated badge printing, QR code validation, and trained usher logistics." }
    ],
    audience: {
      students: {
        title: "Colleges & Educational Institutions",
        desc: "Host electric youth festivals, technical hackathons, and graduation ceremonies that inspire your student body."
      },
      startups: {
        title: "Startups & High-Growth Companies",
        desc: "Unveil your product, celebrate funding rounds, or host high-energy demo days with world-class production value."
      },
      enterprises: {
        title: "Enterprises & Corporate Groups",
        desc: "Deliver memorable annual summits, award galas, and investor conferences that reinforce corporate prestige."
      }
    },
    timeline: [
      { phase: "01", title: "Concept Design & Venue Finalization", duration: "Phase 1", desc: "Theme conceptualization, venue scouting, budget formulation, and date locking." },
      { phase: "02", title: "A/V Engineering & Vendor Procurement", duration: "Phase 2", desc: "Stage 3D renders, sound & LED logistics, speaker management, and permits." },
      { phase: "03", title: "Setup, Soundchecks & Rehearsals", duration: "Phase 3", desc: "Stage installation, technical audio/video testing, and full run-through rehearsals." },
      { phase: "04", title: "Live Show Calling & Media Delivery", duration: "Phase 4", desc: "Flawless live execution, guest hospitality, and post-event cinematic media delivery." }
    ],
    faqs: [
      {
        q: "What event sizes can Jyoora Events accommodate?",
        a: "We produce gatherings of all magnitudes—from executive roundtables of 50 guests to massive tech summits and festivals with 5,000+ attendees."
      },
      {
        q: "Do you manage municipal permissions and event security?",
        a: "Yes. We coordinate required local police clearances, sound permissions, fire safety compliance, and professional bouncer security."
      },
      {
        q: "Can you assist with celebrity or artist management?",
        a: "Yes. Our events division coordinates contracts, riders, sound checks, and hospitality for keynote speakers, performers, and anchors."
      },
      {
        q: "How early should we start planning our corporate event?",
        a: "For large summits, we recommend starting 4 to 8 weeks in advance; intimate corporate events can be mobilized in 10 to 14 days."
      }
    ]
  },

  "growth-opportunities": {
    id: "growth-opportunities",
    number: "08",
    title: "GROWTH & OPPORTUNITIES",
    division: "Strategic Expansion & Stays",
    category: "Startup & Consulting",
    accent: "#38bdf8",
    tagBg: "rgba(56,189,248,0.12)",
    border: "rgba(56,189,248,0.35)",
    icon: RiLineChartLine,
    tagline: "Unlocking B2B Alliances, Regional Market Expansion & Executive Hospitality",
    summary:
      "A strategic growth catalyst connecting organizations to high-value market opportunities across coastal Andhra Pradesh and South India. Incorporating strategic B2B alliance formulation, commercial synergy matchmaking, and executive corporate retreat living via Signature Stays.",
    stats: [
      { label: "B2B Matchmaking", val: "Curated Industry Alliances" },
      { label: "Expansion Scope", val: "Regional & Cross-Sector" },
      { label: "Hospitality Tie-in", val: "Signature Stays Living" }
    ],
    modules: [
      {
        title: "B2B Commercial Alliances & Joint Ventures",
        desc: "Formulate strategic distribution, co-selling, and technology partnership agreements with established industry leaders.",
        highlights: ["Partner capability mapping", "Deal structure & commercial term sheet negotiation", "Joint go-to-market execution plans"]
      },
      {
        title: "Regional Market Entry & Scaling Strategy",
        desc: "Tailored market entry playbooks for companies expanding their products or training offerings into coastal Andhra Pradesh.",
        highlights: ["Local market demand & competitor mapping", "Channel partner network introduction", "Regulatory and regional operational setup"]
      },
      {
        title: "Signature Stays: Executive Retreats & Living",
        desc: "Curated premium accommodations and executive corporate retreats designed for leadership offsites, strategy summits, and visiting teams.",
        highlights: ["Boutique corporate villas & serviced living", "Dedicated concierge & high-speed workstation setups", "Private meeting spaces with gourmet hospitality"]
      },
      {
        title: "Cross-Sector Synergy Architecture",
        desc: "Harness the complete JVS network across Education, Tech, Events, and Startup Incubation to multiply business opportunities.",
        highlights: ["Talent pipeline access through Versatile Academy", "Software engineering support via JVS Tech", "Event production synergy with Jyoora Events"]
      }
    ],
    deliverablesDetailed: [
      { name: "Market Expansion Playbook", desc: "Data-backed blueprint analyzing market entry routes, revenue projections, and partner targets." },
      { name: "Formal B2B Partnership Agreements", desc: "Legally vetted contracts and commercial joint venture frameworks." },
      { name: "Executive Retreat Concierge Package", desc: "Custom reservation arrangements with Signature Stays for executive offsites and stays." },
      { name: "Synergy & ROI Assessment Report", desc: "Detailed analysis of revenue and efficiency gains derived from cross-sector integration." }
    ],
    audience: {
      students: {
        title: "Scaling Venture Founders",
        desc: "Accelerate your growth by partnering with complementary businesses and accessing established enterprise distribution channels."
      },
      startups: {
        title: "National & Regional Enterprises",
        desc: "Expand your operational footprint into Visakhapatnam and coastal AP with local market guidance."
      },
      enterprises: {
        title: "Corporate Leadership Teams",
        desc: "Host transformative leadership offsites and executive retreats that combine strategic planning with premier hospitality."
      }
    },
    timeline: [
      { phase: "01", title: "Synergy Audit & Opportunity Scoping", duration: "Phase 1", desc: "Evaluating growth bottlenecks, untapped market verticals, and alliance targets." },
      { phase: "02", title: "Partner Matchmaking & Terms Structuring", duration: "Phase 2", desc: "Introducing stakeholders, conducting commercial discussions, and drafting agreements." },
      { phase: "03", title: "Pilot Rollout & Milestone Validation", duration: "Phase 3", desc: "Launching initial joint initiatives and validating customer acquisition metrics." },
      { phase: "04", title: "Long-Term Expansion & Retreat Integration", duration: "Phase 4", desc: "Institutionalizing the partnership framework and hosting executive strategy offsites." }
    ],
    faqs: [
      {
        q: "How does JVS facilitate B2B partnerships?",
        a: "Through our multi-vertical ecosystem and extensive executive relationships spanning industry, academia, and regional business associations."
      },
      {
        q: "What is the connection between Growth Opportunities and Signature Stays?",
        a: "Signature Stays is JVS's hospitality division, providing curated executive accommodations and meeting venues for leadership retreats, visiting executives, and strategy conclaves."
      },
      {
        q: "Can non-Indian companies use this service for entering India?",
        a: "Yes. We offer regional market navigation, local talent acquisition support, and entity compliance guidance for external companies."
      },
      {
        q: "How are partnership results measured?",
        a: "Every growth engagement is structured around concrete KPIs: signed partner contracts, pipeline revenue, and operational velocity."
      }
    ]
  }
};

export default function ServiceDetailPage({ onOpenBrochure }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // Match service safely with fallback
  const service = serviceDetailsRegistry[id];

  // Accordion open state for FAQs
  const [openFaq, setOpenFaq] = useState(0);

  // Quick interactive inquiry form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    scope: '',
    timeline: 'Immediate (Within 2 weeks)'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  // WhatsApp click handler
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello JVS Team, I would like to inquire about ${service ? service.title : 'your services'}. Name: ${formData.name || 'Visitor'}. Scope: ${formData.scope || 'General consultation request'}`
    );
    window.open(`https://wa.me/919160030342?text=${text}`, '_blank');
  };

  // Explore other services list (excluding current)
  const otherServices = useMemo(() => {
    return Object.values(serviceDetailsRegistry)
      .filter((s) => s.id !== id)
      .slice(0, 3);
  }, [id]);

  // Safe fallback if service not found
  if (!service) {
    return (
      <div className="min-h-screen bg-[#020509] text-slate-100 flex items-center justify-center px-4 py-24">
        <div 
          className="max-w-lg w-full rounded-3xl p-8 sm:p-10 text-center space-y-5 border border-cyan-500/30"
          style={{
            background: 'linear-gradient(135deg, rgba(8,16,40,0.95) 0%, rgba(3,7,20,0.98) 100%)',
            boxShadow: '0 25px 50px -15px rgba(0,0,0,0.8)'
          }}
        >
          <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center text-2xl font-black">
            404
          </div>
          <h2 className="text-2xl font-bold font-heading text-white">Service Stream Not Found</h2>
          <p className="text-xs sm:text-sm text-slate-300">
            The service stream you are looking for may have been updated or moved. You can browse all 8 active streams on our services catalog.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/services"
              className="shine-hover px-5 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
            >
              <RiArrowLeftLine className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>
            <Link
              to="/"
              className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 relative">
      
      {/* ─── Breadcrumbs & Dynamic Hero Section ─── */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-18 overflow-hidden">
        {/* Glow Accents */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[140px] opacity-35"
          style={{ background: `radial-gradient(circle, ${service.accent}40 0%, rgba(37,99,235,0.2) 60%, transparent 80%)` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-medium mb-6">
            <Link to="/" className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors">
              <RiArrowLeftLine className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-600">/</span>
            <Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <span>Services</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-300 font-semibold line-clamp-1">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                  style={{
                    background: service.tagBg,
                    border: `1px solid ${service.border}`,
                    color: service.accent
                  }}
                >
                  STREAM {service.number} • {service.division}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                  {service.category}
                </span>
              </div>

              {/* Title */}
              <h1 
                className="font-heading font-black text-white leading-tight"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}
              >
                {service.title}
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-medium text-cyan-300 font-heading">
                “{service.tagline}”
              </p>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal max-w-3xl pt-1">
                {service.summary}
              </p>

              {/* Quick Hero Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                {service.stats.map((st, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-xl bg-[#050b1e]/90 border border-slate-800"
                  >
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{st.label}</p>
                    <p className="text-sm font-bold font-heading text-white mt-0.5" style={{ color: service.accent }}>
                      {st.val}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#inquiry-card"
                  className="shine-hover flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-xl transition-all cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                >
                  <RiSendPlaneFill className="w-4 h-4 text-cyan-200" />
                  <span>Request Service Proposal</span>
                </a>

                <button
                  onClick={handleDirectWhatsApp}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 transition-all cursor-pointer"
                  style={{
                    background: 'rgba(6,30,20,0.85)',
                    border: '1px solid rgba(16,185,129,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16,185,129,0.6)';
                    e.currentTarget.style.background = 'rgba(8,40,25,0.95)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)';
                    e.currentTarget.style.background = 'rgba(6,30,20,0.85)';
                  }}
                >
                  <RiWhatsappFill className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp Inquiry</span>
                </button>

                <button
                  onClick={onOpenBrochure}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-300 transition-all cursor-pointer"
                  style={{
                    background: 'rgba(8,16,40,0.85)',
                    border: '1px solid rgba(56,189,248,0.3)'
                  }}
                >
                  <RiFilePaperLine className="w-4 h-4 text-cyan-400" />
                  <span>Download Brochure</span>
                </button>
              </div>

            </div>

            {/* Right Column: Visual Stream Icon Card */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center">
              <div 
                className="w-full rounded-3xl p-8 flex flex-col items-center text-center space-y-4"
                style={{
                  background: 'linear-gradient(145deg, rgba(8,16,40,0.96) 0%, rgba(3,7,20,0.98) 100%)',
                  border: `1px solid ${service.border}`,
                  boxShadow: `0 20px 50px -15px ${service.accent}20`
                }}
              >
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: service.tagBg,
                    border: `1px solid ${service.border}`,
                    color: service.accent
                  }}
                >
                  <ServiceIcon className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-3xl font-black font-heading" style={{ color: service.accent }}>
                    {service.number}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {service.division}
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-slate-800/80 text-left space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Governance:</span>
                    <span className="text-white font-semibold">JVS Corporate Desk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-cyan-300 font-semibold">Visakhapatnam, AP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Support Mode:</span>
                    <span className="text-emerald-400 font-semibold">Dedicated Lead</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Core Modules & Capabilities ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#030714' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
              style={{ background: service.tagBg, border: `1px solid ${service.border}`, color: service.accent }}
            >
              Operational Scope
            </span>

            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              Core Modules &amp; Capabilities
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              A comprehensive breakdown of specific functional components, toolsets, and engineering practices delivered under this service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.modules.map((m, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#050b1e]/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md"
                      style={{ background: `${service.accent}15`, color: service.accent }}
                    >
                      Module 0{idx + 1}
                    </span>
                    <RiFlashlightFill className="w-4 h-4" style={{ color: service.accent }} />
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Features Included:
                  </span>
                  {m.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <RiCheckDoubleLine className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: service.accent }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Tangible Deliverables ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
              style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399' }}
            >
              Verified Outputs
            </span>

            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              Tangible Client Deliverables
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Concrete artifacts, verified documentation, and production assets provided to you upon milestone completion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.deliverablesDetailed.map((deliv, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#040818]/90 border border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <RiCheckDoubleLine className="w-5 h-5" />
                  </div>

                  <h4 className="font-heading font-bold text-sm text-white">
                    {deliv.name}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {deliv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] font-semibold text-emerald-400 flex items-center gap-1.5">
                  <RiShieldCheckLine className="w-3.5 h-3.5" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Industry Use Cases / Target Audience ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#030714' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
              style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.3)', color: '#818cf8' }}
            >
              Who Benefits Most
            </span>

            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              Industry Use Cases &amp; Target Personas
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              How this specific service creates distinct, measurable value across our three primary audience segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Persona 1: Students */}
            <div className="p-6 rounded-2xl bg-[#050b1e]/90 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
                01 • Talent &amp; Learners
              </span>
              <h3 className="font-heading font-bold text-base text-white">
                {service.audience.students.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {service.audience.students.desc}
              </p>
            </div>

            {/* Persona 2: Startups */}
            <div className="p-6 rounded-2xl bg-[#050b1e]/90 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block">
                02 • Startups &amp; Founders
              </span>
              <h3 className="font-heading font-bold text-base text-white">
                {service.audience.startups.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {service.audience.startups.desc}
              </p>
            </div>

            {/* Persona 3: Enterprises */}
            <div className="p-6 rounded-2xl bg-[#050b1e]/90 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                03 • Corporate Enterprises
              </span>
              <h3 className="font-heading font-bold text-base text-white">
                {service.audience.enterprises.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {service.audience.enterprises.desc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Step-by-Step Delivery Timeline ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
              style={{ background: service.tagBg, border: `1px solid ${service.border}`, color: service.accent }}
            >
              Execution Schedule
            </span>

            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              Step-by-Step Delivery Timeline
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Structured 4-phase rollout ensuring transparent progress tracking and clear milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.timeline.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#050b1e]/90 border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                    Phase {step.phase}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {step.duration}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-sm text-white">
                  {step.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Service-Specific FAQ Accordion ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#030714' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="space-y-3 mb-10 text-center sm:text-left">
            <span 
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block"
              style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.3)', color: '#38bdf8' }}
            >
              Frequently Asked Questions
            </span>

            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              Common Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div 
                  key={idx}
                  className="rounded-2xl border transition-all duration-200 overflow-hidden"
                  style={{
                    background: isOpen ? 'rgba(8,16,42,0.95)' : 'rgba(5,10,26,0.85)',
                    borderColor: isOpen ? 'rgba(56,189,248,0.4)' : 'rgba(30,58,95,0.4)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <div 
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: isOpen ? service.tagBg : 'rgba(15,23,42,0.6)', color: isOpen ? service.accent : '#94a3b8' }}
                    >
                      {isOpen ? <RiSubtractLine className="w-4 h-4" /> : <RiAddLine className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal border-t border-slate-800/80 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── Quick Interactive Inquiry Card ─── */}
      <section id="inquiry-card" className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#020509' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div 
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(8,18,48,0.96) 0%, rgba(3,8,24,0.98) 100%)',
              border: '1px solid rgba(56,189,248,0.3)',
              boxShadow: '0 25px 60px -20px rgba(0,0,0,0.85)'
            }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <RiCheckboxCircleFill className="w-8 h-8" />
                </div>

                <h3 className="font-heading font-bold text-2xl text-white">
                  Inquiry Received Successfully!
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name || 'valued partner'}</strong>. Our consultation desk has received your request regarding <strong className="text-cyan-300">{service.title}</strong>. A dedicated specialist will reach out within 2 business hours.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer shadow-lg"
                  >
                    <RiWhatsappFill className="w-4 h-4" />
                    <span>Open WhatsApp Chat Directly</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        scope: '',
                        timeline: 'Immediate (Within 2 weeks)'
                      });
                    }}
                    className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                <div className="space-y-2 mb-8 text-center sm:text-left">
                  <span 
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md inline-block text-cyan-300 bg-cyan-950/70 border border-cyan-500/30"
                  >
                    Direct Consultation Request
                  </span>
                  <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl">
                    Request a Proposal for {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Fill out your initial project scope or training requirements below. Our team in Visakhapatnam will get in touch promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                        style={{ background: 'rgba(5,10,25,0.95)', border: '1px solid rgba(56,189,248,0.3)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)')}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                        style={{ background: 'rgba(5,10,25,0.95)', border: '1px solid rgba(56,189,248,0.3)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                        style={{ background: 'rgba(5,10,25,0.95)', border: '1px solid rgba(56,189,248,0.3)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)')}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Organization / College
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company, University or Startup Name"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                        style={{ background: 'rgba(5,10,25,0.95)', border: '1px solid rgba(56,189,248,0.3)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Specific Requirements &amp; Project Scope *
                    </label>
                    <textarea
                      name="scope"
                      required
                      rows={4}
                      value={formData.scope}
                      onChange={handleChange}
                      placeholder="Outline your requirements, estimated cohort size, tech stack, or event dates..."
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all"
                      style={{ background: 'rgba(5,10,25,0.95)', border: '1px solid rgba(56,189,248,0.3)' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#38bdf8')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)')}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] text-slate-400 text-center sm:text-left">
                      Official Phone: <strong className="text-white">+91 91600 30342</strong> • <strong className="text-cyan-300">jvsacademyofficial@gmail.com</strong>
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="shine-hover w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold text-white shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)' }}
                    >
                      <RiSendPlaneFill className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Service Inquiry'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ─── Explore Other Services Grid ─── */}
      <section className="py-14 sm:py-18 relative overflow-hidden" style={{ background: '#030714' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Explore Synergies
              </span>
              <h3 className="font-heading font-bold text-white text-xl sm:text-2xl mt-1">
                Other Specialized Service Streams
              </h3>
            </div>

            <Link
              to="/services"
              className="text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>View All 8 Streams</span>
              <RiArrowRightLine className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((os) => {
              const OSIcon = os.icon;

              return (
                <div
                  key={os.id}
                  className="rounded-2xl p-6 bg-[#050b1e]/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                      <span className="text-lg font-black font-heading" style={{ color: os.accent }}>
                        {os.number}
                      </span>
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: os.tagBg, color: os.accent }}
                      >
                        <OSIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-sm text-white">
                      {os.title}
                    </h4>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {os.summary}
                    </p>
                  </div>

                  <Link
                    to={`/services/${os.id}`}
                    className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>Deep Dive Stream</span>
                    <RiArrowRightLine className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

# 🌐 JVS (Jyoshna's Versatile Stability) — Official Homepage

> **Theme:** Executive Blue & Black Corporate Identity  
> **Source of Truth:** Official JVS Brochure (`JVS Phamplet .pdf`)  
> **Tech Stack:** React 19, Tailwind CSS v4, Framer Motion, Vite, Lucide Icons  

---

## 🏛️ Project Architecture & Brochure Content Mapping

This website is a **single-page corporate homepage** crafted strictly based on the provided **JVS Pamphlet & Corporate Profile**. All content, leadership quotes, services, verticals, and contact points are 100% authentic and mapped directly from the brochure without any fabricated statistics or claims.

### 📌 Section Breakdown:

1. **Sticky Navigation Bar (`Navbar.jsx`):**
   - JVS branding + full name (*Jyoshna's Versatile Stability*).
   - Smooth scroll navigation: **Home** (`#home`), **About JVS** (`#about`), **How We Serve** (`#services`), **Our Business** (`#business`), **Our Perspective** (`#perspective`), **Contact** (`#contact`).
   - Active section pill indicator with Framer Motion spring transition.
   - Quick "Brochure" PDF modal button & "Get in Touch" CTA.
   - Responsive mobile drawer menu.

2. **Hero Section (`Hero.jsx`):**
   - High-impact dark backdrop with ambient blue glow (`#02040a`).
   - Group Headline: *"Driving Success Through Education, Events & Innovation"*.
   - Positioning: *Education, Events, Innovation, Business, Technology, Growth*.
   - Exact Brochure Description: *"A growing business group driven by innovation, vision, and versatility. We create and develop ventures designed to bring value, opportunity, and lasting growth."*
   - Supported CTAs: *"Explore Our Services"* & *"Get in Touch"*.

3. **About JVS Section (`AboutSection.jsx`):**
   - Large editorial typography.
   - Core purpose and commitment.
   - 6 Core Highlight Cards strictly mapped from the brochure:
     1. **Event Management**
     2. **Career Placements**
     3. **Startup Entrepreneurship**
     4. **Technology Innovation**
     5. **Company Registrations**
     6. **Hospitality**
   - Headquarters: **Visakhapatnam, PIN 530022**.

4. **How We Serve (`ServicesSection.jsx`):**
   - Brochure Intro: *"From learning and career development to business, technology and experiences, we create solutions that move people and businesses forward."*
   - 8 Numbered Service Cards:
     - `01` **EDUCATION & TRAINING** (`Training | Skills | Careers`)
     - `02` **INTERNSHIPS & PROJECTS** (`Internships | Projects | Portfolio`)
     - `03` **CAREER DEVELOPMENT** (`Placements | Careers | Interviews`)
     - `04` **TECHNOLOGY & INNOVATION** (`Web | Apps | Software`)
     - `05` **DIGITAL SOLUTIONS** (`Marketing | SEO | Branding`)
     - `06` **BUSINESS & CONSULTING** (`Startups | Registration | Consulting`)
     - `07` **EVENTS & EXPERIENCES** (`Corporate | Celebrations | Experiences`)
     - `08` **GROWTH & OPPORTUNITIES** (`Business | Development | Growth`)

5. **Our Business (`VenturesShowcase.jsx`):**
   - Visual ecosystem cards representing the 6 entities from brochure Page 2:
     - **JVS** (Corporate Strategic Umbrella)
     - **JVS Tech** (Technology & Software Innovation)
     - **Jyoora Events** (Events & Experiential Production)
     - **Versatile Academy** (Edu-Tech & Skill Mastery)
     - **VexoBiz** (Startup Incubation & Consulting — *"From Idea to Impact"*)
     - **Signature Stays** (Hospitality & Living Spaces)

6. **Our Perspective (`PerspectivesSection.jsx`):**
   - Authentic leadership quotes from brochure Page 1:
     - **Jyoshna Yellapu** (*Managing Director of JVS*):  
       > *“I believe in turning ideas into meaningful opportunities, creating with purpose, and building a vision that grows beyond today.”*
     - **Vahid Shaik** (*Managing Director of VexoBiz*):  
       > *“True growth begins with strong ideas, meaningful collaboration, and the courage to turn possibilities into something valuable, impactful, and lasting for the future.”*

7. **Contact / CTA Section (`ContactSection.jsx`):**
   - Design CTA: *"Let's Create What Comes Next."*
   - Phone: `+91 91600 30342`
   - Email: `jvsacademyofficial@gmail.com`
   - Website: `www.jvsacademy.com`
   - Location: `Visakhapatnam, 530022`
   - Interactive Inquiry Form + Direct WhatsApp Launcher.

8. **Footer (`Footer.jsx`):**
   - Minimalist corporate footer with smooth navigation, contact desk, and copyright.

---

## 🚀 How to Run Locally

```bash
cd jvs-website
npm run dev
```

Open browser at: `http://localhost:5173/`

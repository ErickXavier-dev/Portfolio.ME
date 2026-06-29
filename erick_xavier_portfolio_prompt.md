# Erick Xavier — Portfolio Generation Prompt for Antigravity

> **Read this entire document before generating a single line of code.**
> Work in phases. Never skip a phase. Only load what you need per phase.

---

## 0. Core Identity — Read First, Keep in Context

**Who is Erick Xavier?**

MCA student (AI & Data Science, 2025–2027) at Amrita Vishwa Vidyapeetham, Kochi. BCA graduate (Data Science, 8.39 CGPA). Full-stack software engineer. CTO of IEDC Amrita Kochi. Founder of the Software Innovators Club. He builds real institutional systems — not toy projects — and has active work in AI/ML, cybersecurity, IoT, and enterprise automation.

**Positioning in one sentence:**
> A builder-engineer who ships production systems at institutional scale — from AI chatbots for government infrastructure to IoT hardware to enterprise workspace platforms — while leading technical operations at Amrita Kochi.

**Tone:** Confident, technical, direct. Not a student looking for attention. An engineer who happens to be in academia.

---

## 1. Section Map — What to Build

Build exactly these sections, in this order. No extras.

```
1. Hero
2. About
3. Skills (animated tag cloud)
4. Projects (7 cards — see Phase 4)
5. Leadership & Roles
6. Certifications (compact)
7. Contact
```

No Research section. No standalone Education section — education lives inside About only.

---

## 2. Visual Direction

**Aesthetic:** Dark-mode-first. Deep navy/charcoal base. Clean brutalist grid with breathing room. Engineering tool aesthetic, not a creative agency.

**Palette:**
- Background: `#0D0F14`
- Surface: `#13161D`
- Border: `#1E2330`
- Accent primary: `#6C63FF` (electric violet — engineering + AI)
- Accent secondary: `#00D4AA` (teal — tags, highlights, sparingly)
- Text primary: `#F0F2F8`
- Text muted: `#7A8099`

**Typography:**
- Display: `Space Grotesk` (headings, name, section labels)
- Body: `Inter` (descriptions, paragraphs)
- Code/tags: `JetBrains Mono` (stack chips, role labels)

**Signature element:** Hero name does a one-time glitch/shimmer on load — settles immediately, never loops.

**Animations:**
- Skills: orbiting/floating tag cloud with smooth physics (see Phase 3)
- Section reveals: fade-up on scroll, staggered, 60ms between items
- Project cards: border glow on hover (accent primary)
- `prefers-reduced-motion` respected everywhere

---

## 3. Hero Section

```
[Name — glitch-settles on load]
Full-Stack Engineer · AI/ML · Cybersecurity
CTO @ IEDC Amrita | MCA AI & Data Science

[View Projects]   [GitHub]   [Resume PDF]
```

Subtle CSS grid-dot background. No heavy canvas library.

Contact chips below CTA:
- `xaviererick879@gmail.com`
- `github.com/ErickXavier-dev`
- `linkedin.com/in/erickxavier`
- `+91 6238314481`

---

## 4. About Section

Two-column on desktop, stacked on mobile.

**Left — bio (display as-is):**
> I'm a full-stack engineer and MCA student at Amrita Vishwa Vidyapeetham, Kochi. I build production-grade systems — AI chatbots for government infrastructure, enterprise workspace platforms, IoT firmware, and cloud automation — not demos. Currently CTO of IEDC Amrita, leading technical operations and shipping real systems for real institutions.

**Right — stat block:**
```
7+    Projects Shipped
3     Active Private Builds
8.46  MCA CGPA
2+    Years in Leadership
```

---

## 5. Skills Section — Animated Tag Cloud

Modelled on the interaction at `aarab.vercel.app`.

**Behavior:** Skills float as interactive tags in a 3D-ish orbiting sphere or physics-based 2D field. Hover: tag pulses with accent color + shows category tooltip. Pure CSS + JS — no heavy physics library. Target 60fps, degrade gracefully.

**Skills grouped by category:**

| Category | Tags |
|---|---|
| Languages | Python, Java, C, JavaScript, TypeScript |
| Frontend | React, Next.js, Tailwind CSS, HTML/CSS |
| Backend | Node.js, Express.js, FastAPI, Django |
| Databases | MongoDB, MySQL, PostgreSQL, Oracle |
| AI/ML | PyTorch, Keras, LSTM, RAG, LangChain, Hugging Face |
| Security | Penetration Testing, Burp Suite, JWT/RBAC, Zero-Trust, NoSQL Defense |
| Cloud/DevOps | Azure, Microsoft 365, Power Automate, Cloudflare Tunnel, PM2 |
| Embedded | ESP32, C/C++, Arduino, IoT Sensors |
| Tools | Git, Postman, VS Code, VirtualBox |

Color map: AI/ML → `#6C63FF`, Security → `#FF6B6B`, Frontend → `#00D4AA`, Backend → `#F9CA24`, Embedded → `#A29BFE`, rest → muted.

---

## 6. Projects Section

Seven cards. Mix of public (no GitHub link), completed private, and ongoing private. All cards follow the same design — status badge differentiates them.

**Card anatomy:** Title · Status badge · One-liner · Stack chips (JetBrains Mono) · hover border glow · icon slot (lock icon for private, no link for public-but-unlisted).

---

### Project 1 — QR Attendance System (Temple Fest)
**Status:** ✅ Completed
**Visibility:** Public card · No GitHub link
**Stack:** React · Vite · Express.js · MongoDB Atlas · JWT · Cloudflare Tunnel · PM2
**One-liner:** Enterprise-grade QR check-in/check-out system for Amrita Kochi's Temple Fest — Zero-Trust RBAC, real-time analytics dashboard, and sub-second scanning for high-throughput event environments.
**Highlights to show on card:**
- Zero-Trust architecture with role-tiered access (Admin / Head / Member)
- NoSQL injection defenses + cryptographic JWT token versioning
- Live KPI dashboard, CSV export, automated DB backup with atomic restore
- Deployed via Cloudflare Tunnel on campus VPS with PM2 cluster management

---

### Project 2 — CWS (Centralized Workspace System)
**Status:** 🔄 In Progress
**Visibility:** 🔒 Private
**Stack:** Next.js · Tailwind CSS · Microsoft EntraID · Azure · Power Automate
**One-liner:** Institutional workspace platform for Amrita Kochi managing files, resources, tasks, events, and inter-department coordination — replacing fragmented manual workflows across campus.
**Note:** Show stack and description. No code link. Lock badge.

---

### Project 3 — Kochi Metro RAG Chatbot
**Status:** 🔄 In Progress
**Visibility:** 🔒 Private
**Stack:** React · FastAPI · Ollama (Local LLM) · Qdrant (Vector DB) · MongoDB
**One-liner:** Internal document intelligence system for Kochi Metro Rail Ltd. — employees query internal documents via natural language using a locally-hosted LLM, with industry-standard security, access controls, and audit logging.
**Highlights:**
* **Local-first AI:** Ollama-powered LLM runs entirely on-premise — no external API calls, no data leaves the organization
* **Vector search at scale:** Qdrant vector database for semantic document retrieval with sub-100ms response times
* **Hybrid persistence:** MongoDB for metadata, user sessions, and audit logs; Qdrant for vector embeddings
* **React + FastAPI stack:** Modern, responsive frontend with high-performance async Python backend
* **Role-based access:** Document-level permissions with granular user access controls
* **Full audit trail:** All queries, accessed documents, and user actions logged for compliance
**Note:** Private government infrastructure project. No code link. Lock badge.

---

### Project 4 — College Campus Automation
**Status:** 🔄 In Progress
**Visibility:** 🔒 Private
**Stack:** Microsoft Power Automate · Azure · Microsoft 365
**One-liner:** Enterprise automation layer for Amrita Kochi campus — automated group membership management across 14 departments, credential expiry monitoring, and structured alert pipelines.
**Note:** Show stack and description. No code link. Lock badge.

---

### Project 5 — Savishkaara Control Panel
**Status:** ✅ Completed
**Visibility:** Public card · No GitHub link
**Stack:** React · Express.js · MongoDB
**One-liner:** Full operations dashboard for Amrita's annual TechFest — event management, ticketing, participant registration, admin analytics, and canteen billing. Live in production during the fest.

---

### Project 6 — Service Saathi
**Status:** ✅ Completed
**Visibility:** Public card · No GitHub link
**Stack:** Llama 3.2 · RAG · NER · WhatsApp API · Express.js · MongoDB
**One-liner:** WhatsApp AI chatbot for Kerala Akshaya Centres automating government service enquiries using LLM + Named Entity Recognition. Deployed for real government service centres.

---

### Project 7 — Smart Desk Assistant
**Status:** ✅ Completed
**Visibility:** Public card · No GitHub link
**Stack:** C/C++ · ESP32 · Arduino · RTC · Environmental Sensors · OLED
**One-liner:** Portable IoT productivity assistant — OLED display with real-time weather, Wi-Fi/Bluetooth notifications, and environmental monitoring in a compact desk-friendly form factor.

---

**Single source of truth:** Store all project data in `data/projects.json`. Cards are rendered from this file — updating a project never requires touching component code.

---

## 7. Leadership Section

Timeline layout, not a bullet list.

```
2025–Present   Chief Technical Officer · IEDC, Amrita Vishwa Vidyapeetham, Kochi
2025           Tech Fest Lead & Technical Team Lead · Savishkaara (Amrita TechFest)
2023–2025      Founder & Lead · Software Innovators Club, Amrita Kochi
2024–Present   Active Member · CIR Coding Club, Amrita Kochi
2023           Sub Committee Member · IEDC, Amrita Kochi
2022–2023      Official Member · CSI (Computer Society of India), Amrita Kochi
```

Compact awards block below timeline (2-column grid):
- 2nd Place, Eka Lakshya Line Follower Robot · Chinmaya Vishwavidyapeeth
- Participant, AmritaBit 8.0 (Major Project Expo) · 2025
- Tech Team Lead Memento · Savishkaara 2025

---

## 8. Certifications Section

3-per-row grid on desktop. Each card: issuer + cert name + date.

```
Python for Data Science, AI & Development    IBM              Aug 2025
Cyber Job Simulation                          Deloitte         Jun 2025
Data Analytics Job Simulation                 Deloitte         Jun 2025
Problem Solving (Basic)                       HackerRank       Mar 2026
Python (Basic)                                HackerRank       Mar 2026
Introduction to Deep Learning                 Infosys          Jan 2024
```

---

## 9. Contact Section

Minimal. Dark card, centered.

```
Let's build something.

[Email]   [LinkedIn]   [GitHub]

xaviererick879@gmail.com
```

Footer: `© 2025 Erick Xavier · Built with intent.`

---

## 10. Security Implementation

The portfolio itself must be hardened. Apply all of the following:

### HTTP Security Headers
Set these on every response (via `next.config.js`, `vercel.json`, or server middleware):

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.github.com;
  frame-ancestors 'none';

X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Anti-Scraping & Bot Protection
- Add `<meta name="robots" content="index, follow">` (allow legit crawlers)
- Obfuscate email in HTML — render via JS or use `data-*` attributes decoded client-side, never plain `mailto:` in the DOM
- Do not expose personal phone number in raw HTML source — show it only via a copy-to-clipboard JS interaction

### Contact Form (if added later)
- Rate limit submissions (max 3/hour per IP)
- Honeypot field to catch bots
- No server-side email credentials in client bundle

### Dependency hygiene
- Pin all npm dependencies to exact versions
- Add `"overrides"` in package.json for any known vulnerable transitive deps
- Run `npm audit` before every deploy

### Deployment
- Force HTTPS redirect — no HTTP fallback
- Set `X-Robots-Tag` response header
- If on Vercel: enable Vercel's Attack Challenge Mode for the contact endpoint

---

## 11. GitHub Integration

Public profile: `https://github.com/ErickXavier-dev`

Show a clean "More on GitHub →" link/card at the bottom of the Projects section. Do not auto-generate project cards from GitHub repos — the 7 curated cards above are canonical. GitHub is supplementary discovery only.

---

## 12. Technical Implementation

**Recommended stack:** Next.js 14+ (App Router) + Tailwind CSS + Framer Motion (scroll reveals only — keep bundle lean).

**Performance targets:**
- LCP < 2.5s
- `font-display: swap` + preconnect on all Google Fonts
- Skills tag cloud: `will-change: transform` on animated elements, capped at 60fps
- Lazy-load all below-fold content

**Structure:**
```
components/
  Hero.jsx
  About.jsx
  Skills.jsx         ← tag cloud
  Projects.jsx
  Leadership.jsx
  Certifications.jsx
  Contact.jsx
data/
  projects.json      ← single source of truth for all project cards
  skills.json        ← skills + categories
  certifications.json
```

**SEO:** `og:title`, `og:description`, `og:image` (branded card). JSON-LD Person schema.

---

## 13. What NOT to Do

- ❌ No "Download Resume" button unless a real PDF path is provided
- ❌ No Testimonials section
- ❌ No Research section
- ❌ No light mode default
- ❌ No more than 3 animation types (hero glitch once, skills cloud ambient, card hover glow)
- ❌ No blog section
- ❌ Do not hallucinate project details — use only what is in Section 6
- ❌ Do not repeat Education in more than one place
- ❌ Do not expose raw email or phone in HTML source (see Section 10)

---

## 14. Token Efficiency (Project Brain Principles)

Build in phases. Each phase is independently deployable.

**Phase 1:** Hero + About + Skills
**Phase 2:** Projects (render one card at a time from `projects.json`, do not hold all 7 in active generation context simultaneously)
**Phase 3:** Leadership + Certifications + Contact + Security headers config

Stop cleanly at any phase boundary if context budget is tight. Never partially generate a section.

---

*Last updated: June 2026 · Erick Xavier · xaviererick879@gmail.com*

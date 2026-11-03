# K. Prathap Narayan — Developer Portfolio

A production-ready, Apple-inspired personal portfolio website for **K. Prathap Narayan**, an aspiring Junior Developer currently pursuing Bachelor of Computer Applications (BCA) at Christ College, Vizhinjam (Kerala University).

Designed with a warm minimalist editorial aesthetic, fluid typography, Framer Motion scroll choreographies, and an expandable project architecture.

---

## 🎨 Design Philosophy & Palette

- **Primary Background:** `#F5F4F0` (warm off-white/linen)
- **Secondary Background:** `#FFFFFF`
- **Primary Text:** `#202020`
- **Secondary Text:** `#6A6A68` / `#777777`
- **Accent Tone:** `#A89B85` (warm titanium bronze)
- **Borders:** `rgba(0, 0, 0, 0.08)`
- **Typography:** Display: Plus Jakarta Sans / Body: Inter / Accents: Space Grotesk

---

## 🚀 Getting Started

### 1. Development Server
```bash
npm run dev
```
Runs the Vite development server at `http://localhost:3000`.

### 2. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 3. Local Preview
```bash
npm run preview
```

---

## 📁 Project Architecture

```
portfolio-prathap/
├── public/
│   └── favicon.svg              # Minimalist monogram vector icon
├── src/
│   ├── components/
│   │   ├── ScrollProgress.jsx   # Top smooth spring scroll progress bar
│   │   ├── Navbar.jsx           # Floating pill navigation with section tracker & mobile drawer
│   │   ├── Hero.jsx             # Cinematic editorial hero with dynamic role carousel
│   │   ├── About.jsx            # Perspective statement & 01-Learn, 02-Build, 03-Solve cards
│   │   ├── Skills.jsx           # Categorized technical toolkit & interactive filters
│   │   ├── Education.jsx        # Academic timeline (BCA Kerala University & +2 Computer Science)
│   │   ├── Projects.jsx         # "Things are taking shape" blueprint cards & engineering lifecycle
│   │   ├── Philosophy.jsx       # Parallax editorial statement with Framer Motion useScroll
│   │   ├── Contact.jsx          # LinkedIn connection portal & copy-link feedback
│   │   └── Footer.jsx           # Credits, dynamic copyright year & smooth back-to-top
│   ├── data/
│   │   ├── skills.js            # Frontend, Backend, Database, and AI-assisted skills
│   │   ├── education.js         # Degree records and course highlights
│   │   └── projects.js          # Project slots & development lifecycle roadmap
│   ├── hooks/
│   │   └── useActiveSection.js  # Viewport scroll position hook for active nav highlight
│   ├── styles/
│   │   ├── variables.css        # Apple color palette, shadows, blur & radii tokens
│   │   ├── animations.css       # Keyframes for pulse indicators and blueprint grid lines
│   │   └── global.css           # Responsive typography, Apple glass cards & button styles
│   ├── App.jsx                  # Main application composition
│   └── main.jsx                 # React root mounting
├── index.html                   # HTML template with metadata & Google Fonts
├── package.json                 # Project dependencies
└── vite.config.js               # Vite bundler configuration
```

---

## 🛠 Adding Completed Projects in the Future

When you are ready to showcase completed projects, simply edit `src/data/projects.js`:

```javascript
{
  id: 'slot-01',
  slotNumber: '01',
  category: 'Full-Stack Application',
  techStack: ['Python', 'Flask', 'MySQL', 'Bootstrap'],
  phase: 'Completed & Deployed',
  title: 'Your Project Title Here',
  concept: 'Detailed explanation of what problem your project solves and how it functions.',
  isComingSoon: false,
  liveUrl: 'https://your-live-demo.com',
  githubUrl: 'https://github.com/your-username/repo-name',
  iconType: 'Server'
}
```

---

## 🌐 Official Profiles

- **LinkedIn:** [https://www.linkedin.com/in/k-prathap-narayan/](https://www.linkedin.com/in/k-prathap-narayan/)


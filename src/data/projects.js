/**
 * Project Data Architecture
 * 
 * Note: Per Prathap's current development status, projects are actively in development.
 * This array structure allows immediate addition of finished projects by toggling
 * `status: 'completed'` and filling in live/repository links.
 */

export const projectsData = [
  {
    id: 'slot-01',
    slotNumber: '01',
    category: 'Backend & Web Architecture',
    techStack: ['Python', 'Flask', 'MySQL', 'CSS3'],
    phase: 'Architecture & Modeling Phase',
    title: 'Python & Flask Web Application',
    concept: 'Modular web application leveraging Python for core service logic, Flask for REST routing, and MySQL for relational persistence.',
    isComingSoon: true,
    progressLabel: 'Schema Design & Route Scaffolding',
    iconType: 'Server'
  },
  {
    id: 'slot-02',
    slotNumber: '02',
    category: 'Frontend & User Interface',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    phase: 'Interface Prototyping Phase',
    title: 'Interactive Client-Side Utility',
    concept: 'Focused, lightweight web utility designed to solve daily user workflows with intuitive responsive layouts and clean DOM interactions.',
    isComingSoon: true,
    progressLabel: 'Layout Wireframing & State Management',
    iconType: 'Layout'
  },
  {
    id: 'slot-03',
    slotNumber: '03',
    category: 'AI-Assisted Innovation',
    techStack: ['AI Prompting', 'Python', 'API Integration'],
    phase: 'Exploratory & Research Phase',
    title: 'AI-Augmented Problem-Solving Prototype',
    concept: 'An exploratory project testing automated reasoning, structured prompt workflows, and practical script generation for real-world tasks.',
    isComingSoon: true,
    progressLabel: 'Prompt Testing & Logic Feasibility',
    iconType: 'Cpu'
  }
];

export const projectRoadmap = [
  {
    step: '01',
    title: 'Concept & Real-World Validation',
    desc: 'Identifying a genuine pain point, mapping user flows, and scoping technical requirements.'
  },
  {
    step: '02',
    title: 'Core Backend & Data Layer',
    desc: 'Architecting clean Python logic, structured Flask endpoints, and normalized MySQL tables.'
  },
  {
    step: '03',
    title: 'Frontend & Responsive Interface',
    desc: 'Crafting clean semantic markup, responsive Bootstrap/CSS layouts, and fluid interactions.'
  },
  {
    step: '04',
    title: 'Refinement & Public Showcase',
    desc: 'Testing performance, verifying responsiveness, documenting code, and publishing live.'
  }
];


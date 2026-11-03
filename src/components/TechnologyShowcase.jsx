import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Official SVG vector representations for each technology
const TECH_ITEMS = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend Structure',
    description: 'Semantic markup, accessible DOM hierarchy, and standards-compliant document structure.',
    color: '#E34F26',
    bgColor: 'rgba(227, 79, 38, 0.12)',
    borderColor: 'rgba(227, 79, 38, 0.3)',
    glowColor: 'rgba(227, 79, 38, 0.4)',
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h11.44l.216-2.532H4.992l.668 7.782h10.422l-.334 3.733-3.771 1.018-3.772-1.018-.242-2.721H5.45l.477 5.347 6.05 1.636 6.052-1.636.83-9.391H8.531z" fill="#E34F26" />
      </svg>
    )
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Modern Styling',
    description: 'Responsive layouts, Flexbox, CSS Grid, custom properties, and fluid typography.',
    color: '#1572B6',
    bgColor: 'rgba(21, 114, 182, 0.12)',
    borderColor: 'rgba(21, 114, 182, 0.3)',
    glowColor: 'rgba(21, 114, 182, 0.4)',
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm14.398 7.031l.24-2.531H4.992l.668 7.781h10.422l-.334 3.734-3.771 1.018-3.772-1.018-.242-2.721H5.45l.477 5.347 6.05 1.636 6.052-1.636.83-9.391H8.531l-.232-2.718h11.44z" fill="#1572B6" />
      </svg>
    )
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Logic & Interactivity',
    description: 'Modern ES6+ syntax, asynchronous programming, event-driven architecture, and DOM manipulation.',
    color: '#F7DF1E',
    bgColor: 'rgba(247, 223, 30, 0.12)',
    borderColor: 'rgba(247, 223, 30, 0.3)',
    glowColor: 'rgba(247, 223, 30, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 18c-.8 0-1.5-.4-1.8-1l1.3-.8c.2.4.4.6.8.6.4 0 .7-.2.7-.6V11h1.6v5.3c0 1.1-.7 1.7-1.8 1.7zm6.7-.1c-1.4 0-2.3-.9-2.3-2.2 0-1.4.9-2.2 2.3-2.2.9 0 1.5.4 1.8.9l-1.2.7c-.2-.3-.4-.4-.7-.4-.5 0-.8.3-.8.9s.4.9.8.9c.4 0 .6-.2.8-.4l1.1.7c-.4.8-1 1.3-1.9 1.3z" fill="#000000" />
      </svg>
    )
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Core Backend',
    description: 'Primary programming language for application logic, scripting, backend processing, and automation.',
    color: '#3776AB',
    bgColor: 'rgba(55, 118, 171, 0.15)',
    borderColor: 'rgba(55, 118, 171, 0.35)',
    glowColor: 'rgba(55, 118, 171, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="34" height="34">
        <path d="M11.914 0C5.825 0 6.2 2.64 6.2 2.64l.006 2.734h5.8v.825H3.88s-3.88.44-3.88 5.688c0 5.247 3.387 5.08 3.387 5.08h2.02v-2.842s-.11-3.388 3.333-3.388h5.743s3.224.053 3.224-3.118V3.225S18.257 0 11.914 0zm-1.63 1.748a.95.95 0 110 1.9.95.95 0 010-1.9z" fill="#3776AB" />
        <path d="M12.086 24c6.089 0 5.714-2.64 5.714-2.64l-.006-2.734h-5.8v-.825h8.126s3.88-.44 3.88-5.688c0-5.247-3.387-5.08-3.387-5.08h-2.02v2.842s.11 3.388-3.333 3.388H9.51s-3.224-.053-3.224 3.118v4.398S5.743 24 12.086 24zm1.63-1.748a.95.95 0 110-1.9.95.95 0 010 1.9z" fill="#FFD43B" />
      </svg>
    )
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'Web Framework',
    description: 'Lightweight WSGI Python web framework for building clean RESTful APIs, routes, and server-rendered views.',
    color: '#F1EDE3',
    bgColor: 'rgba(220, 210, 190, 0.12)',
    borderColor: 'rgba(220, 210, 190, 0.3)',
    glowColor: 'rgba(181, 138, 98, 0.4)',
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.54 18.28A2 2 0 006.27 21h11.46a2 2 0 001.73-2.72L14 9.31V2" stroke="#F1EDE3" />
        <path d="M8.5 2h7" stroke="#F1EDE3" />
        <path d="M6 16c2 1 4 1 6-1s4-2 6-1" stroke="#B58A62" />
      </svg>
    )
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Relational Database',
    description: 'Relational database architecture, structured table design, queries, and data integrity.',
    color: '#00758F',
    bgColor: 'rgba(0, 117, 143, 0.15)',
    borderColor: 'rgba(0, 117, 143, 0.35)',
    glowColor: 'rgba(0, 117, 143, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#00758F" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#F29111" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#00758F" />
      </svg>
    )
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'CSS Framework',
    description: 'Responsive grid architecture, modern utility classes, and rapid mobile-first prototyping.',
    color: '#7952B3',
    bgColor: 'rgba(121, 82, 179, 0.15)',
    borderColor: 'rgba(121, 82, 179, 0.35)',
    glowColor: 'rgba(121, 82, 179, 0.4)',
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path d="M7 6h5.2c1.8 0 2.8.9 2.8 2.2 0 .9-.5 1.6-1.3 1.9 1.1.3 1.7 1.1 1.7 2.2 0 1.5-1.1 2.7-3 2.7H7V6zm2.4 3.7h2.4c.6 0 1-.3 1-.8s-.4-.8-1-.8H9.4v1.6zm0 3.7h2.6c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9H9.4v1.8z" fill="#FFFFFF" />
      </svg>
    )
  }
];

export default function TechnologyShowcase() {
  const [activeTech, setActiveTech] = useState(TECH_ITEMS[3]); // Default: Python
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const stageRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const isPausedRef = useRef(false);

  // Responsive breakpoint tracking
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile: 7 cards with generous spacing. On desktop: 14 cards (2 complete cycles).
  const currentCards = isMobile ? TECH_ITEMS : [...TECH_ITEMS, ...TECH_ITEMS];

  useEffect(() => {
    const path = pathRef.current;
    const stage = stageRef.current;
    if (!path || !stage) return;

    let totalLength = 0;
    try {
      totalLength = path.getTotalLength();
    } catch (e) {
      totalLength = 1980;
    }

    const cardCount = currentCards.length;
    const spacing = totalLength / cardCount;

    let animationFrameId;

    const animate = (currentTime) => {
      const dt = Math.min((currentTime - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = currentTime;

      // Speed in pixels along curve per second
      if (!isPausedRef.current && totalLength > 0) {
        const speed = isMobile ? 62 : 72;
        // Move from RIGHT to LEFT: decreasing distance along path
        offsetRef.current = (offsetRef.current - speed * dt) % totalLength;
        if (offsetRef.current < 0) offsetRef.current += totalLength;
      }

      const stageWidth = stage.clientWidth || (isMobile ? 360 : 1200);
      const stageHeight = stage.clientHeight || 240;

      // Mobile virtual trajectory width: prevents crowding on narrow screens
      const trackWidth = isMobile
        ? Math.max(stageWidth * 2.3, 820)
        : stageWidth;

      for (let i = 0; i < cardCount; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        // Position of this card along the path
        const s = (offsetRef.current + i * spacing) % totalLength;
        const validS = s < 0 ? s + totalLength : s;

        // Sample exact SVG geometry
        const pt = path.getPointAtLength(validS);
        // Sample forward point for tangent slope
        const sNext = (validS - 3 + totalLength) % totalLength;
        const ptNext = path.getPointAtLength(sNext);

        const dx = ptNext.x - pt.x;
        const dy = ptNext.y - pt.y;
        const slopeDeg = Math.atan2(dy, dx) * (180 / Math.PI);
        const tilt = Math.max(-9, Math.min(9, slopeDeg * 0.32));

        // Coordinate calculations: centered on the stage
        const cardX = (stageWidth / 2) + ((pt.x - 800) / 1600) * trackWidth;
        const cardY = (pt.y / 220) * stageHeight;

        // Center Focus calculations: smooth peak around center (pt.x = 800)
        const distFromCenter = Math.abs(pt.x - 800) / (isMobile ? 380 : 480);
        const rawFocus = Math.max(0, 1 - Math.min(1, distFromCenter));
        const focus = rawFocus * rawFocus * (3 - 2 * rawFocus);

        // Apple-style focus scaling & elevation without clipping
        const baseScale = isMobile ? 0.9 : 0.95;
        const scale = baseScale + focus * (isMobile ? 0.16 : 0.18);
        const opacity = isMobile ? (0.55 + focus * 0.45) : (0.65 + focus * 0.35);
        const zIndex = Math.round(10 + focus * 25);

        // Apply GPU transform directly to DOM element (ZERO React re-renders per frame!)
        el.style.transform = `translate3d(${cardX}px, ${cardY}px, 0) translate(-50%, -50%) rotate(${tilt}deg) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = zIndex;

        // Active center glow styling on card pod
        const pod = el.querySelector('.tech-card-pod');
        if (pod) {
          if (focus > 0.55) {
            pod.style.borderColor = currentCards[i].borderColor;
            pod.style.boxShadow = `0 16px 36px -8px ${currentCards[i].glowColor}, 0 0 16px ${currentCards[i].glowColor}`;
          } else {
            pod.style.borderColor = 'var(--dark-border)';
            pod.style.boxShadow = '0 8px 24px -4px rgba(0, 0, 0, 0.4)';
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, currentCards.length]);

  return (
    <section
      id="skills"
      className="section-dark"
      style={{
        paddingTop: 'clamp(5.5rem, 12vw, 8rem)',
        paddingBottom: 'clamp(5.5rem, 12vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        borderTop: 'none',
        borderBottom: 'none',
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}
    >
      {/* Background Ambient Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(320px, 75vw, 950px)',
          height: 'clamp(240px, 40vw, 450px)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(181, 138, 98, 0.12) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* 1. TECHNICAL REPERTOIRE badge & 2. Heading & 3. Description */}
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: 'clamp(3rem, 7vw, 4.5rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.1rem' }}
          >
            <span className="section-tag section-tag-dark">
              <Sparkles size={13} />
              <span>TECH STACK</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 5.5vw, 4.5rem)',
              fontWeight: 600,
              color: 'var(--dark-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1rem'
            }}
          >
            Flow in every technology.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.92rem, 2vw, 1.15rem)',
              color: 'var(--dark-text-secondary)',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Exploring tools and technologies that turn ideas into functional digital experiences.
          </motion.p>
        </div>
      </div>

      {/* 5. FULL-VIEWPORT CURVED ANIMATED TECHNOLOGY SHOWCASE */}
      <div
        ref={stageRef}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(230px, 28vw, 275px)',
          overflow: 'visible', // Zero clipping
          margin: '0 auto',
          cursor: 'grab'
        }}
      >
        {/* Stationary Full-Width Curved Dotted Track SVG */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? 'max(230vw, 820px)' : '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          <svg
            viewBox="0 0 1600 220"
            preserveAspectRatio="none"
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
          >
            <defs>
              <linearGradient id="curveTrackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(181, 138, 98, 0.08)" />
                <stop offset="15%" stopColor="rgba(181, 138, 98, 0.25)" />
                <stop offset="50%" stopColor="rgba(181, 138, 98, 0.45)" />
                <stop offset="85%" stopColor="rgba(181, 138, 98, 0.25)" />
                <stop offset="100%" stopColor="rgba(181, 138, 98, 0.08)" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M -120,165 C 360,165 580,75 800,75 C 1020,75 1240,165 1720,165"
              fill="none"
              stroke="url(#curveTrackGradient)"
              strokeWidth="1.75"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* Moving Technology Cards: Proportional spacing on Mobile & Desktop */}
        {currentCards.map((tech, index) => {
          const isSelected = activeTech.id === tech.id;
          const isHovered = hoveredTech?.id === tech.id;

          return (
            <div
              key={`curve-card-${tech.id}-${index}`}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                willChange: 'transform, opacity',
                userSelect: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              onClick={() => setActiveTech(tech)}
            >
              {/* Card Pod */}
              <div
                className="tech-card-pod"
                style={{
                  width: 'clamp(58px, 9vw, 82px)',
                  height: 'clamp(58px, 9vw, 82px)',
                  borderRadius: '22px',
                  backgroundColor: isSelected || isHovered ? tech.bgColor : 'var(--dark-card)',
                  border: `1.5px solid ${isSelected || isHovered ? tech.borderColor : 'var(--dark-border)'}`,
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  backdropFilter: 'blur(12px)',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {tech.svg}

                {/* Active indicator dot */}
                {isSelected && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: tech.color,
                      boxShadow: `0 0 8px ${tech.color}`
                    }}
                  />
                )}
              </div>

              {/* Technology Label */}
              <span
                style={{
                  marginTop: '0.5rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.82rem)',
                  fontWeight: isSelected || isHovered ? 600 : 500,
                  color: isSelected || isHovered ? 'var(--dark-text)' : 'var(--dark-muted)',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Terminal, Server, Database, BrainCircuit } from 'lucide-react';
import { capabilitiesData } from '../data/capabilities';

const ICONS = [Code2, Terminal, Server, Database, BrainCircuit];

export default function Capabilities() {
  const stageRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const stage = stageRef.current;
    if (!path || !stage) return;

    let totalLength = 0;
    try {
      totalLength = path.getTotalLength();
    } catch (e) {
      totalLength = 2237;
    }

    const cardCount = capabilitiesData.length;
    const spacing = totalLength / cardCount;

    // Check prefers-reduced-motion
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speed = prefersReducedMotion ? 0 : (isMobile ? 56 : 68);

    let animationFrameId;

    const animate = (currentTime) => {
      const dt = Math.min((currentTime - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = currentTime;

      // Uninterrupted, continuous right-to-left linear motion
      if (speed > 0 && totalLength > 0) {
        offsetRef.current = (offsetRef.current - speed * dt) % totalLength;
        if (offsetRef.current < 0) offsetRef.current += totalLength;
      }

      const stageWidth = stage.clientWidth || (isMobile ? 360 : 1200);
      const stageHeight = stage.clientHeight || 420;

      // Virtual trajectory width to ensure smooth curvature across all viewports
      const trackWidth = isMobile
        ? Math.max(stageWidth * 2.3, 860)
        : stageWidth;

      for (let i = 0; i < cardCount; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        // Position of this card along the path
        const s = (offsetRef.current + i * spacing) % totalLength;
        const validS = s < 0 ? s + totalLength : s;

        // Sample exact SVG geometry
        const pt = path.getPointAtLength(validS);

        // Sample forward tangent for smooth directional banking
        const sAhead = (validS - 5 + totalLength) % totalLength;
        const ptAhead = path.getPointAtLength(sAhead);

        const dx = ptAhead.x - pt.x;
        const dy = ptAhead.y - pt.y;
        const slope = dy / (dx !== 0 ? dx : 0.0001);
        const slopeDeg = Math.atan(slope) * (180 / Math.PI);
        const tilt = Math.max(-7.5, Math.min(7.5, slopeDeg * 0.45));

        // Coordinate calculations centered on the stage
        const cardX = (stageWidth / 2) + ((pt.x - 800) / 1600) * trackWidth;
        const cardY = (pt.y / 360) * stageHeight;

        // Center Focus calculations: smooth peak around center (pt.x = 800)
        const distFromCenter = Math.abs(pt.x - 800) / (isMobile ? 320 : 420);
        const rawFocus = Math.max(0, 1 - Math.min(1, distFromCenter));
        const focus = rawFocus * rawFocus * (3 - 2 * rawFocus);

        // Apple-style focus scaling & elevation without clipping
        const baseScale = isMobile ? 0.9 : 0.94;
        const scale = baseScale + focus * (isMobile ? 0.14 : 0.16);
        const opacity = isMobile ? (0.6 + focus * 0.4) : (0.68 + focus * 0.32);
        const zIndex = Math.round(10 + focus * 20);

        // Apply GPU transform directly to DOM element (Zero React re-renders)
        el.style.transform = `translate3d(${cardX}px, ${cardY}px, 0) translate(-50%, -50%) rotate(${tilt}deg) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = zIndex;

        // Spotlight glow when card traverses the crest of the Malayalam Ra
        const cardInner = el.querySelector('.capability-motion-card');
        if (cardInner) {
          if (focus > 0.55) {
            cardInner.style.borderColor = 'rgba(181, 138, 98, 0.45)';
            cardInner.style.boxShadow = '0 24px 50px -10px rgba(0, 0, 0, 0.9), 0 0 28px rgba(181, 138, 98, 0.25)';
            cardInner.style.backgroundColor = 'rgba(32, 33, 28, 0.95)';
          } else {
            cardInner.style.borderColor = 'var(--dark-border)';
            cardInner.style.boxShadow = 'var(--shadow-dark)';
            cardInner.style.backgroundColor = 'rgba(25, 26, 23, 0.88)';
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <section
      id="capabilities"
      className="section-dark-secondary"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        borderTop: 'none',
        border: 'none',
        outline: 'none'
      }}
    >
      {/* Subtle Ambient Backlight */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: 'clamp(280px, 40vw, 540px)',
          height: 'clamp(280px, 40vw, 540px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 138, 98, 0.12) 0%, rgba(25, 26, 23, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem' }}
          >
            <span className="section-tag section-tag-dark">
              <Sparkles size={13} />
              <span>AREAS OF CAPABILITY</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)',
              fontWeight: 600,
              color: 'var(--dark-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.25rem'
            }}
          >
            What I Can Help With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--dark-text-secondary)',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.65
            }}
          >
            Core technical interests and practical areas where I build, experiment, and solve problems.
          </motion.p>
        </div>
      </div>

      {/* Malayalam റ-Inspired Curved Motion Path Showcase */}
      <div
        ref={stageRef}
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(380px, 46vw, 490px)',
          overflow: 'visible',
          margin: '0 auto',
          cursor: 'default',
          userSelect: 'none'
        }}
      >
        {/* Stationary Malayalam റ-Inspired Dotted Trajectory SVG */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? 'max(210vw, 860px)' : '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          <svg
            viewBox="0 0 1600 360"
            preserveAspectRatio="none"
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
          >
            <defs>
              <linearGradient id="raMotionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(181, 138, 98, 0.04)" />
                <stop offset="20%" stopColor="rgba(181, 138, 98, 0.3)" />
                <stop offset="50%" stopColor="rgba(181, 138, 98, 0.65)" />
                <stop offset="80%" stopColor="rgba(181, 138, 98, 0.3)" />
                <stop offset="100%" stopColor="rgba(181, 138, 98, 0.04)" />
              </linearGradient>
              <filter id="raCurveGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle Ambient Copper Glow along the Malayalam Ra path */}
            <path
              d="M -300,265 C 240,265 480,85 800,85 C 1120,85 1360,265 1900,265"
              fill="none"
              stroke="rgba(181, 138, 98, 0.16)"
              strokeWidth="7"
              filter="url(#raCurveGlow)"
            />

            {/* Main Malayalam Ra trajectory: dotted antique copper */}
            <path
              ref={pathRef}
              d="M -300,265 C 240,265 480,85 800,85 C 1120,85 1360,265 1900,265"
              fill="none"
              stroke="url(#raMotionGradient)"
              strokeWidth="2.2"
              strokeDasharray="6 8"
            />
          </svg>
        </div>

        {/* Moving Capability Cards traveling smoothly from Right to Left */}
        {capabilitiesData.map((item, index) => {
          const IconComponent = ICONS[index % ICONS.length];
          return (
            <div
              key={`ra-card-${item.number}`}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: isMobile ? 'clamp(220px, 66vw, 260px)' : 'clamp(250px, 24vw, 295px)',
                willChange: 'transform, opacity',
                userSelect: 'none',
                cursor: 'default'
              }}
            >
              <div
                className="capability-motion-card"
                style={{
                  borderRadius: '24px',
                  backgroundColor: 'rgba(25, 26, 23, 0.88)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid var(--dark-border)',
                  padding: 'clamp(1.25rem, 2.5vw, 1.65rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(210px, 22vw, 250px)',
                  boxShadow: 'var(--shadow-dark)',
                  transition: 'border-color 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease'
                }}
              >
                {/* Header row: Icon, Numeral */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '13px',
                        backgroundColor: 'rgba(181, 138, 98, 0.15)',
                        border: '1px solid rgba(181, 138, 98, 0.28)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)'
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        fontWeight: 600,
                        color: 'rgba(241, 237, 227, 0.24)',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                      fontWeight: 600,
                      color: 'var(--dark-text)',
                      marginBottom: '0.55rem',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.25
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.82rem, 1.5vw, 0.88rem)',
                      color: 'var(--dark-text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '1rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(220, 210, 190, 0.08)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)'
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Wifi, Battery, Code2, Database } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-dark"
      style={{
        paddingTop: 'clamp(5.5rem, 11vw, 7.5rem)',
        paddingBottom: 'clamp(5.5rem, 12vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        borderTop: 'none',
        borderBottom: 'none'
      }}
    >
      {/* Subtle Cinematic Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(320px, 55vw, 680px)',
          height: 'clamp(320px, 55vw, 680px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 138, 98, 0.16) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', marginBottom: 'clamp(2rem, 4.5vw, 3rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            style={{ marginBottom: '0.85rem' }}
          >
            <span className="section-tag section-tag-dark" style={{ padding: '0.3rem 0.85rem', fontSize: '0.72rem' }}>
              <Sparkles size={12} />
              <span>PROJECT SHOWCASE</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.85rem, 4.2vw, 2.85rem)',
              fontWeight: 600,
              color: 'var(--dark-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.18,
              marginBottom: '0.75rem'
            }}
          >
            Currently building something meaningful.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
              color: 'var(--dark-text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.55
            }}
          >
            New ideas are taking shape. My project showcase will be updated as I continue exploring and developing practical applications.
          </motion.p>
        </div>

        {/* Visually Prominent Smartphone Mockup Showcase */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 'clamp(280px, 86vw, 440px)'
            }}
          >
            {/* Outer Smartphone Titanium Bezel Frame */}
            <div
              style={{
                width: '100%',
                borderRadius: 'clamp(42px, 8vw, 54px)',
                padding: 'clamp(9px, 2vw, 13px)',
                backgroundColor: '#1E201D',
                border: '1.8px solid rgba(220, 210, 190, 0.18)',
                boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.9), 0 0 45px rgba(181, 138, 98, 0.18)',
                position: 'relative'
              }}
            >
              {/* Inner Smartphone Screen Container */}
              <div
                style={{
                  width: '100%',
                  borderRadius: 'clamp(34px, 6.5vw, 44px)',
                  backgroundColor: '#141513',
                  border: '1px solid rgba(220, 210, 190, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* Status Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'clamp(10px, 2.5vw, 14px) clamp(16px, 4vw, 24px) 8px clamp(16px, 4vw, 24px)',
                    color: 'rgba(241, 237, 227, 0.75)',
                    fontSize: 'clamp(0.72rem, 1.8vw, 0.8rem)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>09:41</span>
                  
                  {/* Dynamic Island Pill */}
                  <div
                    style={{
                      width: 'clamp(78px, 18vw, 98px)',
                      height: 'clamp(20px, 4vw, 24px)',
                      backgroundColor: '#000000',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#24231F' }} />
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#24231F' }} />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Wifi size={13} />
                    <Battery size={14} />
                  </div>
                </div>

                {/* Device Screen Body */}
                <div
                  style={{
                    padding: 'clamp(18px, 4.5vw, 28px) clamp(16px, 4vw, 24px) clamp(14px, 3vw, 20px) clamp(16px, 4vw, 24px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(14px, 3.5vw, 20px)'
                  }}
                >
                  {/* Top development status banner */}
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '5px 12px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(181, 138, 98, 0.15)',
                        border: '1px solid rgba(181, 138, 98, 0.3)',
                        marginBottom: '12px'
                      }}
                    >
                      <div className="pulse-indicator">
                        <span className="ring" style={{ width: '16px', height: '16px' }} />
                        <span className="dot" style={{ width: '7px', height: '7px' }} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'clamp(0.68rem, 1.8vw, 0.74rem)',
                          color: 'var(--accent)',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}
                      >
                        PROJECT IN INCUBATION
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.6rem, 4vw, 2.1rem)',
                        fontWeight: 600,
                        color: 'var(--dark-text)',
                        lineHeight: 1.15,
                        marginBottom: '6px'
                      }}
                    >
                      Coming Soon
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(0.82rem, 2vw, 0.92rem)',
                        color: 'var(--dark-text-secondary)',
                        lineHeight: 1.55
                      }}
                    >
                      Architecting full-stack solutions with Python, Flask, and modern responsive interfaces.
                    </p>
                  </div>

                  {/* Wireframe Preview Mock inside Phone */}
                  <div
                    style={{
                      borderRadius: '18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(220, 210, 190, 0.07)',
                      padding: 'clamp(14px, 3vw, 18px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ width: '42%', height: '8px', backgroundColor: 'rgba(241, 237, 227, 0.22)', borderRadius: '4px' }} />
                      <div style={{ width: '22%', height: '7px', backgroundColor: 'rgba(181, 138, 98, 0.35)', borderRadius: '4px' }} />
                    </div>

                    <div style={{ height: 'clamp(60px, 12vw, 80px)', borderRadius: '12px', backgroundColor: 'rgba(181, 138, 98, 0.12)', border: '1px dashed rgba(181, 138, 98, 0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <Terminal size={22} style={{ color: 'var(--accent)', opacity: 0.9 }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)' }}>
                        flask_app.py
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <div style={{ height: '32px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.035)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '6px' }}>
                        <Code2 size={13} style={{ color: 'rgba(241, 237, 227, 0.4)' }} />
                        <div style={{ width: '50%', height: '4px', backgroundColor: 'rgba(241, 237, 227, 0.15)', borderRadius: '2px' }} />
                      </div>
                      <div style={{ height: '32px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.035)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '6px' }}>
                        <Database size={13} style={{ color: 'rgba(241, 237, 227, 0.4)' }} />
                        <div style={{ width: '50%', height: '4px', backgroundColor: 'rgba(241, 237, 227, 0.15)', borderRadius: '2px' }} />
                      </div>
                    </div>
                  </div>

                  {/* Active Tech Stack Pills */}
                  <div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--dark-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                      Stack Architecture
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Python', 'Flask', 'MySQL', 'Web UI'].map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: 'clamp(0.72rem, 1.8vw, 0.78rem)',
                            padding: '4px 10px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            color: 'var(--dark-text)',
                            border: '1px solid rgba(220, 210, 190, 0.1)',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Device Bottom Home Bar */}
                  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                    <div style={{ width: '110px', height: '4px', backgroundColor: 'rgba(241, 237, 227, 0.35)', borderRadius: '2px' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

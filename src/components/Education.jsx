import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section
      id="education"
      className="section-dark-secondary"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#191A17'
      }}
    >
      {/* Subtle Ambient Warm Background Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: 'clamp(260px, 35vw, 500px)',
          height: 'clamp(260px, 35vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 138, 98, 0.12) 0%, rgba(25, 26, 23, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem' }}
          >
            <span className="section-tag section-tag-dark">
              <GraduationCap size={13} />
              <span>ACADEMIC BACKGROUND</span>
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
            Education &amp; Foundation
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
            Grounding software development and problem solving through structured computer science education.
          </motion.p>
        </div>

        {/* Structured Timeline Container */}
        <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {educationData.map((item, index) => {
              const isBCA = item.id === 'bca';
              const isLast = index === educationData.length - 1;

              return (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'clamp(28px, 4.5vw, 40px) 1fr',
                    gap: 'clamp(1rem, 3vw, 2rem)',
                    position: 'relative'
                  }}
                >
                  {/* Spine Column: Timeline Marker & Connecting Line */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {/* Timeline Node Marker */}
                    <div
                      style={{
                        width: 'clamp(24px, 3.5vw, 32px)',
                        height: 'clamp(24px, 3.5vw, 32px)',
                        borderRadius: '50%',
                        backgroundColor: isBCA ? 'var(--accent)' : '#24231F',
                        border: isBCA
                          ? '4px solid #191A17'
                          : '3px solid var(--accent)',
                        boxShadow: isBCA
                          ? '0 0 0 3px var(--accent), 0 4px 12px rgba(181, 138, 98, 0.3)'
                          : '0 2px 8px rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '1.25rem',
                        flexShrink: 0
                      }}
                    >
                      {isBCA && (
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#111210'
                          }}
                        />
                      )}
                    </div>

                    {/* Connecting Vertical Rail Line */}
                    {!isLast && (
                      <div
                        style={{
                          width: '2px',
                          flexGrow: 1,
                          minHeight: 'clamp(40px, 8vw, 80px)',
                          background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(181, 138, 98, 0.15) 100%)',
                          margin: '4px 0',
                          opacity: 0.6
                        }}
                      />
                    )}
                  </div>

                  {/* Right Content Column: Midnight Editorial Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      borderRadius: '24px',
                      backgroundColor: '#24231F',
                      border: '1px solid rgba(220, 210, 190, 0.12)',
                      padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                      boxShadow: 'var(--shadow-dark)',
                      marginBottom: isLast ? 0 : 'clamp(2rem, 4vw, 3rem)',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(181, 138, 98, 0.35)';
                      e.currentTarget.style.boxShadow = '0 16px 36px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(181, 138, 98, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(220, 210, 190, 0.12)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-dark)';
                    }}
                  >
                    {/* Header Row: Title & Badge */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '0.85rem'
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
                          fontWeight: 600,
                          color: 'var(--dark-text)',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.2
                        }}
                      >
                        {item.degree}
                      </h3>

                      {isBCA && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            padding: '0.35rem 0.85rem',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(181, 138, 98, 0.15)',
                            border: '1px solid rgba(181, 138, 98, 0.3)',
                            color: 'var(--accent)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            fontWeight: 600
                          }}
                        >
                          <div className="pulse-indicator">
                            <span className="ring" style={{ backgroundColor: 'rgba(181, 138, 98, 0.3)' }} />
                            <span className="dot" style={{ backgroundColor: 'var(--accent)' }} />
                          </div>
                          <span>Currently Pursuing</span>
                        </div>
                      )}
                    </div>

                    {/* Institution and University Details */}
                    {isBCA ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--dark-text-secondary)', fontSize: '1rem', fontWeight: 500 }}>
                          <Building2 size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                          <span>Christ College, Vizhinjam</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--dark-muted)', fontSize: '0.92rem' }}>
                          <BookOpen size={17} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                          <span>Kerala University · Batch 2026 – 2030</span>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--dark-text-secondary)', fontSize: '1rem', fontWeight: 500 }}>
                          <BookOpen size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                          <span>Computer Science Stream</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--dark-muted)', fontSize: '0.92rem' }}>
                          <Building2 size={17} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                          <span>CBSE (Central Board of Secondary Education)</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

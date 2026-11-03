import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-dark-secondary"
      style={{
        paddingTop: 'clamp(7.5rem, 15vw, 10.5rem)',
        paddingBottom: 'clamp(7.5rem, 15vw, 10.5rem)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        borderTop: 'none',
        borderBottom: 'none',
        border: 'none',
        backgroundColor: '#191A17'
      }}
    >
      {/* Subtle Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(320px, 60vw, 750px)',
          height: 'clamp(240px, 40vw, 480px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 138, 98, 0.14) 0%, rgba(25, 26, 23, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.75rem' }}
          >
            <span className="section-tag section-tag-dark">
              <Sparkles size={13} />
              <span>PHILOSOPHY</span>
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 6vw, 4.65rem)',
              fontWeight: 600,
              color: 'var(--dark-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.75rem'
            }}
          >
            LET'S DO IT!
          </motion.h2>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)',
              color: 'var(--dark-text-secondary)',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            Every project begins with an idea. Every challenge creates an opportunity to learn.
            My goal is to turn curiosity into practical digital experiences.
          </motion.p>

          {/* Editorial Author Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.65rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(220, 210, 190, 0.12)'
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(0.88rem, 2vw, 0.95rem)', color: 'var(--dark-text)' }}>
              K. Prathap Narayan
            </span>
            <span style={{ color: 'rgba(220, 210, 190, 0.35)' }}>•</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.8vw, 0.82rem)', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Aspiring Developer
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

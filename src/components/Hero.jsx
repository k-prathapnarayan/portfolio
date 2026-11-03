import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const bgTextY = useTransform(scrollY, [0, 600], [0, 70]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.85]);

  return (
    <section
      id="hero"
      className="section-dark"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 'clamp(5rem, 10vh, 7rem)',
        paddingBottom: 'clamp(5rem, 10vh, 7rem)',
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#111210'
      }}
    >
      {/* Oversized Vintage Editorial Background Typography "PORTFOLIO" */}
      <motion.div
        style={{
          y: bgTextY,
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          marginTop: 'clamp(-2.8rem, -6vw, -5.2rem)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          padding: '0 clamp(0.5rem, 2vw, 1.5rem)',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 13.5vw, 13.8rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 'clamp(0.015em, 0.35vw, 0.04em)',
            color: 'rgba(220, 210, 190, 0.035)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            maxWidth: '100%'
          }}
        >
          PORTFOLIO
        </div>
      </motion.div>

      {/* Subtle Vintage Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 0
        }}
      />

      {/* Soft Ambient Antique Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '10%',
          width: 'clamp(240px, 32vw, 480px)',
          height: 'clamp(240px, 32vw, 480px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 138, 98, 0.12) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(55px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '8%',
          width: 'clamp(220px, 30vw, 440px)',
          height: 'clamp(220px, 30vw, 440px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(36, 35, 31, 0.5) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Main Vintage Editorial Centerpiece */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="container"
        css={{ position: 'relative', zIndex: 1 }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Small Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 'clamp(0.6rem, 1.4vh, 1rem)' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.78rem, 1.6vw, 0.9rem)',
                color: '#AAA69B',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              HELLO, I'M
            </span>
          </motion.div>

          {/* Main Heading: K. Prathap Narayan */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 7.5vw, 5.8rem)',
              fontWeight: 600,
              color: '#F1EDE3',
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              margin: '0 auto clamp(0.85rem, 1.8vh, 1.4rem) auto',
              maxWidth: '100%'
            }}
          >
            K. Prathap Narayan
          </motion.h1>

          {/* Professional Identity with Delicate Antique Flourishes */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.55rem, 1.4vw, 0.95rem)'
            }}
          >
            <span
              style={{
                display: 'block',
                width: 'clamp(24px, 4.5vw, 44px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #B58A62)'
              }}
            />
            <span
              style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: '#B58A62'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.75rem, 1.6vw, 0.88rem)',
                fontWeight: 700,
                color: '#B58A62',
                letterSpacing: 'clamp(0.18em, 0.35vw, 0.24em)',
                textTransform: 'uppercase'
              }}
            >
              ASPIRING DEVELOPER
            </span>
            <span
              style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: '#B58A62'
              }}
            />
            <span
              style={{
                display: 'block',
                width: 'clamp(24px, 4.5vw, 44px)',
                height: '1px',
                background: 'linear-gradient(90deg, #B58A62, transparent)'
              }}
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

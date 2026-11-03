import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function About() {
  const scrollToSkills = (e) => {
    e.preventDefault();
    const element = document.getElementById('skills');
    if (element) {
      const navOffset = window.innerWidth < 768 ? 80 : 95;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="about"
      className="section-dark"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        overflow: 'hidden',
        borderBottom: 'none',
        border: 'none',
        outline: 'none'
      }}
    >
      {/* Cinematic Ambient Backdrop Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: 'clamp(300px, 45vw, 600px)',
          height: 'clamp(300px, 45vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 138, 98, 0.12) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-5%',
          width: 'clamp(260px, 40vw, 520px)',
          height: 'clamp(260px, 40vw, 520px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(36, 35, 31, 0.5) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(65px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Editorial Headline & Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <span className="section-tag section-tag-dark">
                <Sparkles size={13} />
                <span>ABOUT ME</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                color: 'var(--dark-text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2vw, 1.12rem)',
                lineHeight: 1.75,
                marginBottom: '2.5rem'
              }}
            >
              <p>
                I'm at the beginning of my development journey, exploring how technology can turn ideas into useful applications.
              </p>
              <p>
                With a growing foundation in web development and Python, I enjoy experimenting with Flask, modern frontend technologies, and AI-assisted workflows to explore solutions to practical problems.
              </p>
              <p style={{ color: 'var(--dark-text)', fontWeight: 500 }}>
                I believe every meaningful application starts with curiosity, a problem worth solving, and the willingness to learn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#skills"
                onClick={scrollToSkills}
                className="btn-dark-primary"
              >
                <span>Explore My Journey</span>
                <ArrowDown size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              position: 'relative'
            }}
          >
            {/* Elegant Portrait Frame Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                borderRadius: '32px',
                backgroundColor: 'rgba(25, 26, 23, 0.75)',
                border: '1px solid rgba(220, 210, 190, 0.12)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px rgba(181, 138, 98, 0.1)',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem) clamp(1.25rem, 3vw, 2rem) 0 clamp(1.25rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Background Radial Warm Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '35%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '85%',
                  height: '75%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(181, 138, 98, 0.22) 0%, rgba(36, 35, 31, 0.45) 50%, transparent 72%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />

              {/* Background Geometric Grid Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(220, 210, 190, 0.04) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                  opacity: 0.75,
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />

              {/* Delicate Editorial Top Tag */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid rgba(220, 210, 190, 0.08)',
                  marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600
                  }}
                >
                  PORTRAIT · IDENTITY
                </span>
              </div>

              {/* Protected Transparent Portrait Image Presentation */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  lineHeight: 0,
                  userSelect: 'none'
                }}
              >
                {/* Transparent Interaction Shield (Deters direct image right-click context menu & drag) */}
                <div
                  aria-hidden="true"
                  onContextMenu={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDragStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 3,
                    background: 'transparent',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    cursor: 'default'
                  }}
                />

                <img
                  src="/images/prathap.png"
                  alt="K. Prathap Narayan - Portrait"
                  width="1201"
                  height="1309"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 'clamp(340px, 46vw, 490px)',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0 18px 30px rgba(0, 0, 0, 0.65))',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    WebkitUserDrag: 'none',
                    WebkitTouchCallout: 'none',
                    pointerEvents: 'none',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

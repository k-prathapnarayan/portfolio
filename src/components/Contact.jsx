import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Linkedin, Copy, Check, MapPin, Globe } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/k-prathap-narayan/';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(LINKEDIN_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="section-dark"
      style={{
        paddingTop: 'clamp(4rem, 8vw, 6.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#111210'
      }}
    >
      {/* Cinematic Ambient Radial Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '5%',
          width: 'clamp(300px, 45vw, 600px)',
          height: 'clamp(300px, 45vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 138, 98, 0.15) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 'clamp(260px, 40vw, 500px)',
          height: 'clamp(260px, 40vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(36, 35, 31, 0.5) 0%, rgba(17, 18, 16, 0) 70%)',
          filter: 'blur(70px)',
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
          {/* Left Column: Get In Touch */}
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
                <span>GET IN TOUCH</span>
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
              Open to learning &amp; opportunities.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2vw, 1.12rem)',
                color: 'var(--dark-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}
            >
              I'm actively expanding my programming skillset, seeking mentorship, and exploring collaborative development opportunities. Feel free to connect.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--dark-text-secondary)', fontSize: '0.95rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent)' }} />
                <span>Kerala, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--dark-text-secondary)', fontSize: '0.95rem' }}>
                <Globe size={18} style={{ color: 'var(--accent)' }} />
                <span>Available for collaborations &amp; peer learning</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: LinkedIn Connection Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                borderRadius: '28px',
                backgroundColor: 'var(--dark-card)',
                border: '1px solid var(--dark-border)',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                boxShadow: 'var(--shadow-dark)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Corner Ambient Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '160px',
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(181, 138, 98, 0.15) 0%, transparent 70%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none'
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase'
                    }}
                  >
                    CONNECT WITH ME
                  </span>

                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(181, 138, 98, 0.15)',
                      border: '1px solid rgba(181, 138, 98, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)'
                    }}
                  >
                    <Linkedin size={22} />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                    fontWeight: 600,
                    color: 'var(--dark-text)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                    marginBottom: '0.4rem'
                  }}
                >
                  K. Prathap Narayan
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--dark-text-secondary)',
                    marginBottom: '1.75rem'
                  }}
                >
                  Aspiring Developer | Python &amp; Flask Enthusiast
                </p>

                {/* Primary Button */}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark-primary"
                  style={{ width: '100%', marginBottom: '1rem' }}
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={17} />
                </a>

                {/* Copy Link Helper */}
                <button
                  onClick={handleCopy}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--dark-border)',
                    color: copied ? 'var(--accent)' : 'var(--dark-muted)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      <span>Profile URL Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy LinkedIn Profile Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

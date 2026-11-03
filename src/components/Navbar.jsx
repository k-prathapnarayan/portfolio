import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'projects') {
      const element = document.getElementById('projects');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
      return;
    }

    const element = document.getElementById(id);
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
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 3vw, 2.5rem)',
          pointerEvents: 'none',
          transition: 'padding 0.3s ease'
        }}
      >
        <div
          className="navbar-pill"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '0.55rem 1rem' : '0.65rem 1.25rem',
            borderRadius: '9999px',
            backgroundColor: isScrolled ? 'rgba(17, 18, 16, 0.92)' : 'rgba(25, 26, 23, 0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(220, 210, 190, 0.12)',
            boxShadow: isScrolled
              ? '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3)'
              : '0 4px 14px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'auto',
            width: '100%'
          }}
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                color: '#111210',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              KP
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              PRATHAP
            </span>
          </a>

          {/* Desktop Navigation Items */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            className="desktop-nav"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  style={{
                    position: 'relative',
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    borderRadius: '9999px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillIndicator"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: '#24231F',
                        borderRadius: '9999px',
                        zIndex: -1,
                        border: '1px solid rgba(220, 210, 190, 0.12)'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: External LinkedIn Link & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a
              href="https://www.linkedin.com/in/k-prathap-narayan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.42rem 0.9rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--accent)',
                color: '#111210',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.01em',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(181, 138, 98, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'var(--accent)';
              }}
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="mobile-menu-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(220, 210, 190, 0.06)',
                border: '1px solid rgba(220, 210, 190, 0.12)',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Scrim Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 58
              }}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: 'clamp(4.8rem, 10vh, 5.5rem)',
                left: 'clamp(1rem, 4vw, 1.5rem)',
                right: 'clamp(1rem, 4vw, 1.5rem)',
                backgroundColor: '#191A17',
                borderRadius: '24px',
                border: '1px solid rgba(220, 210, 190, 0.14)',
                boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.7)',
                padding: '1.5rem',
                zIndex: 59,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                maxHeight: 'calc(100vh - 7rem)',
                overflowY: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(220, 210, 190, 0.1)', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Navigation
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                  K. Prathap Narayan
                </span>
              </div>

              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '14px',
                      backgroundColor: isActive ? '#24231F' : 'transparent',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '1.02rem',
                      border: isActive ? '1px solid rgba(220, 210, 190, 0.12)' : '1px solid transparent',
                      transition: 'background-color 0.15s ease'
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent)'
                        }}
                      />
                    )}
                  </a>
                );
              })}

              <div style={{ marginTop: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(220, 210, 190, 0.1)' }}>
                <a
                  href="https://www.linkedin.com/in/k-prathap-narayan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '14px',
                    backgroundColor: 'var(--accent)',
                    color: '#111210',
                    fontWeight: 600,
                    fontSize: '0.95rem'
                  }}
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 819px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

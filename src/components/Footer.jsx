import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
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
    <footer
      className="site-footer"
      style={{
        backgroundColor: '#111210',
        borderTop: '1px solid rgba(220, 210, 190, 0.12)',
        paddingTop: 'clamp(2.5rem, 4.5vw, 3.5rem)',
        paddingBottom: 'clamp(1.75rem, 3.5vw, 2.5rem)',
        position: 'relative',
        width: '100%',
        color: 'var(--dark-text)'
      }}
    >
      <div className="container">

        {/* Three-Column Desktop Structure / Clean Vertical Stack on Mobile */}
        <div className="footer-columns">

          {/* Left Column: Branding, Subtitle, Education */}
          <div className="footer-left-col">
            <div className="footer-brand-header">
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  color: '#111210',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  letterSpacing: '0.04em',
                  flexShrink: 0
                }}
              >
                KP
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
                  color: 'var(--dark-text)',
                  letterSpacing: '-0.02em'
                }}
              >
                PRATHAP<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
            </div>

            <p className="footer-subtitle">
              Aspiring Developer | Python &amp; Flask Enthusiast
            </p>

            <span className="footer-edu-desc">
              Pursuing BCA · Christ College, Vizhinjam (Kerala University)
            </span>
          </div>

          {/* Center Column: Navigation Heading & Two-Column Links */}
          <div className="footer-center-col">
            <span className="footer-section-heading">
              Navigation
            </span>

            <div className="footer-nav-grid">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: External Heading & LinkedIn Link */}
          <div className="footer-right-col">
            <span className="footer-section-heading">
              External
            </span>

            <a
              href="https://www.linkedin.com/in/k-prathap-narayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ext-link"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="footer-divider" />

        {/* Bottom Footer Bar: Left Copyright, Far Right Back to Top */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} K. Prathap Narayan. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="footer-back-to-top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      {/* Scoped Responsive Styles */}
      <style>{`
        /* Desktop Layout (3-Column Grid) */
        .footer-columns {
          display: grid;
          grid-template-columns: 1.5fr 1fr 0.8fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: flex-start;
        }

        .footer-left-col {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.65rem;
        }

        .footer-subtitle {
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: var(--dark-text-secondary);
          line-height: 1.55;
          margin-bottom: 0.65rem;
        }

        .footer-edu-desc {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--dark-muted);
          letter-spacing: 0.03em;
          line-height: 1.5;
        }

        .footer-section-heading {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--dark-muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(100px, 1fr));
          gap: 0.6rem 2rem;
        }

        .footer-link {
          font-size: 0.9rem;
          color: var(--dark-text-secondary);
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0;
        }

        .footer-link:hover {
          color: var(--dark-text);
        }

        .footer-ext-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.9rem;
          color: var(--accent);
          transition: opacity 0.2s ease;
          padding: 0.2rem 0;
        }

        .footer-ext-link:hover {
          opacity: 0.8;
        }

        /* Subtle Horizontal Divider */
        .footer-divider {
          height: 1px;
          background-color: rgba(220, 210, 190, 0.12);
          width: 100%;
          margin: clamp(1.75rem, 3.5vw, 2.5rem) 0 1.25rem 0;
        }

        /* Bottom Footer Bar */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          width: 100%;
          gap: 1.25rem;
        }

        .footer-copyright {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--dark-muted);
          margin: 0;
        }

        .footer-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.48rem 1rem;
          border-radius: var(--radius-pill);
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(220, 210, 190, 0.12);
          color: var(--dark-text-secondary);
          font-size: 0.82rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .footer-back-to-top:hover {
          color: var(--dark-text);
          border-color: rgba(181, 138, 98, 0.35);
          background-color: rgba(181, 138, 98, 0.1);
        }

        /* Tablet Layout (769px to 1024px) */
        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-columns {
            grid-template-columns: 1.3fr 1.1fr 0.9fr;
            gap: 2rem;
          }
        }

        /* Mobile Layout (< 768px) */
        @media (max-width: 768px) {
          .footer-columns {
            display: flex;
            flex-direction: column;
            gap: 1.65rem;
          }

          .footer-brand-header {
            margin-bottom: 0.4rem;
          }

          .footer-subtitle {
            margin-bottom: 0.45rem;
          }

          .footer-section-heading {
            margin-bottom: 0.75rem;
          }

          .footer-nav-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem 1.25rem;
            width: 100%;
          }

          .footer-link {
            font-size: 0.92rem;
            padding: 0.35rem 0;
            min-height: 38px;
          }

          .footer-ext-link {
            font-size: 0.92rem;
            min-height: 38px;
          }

          .footer-divider {
            margin: 1.5rem 0 1.25rem 0;
          }

          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .footer-back-to-top {
            width: 100%;
            justify-content: center;
            padding: 0.65rem 1.25rem;
            min-height: 42px;
            font-size: 0.86rem;
          }
        }
      `}</style>
    </footer>
  );
}

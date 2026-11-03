import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  LayoutGrid, 
  Terminal, 
  Server, 
  Database, 
  Bot, 
  Cpu, 
  Compass, 
  Wrench 
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const ICON_MAP = {
  Code2,
  Palette,
  Sparkles,
  LayoutGrid,
  Terminal,
  Server,
  Database,
  Bot,
  Cpu,
  Compass
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="section-wrapper" style={{ position: 'relative', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            <Wrench size={13} />
            <span>Capabilities &amp; Tools</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            My Technical Toolkit.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="section-description"
          >
            A deliberate collection of technologies and modern workflows I am cultivating to build responsive, robust, and real-world web applications.
          </motion.p>
        </div>

        {/* Filter Pills - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)'
          }}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '0.45rem clamp(0.75rem, 2vw, 1rem)',
              borderRadius: '9999px',
              fontSize: 'clamp(0.75rem, 1.8vw, 0.8125rem)',
              fontWeight: 600,
              transition: 'all 0.2s ease',
              backgroundColor: selectedCategory === 'all' ? '#F5F5F5' : '#1B1C21',
              color: selectedCategory === 'all' ? '#101114' : '#A6A6AD',
              border: '1px solid',
              borderColor: selectedCategory === 'all' ? '#F5F5F5' : 'rgba(255, 255, 255, 0.08)',
              minHeight: '38px',
              touchAction: 'manipulation'
            }}
          >
            All Areas ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.45rem clamp(0.75rem, 2vw, 1rem)',
                borderRadius: '9999px',
                fontSize: 'clamp(0.75rem, 1.8vw, 0.8125rem)',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                backgroundColor: selectedCategory === cat.id ? '#F5F5F5' : '#1B1C21',
                color: selectedCategory === cat.id ? '#101114' : '#A6A6AD',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? '#F5F5F5' : 'rgba(255, 255, 255, 0.08)',
                minHeight: '38px',
                touchAction: 'manipulation'
              }}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Categorized Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 6vw, 3.5rem)' }}>
          {filteredCategories.map((categoryGroup) => (
            <div key={categoryGroup.id} style={{ width: '100%' }}>
              {/* Category Subheading Banner */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.75rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.65rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                      fontWeight: 700,
                      color: '#F5F5F5',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {categoryGroup.category}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.18rem 0.55rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(181, 138, 98, 0.15)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(181, 138, 98, 0.25)',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {categoryGroup.badge}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    color: '#777982',
                    display: 'none'
                  }}
                  className="cat-desc-desktop"
                >
                  {categoryGroup.description}
                </span>
              </div>

              {/* Skills Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                  gap: 'clamp(0.85rem, 2vw, 1.25rem)'
                }}
              >
                {categoryGroup.skills.map((skill, index) => {
                  const Icon = ICON_MAP[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.45, delay: 0.05 * index }}
                      whileHover={{ y: -3 }}
                      className="apple-card"
                      style={{
                        padding: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: 'var(--bg-card)'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1rem'
                          }}
                        >
                          <div
                            style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '11px',
                              backgroundColor: 'var(--bg-card-elevated)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#F5F5F5',
                              flexShrink: 0
                            }}
                          >
                            <Icon size={19} strokeWidth={2} />
                          </div>

                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '9999px',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.06)',
                              color: '#A6A6AD',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {skill.tag}
                          </span>
                        </div>

                        <h4
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: '#F5F5F5',
                            letterSpacing: '-0.02em',
                            marginBottom: '0.2rem'
                          }}
                        >
                          {skill.name}
                        </h4>

                        <span
                          style={{
                            display: 'block',
                            fontSize: '0.78rem',
                            color: 'var(--accent)',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '0.55rem',
                            fontWeight: 500
                          }}
                        >
                          {skill.type}
                        </span>

                        <p
                          style={{
                            fontSize: '0.85rem',
                            lineHeight: 1.55,
                            color: '#A6A6AD'
                          }}
                        >
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 860px) {
          .cat-desc-desktop {
            display: inline-block !important;
          }
        }
      `}</style>
    </section>
  );
}

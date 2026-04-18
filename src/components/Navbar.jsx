import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Play, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionLink = motion(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subCount, setSubCount] = useState(542891);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubCount(prev => prev + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const formatCount = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Videos', path: '/videos' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}
      animate={scrolled ? {
        backgroundColor: [
          'rgba(168, 85, 247, 0.15)', // Purple
          'rgba(59, 130, 246, 0.15)', // Blue 
          'rgba(16, 185, 129, 0.15)', // Green
          'rgba(239, 68, 68, 0.15)',  // Red
          'rgba(168, 85, 247, 0.15)'  // Back to Purple
        ],
        borderBottom: [
          '1px solid rgba(168, 85, 247, 0.3)',
          '1px solid rgba(59, 130, 246, 0.3)',
          '1px solid rgba(16, 185, 129, 0.3)',
          '1px solid rgba(239, 68, 68, 0.3)',
          '1px solid rgba(168, 85, 247, 0.3)'
        ]
      } : { 
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderBottom: '1px solid transparent'
      }}
      transition={scrolled ? { duration: 10, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
      style={{
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', overflow: 'hidden', border: '2px solid var(--accent-secondary)' }}>
            <img src="/channels4_profile.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
            <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.75rem', letterSpacing: '0.05em' }}>ARAFATUN NOBI</span>
            
            {/* Dancing Subscribe Animation */}
            <div style={{ 
              display: 'flex', 
              pointerEvents: 'none',
              userSelect: 'none',
              marginBottom: '0.2rem'
            }}>
              {"PLEASE SUBSCRIBE".split("").map((char, index) => (
                <motion.span
                  key={index}
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [1, 0.9, 1],
                    scale: [1, 1.25, 1]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    delay: index * 0.08,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    display: 'inline-block', 
                    whiteSpace: 'pre',
                    fontSize: '1.8rem', 
                    fontWeight: '900',
                    fontFamily: '"Bebas Neue", sans-serif',
                    letterSpacing: '0.12em',
                    color: 'var(--accent-secondary)',
                    textShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subscriber Counter */}
            <div style={{ 
              marginLeft: '2rem', 
              paddingLeft: '2rem', 
              borderLeft: '2px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
              <div style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '0.5rem', borderRadius: '10px', display: 'flex' }}>
                <Users size={18} color="var(--accent-primary)" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: '80px' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.12em', lineHeight: 1 }}>Live Subscriber</span>
                <div style={{ overflow: 'hidden', height: '1.6rem', marginTop: '0.1rem' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={subCount}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "backOut" }}
                      style={{ 
                        fontFamily: '"Bebas Neue", sans-serif', 
                        fontSize: '1.6rem', 
                        color: 'var(--accent-primary)',
                        display: 'block',
                        lineHeight: 1
                      }}
                    >
                      {formatCount(subCount)}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <MotionLink 
              key={link.name} 
              to={link.path}
              style={{ 
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-main)',
                fontWeight: location.pathname === link.path ? '600' : '400',
                fontSize: '0.95rem'
              }}
              className="nav-link"
              whileHover={link.name === 'Home' ? { scale: 1.1, color: 'var(--accent-primary)' } : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={link.name === 'Home' ? { y: [0, -4, 0] } : {}}
              transition={link.name === 'Home' ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
            >
              {link.name}
            </MotionLink>
          ))}
          <motion.a 
            href="https://www.youtube.com/@Arafatven1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: ['0 0 0px var(--accent-secondary)', '0 0 20px var(--accent-secondary)', '0 0 0px var(--accent-secondary)']
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <Rocket size={18} />
            </motion.div>
            Subscribe
          </motion.a>
        </div>
        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', background: 'none', color: 'white' }}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (simplified for now) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{ position: 'absolute', top: '100%', left: 0, width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '1.1rem', color: location.pathname === link.path ? 'var(--accent-primary)' : 'white' }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link:hover { color: var(--accent-primary) !important; }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .w-full { width: 100%; }
        .z-50 { z-index: 50; }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;

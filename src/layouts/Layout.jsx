import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="floating-subscribe gradient-text">PLEASE SUBSCRIBE</div>
      <main>
        {children}
      </main>
      <footer className="glass" style={{ padding: '3rem 0', marginTop: '5rem', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ARAFATUN NOBI</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Bringing the fun of USA lifestyle and viral entertainment to you.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)' }}>
              <a href="https://youtube.com/@Arafatven1" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://github.com/arafatven1" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} <a href="https://github.com/ahadunnobi" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>Ahadun Nobi</a>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

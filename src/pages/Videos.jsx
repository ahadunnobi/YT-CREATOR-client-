import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Play, Eye, Calendar } from 'lucide-react';

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Pranks', 'Comedy', 'Sonic Community'];

  const allVideos = [
    { id: 'sGLCtRQg1vc', title: 'Wild Broken Chair Prank', category: 'Pranks', thumbnail: 'https://img.youtube.com/vi/sGLCtRQg1vc/maxresdefault.jpg', views: '1.2M', date: 'Just now' },
    { id: '0L79Lmou128', title: 'Magic Seat 💢', category: 'Comedy', thumbnail: 'https://img.youtube.com/vi/0L79Lmou128/maxresdefault.jpg', views: '850K', date: '1 day ago' },
    { id: 'JyKH1swn4jI', title: 'Why Amy is Missing', category: 'Sonic Community', thumbnail: 'https://img.youtube.com/vi/JyKH1swn4jI/maxresdefault.jpg', views: '2.1M', date: '3 days ago' },
    { id: 'PfcRNC65jFo', title: 'What did Sonic do to everyone?', category: 'Sonic Community', thumbnail: 'https://img.youtube.com/vi/PfcRNC65jFo/maxresdefault.jpg', views: '1.5M', date: '5 days ago' },
    { id: 'BJWS1PhmcW8', title: 'Sonic is scared 😁', category: 'Sonic Community', thumbnail: 'https://img.youtube.com/vi/BJWS1PhmcW8/maxresdefault.jpg', views: '900K', date: '1 week ago' },
    { id: 'VjcmnG1NOgY', title: 'Why did Amy run away?', category: 'Sonic Community', thumbnail: 'https://img.youtube.com/vi/VjcmnG1NOgY/maxresdefault.jpg', views: '1.8M', date: '1 week ago' },
    { id: 'pp9UBD3E6ag', title: 'What is Sonic phone password?', category: 'Sonic Community', thumbnail: 'https://img.youtube.com/vi/pp9UBD3E6ag/maxresdefault.jpg', views: '3.2M', date: '2 weeks ago' },
    { id: 'slyu3JmY8u0', title: 'What are they digging up?', category: 'Sonic Community', thumbnail: 'https://img.youtube.com/vi/slyu3JmY8u0/maxresdefault.jpg', views: '1.1M', date: '2 weeks ago' },
    { id: 'LnRsyyjv-u4', title: 'Really Confusing 😁', category: 'Comedy', thumbnail: 'https://img.youtube.com/vi/LnRsyyjv-u4/maxresdefault.jpg', views: '700K', date: '3 weeks ago' },
    { id: 'FfWSgcpYhQU', title: 'FiAAaaaaa #Comedy', category: 'Comedy', thumbnail: 'https://img.youtube.com/vi/FfWSgcpYhQU/maxresdefault.jpg', views: '500K', date: '1 month ago' },
    { id: 'nEne9Uuq2TQ', title: 'Power of Love #Comedy', category: 'Comedy', thumbnail: 'https://img.youtube.com/vi/nEne9Uuq2TQ/maxresdefault.jpg', views: '1.3M', date: '1 month ago' },
    { id: 'yEE_EXO6K6M', title: 'Wait for it... #Comedy', category: 'Comedy', thumbnail: 'https://img.youtube.com/vi/yEE_EXO6K6M/maxresdefault.jpg', views: '4.5M', date: '2 months ago' },
  ];

  const filteredVideos = activeCategory === 'All' 
    ? allVideos 
    : allVideos.filter(v => v.category === activeCategory);

  return (
    <div className="videos-page" style={{ paddingTop: '8rem' }}>
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="hero-title gradient-text">Creative Archive</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Explore my full catalog of cinematic stories and creative insights.</p>
          </div>

          {/* Search and Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3.5rem' }}>
            <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 1.5rem', borderRadius: '16px', width: '100%', maxWidth: '400px' }}>
              <Search size={20} color="var(--text-muted)" />
              <input 
                type="text" 
                placeholder="Search videos..." 
                style={{ background: 'none', border: 'none', color: 'white', outline: 'none', width: '100%', fontSize: '1rem' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-border)',
                    background: activeCategory === cat ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                    color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    whiteSpace: 'nowrap'
                  }}
                  className="cat-btn"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="auto-grid">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass video-card"
                style={{ borderRadius: '24px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="video-card-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', opacity: 0, transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'var(--accent-primary)', padding: '1.2rem', borderRadius: '50%' }}>
                      <Play size={24} color="white" fill="white" />
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(168, 85, 247, 0.2)', color: 'var(--accent-primary)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: 'bold' }}>{video.category}</span>
                  </div>
                  <h3 className="card-title" style={{ height: '3.5rem', overflow: 'hidden' }}>{video.title}</h3>
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Eye size={16} /> {video.views}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={16} /> {video.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .video-card:hover .video-card-overlay { opacity: 1 !important; }
        .cat-btn:hover { border-color: var(--accent-primary) !important; color: white !important; }
        ::-webkit-scrollbar { height: 6px; }
      `}</style>
    </div>
  );
};

export default Videos;

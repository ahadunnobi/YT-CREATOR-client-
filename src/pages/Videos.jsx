import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Play, Eye, Calendar } from 'lucide-react';

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Coding', 'Design', 'AI', 'Vlogs'];

  const allVideos = [
    { id: 1, title: 'The Future of AI: What You Need to Know', category: 'AI', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80', views: '1.2M', date: '2 days ago' },
    { id: 2, title: 'How I Built My Dream Setup 2026', category: 'Design', thumbnail: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80', views: '850K', date: '1 week ago' },
    { id: 3, title: 'Coding for 24 Hours Straight', category: 'Coding', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', views: '2.1M', date: '3 weeks ago' },
    { id: 4, title: 'React Server Components Explained', category: 'Coding', thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80', views: '450K', date: '1 month ago' },
    { id: 5, title: 'A Day in the Life of a Tech YouTuber', category: 'Vlogs', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', views: '320K', date: '1 month ago' },
    { id: 6, title: 'Stop Using Traditional CSS!', category: 'Design', thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80', views: '1.5M', date: '2 months ago' },
  ];

  const filteredVideos = activeCategory === 'All' 
    ? allVideos 
    : allVideos.filter(v => v.category === activeCategory);

  return (
    <div className="videos-page" style={{ paddingTop: '8rem' }}>
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Video Archive</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Explore my full catalog of technical tutorials and creative insights.</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass video-card"
                style={{ borderRadius: '24px', overflow: 'hidden' }}
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
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', lineHeight: '1.4', height: '3.5rem', overflow: 'hidden' }}>{video.title}</h3>
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

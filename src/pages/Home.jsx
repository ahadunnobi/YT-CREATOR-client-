import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Video, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Subscribers', value: '1.2M', icon: <Users className="text-purple-400" /> },
    { label: 'Total Views', value: '85M+', icon: <Eye className="text-blue-400" /> },
    { label: 'Videos', value: '450+', icon: <Video className="text-red-400" /> },
  ];

  const featuredVideos = [
    { id: 1, title: 'The Future of AI: What You Need to Know', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80', views: '1.2M' },
    { id: 2, title: 'How I Built My Dream Setup 2026', thumbnail: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80', views: '850K' },
    { id: 3, title: 'Coding for 24 Hours Straight', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', views: '2.1M' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ padding: 0, position: 'relative' }}>
        <div style={{ height: '400px', width: '100%', overflow: 'hidden' }}>
          <img src="/banner.png" alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div className="container" style={{ marginTop: '-100px', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center' }}>
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ width: '180px', height: '180px', borderRadius: '50%', border: '8px solid var(--bg-deep)', margin: '0 auto', overflow: 'hidden' }}
            >
              <img src="/pfp.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ marginTop: '1.5rem' }}
            >
              <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>ARAFATUN<span className="gradient-text">NOBI</span></h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                Tech YouTuber exploring the boundaries of AI, Code, and Creativity.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                <a href="https://www.youtube.com/@Arafatven1" target="_blank" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                  <Play size={20} fill="white" /> Subscribe Now
                </a>
                <Link to="/videos" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                  Latest Content <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section>
        <div className="container">
          <div className="glass" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '3rem', borderRadius: '32px' }}>
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                  {React.cloneElement(stat.icon, { size: 32 })}
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stat.value}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Latest <span className="gradient-text">Content</span></h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Stay updated with my most recent explorations.</p>
            </div>
            <Link to="/videos" className="btn btn-outline">View All</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {featuredVideos.map((video, i) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass"
                style={{ borderRadius: '24px', overflow: 'hidden', cursor: 'pointer' }}
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', opacity: 0, transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="video-overlay">
                    <div style={{ background: 'var(--accent-secondary)', padding: '1rem', borderRadius: '50%' }}>
                      <Play size={24} color="white" fill="white" />
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 'bold', textTransform: 'uppercase' }}>New Video</span>
                  <h3 style={{ marginTop: '0.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{video.title}</h3>
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Eye size={16} /> {video.views} views
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="glass" style={{ padding: '5rem 2rem', borderRadius: '48px', textAlign: 'center', background: 'linear-gradient(rgba(168, 85, 247, 0.1), rgba(0,0,0,0))' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to <span className="gradient-text">Collaborate?</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', marginBottom: '3rem' }}>
              I'm always looking for innovative projects and brands to partner with. Let's create something extraordinary.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .video-overlay:hover { opacity: 1 !important; }
        @media (max-width: 640px) {
          h1 { fontSize: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;

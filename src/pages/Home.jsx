import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Video, ArrowRight, Play, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Followers', value: '500K+', icon: <Users className="text-purple-400" /> },
    { label: 'Total Views', value: '120M+', icon: <Eye className="text-blue-400" /> },
    { label: 'Stories', value: '150+', icon: <Video className="text-red-400" /> },
  ];

  const featuredVideos = [
    { id: 'sGLCtRQg1vc', title: 'Wild Broken Chair Prank', thumbnail: 'https://img.youtube.com/vi/sGLCtRQg1vc/maxresdefault.jpg', views: '1.2M' },
    { id: '0L79Lmou128', title: 'Magic Seat 💢', thumbnail: 'https://img.youtube.com/vi/0L79Lmou128/maxresdefault.jpg', views: '850K' },
    { id: 'JyKH1swn4jI', title: 'Why Amy is Missing', thumbnail: 'https://img.youtube.com/vi/JyKH1swn4jI/maxresdefault.jpg', views: '2.1M' },
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
              <h1 className="hero-title">ARAFATUN <span className="gradient-text">NOBI</span></h1>
              
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }} className="card-title">
                Social Media Content Creator & Director capturing life's stories through a cinematic lens.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                <a href="https://www.youtube.com/@Arafatven1" target="_blank" className="btn btn-primary btn-takeoff" style={{ padding: '1rem 2rem', fontSize: '1.1rem', overflow: 'hidden' }}>
                  <Plane size={20} className="takeoff-icon" /> Subscribe Now
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
              <h2 className="sub-title">Latest <span className="gradient-text">Content</span></h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Stay updated with my most recent explorations.</p>
            </div>
            <Link to="/videos" className="btn btn-outline">View All</Link>
          </div>
          
          <div className="auto-grid">
            {featuredVideos.map((video, i) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass"
                style={{ borderRadius: '24px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
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
                  <h3 className="card-title" style={{ marginTop: '0.5rem' }}>{video.title}</h3>
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
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ready to <span className="gradient-text">Collaborate?</span></h2>
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

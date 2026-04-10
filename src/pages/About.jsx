import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Film, Camera, PlayCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Film className="text-purple-400" />, title: 'Viral King', description: 'Reaching millions through high-energy shorts and trends.' },
    { icon: <Clapperboard className="text-blue-400" />, title: 'Trend Creator', description: 'Defining the next wave of viral prank entertainment.' },
    { icon: <PlayCircle className="text-green-400" />, title: 'Sonic Universe', description: 'Crafting unique character-based comedy for a global niche.' },
    { icon: <Camera className="text-red-400" />, title: 'Fun of USA', description: 'Highlighting American culture through an entertaining lens.' },
  ];

  return (
    <div className="about-page" style={{ paddingTop: '8rem' }}>
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="hero-title gradient-text">The Face Behind Fun of USA</h1>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Hey, I'm ARAFATUN NOBI. My journey as a content creator is fueled by a simple mission: to bring a smile to my audience through high-energy entertainment and viral pranks. 
                As the face of "Fun of USA," I specialize in capturing the humor in everyday life and exploring the unique dynamics of character-driven comedy.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                With over 120 million views and a growing community, I dedicate my craft to redefining short-form storytelling. Whether it's a perfectly timed prank or a deep dive into the Sonic community, my goal is always the same—to create authentic, engaging content that connects with people globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass"
              style={{ borderRadius: '32px', overflow: 'hidden', height: '500px' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" 
                alt="Cinematic Work" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Grid */}
      <section style={{ margin: '5rem 0' }}>
        <div className="container">
          <div className="auto-grid">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass"
                style={{ padding: '2.5rem', borderRadius: '24px', textAlign: 'center' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {React.cloneElement(item.icon, { size: 40 })}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity / Values */}
      <section style={{ padding: '5rem 0', background: 'rgba(168, 85, 247, 0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>My <span className="gradient-text">Values</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>01. Instant Engagement</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>The first 3 seconds are everything. I focus on high-impact hooks that capture attention and keep viewers engaged until the very end.</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>02. Community First</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>My content is a conversation. I listen to my followers and create the challenges, reactions, and stories they want to see.</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>03. Viral Innovation</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Staying ahead of trends isn't enough—I aim to set them. I'm constantly experimenting with new formats to keep the content fresh and unexpected.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

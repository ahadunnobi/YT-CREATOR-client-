import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Globe, MessageSquare } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Award className="text-purple-400" />, title: '1.2M Subscribers', description: 'Building a global tech community.' },
    { icon: <Code className="text-blue-400" />, title: 'Full-Stack Expert', description: '10+ years of engineering experience.' },
    { icon: <Globe className="text-green-400" />, title: 'Global Impact', description: 'Viewers from 150+ countries.' },
    { icon: <MessageSquare className="text-red-400" />, title: 'Active Mentor', description: 'Helping thousands land tech jobs.' },
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
              <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>The Story Behind The Code</h1>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Hey, I'm ARAFATUN NOBI. I started this journey with a single purpose: to make high-end technology accessible to everyone. 
                What began as a small hobby project in my bedroom has now grown into a community of over 1.2 million passionate developers and tech enthusiasts.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                I believe that everyone should have the opportunity to build the future. That's why I dedicate my life to creating free, premium educational content that bridges the gap between theory and real-world application.
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Working" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Grid */}
      <section style={{ margin: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
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
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '4rem' }}>My <span className="gradient-text">Values</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>01. Quality Over Quantity</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Every video, line of code, and tutorial is crafted with meticulous attention to detail. I don't just teach "how" – I explain the "why".</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>02. Radical Transparency</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>I share my successes and my failures. The goal is to provide a realistic view of what it takes to succeed in the tech industry.</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>03. Community First</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>The platform exists for you. I listen to feedback, answer questions, and build content based on what the community needs most.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

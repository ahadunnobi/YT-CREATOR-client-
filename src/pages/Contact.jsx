import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Globe, Code, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  const socialLinks = [
    { icon: <Globe size={24} />, label: 'Twitter', link: 'https://twitter.com', color: '#1DA1F2' },
    { icon: <Code size={24} />, label: 'Github', link: 'https://github.com', color: '#f0f6fc' },
    { icon: <User size={24} />, label: 'LinkedIn', link: 'https://linkedin.com', color: '#0077B5' },
    { icon: <MessageSquare size={24} />, label: 'Discord', link: 'https://discord.com', color: '#5865F2' },
  ];

  return (
    <div className="contact-page" style={{ paddingTop: '8rem' }}>
      <section>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem' }}>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Let's Work Together</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.6' }}>
                Have a project in mind or want to discuss a potential sponsorship? Fill out the form or reach out directly via socials.
              </p>

              <div style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Me At</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>XCITYHACK@GMAIL.com</p>
                  </div>
                </div>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Follow My Journey</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass"
                    style={{ 
                      padding: '1rem', 
                      borderRadius: '16px', 
                      color: 'white', 
                      transition: '0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = social.color}
                    onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass"
              style={{ padding: '3rem', borderRadius: '32px' }}
            >
              {formState === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ background: 'var(--accent-primary)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <Send size={40} color="white" />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent!</h2>
                  <p style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                      <input required type="text" placeholder="John Doe" style={inputStyle} />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                      <input required type="email" placeholder="john@example.com" style={inputStyle} />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Subject</label>
                    <input required type="text" placeholder="Sponsorship Inquiry" style={inputStyle} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                    <textarea required rows="5" placeholder="Tell me about your project..." style={{ ...inputStyle, resize: 'none' }}></textarea>
                  </div>
                  <button 
                    disabled={formState === 'sending'}
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', justifyContent: 'center' }}
                  >
                    {formState === 'sending' ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem 1.5rem',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  color: 'white',
  outline: 'none',
  transition: '0.3s',
  fontSize: '1rem'
};

export default Contact;

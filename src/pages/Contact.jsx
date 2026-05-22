import { useState, useEffect } from 'react';
import { saveInquiry, getSettings } from '../data/store';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import '../styles/Pages.css';

export default function Contact() {
  const settings = getSettings();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    saveInquiry(form);
    setSent(true);
    setLoading(false);
  };

  return (
    <main className="contact-page page-enter">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="badge badge-blue reveal">Contact Us</div>
          <h1 className="display-lg reveal delay-1" style={{ marginTop: '1rem' }}>
            Let's Create Your <span className="gradient-text">Perfect Climate</span>
          </h1>
          <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
            Get a free consultation. Our experts will design the ideal solution for your space.
          </p>
        </div>
      </div>

      <section className="section dark-section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info reveal-left">
              <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
              <p style={{ color: 'var(--silver)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Whether you need a new installation, emergency repair, or an annual maintenance contract — our team is ready to help.
              </p>

              <div className="contact-details">
                <a href="tel:+919391138975" className="contact-item">
                  <div className="contact-icon-wrap"><Phone size={20} /></div>
                  <div>
                    <div className="contact-label">Phone / WhatsApp 1</div>
                    <div className="contact-value">+91 93911 38975</div>
                  </div>
                </a>
                <a href="tel:+919347143786" className="contact-item">
                  <div className="contact-icon-wrap"><Phone size={20} /></div>
                  <div>
                    <div className="contact-label">Phone / WhatsApp 2</div>
                    <div className="contact-value">+91 93471 43786</div>
                  </div>
                </a>
                <a href={`mailto:${settings.email}`} className="contact-item">
                  <div className="contact-icon-wrap"><Mail size={20} /></div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">{settings.email}</div>
                  </div>
                </a>
                <a href="https://maps.app.goo.gl/KNYCULxLZkNkPx9G8" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon-wrap"><MapPin size={20} /></div>
                  <div>
                    <div className="contact-label">Address <span style={{ color: 'var(--electric-blue)', fontSize: '0.75rem', fontWeight: 'normal', marginLeft: '6px' }}>(View on Map ↗)</span></div>
                    <div className="contact-value">{settings.address}</div>
                  </div>
                </a>
                <div className="contact-item">
                  <div className="contact-icon-wrap"><Clock size={20} /></div>
                  <div>
                    <div className="contact-label">Working Hours</div>
                    <div className="contact-value">{settings.workHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap glass-card reveal-right">
              {sent ? (
                <div className="form-success">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Inquiry Received!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! Our team will contact you within 2 hours.</p>
                  <button className="btn btn-primary" onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}>
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-heading">Book a Free Consultation</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone *</label>
                      <input className="form-input" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Required</label>
                    <select className="form-input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service...</option>
                      <option>New AC Installation</option>
                      <option>Annual Maintenance Contract</option>
                      <option>Emergency Repair</option>
                      <option>Deep Cleaning</option>
                      <option>Gas Refilling</option>
                      <option>IoT Upgrade</option>
                      <option>VRF System</option>
                      <option>Product Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-input" rows="4" placeholder="Describe your requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                    {loading ? 'Sending...' : <><Send size={16} /> Send Inquiry</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

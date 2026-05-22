import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';
import '../styles/Pages.css';

const TIMELINE = [
  { year: '2004', title: 'Founded in Hyderabad', desc: 'JK Comfort established as an authorized Carrier dealer in Banjara Hills, Hyderabad.' },
  { year: '2008', title: 'Toshiba Partnership', desc: 'Added Toshiba to our portfolio, expanding into commercial and industrial AC solutions.' },
  { year: '2012', title: '5,000 Installations', desc: 'Crossed the 5,000 successful installation milestone. Expanded to 3 service centers.' },
  { year: '2016', title: 'VRF & Smart Systems', desc: 'Launched VRF and IoT-enabled smart AC solutions for large enterprises.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Introduced app-based AMC tracking, remote diagnostics, and predictive maintenance.' },
  { year: '2026', title: 'RUNNING SUCCESSFULLY', desc: '15,000+ customers served. Premium rebranding as Hyderabad\'s top climate innovator.' },
];

const TEAM = [
  { name: 'Jagadeesh Kumar', role: 'Founder & CEO', desc: 'Former HVAC engineer with 25+ years of industry expertise.' },
  { name: 'Ravi Kiran', role: 'Technical Director', desc: 'Carrier-certified master technician. Specialist in VRF systems.' },
  { name: 'Sneha Reddy', role: 'Customer Success Head', desc: 'Leads our 24/7 support team, ensuring zero customer downtime.' },
  { name: 'Arjun Mehta', role: 'IoT Solutions Manager', desc: 'Expert in smart home integration and energy optimization systems.' },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="about-page page-enter">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="badge badge-blue reveal">Our Story</div>
          <h1 className="display-lg reveal delay-1" style={{ marginTop: '1rem' }}>
            Two Decades of <span className="gradient-text">Gravity-Defying</span> Comfort
          </h1>
          <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
            From a single showroom in Banjara Hills to Hyderabad's most trusted premium AC brand — this is our journey.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="section" style={{ background: 'var(--hero-bg)' }}>
        <div className="container">
          <div className="about-mission-grid">
            <div className="reveal-left">
              <img src="/about-team.png" alt="JK Comfort Team" className="about-img" style={{ borderRadius: '20px', boxShadow: 'var(--shadow-card)' }} />
            </div>
            <div className="about-mission-content reveal-right">
              <div className="badge badge-blue">Introduction</div>
              <h2 className="section-title" style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>
                About <span className="gradient-text">JK Comfort</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                At the outset, please permit us to introduce ourselves. Having established our enterprise in 2004, we are the authorized dealers for M/s Carrier Air-conditioners in Telangana. Carrier is a well-known brand of air-conditioning with world-wide presence.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                We undertake both sales, installation, repairs and servicing. Our repair, maintenance and servicing wings operate on 24X7 basis throughout the year. With the support of extensive infrastructure in designing and projects, we undertake execution of time bound turnkey projects in the field of air-conditioning. We have highly qualified and experienced technical personnel to take up any challenge in the complete range of windows, splits, Duct-able Air conditioners, central plants, ventilations and Air cooling systems.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                We are proud to have the credentials in successfully carrying out our projects for government departments, pharmaceuticals, software companies, hotels, hospitals, Public and Private sector institutions and even showrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--deep-navy)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal">Our Journey</div>
            <h2 className="section-title reveal delay-1">Milestones that <span className="gradient-text">Matter</span></h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div key={item.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`}>
                <div className="timeline-card glass-card">
                  <span className="mono timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section dark-section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-violet reveal">Leadership</div>
            <h2 className="section-title reveal delay-1">Meet the <span className="gradient-text">Team</span></h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={m.name} className={`team-card glass-card reveal delay-${i + 1}`}>
                <div className="team-avatar">{m.name.split(' ').map(n => n[0]).join('')}</div>
                <h3 className="team-name">{m.name}</h3>
                <span className="team-role mono">{m.role}</span>
                <p className="team-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-glow" />
        <div className="container cta-inner">
          <h2 className="display-md reveal">Ready to <span className="gradient-text">Partner with Us?</span></h2>
          <p style={{ color: 'var(--silver)', margin: '1rem 0 2rem' }} className="reveal delay-1">
            Experience the JK Comfort difference — premium products, expert installation, and lifetime support.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} className="reveal delay-2">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn btn-outline btn-lg">Our Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

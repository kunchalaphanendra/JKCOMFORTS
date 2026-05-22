import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wind, Wrench, Shield, Zap, Droplets, Wifi, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { getServices } from '../data/store';
import '../styles/Pages.css';

const ICON_MAP = { Wind, Wrench, Shield, Zap, Droplets, Wifi };

const AMC_PLANS = [
  { name: 'Basic', price: '₹2,499', period: '/year', features: ['1 Preventive Checkup', 'Gas Top-up', 'Minor Repairs', 'Email Support'], highlight: false },
  { name: 'Premium', price: '₹4,999', period: '/year', features: ['2 Preventive Checkups', 'Free Gas Refill', 'All Parts Covered', 'Priority Response', 'Deep Cleaning'], highlight: true },
  { name: 'Elite', price: '₹8,999', period: '/year', features: ['4 Preventive Checkups', 'Free Gas Refill', 'All Parts Covered', '2-Hr Emergency', 'IoT Monitoring', 'Energy Audit'], highlight: false },
];

export default function Services() {
  const services = getServices();

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="services-page page-enter">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="badge badge-blue reveal">Services</div>
          <h1 className="display-lg reveal delay-1" style={{ marginTop: '1rem' }}>
            Complete Climate <span className="gradient-text">Care</span>
          </h1>
          <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
            From installation to emergency repairs — we handle every aspect of your climate system.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section dark-section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="services-grid-full">
            {services.map((svc, i) => {
              const Icon = ICON_MAP[svc.icon] || Wind;
              return (
                <div key={svc.id} className={`svc-card glass-card reveal delay-${(i % 3) + 1}`}>
                  <div className="svc-icon-wrap">
                    <Icon size={28} />
                  </div>
                  <div className="svc-content">
                    <div className="svc-header">
                      <h3 className="svc-title">{svc.title}</h3>
                      <span className="svc-highlight badge badge-blue">{svc.highlight}</span>
                    </div>
                    <p className="svc-desc">{svc.description}</p>
                    <Link to="/contact" className="svc-cta">Get This Service <ArrowRight size={14} /></Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Commitment & Capability Section */}
      <section className="section commitment-section" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="commitment-grid">
            <div className="commitment-left reveal-left">
              <div className="badge badge-blue">Project Commitment &amp; Capability</div>
              <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                Uncompromising Quality. <span className="gradient-text">Delivered on Time.</span>
              </h2>
              <p className="commitment-text highlight-para" style={{ marginBottom: '1.5rem' }}>
                Herewith, we are undertaking that so far, whatever projects we have undertaken, we completed all projects within the time specified and according to the needs of the customer. All our customers have appreciated the work undertaken by us. The works we have done and the repeated orders we have received are ample proof of our ability, capability, capacity, and reputation.
              </p>
              <p className="commitment-text">
                We have a quality-oriented service center to cater to the complete satisfaction of our customers. We have well-trained and experienced technicians to attend to complaints received from customers. After receiving a call from a customer, our personnel attend to it in less than 2 hours. Our service engineers are professionally qualified and highly experienced. We maintain 6 vehicles and 5 dedicated cell connections exclusively for our service department to strengthen our service network, ensuring our customers can call us at any point of time, round the clock, for their requirements.
              </p>
            </div>
            <div className="commitment-right reveal-right">
              <div className="commitment-img-card glass-card">
                <img src="/hvac_schematic.png" alt="HVAC System Schematic Layout" className="commitment-blueprint-img" />
                <div className="blueprint-overlay">
                  <span className="blueprint-tag">SYSTEM DESIGN</span>
                  <h4 className="blueprint-title">Toshiba VRF &amp; Carrier Custom Layout</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="section" style={{ background: 'var(--deep-navy)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green reveal">AMC Plans</div>
            <h2 className="section-title reveal delay-1">Annual Maintenance <span className="gradient-text">Contracts</span></h2>
            <p className="section-subtitle reveal delay-2" style={{ margin: '0 auto' }}>
              Peace of mind, all year round. Choose the plan that fits your needs.
            </p>
          </div>
          <div className="amc-grid">
            {AMC_PLANS.map((plan, i) => (
              <div key={plan.name} className={`amc-card glass-card reveal delay-${i + 1} ${plan.highlight ? 'amc-highlight' : ''}`}>
                {plan.highlight && <div className="amc-popular">Most Popular</div>}
                <div className="amc-name">{plan.name}</div>
                <div className="amc-price">
                  <span className="amc-amount gradient-text">{plan.price}</span>
                  <span className="amc-period">{plan.period}</span>
                </div>
                <ul className="amc-features">
                  {plan.features.map(f => (
                    <li key={f}><CheckCircle size={14} />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn btn-lg ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-section dark-section">
        <div className="container">
          <div className="emergency-card glass-card reveal">
            <Zap size={40} className="emergency-icon" />
            <div className="emergency-content">
              <h3>AC Breakdown? We're Here <span className="gradient-text">24/7</span></h3>
              <p>Our emergency team reaches you within 2 hours, anywhere in Hyderabad.</p>
            </div>
            <a href="tel:+919391138975" className="btn btn-primary btn-lg">
              <Phone size={18} /> Call Emergency Line
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

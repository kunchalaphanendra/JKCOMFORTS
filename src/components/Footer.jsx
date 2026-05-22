import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import '../styles/Footer.css';

// Simple inline social icons
const FbIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IgIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const LiIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const YtIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#020408" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo size={44} />
            </div>
            <p className="footer-tagline">Authorized Carrier &amp; Toshiba dealer serving Hyderabad with premium, high-efficiency residential and commercial climate solutions.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FbIcon /></a>
              <a href="#" aria-label="Instagram"><IgIcon /></a>
              <a href="#" aria-label="LinkedIn"><LiIcon /></a>
              <a href="#" aria-label="YouTube"><YtIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/blog', 'Blog'], ['/contact', 'Contact Us']].map(([path, label]) => (
                <li key={path}><Link to={path}><ArrowRight size={12} />{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {['AC Installation', 'Annual Maintenance', 'Emergency Repair', 'Deep Cleaning', 'Gas Refilling', 'IoT Upgrade', 'VRF Systems'].map(s => (
                <li key={s}><Link to="/services"><ArrowRight size={12} />{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <a href="tel:+919391138975"><Phone size={15} /><span>+91 93911 38975</span></a>
              <a href="tel:+919347143786"><Phone size={15} /><span>+91 93471 43786</span></a>
              <a href="mailto:contact@jkcomforts.com"><Mail size={15} /><span>contact@jkcomforts.com</span></a>
              <a href="https://maps.app.goo.gl/KNYCULxLZkNkPx9G8" target="_blank" rel="noopener noreferrer" className="footer-address" style={{ display: 'flex', gap: '0.5rem', color: 'var(--silver)', transition: 'color 0.3s' }}>
                <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>H.No. 10-2-289/83, Mehar Mansion, Shanti Nagar, Masab Tank, Hyderabad - 500 028. Telangana India <span style={{ color: 'var(--electric-blue)', fontSize: '0.78rem' }}>(View Map ↗)</span></span>
              </a>
            </div>
            <div className="footer-hours">
              <span className="dot-accent" />
              <span>24/7 Emergency Support</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} JK Comfort Air Conditioners. All rights reserved.</p>
          <p>Authorized Dealer · Carrier · Toshiba · Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}

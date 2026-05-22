import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  {
    label: 'Products', path: '/products',
    sub: [
      { label: 'Carrier Residential', path: '/products?brand=carrier&type=residential' },
      { label: 'Carrier Commercial', path: '/products?brand=carrier&type=commercial' },
      { label: 'Toshiba Residential', path: '/products?brand=toshiba&type=residential' },
      { label: 'Toshiba Commercial', path: '/products?brand=toshiba&type=commercial' },
    ]
  },
  { label: 'Clients', path: '/clients' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();
  const dropRef = useRef();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handler);
    // Trigger scroll state on mount too
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { 
    setOpen(false); 
    setDropdown(null); 
  }, [location]);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropdown(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isHomepageTop = location.pathname === '/' && !scrolled;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'at-top'} ${isHomepageTop ? 'homepage-dark-top' : ''}`}>
      <div className="nav-inner container">
        {/* Logo */}
        <Link to="/" className="nav-logo" style={{ outline: 'none' }}>
          <Logo />
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links" ref={dropRef}>
          {NAV_LINKS.map(link => (
            <li key={link.label} className={link.sub ? 'has-dropdown' : ''}>
              {link.sub ? (
                <button
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                >
                  {link.label} <ChevronDown size={12} className={dropdown === link.label ? 'rotated' : ''} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )}
              {link.sub && dropdown === link.label && (
                <div className="dropdown">
                  {link.sub.map(s => (
                    <Link key={s.path} to={s.path} className="dropdown-item">{s.label}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta">
          <Link to="/products" className="nav-secondary-link">Explore Products</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Make an Enquiry</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.path} className="mobile-link">{link.label}</Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            Make an Enquiry
          </Link>
        </div>
      )}
    </nav>
  );
}

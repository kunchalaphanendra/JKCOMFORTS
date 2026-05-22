import { useState, useEffect } from 'react';
import { getGallery } from '../data/store';
import { Building2, Home, HeartPulse, Hotel, LayoutGrid } from 'lucide-react';
import '../styles/Pages.css';

const CATS = ['All', 'Commercial', 'Residential', 'Healthcare', 'Hospitality'];

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const gallery = getGallery();

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.gallery-page .reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = cat === 'All' ? gallery : gallery.filter(g => g.category === cat);

  const ICONS = { Commercial: Building2, Residential: Home, Healthcare: HeartPulse, Hospitality: Hotel };

  return (
    <main className="gallery-page page-enter">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="badge badge-blue reveal">Portfolio</div>
          <h1 className="display-lg reveal delay-1" style={{ marginTop: '1rem' }}>
            Our <span className="gradient-text">Installations</span>
          </h1>
          <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
            From luxury homes to enterprise campuses — a showcase of our finest work.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        {/* Filter */}
        <div className="gallery-filters">
          {CATS.map(c => (
            <button key={c} className={`filter-pill ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        {/* Grid — no reveal class, cards are always visible with a simple CSS fade */}
        <div className="gallery-grid">
          {filtered.map((item, i) => {
            const Icon = ICONS[item.category] || LayoutGrid;
            return (
              <div
                key={item.id}
                className="gallery-card glass-card"
                style={{
                  animation: `galleryFadeIn 0.4s ease ${i * 0.08}s both`,
                }}
              >
                <div className="gallery-img">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="gallery-actual-img" />
                  ) : (
                    <Icon size={40} className="gallery-icon" />
                  )}
                  <div className="gallery-overlay">
                    <span className="badge badge-blue">{item.category}</span>
                    <span className="mono gallery-year">{item.year}</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-title">{item.title}</h3>
                  <div className="badge badge-violet" style={{ display: 'inline-flex', marginTop: '0.5rem' }}>{item.category}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

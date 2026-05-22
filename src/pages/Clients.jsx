import { useState, useEffect } from 'react';
import { Search, Building, Landmark, Activity, ShoppingBag, ArrowRight } from 'lucide-react';
import '../styles/Clients.css';

// Brands categories
const CATEGORIES = ['All', 'Enterprise & Tech', 'Banking & Finance', 'Healthcare', 'Real Estate & Retail'];

// Brand logo rendering component loading transparent cropped PNGs
function BrandLogo({ id, name }) {
  return (
    <div className="brand-logo-img-container">
      <img
        src={`/logos/${id}.png`}
        alt={`${name} logo`}
        className="brand-logo-img"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
}

const CLIENTS_LIST = [
  // Row 1
  { id: 'pratyusha', name: 'Pratyusha Developers', category: 'Real Estate & Retail' },
  { id: 'varsity', name: 'Varsity Education', category: 'Enterprise & Tech' },
  { id: 'foodbazaar', name: 'Food Bazaar', category: 'Real Estate & Retail' },
  { id: 'reliancefresh', name: 'Reliance Fresh', category: 'Real Estate & Retail' },
  { id: 'bommarillu', name: 'Bommarillu Restaurant', category: 'Real Estate & Retail' },
  { id: 'accenture', name: 'Accenture', category: 'Enterprise & Tech' },
  { id: 'hdfcbank', name: 'HDFC Bank', category: 'Banking & Finance' },
  
  // Row 2
  { id: 'lahari', name: 'Lahari Resorts', category: 'Healthcare' }, // hospitality/wellness
  { id: 'chaitanya', name: 'Chaitanya School', category: 'Enterprise & Tech' },
  { id: 'hdbfinance', name: 'HDB Financial Services', category: 'Banking & Finance' },
  { id: 'publicschool', name: 'Public School', category: 'Enterprise & Tech' },
  { id: 'icicibank', name: 'ICICI Bank', category: 'Banking & Finance' },
  { id: 'sureshtextiles', name: 'Suresh Kumar Textiles', category: 'Real Estate & Retail' },
  { id: 'nissan', name: 'Nissan', category: 'Real Estate & Retail' },
  
  // Row 3
  { id: 'nclgroup', name: 'NCL Group', category: 'Real Estate & Retail' },
  { id: 'unisys', name: 'Unisys', category: 'Enterprise & Tech' },
  { id: 'invecas', name: 'Invecas Tech', category: 'Enterprise & Tech' },
  { id: 'apollo', name: 'Apollo Hospitals', category: 'Healthcare' },
  { id: 'mythri', name: 'Mythri Hospital', category: 'Healthcare' },
  { id: 'thumby', name: 'Thumby Hospital', category: 'Healthcare' },
  { id: 'sanzyme', name: 'Sanzyme Biologics', category: 'Healthcare' },
  
  // Row 4
  { id: 'eamobile', name: 'EA Mobile', category: 'Enterprise & Tech' },
  { id: 'eprocure', name: 'eProcurement Portal', category: 'Banking & Finance' },
  { id: 'axisbank', name: 'Axis Bank', category: 'Banking & Finance' },
  { id: 'amazon', name: 'Amazon', category: 'Enterprise & Tech' },
  { id: 'govtemblem', name: 'Govt. Organizations', category: 'Banking & Finance' },
  { id: 'hyundai', name: 'Lakshmi Hyundai', category: 'Real Estate & Retail' },
  { id: 'mmtc', name: 'MMTC Limited', category: 'Enterprise & Tech' },
  
  // Row 5
  { id: 'varunmotors', name: 'Varun Motors', category: 'Real Estate & Retail' },
  { id: 'lic', name: 'LIC India', category: 'Banking & Finance' },
  { id: 'kfc', name: 'KFC India', category: 'Real Estate & Retail' },
  { id: 'macconstruct', name: 'MAC Construction', category: 'Real Estate & Retail' },
  { id: 'idbibank', name: 'IDBI Bank', category: 'Banking & Finance' },
  { id: 'adityabirla', name: 'Aditya Birla Group', category: 'Real Estate & Retail' },
  { id: 'lodha', name: 'Lodha Primero', category: 'Real Estate & Retail' },
  
  // Row 6
  { id: 'vasaneyecare', name: 'Vasan Eye Care', category: 'Healthcare' },
  { id: 'indiacements', name: 'India Cements', category: 'Real Estate & Retail' },
  { id: 'more', name: 'More Supermarket', category: 'Real Estate & Retail' }
];

export default function Clients() {
  const [activeCat, setActiveCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeCat, searchQuery]);

  const filtered = CLIENTS_LIST.filter(c => {
    const matchesCat = activeCat === 'All' || c.category === activeCat;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="clients-page page-enter">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="badge badge-blue reveal">Our Partners</div>
          <h1 className="display-lg reveal delay-1" style={{ marginTop: '1rem' }}>
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h1>
          <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
            We deliver state-of-the-art climate control systems for India's finest corporations, hospitals, banks, and residences.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
        {/* Controls */}
        <div className="clients-controls reveal">
          <div className="category-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${activeCat === cat ? 'active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-bar-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="client-search-input"
            />
          </div>
        </div>

        {/* Clients Grid */}
        <div className="clients-grid">
          {filtered.length > 0 ? (
            filtered.map((client, idx) => (
              <div
                key={client.id}
                className={`client-card glass-card reveal delay-${(idx % 4) + 1}`}
              >
                <div className="client-logo-wrapper">
                  <BrandLogo id={client.id} name={client.name} />
                </div>
                <div className="client-card-info">
                  <h3 className="client-name">{client.name}</h3>
                  <span className="client-category-tag">{client.category}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results glass-card reveal" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 2rem' }}>
              <p style={{ color: 'var(--ghost)', fontSize: '1rem' }}>No clients found matching your search query.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

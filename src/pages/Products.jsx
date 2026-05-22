import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FileText, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/Products.css';

const PRODUCTS_DATA = {
  carrier: {
    residential: [
      {
        id: 'superia',
        title: 'Superia Series',
        description: 'Carrier\'s flagship residential series engineered for continuous comfort, featuring high-efficiency inverter compressors and intelligent active air purification.',
        image: '/carrier_superia_cutout.png',
        stars: [3, 5],
        models: [
          'Superia 365 Inverter',
          'Superia 5i Inverter',
          'Superia 4i Inverter',
          'Superia Inverter',
          'Superia 5 Star',
          'Superia 3 Star',
          'Superia 2 Star',
          'Superia 3 Star Red'
        ],
        catalog: '/carrierResidentialCatalog.pdf'
      },
      {
        id: 'superia-x',
        title: 'Superia-X Series',
        description: 'An extension of our signature comfort series, optimized for extreme weather durability with dual-filtration shields and rust-resistant copper condensers.',
        image: '/carrier_superiax_cutout.png',
        stars: [2, 3, 5],
        models: [
          'Superia-X 5 Star',
          'Superia-X 3 Star',
          'Superia-X 2 Star'
        ],
        catalog: '/carrierResidentialCatalog.pdf'
      },
      {
        id: 'octra',
        title: 'Octra Series',
        description: 'High-performance inverter cooling designed with sleek aesthetics, quiet ambient operations, and multi-directional auto-swing airflow control.',
        image: '/carrier_octra_cutout.png',
        stars: [3, 5],
        models: [
          'Octra 5i Inverter',
          'Octra 4i Inverter',
          'Octra Inverter',
          'Octra 5 Star',
          'Octra 3 Star',
          'Octra-X 5 Star',
          'Octra 3X Star'
        ],
        catalog: '/carrierResidentialCatalog.pdf'
      },
      {
        id: 'legend',
        title: 'Legend Series',
        description: 'Classic reliability meets modern power. Known for rapid pull-down cooling speed and a highly durable body that performs under peak summer loads.',
        image: '/carrier_legend_cutout.png',
        stars: [2, 3, 5],
        models: [
          'Legend 5 Star',
          'Legend 3 Star',
          'Legend 2 Star'
        ],
        catalog: '/carrierResidentialCatalog.pdf'
      },
      {
        id: 'duractiv',
        title: 'Duractiv Series',
        description: 'Designed for long-term operations under tough power grid fluctuations, featuring advanced stabiliser-free operation and high-tolerance circuits.',
        image: '/carrier_duractiv_cutout.png',
        stars: [2, 3, 5],
        models: [
          'Duractiv 5 Star',
          'Duractiv 3 Star',
          'Duractiv 2 Star',
          'Duractiv +2 Star',
          'Duractiv +3 Star',
          'Duractiv +5 Star'
        ],
        catalog: '/carrierResidentialCatalog.pdf'
      },
      {
        id: 'duranxt',
        title: 'Duranxt Series',
        description: 'Next-generation heavy-duty residential cooling with high-airflow blowers and reinforced casing to withstand severe external elements.',
        image: '/carrier_duranxt_cutout.png',
        stars: [2, 3, 5],
        models: [
          'Duranxt 5 Star',
          'Duranxt 3 Star',
          'Duranxt 2 Star',
          'Duranxt +2 Star',
          'Duranxt +3 Star',
          'Duranxt +5 Star'
        ],
        catalog: '/carrierResidentialCatalog.pdf'
      }
    ],
    commercial: [
      {
        id: 'c-com-cassette',
        title: 'Four Way Cassette Series',
        description: 'Available in 1.5 / 2.0 / 3.0 / 4.0 Ton capacities with 360° uniform airflow distribution, ideal for office spaces.',
        image: '/carrier_cassette_cutout.png',
        stars: [],
        models: [
          'R22 Fixed Speed',
          'R410a Fixed Speed'
        ],
        catalog: '/carrierCommercialCatalog.pdf'
      },
      {
        id: 'c-com-floor',
        title: 'Floor Standing Series',
        description: 'Available in 2TR / 2.8TR / 3.5TR / 4.3TR capacities designed for high-ceiling retail stores and large assembly halls.',
        image: '/carrier_floor_cutout.png',
        stars: [],
        models: [
          'Super Slim Floor Standing'
        ],
        catalog: '/carrierCommercialCatalog.pdf'
      },
      {
        id: 'c-com-ducted',
        title: 'Ducted Series',
        description: 'Multiple tonnage configurations available for concealed installations with customized duct routing.',
        image: '/carrier_ducted_cutout.png',
        stars: [],
        models: [
          'Ducted Rotary / Recip',
          'Ducted Scroll',
          'Digital Ducted',
          'Ducted R410A'
        ],
        catalog: '/carrierCommercialCatalog.pdf'
      },
      {
        id: 'c-com-packaged',
        title: 'Packaged AC Series',
        description: 'Available in 11 / 17 Ton heavy-duty all-in-one outdoor packages, providing high static pressure.',
        image: '/carrier_packaged_cutout.png',
        stars: [],
        models: [
          'Packaged AC'
        ],
        catalog: '/carrierCommercialCatalog.pdf'
      }
    ]
  },
  toshiba: {
    residential: [
      {
        id: 't-res-split-hi',
        title: 'Hi Wall Mounted Series',
        description: 'Residential split AC systems, Japanese engineering for silent operation and clean air delivery.',
        image: '/toshiba_split_hi_cutout.png',
        stars: [3, 5],
        models: [
          '5 Star Series',
          '3 Star Series',
          'Standard Series'
        ],
        catalog: '/toshibaResidentialCatalog.pdf'
      },
      {
        id: 't-res-split-inv',
        title: 'Hi Wall Mounted Inverter',
        description: 'Premium inverter residential systems, featuring Toshiba Hybrid Inverter technology for precise climate control.',
        image: '/toshiba_split_inv_cutout.png',
        stars: [5],
        models: [
          '5 Star Inverter',
          '4 Star Inverter',
          'Standard Inverter'
        ],
        catalog: '/toshibaResidentialCatalog.pdf'
      },
      {
        id: 't-res-console',
        title: 'Inverter Console Series',
        description: 'Console inverter cooling solutions, offering dual air discharge routes for maximum comfort.',
        image: '/toshiba_console_cutout.png',
        stars: [],
        models: [
          '1.5 TR Console',
          '1.87 TR Console',
          '2.84 TR Console',
          '3.4 TR Console'
        ],
        catalog: '/toshibaResidentialCatalog.pdf'
      }
    ],
    commercial: [
      {
        id: 't-com-cassette',
        title: 'Cassette Series',
        description: 'Commercial cassette AC systems designed to maintain peak cooling power under extreme ambient temperatures.',
        image: '/toshiba_cassette_cutout.png',
        stars: [],
        models: [
          'Stable Power Inverter',
          'Digital Inverter'
        ],
        catalog: '/toshibaCommercialCatalog.pdf'
      },
      {
        id: 't-com-ducted',
        title: 'Ducted Series',
        description: 'Commercial ducted HVAC systems featuring high external static pressure capabilities.',
        image: '/toshiba_ducted_cutout.png',
        stars: [],
        models: [
          'Stable Power Inverter',
          'Digital Inverter'
        ],
        catalog: '/toshibaCommercialCatalog.pdf'
      },
      {
        id: 't-com-di',
        title: 'Digital Inverter Series',
        description: 'High-efficiency commercial systems featuring Toshiba\'s advanced Digital Inverter technology for optimized power usage.',
        image: '/toshiba_di_cutout.png',
        stars: [],
        models: [
          'DI 1.5 Ton',
          'DI 2.0 Ton',
          'DI 3.0 Ton',
          'DI 4.0 Ton',
          'Super Digital Inverter 5 Star'
        ],
        catalog: '/toshibaCommercialCatalog.pdf'
      },
      {
        id: 't-com-vrf',
        title: 'VRF Systems',
        description: 'SMMS commercial VRF systems for modern multi-story buildings, offering high efficiency and long piping runs.',
        image: '/toshiba_vrf_cutout.png',
        stars: [],
        models: [
          'Top Discharge',
          'Side Discharge'
        ],
        catalog: '/toshibaCommercialCatalog.pdf'
      }
    ]
  }
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const brandParam = searchParams.get('brand');
  const typeParam = searchParams.get('type');

  const [activeBrand, setActiveBrand] = useState('carrier');
  const [activeType, setActiveType] = useState('residential');
  const [expandedFamilies, setExpandedFamilies] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (brandParam === 'carrier' || brandParam === 'toshiba') {
      setActiveBrand(brandParam);
    }
    if (typeParam === 'residential' || typeParam === 'commercial') {
      setActiveType(typeParam);
    }
  }, [brandParam, typeParam]);

  const handleBrandChange = (brand) => {
    setActiveBrand(brand);
    setSearchParams({ brand, type: activeType });
  };

  const handleTypeChange = (type) => {
    setActiveType(type);
    setSearchParams({ brand: activeBrand, type });
  };

  const toggleFamily = (id) => {
    setExpandedFamilies(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Re-observe elements on tab/view changes
  useEffect(() => {
    const observer = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeBrand, activeType]);

  const currentFamilies = PRODUCTS_DATA[activeBrand]?.[activeType] || [];

  return (
    <main className="products-page page-enter">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="badge badge-blue reveal">Product Catalogues</div>
          <h1 className="display-lg reveal delay-1" style={{ marginTop: '1rem' }}>
            Authorized <span className="gradient-text">HVAC Systems</span>
          </h1>
          <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
            Authorized distributor and service provider for world-leading cooling technology.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
        {/* Navigation Tabs */}
        <div className="products-tabs-container reveal">
          {/* Brand Tabs */}
          <div className="brand-tabs">
            <button
              className={`brand-tab-btn ${activeBrand === 'carrier' ? 'active' : ''}`}
              onClick={() => handleBrandChange('carrier')}
            >
              Carrier
            </button>
            <button
              className={`brand-tab-btn ${activeBrand === 'toshiba' ? 'active' : ''}`}
              onClick={() => handleBrandChange('toshiba')}
            >
              Toshiba
            </button>
          </div>

          {/* Sub Tabs */}
          <div className="sub-tabs">
            <button
              className={`sub-tab-btn ${activeType === 'residential' ? 'active' : ''}`}
              onClick={() => handleTypeChange('residential')}
            >
              Residential Cooling
            </button>
            <button
              className={`sub-tab-btn ${activeType === 'commercial' ? 'active' : ''}`}
              onClick={() => handleTypeChange('commercial')}
            >
              Commercial HVAC
            </button>
          </div>
        </div>

        {/* Current Active Heading */}
        <div className="catalog-header-bar reveal">
          <h2 className="catalog-title">
            {activeBrand === 'carrier' ? 'Carrier' : 'Toshiba'}{' '}
            {activeType === 'residential' ? 'Residential Series' : 'Commercial Systems'}
          </h2>
          <a
            href={`/catalogs/${activeBrand}${activeType.charAt(0).toUpperCase() + activeType.slice(1)}Catalog.pdf`}
            download
            className="btn btn-secondary btn-sm"
          >
            <FileText size={14} style={{ marginRight: '0.5rem' }} />
            Download Complete Catalogue
          </a>
        </div>

        {/* Display Unified Horizontal Accordion Layout for All Product Types */}
        <div className="horizontal-families-container">
          {currentFamilies.map((family, idx) => {
            const isExpanded = !!expandedFamilies[family.id];
            return (
              <div key={family.id} className={`family-card glass-card reveal delay-${(idx % 3) + 1}`}>
                <div className="family-card-inner">
                  {/* Left Side: Product Image */}
                  <div className="family-img-side">
                    <img src={family.image} alt={family.title} className="family-img" />
                    <div className="family-img-overlay" />
                  </div>

                  {/* Right Side: Product Details */}
                  <div className="family-info-side">
                    <div className="family-info-header">
                      <div className="family-title-row">
                        <h3 className="family-title">{family.title}</h3>
                        {family.stars && family.stars.length > 0 && (
                          <div className="family-stars">
                            {family.stars.map(star => (
                              <span key={star} className="star-badge">
                                ★ {star} Star
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="family-desc">{family.description}</p>
                    </div>

                    {/* CTA Actions */}
                    <div className="family-actions">
                      <button
                        className={`btn ${isExpanded ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                        onClick={() => toggleFamily(family.id)}
                        style={{ minWidth: '130px', justifyContent: 'center' }}
                      >
                        {isExpanded ? 'Hide Models' : 'View Models'}
                        <ChevronDown
                          size={14}
                          style={{
                            marginLeft: '0.5rem',
                            transform: isExpanded ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.3s'
                          }}
                        />
                      </button>
                      <a href={family.catalog} download className="btn btn-secondary btn-sm">
                        <FileText size={14} style={{ marginRight: '0.5rem' }} />
                        Download Catalogue
                      </a>
                    </div>

                    {/* Smooth Expandable Accordion for Model List */}
                    <div className={`family-accordion ${isExpanded ? 'expanded' : ''}`}>
                      <div className="family-accordion-content">
                        <h4 className="accordion-label">Available Models & Configurations:</h4>
                        <div className="model-chips-grid">
                          {family.models.map(model => (
                            <span key={model} className="model-chip">
                              {model}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Information Box */}
        <div className="catalog-info-box glass-card reveal">
          <div className="catalog-info-icon">
            <ShieldCheck size={28} className="text-blue" />
          </div>
          <div className="catalog-info-content">
            <h4>Technical Configurations & Custom HVAC Layouts</h4>
            <p>
              Detailed model configurations, dimensions, electrical parameters, and piping diagrams are excluded from this webpage to keep the interface clean and readable. Please download the full brand catalogue PDF, or contact our technical engineers for customized layout plans.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <Link to="/contact" className="btn btn-secondary btn-sm">
                Contact Our Engineers
                <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Zap, Star, Award, Users, Clock, Wind, Wrench, Wifi, Droplets, ChevronRight, Check, ThumbsUp } from 'lucide-react';
import { getProducts, getServices, getTestimonials, getGallery } from '../data/store';
import '../styles/Home.css';

// JPEGs have a natural dark gradient background. We blend them directly on a matching black container.
const STAT_ITEMS = [
  { value: '13+', label: 'Years of Excellence', icon: Award },
  { value: '15K+', label: 'Happy Customers', icon: Users },
  { value: '24/7', label: 'Emergency Support', icon: Clock },
  { value: '98%', label: 'Customer Satisfaction', icon: Star },
];

const WHY_US_CARDS = [
  {
    title: '100% Satisfaction',
    badge: 'Very Economy',
    icon: ThumbsUp,
    desc: 'Premium, luxury climate systems optimized for peak efficiency and long-term running economies without compromise.',
  },
  {
    title: '13 Years Experience',
    badge: 'Trusted',
    icon: Award,
    desc: 'Over 13 years of authorized Carrier & Toshiba excellence, designing custom climate zones for Hyderabad\'s finest estates.',
  },
  {
    title: 'Fast, Friendly Service',
    badge: 'Large Scale',
    icon: Clock,
    desc: 'Dedicated rapid-response teams reaching your site in less than 2 hours. Fully equipped for high-scale support.',
  },
  {
    title: 'Service Engineers',
    badge: 'Corporation',
    icon: Shield,
    desc: 'Certified, factory-trained HVAC engineers dedicated exclusively to elite system design, installation, and care.',
  },
];

const ICON_MAP = { Wind, Wrench, Shield, Zap, Droplets, Wifi };

// Exact background color of each of the 240 frames extracted via System.Drawing pixel sampling
const FRAME_COLORS = ["#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#040205", "#040205", "#040205", "#040205", "#030104", "#030104", "#030104", "#030104", "#040203", "#161417", "#262628", "#262628", "#333333", "#424244", "#4F5052", "#5C5C5C", "#5C5C5C", "#696969", "#747474", "#848484", "#909090", "#909090", "#9D9D9D", "#A7A7A7", "#B2B2B4", "#BABABC", "#BABABC", "#C4C4C6", "#CECED0", "#D7D7D9", "#DEDEE0", "#DEDEE0", "#E5E5E5", "#EEEEEE", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#EFEFEF", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#F0F0F0", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EDEDED", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EEEEEE", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EFEFEF", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EFEFEF", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#EEEEEE", "#E7E7E7", "#E7E7E7", "#DFDFDF", "#D6D6D6", "#CDCDCD", "#C3C3C3", "#C3C3C3", "#BABABA", "#B2B0B1", "#A9A7A8", "#9F9D9E", "#9F9D9E", "#969495", "#8D8B8C", "#838182", "#7A7879", "#7A7879", "#716F70", "#676566", "#5C5C5C", "#535353", "#535353", "#494949", "#404040", "#363636", "#2C2C2C", "#2C2C2C", "#222222", "#171717", "#020202", "#020202", "#020202", "#020202", "#020202", "#020202", "#020202", "#020202", "#010101", "#010101"];

export default function Home() {
  // Mobile check
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preloader State
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Scroll Canvas References
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressRef = useRef(0);
  const imagesRef = useRef([]);

  const totalFrames = 240;
  const products = getProducts().slice(0, 3);
  const services = getServices().slice(0, 6);
  const testimonials = getTestimonials();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const latestWorks = getGallery().filter(item => item.image).slice(0, 4);

  // 1. Instant Preloader & Background Loading
  useEffect(() => {
    // Load the first frame immediately to unblock the page load
    const firstImg = new Image();
    firstImg.src = '/FRAMS/ezgif-frame-001.jpg';

    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setLoadProgress(100);

      // Unblock UI immediately
      setTimeout(() => {
        setLoading(false);
      }, 50);

      // Load rest of the 239 frames in the background (only on desktop!)
      preloadBackgroundImages();
    };

    firstImg.onerror = () => {
      setLoading(false);
      preloadBackgroundImages();
    };

    const preloadBackgroundImages = () => {
      if (window.innerWidth <= 768) return; // Skip heavy background loading on mobile
      for (let i = 2; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, '0');
        img.src = `/FRAMS/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
          imagesRef.current[i - 1] = img;
        };
      }
    };
  }, []);

  // 2. Track Viewport-Relative Scroll Progress (Immune to Jitter)
  useEffect(() => {
    if (loading || isMobile) return;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // rect.top goes from 0 to -(rect.height - windowHeight) as user scrolls
      const totalScrollable = rect.height - windowHeight;
      let prog = 0;
      if (totalScrollable > 0) {
        prog = -rect.top / totalScrollable;
      }
      prog = Math.max(0, Math.min(1, prog));

      scrollProgressRef.current = prog;
      setScrollProgress(prog);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [loading]);

  // 3. Canvas Render Loop with Inertia/Damping
  useEffect(() => {
    if (loading || isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let currentFrame = 0;
    const targetFrameRef = { current: 0 };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      // Set target frame based on current scroll progress
      targetFrameRef.current = scrollProgressRef.current * (totalFrames - 1);

      // Interpolation (Damping)
      const diff = targetFrameRef.current - currentFrame;
      if (Math.abs(diff) > 0.01) {
        currentFrame += diff * 0.15; // smooth factor
      } else {
        currentFrame = targetFrameRef.current;
      }

      const frameIndex = Math.round(currentFrame);
      const img = imagesRef.current[frameIndex];

      // Draw active frame if loaded, otherwise fallback to index 0 (which is guaranteed loaded)
      const drawImg = img ? img : imagesRef.current[0];
      const bgColor = FRAME_COLORS[frameIndex] || '#030303';

      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.backgroundColor = bgColor;

        // Dynamically calculate luminosity to toggle dark/light text theme
        const r = parseInt(bgColor.slice(1, 3), 16);
        const g = parseInt(bgColor.slice(3, 5), 16);
        const b = parseInt(bgColor.slice(5, 7), 16);
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        if (luma < 120) {
          scrollContainerRef.current.classList.add('theme-dark');
          scrollContainerRef.current.classList.remove('theme-light');
        } else {
          scrollContainerRef.current.classList.add('theme-light');
          scrollContainerRef.current.classList.remove('theme-dark');
        }
      }

      if (drawImg) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fill canvas with the exact frame background color dynamically
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Fit image keeping aspect ratio
        // Crop the bottom 7% of the source image to completely strip the VEO watermark
        const cropPercent = 0.07;
        const sourceWidth = drawImg.width;
        const sourceHeight = Math.round(drawImg.height * (1 - cropPercent));

        const imgRatio = sourceWidth / sourceHeight;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let drawX = 0;
        let drawY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          drawX = (canvas.width - drawWidth) / 2;
        } else {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          drawY = (canvas.height - drawHeight) / 2;
        }

        // Apply scale and float offset (scale to 0.54 to keep AC clear of text and fit exploded parts inside screen)
        const scale = 0.54;
        const finalWidth = drawWidth * scale;
        const finalHeight = drawHeight * scale;
        const finalX = drawX + (drawWidth - finalWidth) / 2;

        // Ambient gently float effect (+/- 8px)
        const floatOffset = Math.sin(Date.now() / 1500) * 8;
        const finalY = drawY + (drawHeight - finalHeight) / 2 + (canvas.height * 0.02) + floatOffset;

        // Draw cropped raw frame
        ctx.drawImage(drawImg, 0, 0, sourceWidth, sourceHeight, finalX, finalY, finalWidth, finalHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [loading]);

  // 4. Scroll Reveal Observer for other sections
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 5. Testimonials auto slide
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  // 6. Text Overlay Fade Math
  const getBeatStyles = (opacity) => {
    return {
      opacity,
      transform: `translateY(${(1 - opacity) * 15}px)`,
    };
  };

  const beat1Opacity = scrollProgress < 0.12 ? 1 : scrollProgress > 0.17 ? 0 : (0.17 - scrollProgress) / 0.05;
  const beat2Opacity = scrollProgress < 0.17 || scrollProgress > 0.40 ? 0 : scrollProgress < 0.22 ? (scrollProgress - 0.17) / 0.05 : scrollProgress > 0.35 ? (0.40 - scrollProgress) / 0.05 : 1;
  const beat3Opacity = scrollProgress < 0.40 || scrollProgress > 0.65 ? 0 : scrollProgress < 0.45 ? (scrollProgress - 0.40) / 0.05 : scrollProgress > 0.60 ? (0.65 - scrollProgress) / 0.05 : 1;
  const beat4Opacity = scrollProgress < 0.65 || scrollProgress > 0.85 ? 0 : scrollProgress < 0.70 ? (scrollProgress - 0.65) / 0.05 : scrollProgress > 0.80 ? (0.85 - scrollProgress) / 0.05 : 1;
  const beat5Opacity = scrollProgress < 0.85 ? 0 : scrollProgress < 0.90 ? (scrollProgress - 0.85) / 0.05 : 1;

  return (
    <main className="home-page">
      {/* ---- PRELOADER SCREEN ---- */}
      <div className={`preloader ${loading ? '' : 'fade-out'}`}>
        <div className="preloader-inner">
          <div className="preloader-logo">JK Comfort</div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${loadProgress}%` }} />
          </div>
          <div className="progress-text">{loadProgress}%</div>
        </div>
      </div>

      {/* ---- HERO SCROLLING SEQUENCE (DESKTOP & MOBILE) ---- */}
      <section ref={scrollContainerRef} className="scroll-sequence-container theme-dark" style={{ backgroundColor: '#030303' }}>
        <div className="sticky-canvas-wrapper" style={{ backgroundColor: 'inherit' }}>
          <canvas ref={canvasRef} />

          {/* BEAT 1: Fully Assembled Hero */}
          <div className="story-beat beat-center beat-hero-layout" style={{ display: beat1Opacity > 0 ? 'flex' : 'none' }}>
            <div className="beat-content hero-content-split" style={getBeatStyles(beat1Opacity)}>
              <div className="hero-top-text">
                <span className="beat-tag">Authorized Carrier &amp; Toshiba Dealer</span>
                <h1 className="beat-headline">Silence, Precision, Comfort Perfected</h1>
                <p className="beat-subheadline">The Flagship Carrier Superia Lineup</p>
              </div>

              <div className="hero-bottom-actions">
                <p className="beat-subcopy">
                  Explore the pinnacle of residential and commercial climate engineering. Designed for high efficiency, quiet operations, and zero energy waste.
                </p>
                <div className="beat-actions">
                  <a href="tel:+919391138975" className="btn btn-primary btn-lg">
                    <Phone size={16} /> +91 93911 38975
                  </a>
                  <Link to="/products" className="btn btn-outline btn-lg">Explore Superia</Link>
                </div>
              </div>
            </div>
          </div>

          {/* BEAT 2: Disassembly Starts (Silence 22dB) - Aligned Left */}
          <div className="story-beat beat-left" style={{ display: beat2Opacity > 0 ? 'flex' : 'none' }}>
            <div className="beat-content" style={getBeatStyles(beat2Opacity)}>
              <span className="beat-tag">Acoustic Mastery</span>
              <h1 className="beat-headline">Whisper Quiet Operations</h1>
              <p className="beat-subheadline">Hospital-Grade Acoustic Dampening</p>
              <div className="beat-list">
                <div className="beat-list-item">
                  <Check size={16} /> Real-time active ambient noise control
                </div>
                <div className="beat-list-item">
                  <Check size={16} /> 22dB running levels — quieter than a whisper
                </div>
                <div className="beat-list-item">
                  <Check size={16} /> Specialized compressor mounts absorb vibration
                </div>
              </div>
              <p className="beat-subcopy">
                Comfort is felt, not heard. Experience climate control designed for undisturbed sleep and deep focus.
              </p>
            </div>
          </div>

          {/* BEAT 3: Mid-Disassembly (Copper Coils/Efficiency) - Aligned Right */}
          <div className="story-beat beat-right" style={{ display: beat3Opacity > 0 ? 'flex' : 'none' }}>
            <div className="beat-content" style={getBeatStyles(beat3Opacity)}>
              <span className="beat-tag">Thermal Engineering</span>
              <h1 className="beat-headline">Advanced Copper &amp; Compressor</h1>
              <p className="beat-subheadline">Variable Speed Inverter Power</p>
              <div className="beat-list">
                <div className="beat-list-item">
                  <Check size={16} /> 100% grooved copper tubes for 2x heat transfer
                </div>
                <div className="beat-list-item">
                  <Check size={16} /> Corrosion-resistant golden hydrophilic fins
                </div>
                <div className="beat-list-item">
                  <Check size={16} /> 5-Star rated energy efficiency matching demand
                </div>
              </div>
              <p className="beat-subcopy">
                Precision calculated airflow paths deliver high performance cooling in up to 55°C heat.
              </p>
            </div>
          </div>

          {/* BEAT 4: Exploded View (PCB & IoT Intelligence) - Aligned Left */}
          <div className="story-beat beat-left" style={{ display: beat4Opacity > 0 ? 'flex' : 'none' }}>
            <div className="beat-content" style={getBeatStyles(beat4Opacity)}>
              <span className="beat-tag">Smart Ecosystem</span>
              <h1 className="beat-headline">Climate Intelligence</h1>
              <p className="beat-subheadline">AI Learning &amp; IoT Architecture</p>
              <div className="beat-list">
                <div className="beat-list-item">
                  <Check size={16} /> Built-in WiFi for real-time mobile app management
                </div>
                <div className="beat-list-item">
                  <Check size={16} /> AI Ambient Learn adapts automatically to your habits
                </div>
                <div className="beat-list-item">
                  <Check size={16} /> Predictive diagnostic alerts prevent system failure
                </div>
              </div>
              <p className="beat-subcopy">
                Integrating seamlessly with smart home voice assistants. Keep your system running smoothly with over-the-air firmware updates.
              </p>
            </div>
          </div>

          {/* BEAT 5: Reassembly / Make Enquiry - Aligned Center */}
          <div className="story-beat beat-center beat-hero-layout" style={{ display: beat5Opacity > 0 ? 'flex' : 'none' }}>
            <div className="beat-content hero-content-split" style={getBeatStyles(beat5Opacity)}>
              <div className="hero-top-text">
                <span className="beat-tag">JK Comfort Premium</span>
                <h1 className="beat-headline">The Standard of Luxury Tech</h1>
                <p className="beat-subheadline">Carrier Superia 365 Inverter Lineup</p>
              </div>

              <div className="hero-bottom-actions">
                <p className="beat-subcopy">
                  Experience the perfect fusion of silence, precision, and efficiency. Get a free consultation and customized installation layout.
                </p>
                <div className="beat-actions">
                  <Link to="/contact" className="btn btn-primary btn-lg">Make an Enquiry</Link>
                  <Link to="/products" className="btn btn-outline btn-lg">View Detailed Specs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- STATS ---- */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {STAT_ITEMS.map((s, i) => (
              <div key={s.label} className={`stat-card reveal delay-${i + 1}`}>
                <s.icon size={26} className="stat-icon" />
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SERVICES ---- */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal">Our Services</div>
            <h2 className="section-title reveal delay-1">Comprehensive Climate Care</h2>
            <p className="section-subtitle reveal delay-2" style={{ margin: '0 auto' }}>
              From initial site audit to certified installations and predictive preventative maintenance, we handle it all.
            </p>
          </div>
          <div className="grid-3">
            {services.map((svc, i) => {
              const Icon = ICON_MAP[svc.icon] || Wind;
              return (
                <div key={svc.id} className={`service-card reveal delay-${(i % 3) + 1}`}>
                  <div className="service-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-desc">{svc.description}</p>
                  <span className="service-highlight">{svc.highlight}</span>
                </div>
              );
            })}
          </div>
          <div className="section-cta reveal">
            <Link to="/services" className="btn btn-outline">View All Services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ---- PRODUCTS ---- */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal">Product Catalog</div>
            <h2 className="section-title reveal delay-1">Precision Lineup</h2>
            <p className="section-subtitle reveal delay-2" style={{ margin: '0 auto' }}>
              Flagship Carrier Superia models and commercial VRF installations for custom-built layouts.
            </p>
          </div>
          <div className="grid-3">
            {products.map((p, i) => (
              <div key={p.id} className={`product-card reveal delay-${i + 1}`}>
                <div className="product-img-wrap">
                  <div className="product-img-placeholder">
                    <Wind size={40} className="product-img-icon" />
                  </div>
                  {p.tag && <span className="product-tag badge badge-blue">{p.tag}</span>}
                </div>
                <div className="product-info">
                  <div className="product-meta">
                    <span className="product-brand">{p.brand}</span>
                    <span className="product-energy">{'★'.repeat(parseInt(p.energy))} {p.energy}</span>
                  </div>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{p.price}</span>
                    <Link to="/contact" className="btn btn-ghost btn-sm">Enquire <ChevronRight size={14} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta reveal">
            <Link to="/products" className="btn btn-primary">Browse Full Catalog <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ---- WHY US ---- */}
      <section className="section whyus-section">
        <div className="container">
          <div className="whyus-grid">
            <div className="whyus-left reveal-left">
              <div className="badge badge-blue">Why JK Comfort</div>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>
                Two Decades of Trusted Excellence
              </h2>
              <p className="section-subtitle">
                Since 2004, JK Comfort has been Hyderabad's most trusted partner in premium climate control. We are an authorized dealer for Carrier and Toshiba.
              </p>
              <div className="whyus-cards-grid" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
                {WHY_US_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className={`whyus-card glass-card reveal delay-${idx + 1}`}>
                      <div className="whyus-card-header">
                        <div className="whyus-card-icon-wrap">
                          <Icon size={18} />
                        </div>
                        <span className="whyus-card-badge">{card.badge}</span>
                      </div>
                      <h3 className="whyus-card-title">{card.title}</h3>
                      <p className="whyus-card-desc">{card.desc}</p>
                    </div>
                  );
                })}
              </div>
              <Link to="/about" className="btn btn-outline">Learn Our Story <ArrowRight size={14} /></Link>
            </div>
            <div className="whyus-right reveal-right">
              <img src="/why-us.png" alt="JK Comfort Team" className="whyus-img" />
              <div className="whyus-badge-card">
                <Award size={22} className="whyus-badge-icon" />
                <div>
                  <div className="whyus-badge-title">Authorized Dealer</div>
                  <div className="whyus-badge-sub">Carrier &amp; Toshiba · Since 2004</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- LATEST WORKS ---- */}
      <section className="section latest-works-section" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <div className="badge badge-blue reveal">Portfolio</div>
            <h2 className="section-title reveal delay-1" style={{ marginTop: '1rem' }}>Our <span className="gradient-text">Latest Works</span></h2>
            <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
              Explore our recent luxury residential and commercial climate control installations across Hyderabad.
            </p>
          </div>

          <div className="latest-works-grid">
            {latestWorks.map((work, idx) => (
              <div key={work.id} className={`latest-work-card glass-card reveal delay-${idx + 1}`}>
                <img src={work.image} alt={work.title} className="latest-work-img" />
                <div className="latest-work-overlay">
                  <div className="latest-work-content">
                    <span className="latest-work-category">{work.category}</span>
                    <h3 className="latest-work-title">{work.title}</h3>
                    <span className="latest-work-year">{work.year}</span>
                    <Link to="/gallery" className="latest-work-link">
                      Know More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CLIENTS MARQUEE ---- */}
      <section id="clients" className="section clients-marquee-section" style={{ background: 'var(--bg-body)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <div className="badge badge-blue reveal">Enterprise Partners</div>
            <h2 className="section-title reveal delay-1" style={{ marginTop: '1rem' }}>Trusted by <span className="gradient-text">Major Brands</span></h2>
            <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
              Designing and maintaining complex multi-ton climate installations for India's leading organizations.
            </p>
          </div>
        </div>

        {/* Scrolling Marquee Wrapper */}
        <div className="marquee-container reveal delay-3">
          <div className="marquee-track">
            {[
              { id: 'accenture', name: 'Accenture' },
              { id: 'amazon', name: 'Amazon' },
              { id: 'hdfcbank', name: 'HDFC Bank' },
              { id: 'icicibank', name: 'ICICI Bank' },
              { id: 'axisbank', name: 'Axis Bank' },
              { id: 'nissan', name: 'Nissan' },
              { id: 'apollo', name: 'Apollo Hospitals' },
              { id: 'hyundai', name: 'Lakshmi Hyundai' },
              { id: 'kfc', name: 'KFC' },
              { id: 'lic', name: 'LIC' },
              { id: 'unisys', name: 'UNISYS' },
              { id: 'more', name: 'MORE' },
              // Duplicate for infinite scroll
              { id: 'accenture', name: 'Accenture' },
              { id: 'amazon', name: 'Amazon' },
              { id: 'hdfcbank', name: 'HDFC Bank' },
              { id: 'icicibank', name: 'ICICI Bank' },
              { id: 'axisbank', name: 'Axis Bank' },
              { id: 'nissan', name: 'Nissan' },
              { id: 'apollo', name: 'Apollo Hospitals' },
              { id: 'hyundai', name: 'Lakshmi Hyundai' },
              { id: 'kfc', name: 'KFC' },
              { id: 'lic', name: 'LIC' },
              { id: 'unisys', name: 'UNISYS' },
              { id: 'more', name: 'MORE' },
            ].map((c, i) => (
              <div key={i} className="marquee-logo-card glass-card">
                <img
                  src={`/logos/${c.id}.png`}
                  alt={`${c.name} logo`}
                  className="marquee-brand-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="container" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link to="/clients" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
            Explore All 38 Partners <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal">Client Stories</div>
            <h2 className="section-title reveal delay-1">What Our Clients Say</h2>
          </div>
          <div className="testimonials-slider reveal delay-2">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`testimonial-card ${i === activeTestimonial ? 'active' : ''}`}>
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`dot ${i === activeTestimonial ? 'active' : ''}`} onClick={() => setActiveTestimonial(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA BANNER ---- */}
      <section className="cta-banner">
        <div className="cta-glow" />
        <div className="container cta-inner">
          <div className="reveal">
            <h2 className="section-title">Ready to Elevate Your Comfort?</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              Book a complimentary site survey. Our engineers will audit your spaces and calculate the perfect load layout.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Book Free Survey <ArrowRight size={16} /></Link>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>EMERGENCY HOTLINE</span>
                <a href="tel:+919391138975" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0a0a0a' }}>+91 93911 38975</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- LOCATION ---- */}
      <section className="section location-section" style={{ background: 'var(--hero-bg)', borderTop: '1px solid var(--border)', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue reveal">Our Location</div>
            <h2 className="section-title reveal delay-1">Visit Our <span className="gradient-text">Headquarters</span></h2>
            <p className="section-subtitle reveal delay-2" style={{ margin: '0 auto' }}>
              H.No. 10-2-289/83, Mehar Mansion, Shanti Nagar, Masab Tank, Hyderabad - 500 028. Telangana India
            </p>
          </div>
          <div className="map-container reveal delay-3" style={{ width: '100%', height: '400px', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', background: 'var(--bg-accent)', marginTop: '2rem' }}>
            <iframe
              src="https://maps.google.com/maps?q=JK%20Comforts,%20Mehar%20Mansion,%20Shanti%20Nagar,%20Masab%20Tank,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="map-iframe"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map of JK Comforts Headquarters"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

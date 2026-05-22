import { useState, useEffect } from 'react';
import { getBlog } from '../data/store';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import '../styles/Pages.css';

export default function Blog() {
  const [active, setActive] = useState(null);
  const posts = getBlog();

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  if (active) {
    const post = posts.find(p => p.id === active);
    return (
      <main className="blog-page page-enter">
        <div className="page-hero" style={{ minHeight: '300px' }}>
          <div className="page-hero-glow" />
          <div className="container">
            <button className="btn btn-ghost btn-sm" onClick={() => setActive(null)} style={{ marginBottom: '1.5rem' }}>← Back to Blog</button>
            <div className="badge badge-blue">{post.category}</div>
            <h1 className="display-md" style={{ marginTop: '1rem', maxWidth: '800px' }}>{post.title}</h1>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', color: 'var(--silver)', fontSize: '0.85rem' }}>
              <span className="mono">{post.date}</span>
              <span><Clock size={14} style={{ display: 'inline' }} /> {post.readTime} read</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
        <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: '800px' }}>
          {post.image && <img src={post.image} alt={post.title} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '2rem' }} />}
          <p style={{ color: 'var(--silver)', lineHeight: 1.9, fontSize: '1.05rem' }}>{post.excerpt}</p>
          <div className="divider" />
          <div style={{ color: 'var(--silver)', lineHeight: 1.9, whiteSpace: 'pre-wrap', fontSize: '1.05rem', fontFamily: 'inherit' }}>{post.content}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-page page-enter">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="badge badge-blue reveal">Blog &amp; Tips</div>
          <h1 className="display-lg reveal delay-1" style={{ marginTop: '1rem' }}>
            Climate <span className="gradient-text">Insights</span>
          </h1>
          <p className="section-subtitle reveal delay-2" style={{ margin: '1rem auto 0' }}>
            Expert tips, industry news, and maintenance guides from our team.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <div key={post.id} className={`blog-card glass-card reveal delay-${(i % 3) + 1}`} onClick={() => setActive(post.id)}>
              <div className="blog-img" style={{ backgroundImage: post.image ? `url(${post.image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="blog-cat badge badge-blue"><Tag size={11} />{post.category}</div>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="mono">{post.date}</span>
                  <span><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="blog-read-more">Read More <ArrowRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

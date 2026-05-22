import { useState } from 'react';
import {
  LayoutDashboard, Package, Wrench, Image, FileText, Star, MessageSquare, Settings, LogOut, Menu, X,
  Users, TrendingUp, AlertCircle, CheckCircle, Plus, Trash2, Edit3, Save
} from 'lucide-react';
import {
  getProducts, saveProducts, getServices, saveServices,
  getTestimonials, saveTestimonials, getBlog, saveBlog,
  getGallery, saveGallery, getInquiries, getSettings, saveSettings
} from '../../data/store';
import '../../styles/Admin.css';

const SECTIONS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'services', label: 'Services', icon: Wrench },
  { id: 'testimonials', label: 'Testimonials', icon: Star },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
  { id: 'settings', label: 'Settings', icon: Settings },
];

function Toast({ msg, type }) {
  return msg ? <div className={`toast toast-${type}`}>{type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}{msg}</div> : null;
}

// ---- Dashboard ----
function Dashboard() {
  const products = getProducts(), services = getServices(), inquiries = getInquiries(), testimonials = getTestimonials();
  const stats = [
    { label: 'Products', value: products.length, icon: Package, color: 'blue' },
    { label: 'Services', value: services.length, icon: Wrench, color: 'violet' },
    { label: 'Inquiries', value: inquiries.length, icon: MessageSquare, color: 'green' },
    { label: 'Testimonials', value: testimonials.length, icon: Star, color: 'blue' },
  ];
  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Dashboard</h2>
      <div className="dashboard-stats">
        {stats.map(s => (
          <div key={s.label} className="dash-stat glass-card">
            <s.icon size={24} className={`dash-stat-icon dash-stat-${s.color}`} />
            <div className="dash-stat-val">{s.value}</div>
            <div className="dash-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="admin-recent glass-card">
        <h3 className="admin-card-title">Recent Inquiries</h3>
        {inquiries.length === 0 ? (
          <p style={{ color: 'var(--ghost)', fontSize: '0.88rem' }}>No inquiries yet.</p>
        ) : (
          <table className="admin-table">
            <thead><tr><th>Name</th><th>Phone</th><th>Service</th><th>Date</th></tr></thead>
            <tbody>
              {inquiries.slice(0, 5).map(inq => (
                <tr key={inq.id}>
                  <td>{inq.name}</td>
                  <td>{inq.phone}</td>
                  <td>{inq.service || '—'}</td>
                  <td className="mono" style={{ fontSize: '0.78rem' }}>{inq.date?.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ---- Generic List Manager ----
function ListManager({ title, items, setItems, save, fields, renderItem }) {
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState({});
  const [toast, setToast] = useState({ msg: '', type: '' });

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: '', type: '' }), 3000);
  };

  const handleSave = () => {
    let updated;
    if (draft.id && items.find(i => i.id === draft.id)) {
      updated = items.map(i => i.id === draft.id ? draft : i);
    } else {
      updated = [...items, { ...draft, id: Date.now() }];
    }
    setItems(updated);
    save(updated);
    setEditing(null);
    setDraft({});
    showToast(`${title} saved!`);
  };

  const handleDelete = (id) => {
    if (!window.confirm('Delete this item?')) return;
    const updated = items.filter(i => i.id !== id);
    setItems(updated);
    save(updated);
    showToast('Deleted.', 'error');
  };

  return (
    <div className="admin-section">
      <Toast msg={toast.msg} type={toast.type} />
      <div className="admin-section-header">
        <h2 className="admin-section-title">{title}</h2>
        <button className="btn btn-primary btn-sm" onClick={() => { setEditing('new'); setDraft({}); }}>
          <Plus size={14} /> Add New
        </button>
      </div>

      {/* Edit Form */}
      {editing && (
        <div className="admin-form glass-card">
          <h3 className="admin-card-title">{draft.id ? 'Edit' : 'Add New'} {title}</h3>
          <div className="admin-form-grid">
            {fields.map(f => (
              <div key={f.key} className="form-group" style={f.full ? { gridColumn: '1/-1' } : {}}>
                <label className="form-label">{f.label}</label>
                {f.type === 'textarea' ? (
                  <textarea className="form-input" value={draft[f.key] || ''} onChange={e => setDraft({ ...draft, [f.key]: e.target.value })} rows={3} />
                ) : f.type === 'select' ? (
                  <select className="form-input" value={draft[f.key] || ''} onChange={e => setDraft({ ...draft, [f.key]: e.target.value })}>
                    <option value="">Select...</option>
                    {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : (
                  <input className="form-input" type={f.type || 'text'} value={draft[f.key] || ''} onChange={e => setDraft({ ...draft, [f.key]: e.target.value })} placeholder={f.placeholder || ''} />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button className="btn btn-primary" onClick={handleSave}><Save size={14} /> Save</button>
            <button className="btn btn-ghost" onClick={() => { setEditing(null); setDraft({}); }}>Cancel</button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="admin-list">
        {items.length === 0 ? (
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--ghost)' }}>No items yet.</div>
        ) : (
          items.map(item => (
            <div key={item.id} className="admin-list-item glass-card">
              <div className="admin-list-content">{renderItem(item)}</div>
              <div className="admin-list-actions">
                <button className="admin-btn-edit" onClick={() => { setEditing(item.id); setDraft(item); }}><Edit3 size={14} /></button>
                <button className="admin-btn-delete" onClick={() => handleDelete(item.id)}><Trash2 size={14} /></button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ---- Settings ----
function SettingsPanel() {
  const [s, setS] = useState(getSettings());
  const [toast, setToast] = useState('');
  const save = () => { saveSettings(s); setToast('Settings saved!'); setTimeout(() => setToast(''), 3000); };
  const fields = [
    { key: 'phone', label: 'Phone Number' }, { key: 'email', label: 'Email Address' },
    { key: 'address', label: 'Address', full: true }, { key: 'workHours', label: 'Working Hours', full: true },
    { key: 'tagline', label: 'Brand Tagline', full: true },
  ];
  return (
    <div className="admin-section">
      {toast && <div className="toast toast-success"><CheckCircle size={16} />{toast}</div>}
      <h2 className="admin-section-title">Settings</h2>
      <div className="glass-card" style={{ padding: '2rem' }}>
        <div className="admin-form-grid">
          {fields.map(f => (
            <div key={f.key} className="form-group" style={f.full ? { gridColumn: '1/-1' } : {}}>
              <label className="form-label">{f.label}</label>
              <input className="form-input" value={s[f.key] || ''} onChange={e => setS({ ...s, [f.key]: e.target.value })} />
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={save} style={{ marginTop: '1rem' }}><Save size={14} /> Save Settings</button>
      </div>
    </div>
  );
}

// ---- Inquiries ----
function InquiriesPanel() {
  const inquiries = getInquiries();
  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Inquiries ({inquiries.length})</h2>
      {inquiries.length === 0 ? (
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--ghost)' }}>No inquiries yet.</div>
      ) : (
        <div className="admin-list">
          {inquiries.map(inq => (
            <div key={inq.id} className="admin-list-item glass-card">
              <div>
                <div style={{ fontWeight: 700 }}>{inq.name} <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--ghost)' }}>— {inq.date?.slice(0, 10)}</span></div>
                <div style={{ fontSize: '0.85rem', color: 'var(--silver)', marginTop: '0.3rem' }}>📞 {inq.phone} · ✉️ {inq.email} · 🔧 {inq.service}</div>
                {inq.message && <div style={{ fontSize: '0.85rem', color: 'var(--ghost)', marginTop: '0.3rem' }}>{inq.message}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- MAIN DASHBOARD ----
export default function AdminDashboard({ onLogout }) {
  const [section, setSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [products, setProducts] = useState(getProducts);
  const [services, setServices] = useState(getServices);
  const [testimonials, setTestimonials] = useState(getTestimonials);
  const [blog, setBlog] = useState(getBlog);
  const [gallery, setGallery] = useState(getGallery);

  const handleLogout = () => { sessionStorage.removeItem('jkc_admin'); onLogout(); };

  const renderSection = () => {
    switch (section) {
      case 'dashboard': return <Dashboard />;
      case 'inquiries': return <InquiriesPanel />;
      case 'settings': return <SettingsPanel />;
      case 'products': return (
        <ListManager title="Products" items={products} setItems={setProducts} save={saveProducts}
          fields={[
            { key: 'name', label: 'Product Name' }, { key: 'category', label: 'Category', type: 'select', options: ['Split AC', 'Cassette AC', 'Central AC', 'VRF System'] },
            { key: 'brand', label: 'Brand', type: 'select', options: ['Carrier', 'Toshiba'] }, { key: 'capacity', label: 'Capacity (e.g. 1.5 Ton)' },
            { key: 'energy', label: 'Energy Rating (e.g. 5 Star)' }, { key: 'price', label: 'Price (e.g. ₹48,000)' },
            { key: 'tag', label: 'Tag (e.g. Best Seller)' }, { key: 'description', label: 'Description', type: 'textarea', full: true },
          ]}
          renderItem={p => <div><span className="mono" style={{ fontSize: '0.78rem', color: 'var(--electric-blue)' }}>{p.brand} · {p.category}</span><div style={{ fontWeight: 700 }}>{p.name}</div><div style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>{p.price} · {p.capacity} · {p.energy}</div></div>}
        />
      );
      case 'services': return (
        <ListManager title="Services" items={services} setItems={setServices} save={saveServices}
          fields={[
            { key: 'title', label: 'Service Title' }, { key: 'icon', label: 'Icon', type: 'select', options: ['Wind', 'Wrench', 'Shield', 'Zap', 'Droplets', 'Wifi'] },
            { key: 'highlight', label: 'Highlight (e.g. 24hr Guarantee)' }, { key: 'description', label: 'Description', type: 'textarea', full: true },
          ]}
          renderItem={s => <div><div style={{ fontWeight: 700 }}>{s.title}</div><div style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>{s.highlight}</div></div>}
        />
      );
      case 'testimonials': return (
        <ListManager title="Testimonials" items={testimonials} setItems={setTestimonials} save={saveTestimonials}
          fields={[
            { key: 'name', label: 'Client Name' }, { key: 'role', label: 'Role / Company' },
            { key: 'avatar', label: 'Initials (e.g. JK)' }, { key: 'rating', label: 'Rating (1-5)', type: 'number' },
            { key: 'text', label: 'Testimonial Text', type: 'textarea', full: true },
          ]}
          renderItem={t => <div><div style={{ fontWeight: 700 }}>{t.name}</div><div style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>{t.role} · {'★'.repeat(t.rating)}</div></div>}
        />
      );
      case 'blog': return (
        <ListManager title="Blog" items={blog} setItems={setBlog} save={saveBlog}
          fields={[
            { key: 'title', label: 'Post Title', full: true }, { key: 'category', label: 'Category' },
            { key: 'author', label: 'Author' }, { key: 'date', label: 'Date (YYYY-MM-DD)' },
            { key: 'readTime', label: 'Read Time (e.g. 4 min)' }, { key: 'excerpt', label: 'Excerpt', type: 'textarea', full: true },
            { key: 'content', label: 'Content', type: 'textarea', full: true },
          ]}
          renderItem={b => <div><div style={{ fontWeight: 700 }}>{b.title}</div><div style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>{b.category} · {b.date} · {b.readTime}</div></div>}
        />
      );
      case 'gallery': return (
        <ListManager title="Gallery" items={gallery} setItems={setGallery} save={saveGallery}
          fields={[
            { key: 'title', label: 'Project Title', full: true },
            { key: 'category', label: 'Category', type: 'select', options: ['Commercial', 'Residential', 'Healthcare', 'Hospitality'] },
            { key: 'year', label: 'Year (e.g. 2024)' },
            { key: 'image', label: 'Image URL / Path (e.g. /gallery_vrf.png)', full: true },
          ]}
          renderItem={g => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {g.image ? (
                <img src={g.image} alt={g.title} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--border)' }} />
              ) : (
                <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'var(--ghost)' }}>❄</div>
              )}
              <div>
                <div style={{ fontWeight: 700 }}>{g.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>{g.category} · {g.year}</div>
              </div>
            </div>
          )}
        />
      );
      default: return null;
    }
  };

  const ActiveIcon = SECTIONS.find(s => s.id === section)?.icon || LayoutDashboard;

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="admin-sidebar-logo">
          <span style={{ fontSize: '1.4rem' }}>❄</span>
          {sidebarOpen && <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.08em' }}>JK COMFORT</span>}
        </div>
        <nav className="admin-nav">
          {SECTIONS.map(s => (
            <button key={s.id} className={`admin-nav-item ${section === s.id ? 'active' : ''}`} onClick={() => setSection(s.id)}>
              <s.icon size={18} />
              {sidebarOpen && <span>{s.label}</span>}
            </button>
          ))}
        </nav>
        <button className="admin-nav-item admin-logout" onClick={handleLogout}>
          <LogOut size={18} />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </aside>

      {/* Main */}
      <div className="admin-main">
        <header className="admin-header">
          <button className="admin-toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="admin-header-title">
            <ActiveIcon size={18} style={{ color: 'var(--electric-blue)' }} />
            <span>{SECTIONS.find(s => s.id === section)?.label}</span>
          </div>
          <a href="/" target="_blank" className="btn btn-ghost btn-sm">View Site ↗</a>
        </header>
        <div className="admin-content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

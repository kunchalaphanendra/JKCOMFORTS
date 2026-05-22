import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import '../../styles/Admin.css';

const ADMIN_CREDS = { user: 'admin', pass: 'jkcomfort2024' };

export default function AdminLogin({ onLogin }) {
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (u === ADMIN_CREDS.user && p === ADMIN_CREDS.pass) {
      sessionStorage.setItem('jkc_admin', '1');
      onLogin();
    } else {
      setErr('Invalid credentials. Try admin / jkcomfort2024');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-glow" />
      <div className="admin-login-card glass-card">
        <div className="admin-login-logo">
          <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 12px var(--cyan-glow))' }}>❄</span>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.1em' }}>JK COMFORT</div>
            <div className="mono" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>ADMIN PORTAL</div>
          </div>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome Back</h2>
        {err && <div className="admin-error">{err}</div>}
        <form onSubmit={submit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input className="form-input" value={u} onChange={e => setU(e.target.value)} placeholder="admin" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input className="form-input" type={show ? 'text' : 'password'} value={p} onChange={e => setP(e.target.value)} placeholder="••••••••" required style={{ paddingRight: '3rem' }} />
              <button type="button" onClick={() => setShow(!show)} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--ghost)', cursor: 'pointer' }}>
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
            <Lock size={16} /> Sign In
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--ghost)', marginTop: '1.5rem' }}>
          Default: admin / jkcomfort2024
        </p>
      </div>
    </div>
  );
}

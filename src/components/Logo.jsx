import React from 'react';

/**
 * Authentic Vector Logo for JK Comfort Air Conditioners
 * Recreated precisely from the official 2nd logo image:
 * Features the elegant left tapered crescent and the 5 concentric upward sweeps ending in circular heads.
 */
export default function Logo({ className = '', showText = true, size = 42, iconSize }) {
  const finalIconSize = iconSize || size;

  return (
    <div 
      className={`logo-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.75rem',
        textDecoration: 'none'
      }}
    >
      {/* Authentic Circle Wave Emblem */}
      <svg
        width={finalIconSize}
        height={finalIconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon-svg"
        style={{ flexShrink: 0, transition: 'all 0.3s' }}
      >
        <defs>
          {/* Dynamic brand gradients that adapt beautifully to white/black sections */}
          <linearGradient id="logoWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--electric-blue, #1d4e6f)" />
            <stop offset="100%" stopColor="var(--plasma, #3b82f6)" />
          </linearGradient>
        </defs>

        {/* Left Tapered Crescent Frame (Authentic 2nd Logo Outer Arc) */}
        <path
          d="M 50 10 A 40 40 0 0 0 50 90 A 37 37 0 0 1 50 13 Z"
          fill="url(#logoWaveGrad)"
          style={{ transition: 'fill 0.3s' }}
        />

        {/* Concentric Wave 1 (Innermost, Thinnest) */}
        <path
          d="M 48 76 C 47 70, 46 66, 46 62"
          stroke="url(#logoWaveGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="46" cy="62" r="2.2" fill="url(#logoWaveGrad)" />

        {/* Concentric Wave 2 */}
        <path
          d="M 51 78 C 50 68, 50 59, 50.5 51"
          stroke="url(#logoWaveGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <circle cx="50.5" cy="51" r="3.2" fill="url(#logoWaveGrad)" />

        {/* Concentric Wave 3 */}
        <path
          d="M 54 80 C 53 67, 54 52, 56 41"
          stroke="url(#logoWaveGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <circle cx="56" cy="41" r="4.2" fill="url(#logoWaveGrad)" />

        {/* Concentric Wave 4 */}
        <path
          d="M 57 82 C 57 65, 59 47, 63 31"
          stroke="url(#logoWaveGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="63" cy="31" r="5.5" fill="url(#logoWaveGrad)" />

        {/* Concentric Wave 5 (Outermost, Thickest) */}
        <path
          d="M 61 84 C 62 63, 65 42, 71 22"
          stroke="url(#logoWaveGrad)"
          strokeWidth="8.5"
          strokeLinecap="round"
        />
        <circle cx="71" cy="22" r="7.2" fill="url(#logoWaveGrad)" />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="logo-text-wrap" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
            className="logo-brand-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              textTransform: 'none',
              transition: 'color 0.3s'
            }}
          >
            JK Comfort
          </span>
          <span
            className="logo-brand-sub"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
              marginTop: '1px',
              transition: 'color 0.3s'
            }}
          >
            Air Conditioners
          </span>
        </div>
      )}
    </div>
  );
}

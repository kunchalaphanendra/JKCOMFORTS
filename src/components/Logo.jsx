import React from 'react';

/**
 * Enhanced Premium Vector Logo for JK Comfort Air Conditioners
 * Mathematically precise SVGs that dynamically scale and support dark/light modes.
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
      {/* Circular Wave Emblem */}
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
          {/* Dynamic brand gradients matching the active section theme */}
          <linearGradient id="logoWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--electric-blue, #0a0a0a)" />
            <stop offset="100%" stopColor="var(--plasma, #71717a)" />
          </linearGradient>
          <linearGradient id="logoPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.01)" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="46" 
          fill="url(#logoPlateGrad)" 
          stroke="var(--border)" 
          strokeWidth="2" 
          className="logo-ring"
          style={{ transition: 'stroke 0.3s' }}
        />

        {/* Swoosh 1 (Leftmost, shortest) */}
        <path
          d="M 45 76 C 42 67, 39 59, 37 52 C 36 50, 38 48, 40 48 C 41 48, 43 49, 43 51 C 41 58, 44 66, 47 74 Z"
          fill="url(#logoWaveGrad)"
          opacity="0.4"
        />
        <circle cx="38" cy="49" r="2.8" fill="url(#logoWaveGrad)" opacity="0.5" />

        {/* Swoosh 2 */}
        <path
          d="M 47 77 C 45 65, 43 52, 44 42 C 43.5 40.5, 45.5 39, 47 39 C 48.5 39, 49.5 40.5, 49 42 C 48 52, 49.5 64, 50.5 75 Z"
          fill="url(#logoWaveGrad)"
          opacity="0.6"
        />
        <circle cx="45" cy="40" r="3.8" fill="url(#logoWaveGrad)" opacity="0.7" />

        {/* Swoosh 3 */}
        <path
          d="M 50 78 C 48 64, 48 49, 52 33 C 51.5 31, 54 29.5, 55.5 30 C 56.5 30.5, 56.5 32.5, 55 34 C 51.5 49, 51.5 63, 53.5 76 Z"
          fill="url(#logoWaveGrad)"
          opacity="0.75"
        />
        <circle cx="53" cy="31.5" r="5" fill="url(#logoWaveGrad)" opacity="0.85" />

        {/* Swoosh 4 */}
        <path
          d="M 53 79 C 52 62, 55 45, 61 26 C 61 24, 63.5 23, 65 24.5 C 66 25.5, 65.5 27.5, 64 29 C 58.5 47, 56.5 62, 56.5 77 Z"
          fill="url(#logoWaveGrad)"
          opacity="0.9"
        />
        <circle cx="62.5" cy="25" r="6.2" fill="url(#logoWaveGrad)" opacity="0.95" />

        {/* Swoosh 5 (Rightmost & Tapered) */}
        <path
          d="M 56 80 C 57 60, 64 41, 73.5 21 C 74.5 19, 78 19.5, 79 22.5 C 79.5 24.5, 77.5 26, 76 28 C 67.5 46, 61 63, 59.5 78 Z"
          fill="url(#logoWaveGrad)"
        />
        <circle cx="75" cy="21.5" r="7.8" fill="url(#logoWaveGrad)" />
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

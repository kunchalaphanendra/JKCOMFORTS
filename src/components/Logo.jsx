import React from 'react';

/**
 * Premium Logo Component for JK Comfort Air Conditioners
 * Uses the exact, official transparent PNG logo image processed with anti-aliasing.
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
      {/* Authentic Circle Wave Emblem Image */}
      <img
        src="/logo_transparent.png"
        alt="JK Comfort Logo"
        width={finalIconSize}
        height={finalIconSize}
        style={{ 
          display: 'block',
          objectFit: 'contain',
          flexShrink: 0,
          transition: 'all 0.3s'
        }}
      />

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

'use client'

/**
 * GlowingHorizon — arc geometry unchanged, glow refined.
 *
 * Arc (DO NOT CHANGE):
 *   width: 65vw | height: 240px | bottom: -150px | borderRadius: 50%
 *
 * Glow fixes:
 *   - Mask changed to radial so center is brightest, edges fade naturally
 *   - box-shadow removed from ellipse (caused bright edge hotspots)
 *   - bloom layer uses radial-gradient centered at 50% 100% for center peak
 *   - Separate wide atmospheric haze layer above the arc
 *   - Halo blur layer centered and fading outward
 */

export function GlowingHorizon() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 overflow-hidden"
      style={{
        height: '120px',
        /* Radial mask — center stays fully opaque, edges fade smoothly */
        maskImage:
          'radial-gradient(ellipse 70% 100% at 50% 100%, black 40%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 70% 100% at 50% 100%, black 40%, transparent 100%)',
      }}
    >

      {/* ── Layer 0: Wide atmospheric haze ──────────────────────────────────
       * Large soft bloom spreading upward from center.
       * Two-stop gradient: strong center, fades to nothing at edges.
       */}
      <div
        style={{
          position:  'absolute',
          bottom:    0,
          left:      '50%',
          transform: 'translateX(-50%)',
          width:     '65vw',
          height:    '120px',
          background: [
            'radial-gradient(ellipse 55% 90% at 50% 100%,',
            '  rgba(190,220,255,0.30) 0%,',
            '  rgba(160,200,255,0.12) 35%,',
            '  rgba(120,175,240,0.04) 60%,',
            '  transparent 80%)',
          ].join(''),
          zIndex: 0,
        }}
      />

      {/* ── Layer 1: Blurred halo ring ───────────────────────────────────────
       * Arc geometry UNCHANGED. Only border opacity increased at center.
       * No box-shadow here — that caused the bright edge hotspots.
       */}
      <div
        style={{
          position:     'absolute',
          bottom:       '-150px',     /* UNCHANGED */
          left:         '50%',
          transform:    'translateX(-50%)',
          width:        '65vw',       /* UNCHANGED */
          height:       '240px',      /* UNCHANGED */
          borderRadius: '50%',        /* UNCHANGED */
          border:       '5px solid rgba(200,230,255,0.35)',
          filter:       'blur(12px)',
          animation:    'glow-rotate 30s linear infinite, glow-pulse 6s ease-in-out infinite',
          willChange:   'transform, opacity',
          zIndex:       1,
        }}
      />

      {/* ── Layer 2: Crisp horizon line ──────────────────────────────────────
       * Arc geometry UNCHANGED.
       * box-shadow is inward only — no outward side spread.
       * The radial mask on the container handles center-bright fading.
       */}
      <div
        style={{
          position:     'absolute',
          bottom:       '-150px',     /* UNCHANGED */
          left:         '50%',
          transform:    'translateX(-50%)',
          width:        '65vw',       /* UNCHANGED */
          height:       '240px',      /* UNCHANGED */
          borderRadius: '50%',        /* UNCHANGED */
          background:   'var(--background)',
          border:       '1.5px solid rgba(220,240,255,0.85)',
          /* inset only — no outward shadow that creates edge hotspots */
          boxShadow: [
            'inset 0 2px 16px rgba(190,220,255,0.40)',
            'inset 0 1px 5px  rgba(255,255,255,0.55)',
            /* Single soft outward glow — mask fades edges automatically */
            '0 -6px 30px 4px rgba(180,215,255,0.35)',
          ].join(', '),
          animation:  'glow-rotate 30s linear infinite',
          willChange: 'transform',
          zIndex:     2,
        }}
      />

    </div>
  )
}

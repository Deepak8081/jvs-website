import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (no touch-only phones/tablets)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }
    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], label, .interactive-cursor, [data-cursor="pointer"]')
        );
        setHovered(isInteractive);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth Lerp loop for trailing ring
    const loop = () => {
      const ease = 0.16; // trailing responsiveness
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* ── Pinpoint Center Dot ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          boxShadow: '0 0 10px rgba(34, 211, 238, 0.9), 0 0 20px rgba(56, 189, 248, 0.6)',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* ── Trailing Cyber Follower Ring ── */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full transition-[width,height,margin,background-color,border-color,box-shadow] duration-200 ease-out ${
          clicked
            ? 'w-7 h-7 -ml-3.5 -mt-3.5 border-2 border-cyan-300 bg-cyan-400/30 shadow-[0_0_24px_rgba(34,211,238,0.7)]'
            : hovered
            ? 'w-14 h-14 -ml-7 -mt-7 border border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.4)] backdrop-blur-[1px]'
            : 'w-9 h-9 -ml-[18px] -mt-[18px] border border-cyan-400/40 bg-transparent shadow-[0_0_15px_rgba(56,189,248,0.2)]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      >
        {/* Subtle crosshair / radar indicators when hovered */}
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 animate-ping" />
          </div>
        )}
      </div>
    </div>
  );
}

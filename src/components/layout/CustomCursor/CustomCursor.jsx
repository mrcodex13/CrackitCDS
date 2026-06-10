import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

/* Elements that trigger the expanded "hover" cursor ring */
const INTERACTIVE_SELECTOR =
  'button, a, input, textarea, select, label, [role="button"], .bubbly-btn';

const TRAIL_COUNT = 4;
const TRAIL_LAG = [0.12, 0.08, 0.05, 0.03];

/**
 * Theme-aware custom cursor: emerald dot + lagging ring + soft glow.
 * Disabled on touch devices and when user prefers reduced motion.
 */
function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const trailsRef = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 })));

  const glowRef = useRef(null);
  const ringElRef = useRef(null);
  const dotRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReduced) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    let rafId;

    const applyTransform = (el, x, y) => {
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    /* Smooth follow loop — ring and trail specks lag behind the dot */
    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;
      const ring = ringRef.current;

      ring.x += (mx - ring.x) * 0.18;
      ring.y += (my - ring.y) * 0.18;
      applyTransform(ringElRef.current, ring.x, ring.y);
      applyTransform(glowRef.current, ring.x, ring.y);

      trailsRef.current.forEach((trail, i) => {
        const lag = TRAIL_LAG[i];
        const prev = i === 0 ? ring : trailsRef.current[i - 1];
        trail.x += (prev.x - trail.x) * lag;
        trail.y += (prev.y - trail.y) * lag;
        applyTransform(trailRefs.current[i], trail.x, trail.y);

        const el = trailRefs.current[i];
        if (el) {
          const dist = Math.hypot(mx - trail.x, my - trail.y);
          el.style.opacity = String(Math.max(0, 0.35 - i * 0.08 - dist * 0.002));
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      applyTransform(dotRef.current, e.clientX, e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e) => {
      setHovering(!!e.target.closest(INTERACTIVE_SELECTOR));
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, []);

  if (!enabled) return null;

  const cursorClass = [
    'custom-cursor',
    !visible && 'custom-cursor--hidden',
    hovering && 'custom-cursor--hover',
    clicking && 'custom-cursor--click',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cursorClass} aria-hidden="true">
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringElRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />

      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="cursor-trail"
        />
      ))}
    </div>
  );
}

export default CustomCursor;

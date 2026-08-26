import React, { useEffect, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setDot({ x: e.clientX, y: e.clientY }), 60);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    window.addEventListener('mousemove', onMove);

    const els = document.querySelectorAll('a, button, .card, .tech-icon-card, .interest-chip');
    els.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  // Only show on desktop
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)` }}
      />
      <div
        className="cursor-dot"
        style={{ transform: `translate(${dot.x - 4}px, ${dot.y - 4}px)` }}
      />
    </>
  );
}

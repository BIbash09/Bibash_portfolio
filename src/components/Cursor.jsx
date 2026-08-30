import React, { useEffect, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!finePointer.matches) return undefined;

    setEnabled(true);
    document.body.classList.add('custom-cursor-enabled');
    const onMove = e => setPos({ x: e.clientX, y: e.clientY });
    const isInteractive = target => target instanceof Element && Boolean(target.closest('a, button, .card, .tech-card, .interest-chip'));
    const onOver = e => setHovering(isInteractive(e.target));
    const onOut = e => {
      if (!isInteractive(e.relatedTarget)) setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)` }}
      />
      <div
        className="cursor-dot"
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
      />
    </>
  );
}

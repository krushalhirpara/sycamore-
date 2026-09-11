'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = 'default' | 'link' | 'click';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-precision pointer springs
  const pointerX = useSpring(mouseX, { damping: 45, stiffness: 900, mass: 0.1 });
  const pointerY = useSpring(mouseY, { damping: 45, stiffness: 900, mass: 0.1 });



  useEffect(() => {
    const isStrictMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    setIsTouchDevice(isStrictMobile);
    if (isStrictMobile) return;

    document.documentElement.style.setProperty('cursor', 'none', 'important');
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    let hideTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setIsVisible(false), 4000);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setCursorState('link');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => setCursorState('click');
    const handleMouseUp = () => setCursorState('default');
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    document.documentElement.removeEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(hideTimeout);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;



  return (
    <>
      {/* Unique Precision Vector Cursor Pointer (Arrow head in Positivus Dark & Lime) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: pointerX,
          y: pointerY,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Pointer Arrow */}
          <path
            d="M2 2L18 12L10.5 14.5L7.5 21.5L2 2Z"
            fill="#131A22"
            stroke="#FF9900"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>


    </>
  );
}

'use client';

import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(-500); // Start off-screen
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 50, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(196, 98, 45, 0.12), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9] overflow-hidden mix-blend-screen"
      style={{ background }}
    />
  );
}

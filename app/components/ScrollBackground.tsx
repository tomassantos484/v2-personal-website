'use client';

import { useEffect, useState } from 'react';

export default function ScrollBackground() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const percentage = (currentScroll / scrollHeight) * 100;
      setScrollPercentage(Math.min(percentage, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-300"
      style={{
        background: `linear-gradient(180deg, 
          #0A2B94 ${100 - scrollPercentage}%, 
          #051A73 ${100 - scrollPercentage * 0.7}%, 
          #030D40 ${100 - scrollPercentage * 0.4}%, 
          #010510 100%)`
      }}
    />
  );
} 
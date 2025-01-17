'use client';

import { useEffect, useState } from 'react';

export default function ScrollFadeIn({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate how close to bottom (in pixels) we want the fade to start
      const fadeThreshold = 100;
      
      // Check if we're near bottom
      const isNearBottom = documentHeight - (scrollTop + windowHeight) < fadeThreshold;
      
      setIsVisible(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
} 
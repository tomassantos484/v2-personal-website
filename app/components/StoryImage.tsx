'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function StoryImage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative" ref={imageRef}>
      <div 
        className={`relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] transition-all duration-1000 transform rounded-[40%] overflow-hidden
          ${isLoaded && isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
      >
        <Image
          src="/tsy_rock.jpeg"
          alt="Tomas standing on a rock in Central Park"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 500px"
          priority
        />
      </div>
    </div>
  );
} 
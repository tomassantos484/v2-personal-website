'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfileImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative transition-all duration-1000 transform
        ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
    >
      <div className="relative w-[200px] h-[240px] sm:w-[280px] sm:h-[320px] lg:w-[500px] lg:h-[600px]">
        <Image
          src="/tsy_transparent.png"
          alt="Tomas Santos Yciano"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 500px"
          priority
        />
      </div>
    </div>
  );
} 
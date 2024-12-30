'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfileImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200); // Slightly delayed after the loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className={`w-[500px] h-[600px] relative transition-all duration-1000 transform
        ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <Image
          src="/tsy_transparent.png"
          alt="Tomas Santos Yciano"
          fill
          className="object-cover rounded-[2rem]"
          priority
        />
      </div>
    </div>
  );
} 
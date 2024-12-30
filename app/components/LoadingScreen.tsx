'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#0A2B94] z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-white text-2xl font-mono animate-pulse">
        Tomas J. Santos Yciano
      </div>
    </div>
  );
} 
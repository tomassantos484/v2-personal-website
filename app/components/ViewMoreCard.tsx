'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function ViewMoreCard() {
  return (
    <div
      className={`border-2 p-8 transition-all duration-700 ease-in-out transform flex flex-col h-full
        group border-white/40 hover:border-yellow-300`}
    >
      <Link 
        href="https://github.com/tomassantos484"
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center"
      >
        <h3 className="text-3xl mb-6 transition-colors duration-200 text-white group-hover:text-yellow-300">
          View More ⇒
        </h3>
        <span className="mb-4 text-white text-sm">Check out more of my projects on GitHub!</span>
        <Icon 
          icon="mdi:github"
          className="w-32 h-32 text-white/50 transition-colors duration-200 
            group-hover:text-yellow-300/50 hover:text-yellow-300"
        />
      </Link>
    </div>
  );
} 
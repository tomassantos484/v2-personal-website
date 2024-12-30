'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavItemProps {
  title: string;
  subtitle: string;
  href: string;
}

export default function NavItem({ title, subtitle, href }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Link 
      href={href}
      className="block"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-1 group">
        <h3 className="text-yellow-300 text-xl font-bold group-hover:bg-white/10 transition-colors duration-200 inline-block px-2 py-1 rounded">
          {title}
        </h3>
        <p 
          className={`text-white transition-all duration-200 ease-in-out
            ${isHovered 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform -translate-y-2 pointer-events-none'
            }`}
        >
          {subtitle}
        </p>
      </div>
    </Link>
  );
} 
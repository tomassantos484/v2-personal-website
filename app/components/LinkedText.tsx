'use client';

import Link from 'next/link';

interface LinkedTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkedText = ({ href, children }: LinkedTextProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Link 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className="text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default LinkedText; 
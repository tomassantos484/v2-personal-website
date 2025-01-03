'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string | React.ReactNode;
  technologies: string;
  link: string;
  borderColor: string;
}

export default function ProjectCard({ title, description, technologies, link, borderColor }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`border-2 p-8 h-full transition-all duration-700 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
        ${isHovered ? 'border-yellow-300' : borderColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {link ? (
        <Link 
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-3xl mb-6 transition-colors duration-200 block
            ${isHovered ? 'text-yellow-300' : 'text-white'}`}
        >
          {title}
        </Link>
      ) : (
        <h3 className={`text-3xl mb-6 transition-colors duration-200 
          ${isHovered ? 'text-yellow-300' : 'text-white'}`}>
          {title}
        </h3>
      )}
      <div className="text-white text-sm mb-6">{description}</div>
      <p className="text-white text-xs font-mono">{technologies}</p>
    </div>
  );
} 
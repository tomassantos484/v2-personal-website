'use client';

import { useEffect, useState, useRef } from 'react';

interface AwardCardProps {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string[];
  category: string;
  borderColor: string;
}

export default function AwardCard({ title, event, date, location, description, category, borderColor }: AwardCardProps) {
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
      className={`border-2 p-8 transition-all duration-700 ease-in-out transform flex flex-col h-full
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
        ${isHovered ? 'border-yellow-300' : borderColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-1">
        <div className="flex justify-between items-start mb-6">
          <h3 className={`text-3xl transition-colors duration-200
            ${isHovered ? 'text-yellow-300' : 'text-white'}`}>
            {title}
          </h3>
          <span className="text-white text-sm">{date}</span>
        </div>
        <div className="text-white/70 text-sm mb-4">{event}</div>
        <div className="text-white/70 text-sm mb-6">{location}</div>
        <div className="text-white text-sm space-y-4">
          {description.map((bullet, index) => (
            <p key={index}>• {bullet}</p>
          ))}
        </div>
      </div>
      <div className="text-white/50 text-xs mt-6 pt-4 border-t border-white/10">{category}</div>
    </div>
  );
} 
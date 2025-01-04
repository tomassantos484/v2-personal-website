'use client';

import { useEffect, useState, useRef } from 'react';
import { Icon } from '@iconify/react';

interface CourseCardProps {
  title: string;
  courseCode: string;
  icon: string;
  borderColor: string;
}

export default function CourseCard({ title, courseCode, icon, borderColor }: CourseCardProps) {
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
      className={`border-2 p-6 transition-all duration-700 ease-in-out transform flex flex-col items-center
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
        ${isHovered ? 'border-yellow-300' : borderColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon 
        icon={icon}
        className={`w-12 h-12 mb-4 transition-colors duration-200
          ${isHovered ? 'text-yellow-300' : 'text-white'}`}
      />
      <h4 className={`text-xl mb-2 text-center transition-colors duration-200
        ${isHovered ? 'text-yellow-300' : 'text-white'}`}>
        {title}
      </h4>
      <p className="text-white/70 text-sm text-center">{courseCode}</p>
    </div>
  );
} 
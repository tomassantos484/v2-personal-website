'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  caption: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: '/ey_pic_1.jpeg',
    caption: 'Me at the EY National Launch Training in Baltimore, MD',
    alt: 'Tomas at the EY National Launch Training'
  },
  {
    src: '/fbla_nlc_3rd_place.jpeg',
    caption: 'Me with my 3rd Place trophy at the FBLA NLC in Orlando, FL',
    alt: 'Tomas with his 3rd place trophy at FBLA NLC'
  },
  {
    src: '/fbla_slc_1.jpeg',
    caption: 'Me and my team with our trophies at FBLA SLC in Kean University - Union, NJ',
    alt: 'Tomas and his team with their trophies at FBLA SLC'
  },
  {
    src: '/fbla_slc_2.jpeg',
    caption: 'Me with my 2nd Place trophy at FBLA SLC in Kean University - Union, NJ',
    alt: 'Tomas with his 2nd place trophy at FBLA SLC'
  },
  {
    src: '/headstarter_hackathon_winners.jpeg',
    caption: 'Celebrating our hackathon win with the Headstarter co-founder, Faizan at St. John\'s University',
    alt: 'Hackathon winning team with Headstarter co-founder'
  }
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative max-w-6xl mx-auto px-4 sm:px-12"
    >
      <div className="flex items-center justify-center">
        {/* Current Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] transition-all duration-500">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain rounded-lg shadow-2xl"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 800px"
            priority
          />
        </div>
      </div>
      
      <div className="mt-4 sm:mt-8 text-center px-2">
        <p className="text-white/70 text-sm sm:text-lg">{images[currentIndex].caption}</p>
      </div>

      {/* Navigation Buttons - Hide on very small screens */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full
            hover:bg-yellow-300/50 transition-all duration-200 transform hover:scale-110"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full
            hover:bg-yellow-300/50 transition-all duration-200 transform hover:scale-110"
        >
          →
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 
              ${currentIndex === index ? 'bg-yellow-300 w-4' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
} 
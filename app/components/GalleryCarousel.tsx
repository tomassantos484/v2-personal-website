'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  caption: string;
  alt: string;
}

// Images for the gallery carousel
const galleryImages: GalleryImage[] = [
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
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
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
      className="relative max-w-6xl mx-auto px-2 sm:px-12"
    >
      <div className="flex items-center justify-center gap-4">
        {/* Previous Image Preview - Hidden on Mobile */}
        <div className="relative w-1/4 aspect-[16/9] opacity-40 transition-all duration-500 hidden lg:block">
          <Image
            src={galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length].src}
            alt="Previous"
            fill
            className="object-cover rounded-lg blur-[2px]"
            sizes="(max-width: 1024px) 25vw"
          />
        </div>

        {/* Current Image - Optimized for Mobile */}
        <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] transition-all duration-500">
          <Image
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            fill
            className="object-contain rounded-lg shadow-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
            priority={currentIndex === 0}
            loading="eager"
            quality={100}
          />
        </div>

        {/* Next Image Preview - Hidden on Mobile */}
        <div className="relative w-1/4 aspect-[16/9] opacity-40 transition-all duration-500 hidden lg:block">
          <Image
            src={galleryImages[(currentIndex + 1) % galleryImages.length].src}
            alt="Next"
            fill
            className="object-cover rounded-lg blur-[2px]"
            sizes="(max-width: 1024px) 25vw"
          />
        </div>
      </div>
      
      <div className="mt-3 sm:mt-6 text-center px-2">
        <p className="text-white/70 text-sm sm:text-base lg:text-lg">{galleryImages[currentIndex].caption}</p>
      </div>

      {/* Navigation Buttons - Mobile Optimized */}
      <div className="sm:block">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-4 rounded-full
            hover:bg-yellow-300/50 transition-all duration-200 transform hover:scale-110 text-sm sm:text-base"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-4 rounded-full
            hover:bg-yellow-300/50 transition-all duration-200 transform hover:scale-110 text-sm sm:text-base"
        >
          →
        </button>
      </div>

      {/* Dots Navigation - Mobile Friendly */}
      <div className="flex justify-center gap-1 sm:gap-2 mt-2 sm:mt-4">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 
              ${currentIndex === index ? 'bg-yellow-300 w-3 sm:w-4' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
} 
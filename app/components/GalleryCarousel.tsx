'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  image: string;
  imageCaption: string;
  title: string;
}

interface GalleryCarouselProps {
  galleryImages: GalleryImage[];
}

export default function GalleryCarousel({ galleryImages }: GalleryCarouselProps) {
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

  if (!galleryImages || galleryImages.length === 0) {
    return <div className="text-white text-center">No images found.</div>;
  }

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
            src={galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length].image}
            alt="Previous"
            fill
            className="object-cover rounded-lg blur-[2px]"
            sizes="(max-width: 1024px) 25vw"
          />
        </div>

        {/* Current Image - Optimized for Mobile */}
        <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] transition-all duration-500">
          <Image
            src={galleryImages[currentIndex].image}
            alt={galleryImages[currentIndex].title}
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
            src={galleryImages[(currentIndex + 1) % galleryImages.length].image}
            alt="Next"
            fill
            className="object-cover rounded-lg blur-[2px]"
            sizes="(max-width: 1024px) 25vw"
          />
        </div>
      </div>
      
      <div className="mt-3 sm:mt-6 text-center px-2">
        <p className="text-white/70 text-sm sm:text-base lg:text-lg">{galleryImages[currentIndex].imageCaption}</p>
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
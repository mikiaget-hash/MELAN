/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
    }, 6000); // Auto-scroll every 6 seconds

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Client Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
            Loved By Our Guests
          </h2>
          <p className="text-muted-text font-light text-base leading-relaxed">
            Discover why entrepreneurs, local professionals, coffee aficionados, and globetrotters alike have made Melan their premier meeting spot in Addis Ababa.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" id="testimonials-carousel-container">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass-panel p-8 md:p-12 rounded-tl-[60px] rounded-br-[60px] border border-accent/20 bg-cream/30 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative"
              id={`testimonial-card-${currentIndex}`}
            >
              {/* Giant Quote Icon */}
              <Quote className="absolute top-6 right-8 h-12 w-12 text-accent/15 pointer-events-none" />

              {/* Left Column: Avatar & Rating */}
              <div className="flex flex-col items-center text-center space-y-4 flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full p-1 border-2 border-accent/35 bg-white shadow-md">
                  <img
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 p-1.5 bg-accent rounded-full text-white shadow">
                    <Quote className="h-3.5 w-3.5" />
                  </div>
                </div>
                
                {/* Five Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Right Column: Review Comment & Author details */}
              <div className="space-y-4 flex-grow text-center md:text-left">
                <p className="font-serif text-lg md:text-xl text-primary font-medium leading-relaxed italic">
                  "{TESTIMONIALS[currentIndex].comment}"
                </p>
                
                <div className="space-y-0.5">
                  <h4 className="font-serif text-lg font-bold text-primary">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent font-mono">
                    {TESTIMONIALS[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex justify-center items-center gap-6 mt-8" id="carousel-controls">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-primary text-accent hover:bg-secondary border border-accent/20 transition-all shadow-md"
              id="testimonial-prev-btn"
              aria-label="Previous Review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentIndex ? 'w-6 bg-accent' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-primary text-accent hover:bg-secondary border border-accent/20 transition-all shadow-md"
              id="testimonial-next-btn"
              aria-label="Next Review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

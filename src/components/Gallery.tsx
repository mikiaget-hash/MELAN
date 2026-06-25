/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'coffee' | 'pastries' | 'interior' | 'atmosphere'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', name: 'Show All' },
    { id: 'coffee', name: 'Barista Craft' },
    { id: 'pastries', name: 'Artisan Baking' },
    { id: 'interior', name: 'Our Space' },
    { id: 'atmosphere', name: 'Moments' },
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Map filtered indices back to overall GALLERY_ITEMS indices for global lightbox navigation
  const handleOpenLightbox = (indexInFilteredList: number) => {
    const selectedItem = filteredItems[indexInFilteredList];
    const globalIndex = GALLERY_ITEMS.findIndex(item => item.id === selectedItem.id);
    setSelectedImageIndex(globalIndex);
  };

  const handlePrev = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex === null) return;
    const prevIndex = selectedImageIndex === 0 ? GALLERY_ITEMS.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
  };

  const handleNext = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex === null) return;
    const nextIndex = selectedImageIndex === GALLERY_ITEMS.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(nextIndex);
  };

  return (
    <section className="py-24 bg-cream" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Visual Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
            The Melan Gallery
          </h2>
          <p className="text-muted-text font-light text-base leading-relaxed">
            Take a visual tour through our warm, aromatic environment, observing our dedication to extraction craft, pastry lamination, and cozy human connections.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-12 border-b border-gray-200/60 pb-0" id="gallery-filters-tabs">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 relative border-b-2 cursor-pointer ${
                  isActive
                    ? 'text-accent border-accent font-bold'
                    : 'text-muted-text hover:text-primary border-transparent'
                }`}
              >
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(index)}
                className={`relative group overflow-hidden rounded-tl-[30px] rounded-br-[30px] shadow-sm border border-gray-100 bg-primary/5 cursor-pointer hover:shadow-xl hover:rounded-2xl transition-all duration-500 ${
                  item.aspectClass || 'aspect-square'
                }`}
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 space-y-2 z-10">
                  <div className="p-2 bg-accent/20 border border-accent/30 rounded-full w-fit text-accent mb-2">
                    <Eye className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-mono">
                    {item.category === 'coffee' ? 'Barista Craft' : item.category === 'pastries' ? 'Artisan Baking' : item.category === 'interior' ? 'Our Lounge' : 'Moments'}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Interactive Action Callout */}
        <div className="mt-12 text-center" id="gallery-callout">
          <p className="text-sm text-muted-text font-light flex items-center justify-center gap-2">
            <Camera className="h-4 w-4 text-accent" /> Share your Melan moments on Instagram using tag <span className="font-semibold text-primary">#MelanAddis</span> for a chance to be featured!
          </p>
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImageIndex(null)}
                className="fixed inset-0 bg-black/95 backdrop-blur-md z-0"
                id="lightbox-overlay"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-white bg-white/10 hover:bg-white/20 transition-all z-10"
                id="close-lightbox-btn"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Lightbox Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-4xl w-full z-10 flex flex-col items-center"
                id="lightbox-container"
              >
                <div className="relative w-full max-h-[70vh] flex justify-center items-center overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                  <img
                    src={GALLERY_ITEMS[selectedImageIndex].url}
                    alt={GALLERY_ITEMS[selectedImageIndex].title}
                    className="max-h-[70vh] max-w-full object-contain rounded-2xl"
                    referrerPolicy="no-referrer"
                  />

                  {/* Nav Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 border border-white/10 transition"
                    id="lightbox-prev-btn"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 border border-white/10 transition"
                    id="lightbox-next-btn"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Caption Panel */}
                <div className="w-full text-center mt-6 space-y-1 px-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest font-mono">
                    Image {selectedImageIndex + 1} of {GALLERY_ITEMS.length} • {GALLERY_ITEMS[selectedImageIndex].category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {GALLERY_ITEMS[selectedImageIndex].title}
                  </h3>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

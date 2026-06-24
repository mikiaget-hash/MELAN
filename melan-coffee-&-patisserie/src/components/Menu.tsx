/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'pastry' | 'cake' | 'breakfast' | 'meals'>('coffee');

  const categories = [
    { id: 'coffee', name: 'Specialty Coffee' },
    { id: 'pastry', name: 'Fresh Pastries' },
    { id: 'cake', name: 'Signature Cakes' },
    { id: 'breakfast', name: 'Breakfast Selection' },
    { id: 'meals', name: 'Light Meals' },
  ] as const;

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Culinary Masterpieces
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
            Explore Our Fine Selection
          </h2>
          <p className="text-muted-text font-light text-base leading-relaxed">
            Every creation is prepared by hand using time-honored artisanal methods, sourcing only the premium beans, flour, and organic ingredients available.
          </p>
        </div>

        {/* Category Filters (Tabs) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-12 border-b border-gray-100 pb-0" id="menu-categories-tabs">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-4 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-300 relative border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-accent text-accent font-bold'
                    : 'border-transparent text-muted-text hover:text-primary'
                }`}
              >
                <span className="relative z-10">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="menu-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-cream/40 rounded-tl-[40px] rounded-br-[40px] overflow-hidden border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col h-full"
                id={`menu-item-${item.id}`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3] bg-primary/5 rounded-tl-[40px] rounded-br-[40px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Category overlay tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary bg-white/90 backdrop-blur-sm rounded-md border border-accent/10 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price overlay on the image bottom right */}
                  <div className="absolute bottom-4 right-4 bg-primary text-accent text-xs font-bold font-mono px-3 py-1.5 rounded-lg border border-accent/20 shadow-md">
                    {item.price}
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Small recommendation details */}
                  <div className="pt-4 border-t border-gray-100/60 flex items-center justify-between text-[10px] uppercase font-mono text-primary/80">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                      <span>Artisanal Quality</span>
                    </div>
                    {item.isFeatured && (
                      <span className="text-accent font-semibold tracking-wider">★ Signature Choice</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Small Invitation Footer */}
        <div className="mt-16 text-center" id="menu-footer-note">
          <p className="text-sm text-muted-text font-light">
            Have specific dietary preferences? Our baristas and servers are happy to customize dairy alternatives or assist with allergy details.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary font-semibold uppercase tracking-wider mt-3 group transition"
          >
            Inquire About Catering & Large Orders
            <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

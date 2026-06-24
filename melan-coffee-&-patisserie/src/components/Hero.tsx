/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Coffee, Sparkles, MapPin, CalendarRange, Clock } from 'lucide-react';
import { IMAGES } from '../data';
import MelanLogo from './MelanLogo';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  // Array of elements for the floating steam particle animation
  const steamParticles = Array.from({ length: 5 });

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cream pt-24 pb-16 lg:pt-28 lg:pb-20"
      id="hero"
    >
      {/* Dynamic Background subtle grid pattern for Artistic Feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Column - Copy & Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-10 text-left">
            
            {/* "Since 2024" Accent Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
              id="hero-badge-container"
            >
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-accent italic">
                Since 2024
              </span>
              <span className="text-xs text-muted-text/60 font-mono">• Addis Ababa</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.05] mb-6 text-primary tracking-tight"
              id="hero-heading"
            >
              Experience Ethiopia's <br />
              <span className="italic font-serif text-accent pr-2 font-light">Finest</span> 
              Coffee Culture
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-dark/80 font-light mb-8 max-w-xl leading-relaxed pr-2 lg:pr-8"
              id="hero-desc"
            >
              From carefully selected single-origin highland beans to artisan-crafted pastries, we invite you to a sanctuary of flavor in the heart of Addis Ababa.
            </motion.p>

            {/* CTA Buttons in Artistic Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-4"
              id="hero-cta-group"
            >
              <button
                onClick={onOpenReservation}
                className="px-8 py-3.5 bg-primary text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-luxury flex items-center gap-2 group cursor-pointer"
                id="hero-reserve-btn"
              >
                <CalendarRange className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                Reserve a Table
              </button>

              <a
                href="#menu"
                className="px-8 py-3.5 border border-primary text-[11px] uppercase tracking-[0.2em] font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-menu-btn"
              >
                Explore Menu
              </a>
            </motion.div>

            {/* Opening Hours Grid as defined in theme */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 lg:mt-16 flex items-center gap-8 border-t border-dark/10 pt-6"
              id="hero-hours"
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary font-serif">07:00 — 21:00</span>
                <span className="text-[9px] uppercase tracking-widest text-muted-text">Weekdays</span>
              </div>
              <div className="w-[1px] h-8 bg-dark/20"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary font-serif">08:00 — 22:00</span>
                <span className="text-[9px] uppercase tracking-widest text-muted-text">Weekends</span>
              </div>
              <div className="w-[1px] h-8 bg-dark/20"></div>
              
              {/* Interactive Coffee Steam Indicator */}
              <div className="hidden sm:flex items-center gap-2 text-accent" id="steam-indicator">
                <div className="relative flex flex-col items-center">
                  <div className="absolute -top-10 flex gap-0.5 h-10 justify-center w-6">
                    {steamParticles.map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [-2, -25],
                          opacity: [0, 0.8, 0],
                          scale: [0.8, 1.1, 0.7],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: 'easeInOut',
                        }}
                        className="w-[1px] bg-primary/40 blur-[0.5px] rounded-full"
                      />
                    ))}
                  </div>
                  <Coffee className="h-4 w-4" />
                </div>
                <span className="text-[9px] font-mono tracking-wider uppercase text-muted-text">Aroma Active</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Asymmetric leaf layout and float overlays */}
          <div className="w-full lg:w-7/12 relative flex items-center justify-center min-h-[360px] sm:min-h-[500px]">
            
            {/* Side Vertical text for Artistic feeling */}
            <div className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block">
              <span className="vertical-text uppercase tracking-[0.5em] text-[10px] font-bold text-primary/15 whitespace-nowrap block">
                AUTHENTIC HERITAGE & ARTISAN CRAFT
              </span>
            </div>

            {/* Asymmetric Framed Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] bg-primary relative shadow-luxury rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[80px] sm:rounded-br-[120px] overflow-hidden group"
              id="hero-asymmetric-frame"
            >
              {/* Main Image */}
              <img
                src={IMAGES.heroBg}
                alt="Finest Ethiopian coffee bean roasting and brewing at Melan"
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-90 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium dark bronze overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/20 pointer-events-none" />

              {/* Float Card - Signature Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bg-white/95 p-6 sm:p-7 w-60 sm:w-64 backdrop-blur-md shadow-2xl border border-white/40 rounded-xl"
                id="hero-float-card"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-serif text-lg italic text-primary font-medium">Signature Menu</h3>
                  <span className="text-accent text-[8px] animate-pulse">● LIVE</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-dark/80">Ethiopian Ceremony</span>
                    <span className="text-[10px] font-mono text-accent font-semibold">320 ETB</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-dark/80">Almond Croissant</span>
                    <span className="text-[10px] font-mono text-accent font-semibold">180 ETB</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-dark/80">Tiramisu Cake</span>
                    <span className="text-[10px] font-mono text-accent font-semibold">390 ETB</span>
                  </div>
                </div>
                <div className="mt-4 text-[9px] uppercase tracking-[0.15em] text-muted-text/80 text-center font-bold">
                  Daily Fresh Batches Only
                </div>
              </motion.div>
            </motion.div>

            {/* Rotating Circular Seal of Quality */}
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 12 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 w-32 h-32 sm:w-40 sm:h-40 z-20 cursor-pointer hover:scale-105 transition-transform drop-shadow-xl"
              id="hero-quality-seal"
            >
              <MelanLogo className="w-full h-full text-accent" />
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}


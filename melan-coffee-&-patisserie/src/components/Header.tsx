/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, CalendarRange } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MelanLogo from './MelanLogo';

interface HeaderProps {
  onOpenReservation: () => void;
}

export default function Header({ onOpenReservation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Melan', href: '#why-us' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel py-3 shadow-lg border-b border-accent/10'
            : 'bg-transparent py-5'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Brand Logo */}
            <a href="#" className="flex items-center gap-2 group" id="logo-link">
              <MelanLogo className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-primary leading-tight">
                  MELAN
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] text-accent uppercase font-sans leading-none">
                  COFFEE & PATISSERIE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-primary hover:text-accent transition duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Reservation Button */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 bg-primary hover:bg-secondary text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-tl-xl rounded-br-xl transition-all duration-300 border border-accent/20 hover:border-accent hover:shadow-lg hover:shadow-primary/10 flex items-center gap-1.5 cursor-pointer"
                id="header-reserve-btn"
              >
                <CalendarRange className="h-3.5 w-3.5 text-accent" />
                Reserve a Table
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenReservation}
                className="sm:hidden p-2 bg-primary text-accent rounded-full"
                id="header-mobile-reserve-btn"
                aria-label="Reserve a Table"
              >
                <CalendarRange className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-primary hover:bg-cream transition duration-200"
                id="mobile-menu-toggle"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[64px] z-30 lg:hidden glass-panel border-b border-accent/10 shadow-xl overflow-hidden"
            id="mobile-navigation-drawer"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-base font-medium text-primary hover:bg-cream hover:text-accent rounded-xl transition duration-150"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-[0.2em] text-xs rounded-tl-xl rounded-br-xl text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <CalendarRange className="h-4 w-4 text-accent" />
                  Reserve a Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowUpRight, CheckCircle2, Send, MapPin, Phone, Mail } from 'lucide-react';
import MelanLogo from './MelanLogo';

// Custom TikTok icon to support all environments and bundler versions
function TiktokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

interface FooterProps {
  onOpenReservation: () => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'catering') => void;
}

export default function Footer({ onOpenReservation, onOpenLegal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/story' },
    { name: 'Artisan Menu', href: '/menu' },
    { name: 'The Experience', href: '/experience' },
    { name: 'Contact & Location', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white border-t border-accent/25 relative z-10" id="app-footer">
      
      {/* Upper Newsletter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-2">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <MelanLogo variant="mark" className="h-7 w-7 text-accent" /> Join The Melan Connoisseurs
            </h3>
            <p className="text-gray-300 font-light text-sm max-w-md">
              Subscribe to receive invitations to private cupping events, single-origin release notifications, and secret baker recipes.
            </p>
          </div>

          <div className="lg:col-span-6" id="newsletter-form-container">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3" id="newsletter-form">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition text-sm"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-accent hover:bg-accent-hover text-primary font-bold uppercase tracking-[0.2em] text-xs rounded-tl-xl rounded-br-xl transition flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                  id="newsletter-submit"
                >
                  <Send className="h-3.5 w-3.5" />
                  Subscribe
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-white/10 rounded-tl-xl rounded-br-xl border border-accent/30 flex items-center gap-3 text-sm"
                id="newsletter-success-notif"
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-gray-200">
                  Welcome to the circle! Check <span className="font-semibold text-white">{email}</span> for your welcome voucher.
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12" id="footer-directory-grid">
          
          {/* Logo & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <MelanLogo className="h-14 w-14 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white leading-none">
                  MELAN
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase font-sans mt-0.5">
                  COFFEE & PATISSERIE
                </span>
              </div>
            </div>

            <p className="text-gray-300 font-light text-sm leading-relaxed max-w-sm">
              Celebrating the deep culinary connection between traditional Ethiopian coffee ceremony and fine European baking crafts. Proudly serving the community of Addis Ababa.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3" id="footer-social-links">
              <a
                href="https://www.instagram.com/popular/melan-coffee-and-patisserie-addis-ababa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all text-white border border-white/15"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/discover/melan-coffee-location-addis-ababa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all text-white border border-white/15"
                aria-label="Follow us on TikTok"
              >
                <TiktokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-accent">Quick Navigation</h4>
            <ul className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-accent transition flex items-center gap-1 group py-0.5"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100 transition" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Details (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-accent">Opening Hours</h4>
            <div className="space-y-3 text-sm text-gray-300 font-light">
              <div>
                <span className="font-semibold text-white block">Monday – Friday</span>
                <p className="mt-0.5">7:00 AM – 9:00 PM</p>
              </div>
              <div>
                <span className="font-semibold text-white block">Saturday – Sunday</span>
                <p className="mt-0.5">8:00 AM – 10:00 PM</p>
              </div>
              <div className="pt-2 border-t border-white/10 text-xs text-accent">
                <span>* Dine-In, Takeaway & WiFi</span>
              </div>
            </div>
          </div>

          {/* Address & Direct CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-accent">Melan Addis</h4>
            <div className="space-y-3 text-sm text-gray-300 font-light">
              <a
                href="https://maps.app.goo.gl/L7td8PP8dTH9jGoU7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-accent transition-colors group cursor-pointer"
              >
                <MapPin className="h-4.5 w-4.5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Bole Road, Block 4C, Addis Ababa, Ethiopia</span>
              </a>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>+251 911 234 567</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span>concierge@melanaddis.com</span>
              </p>
              <div className="pt-4">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-3.5 bg-accent hover:bg-accent-hover text-primary font-bold text-xs uppercase tracking-[0.2em] rounded-tl-xl rounded-br-xl transition cursor-pointer"
                  id="footer-reserve-btn"
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-dark text-gray-400 py-6 border-t border-white/5 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Melan Coffee & Patisserie. All rights reserved.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => onOpenLegal('privacy')} 
              className="hover:text-white transition cursor-pointer"
              id="footer-privacy-btn"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('terms')} 
              className="hover:text-white transition cursor-pointer"
              id="footer-terms-btn"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('catering')} 
              className="hover:text-white transition cursor-pointer"
              id="footer-catering-btn"
            >
              Catering Guidelines
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}

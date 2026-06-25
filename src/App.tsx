/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import SignatureExperience from './components/SignatureExperience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import CookieConsent from './components/CookieConsent';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [activeLegalDoc, setActiveLegalDoc] = useState<'privacy' | 'terms' | 'catering' | null>(null);

  // Multi-page Hash Router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/story' || hash === '#story') {
        setCurrentPage('story');
      } else if (hash === '#/menu' || hash === '#menu') {
        setCurrentPage('menu');
      } else if (hash === '#/experience' || hash === '#experience') {
        setCurrentPage('experience');
      } else if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
      // Instantly scroll to top on page navigation
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    // Initialize router and listen for hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-cream font-sans antialiased text-dark flex flex-col justify-between" id="app-root">
      
      {/* Premium Floating Header */}
      <Header onOpenReservation={handleOpenReservation} currentPage={currentPage} />

      {/* Main Pages Render Area with Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            {currentPage === 'home' && (
              <div id="home-page">
                {/* Full-Screen Hero */}
                <Hero onOpenReservation={handleOpenReservation} />

                {/* Curated Brand Intro / Highlights */}
                <section className="py-24 bg-cream border-b border-accent/10 relative overflow-hidden" id="home-intro">
                  <div className="absolute inset-0 bg-[radial-gradient(#C59B27_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10" />
                  <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
                    <div className="flex justify-center">
                      <span className="px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        Welcome to Melan
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold tracking-tight leading-tight">
                      Ethiopian Heritage & Fine European Baking
                    </h2>
                    <p className="font-sans text-muted-text font-light max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                      Where the ancestral warmth of the traditional Ethiopian coffee ceremony blends seamlessly with the rigorous, time-honored art of fine European pastry baking. Step inside our boutique café to experience hand-roasted single-origin beans and artisanal pastries.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                      <a 
                        href="#/menu" 
                        className="px-8 py-4 bg-primary hover:bg-secondary text-white font-bold text-[10px] uppercase tracking-[0.25em] rounded-tl-2xl rounded-br-2xl transition-all duration-300 shadow-lg hover:shadow-primary/20"
                      >
                        Explore The Menu
                      </a>
                      <a 
                        href="#/story" 
                        className="px-8 py-4 border border-primary/20 hover:border-accent text-primary font-bold text-[10px] uppercase tracking-[0.25em] rounded-tl-2xl rounded-br-2xl transition-all duration-300 hover:bg-white"
                      >
                        Read Our Story
                      </a>
                    </div>
                  </div>
                </section>

                {/* Homepage Quick Testimonials & Social Grid */}
                <Testimonials />
                <Instagram />
              </div>
            )}

            {currentPage === 'story' && (
              <div id="story-page">
                {/* Elegant Banner */}
                <section className="pt-36 pb-20 bg-primary text-white text-center relative overflow-hidden border-b border-accent/20">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block">Our Heritage</span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">The Story of Melan</h1>
                    <p className="text-gray-300 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                      Preserving century-old culture while redefining culinary artistry, one cup and crumb at a time.
                    </p>
                  </div>
                </section>
                <Story />
                <WhyChooseUs />
              </div>
            )}

            {currentPage === 'menu' && (
              <div id="menu-page">
                {/* Elegant Banner */}
                <section className="pt-36 pb-20 bg-primary text-white text-center relative overflow-hidden border-b border-accent/20">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block">Boutique Offerings</span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">Artisan Menu</h1>
                    <p className="text-gray-300 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                      Savor our meticulously selected single-origin brews and exquisite hand-crafted patisserie specialties.
                    </p>
                  </div>
                </section>
                <Menu />
              </div>
            )}

            {currentPage === 'experience' && (
              <div id="experience-page">
                {/* Elegant Banner */}
                <section className="pt-36 pb-20 bg-primary text-white text-center relative overflow-hidden border-b border-accent/20">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block">Bespoke Rituals</span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">The Melan Experience</h1>
                    <p className="text-gray-300 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                      Step inside a physical sanctuary where taste, visual aesthetic, and sensory aroma merge harmoniously.
                    </p>
                  </div>
                </section>
                <SignatureExperience />
                <Gallery />
              </div>
            )}

            {currentPage === 'contact' && (
              <div id="contact-page">
                {/* Elegant Banner */}
                <section className="pt-36 pb-20 bg-primary text-white text-center relative overflow-hidden border-b border-accent/20">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block">Visit Addis Ababa</span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">Contact & Location</h1>
                    <p className="text-gray-300 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                      Connect with our concierge team, explore our opening schedule, or find directions to our boutique parlor.
                    </p>
                  </div>
                </section>
                <Contact />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Directory Footer */}
      <Footer onOpenReservation={handleOpenReservation} onOpenLegal={(type) => setActiveLegalDoc(type)} />

      {/* Central Table Reservation Experience Drawer */}
      <ReservationModal isOpen={isReservationOpen} onClose={handleCloseReservation} />

      {/* Professional Legal Document Viewers */}
      <LegalModal isOpen={!!activeLegalDoc} docType={activeLegalDoc} onClose={() => setActiveLegalDoc(null)} />

      {/* Dynamic Cookie Consent Consent Forms */}
      <CookieConsent onOpenPrivacy={() => setActiveLegalDoc('privacy')} />

    </div>
  );
}

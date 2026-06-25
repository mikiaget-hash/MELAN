/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IMAGES } from './data';
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

  // Multi-page Pathname Router (Fully SEO-Optimized, No Hashes)
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      // Match pathnames
      if (path === '/story' || path.startsWith('/story')) {
        setCurrentPage('story');
      } else if (path === '/menu' || path.startsWith('/menu')) {
        setCurrentPage('menu');
      } else if (path === '/experience' || path.startsWith('/experience')) {
        setCurrentPage('experience');
      } else if (path === '/contact' || path.startsWith('/contact')) {
        setCurrentPage('contact');
      } 
      // Handle fallback for legacy hash URLs to seamlessly redirect for old users/bookmarks
      else if (hash === '#/story' || hash === '#story') {
        setCurrentPage('story');
        window.history.replaceState({}, '', '/story');
      } else if (hash === '#/menu' || hash === '#menu') {
        setCurrentPage('menu');
        window.history.replaceState({}, '', '/menu');
      } else if (hash === '#/experience' || hash === '#experience') {
        setCurrentPage('experience');
        window.history.replaceState({}, '', '/experience');
      } else if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
        window.history.replaceState({}, '', '/contact');
      } else if (hash === '#/' || hash === '#home') {
        setCurrentPage('home');
        window.history.replaceState({}, '', '/');
      } else {
        setCurrentPage('home');
      }
      
      // Instantly scroll to top on page navigation
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    // Initialize router and listen for history popstate / navigation events
    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('navigate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('navigate', handleLocationChange);
    };
  }, []);

  // Intercept global relative links to preserve SPA state and transitions
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (
        anchor &&
        anchor.href &&
        anchor.getAttribute('target') !== '_blank' &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        const url = new URL(anchor.href);
        // Ensure same-origin relative URLs on standard routes
        if (url.origin === window.location.origin) {
          const isRoutingPage = 
            url.pathname === '/' || 
            url.pathname === '/story' || 
            url.pathname === '/menu' || 
            url.pathname === '/experience' || 
            url.pathname === '/contact';
          
          if (isRoutingPage && !anchor.hash) {
            e.preventDefault();
            window.history.pushState({}, '', url.pathname + url.search);
            // Dispatch dynamic navigation update
            window.dispatchEvent(new Event('navigate'));
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  // Dynamic Page-by-Page SEO Meta Tags and JSON-LD Schema
  useEffect(() => {
    let title = 'Melan Coffee & Patisserie | Artisan Cafe & Bakery | Addis Ababa';
    let description = 'Savor our meticulously selected single-origin Ethiopian coffee and exquisite fine European pastries in the heart of Addis Ababa. Experience the authentic fusion of heritage and baking craftsmanship.';

    switch (currentPage) {
      case 'story':
        title = 'Our Story | Melan Coffee & Patisserie';
        description = 'Learn about the heritage of Melan, blending the ancestral warmth of Ethiopian coffee rituals with time-honored European patisserie techniques.';
        break;
      case 'menu':
        title = 'Artisan Menu | Melan Coffee & Patisserie';
        description = 'Explore our premium specialty single-origin coffee selections, freshly hand-baked pastries, flaky croissants, and traditional Ethiopian brew specialties.';
        break;
      case 'experience':
        title = 'The Experience | Melan Coffee & Patisserie';
        description = 'Discover our sensory physical sanctuary on Bole Road, Addis Ababa, showcasing authentic coffee ceremonies, beautiful visual design, and elegant ambience.';
        break;
      case 'contact':
        title = 'Contact & Location | Melan Coffee & Patisserie';
        description = 'Visit our flagship café boutique on Bole Road in Addis Ababa, Ethiopia. Connect with our concierge for reservations, hours, and directions.';
        break;
      default:
        break;
    }

    // Update document title
    document.title = title;

    // Manage dynamic meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Inject JSON-LD structured schema for search engines (LocalBusiness SEO Optimization)
    let schemaScript = document.getElementById('melan-seo-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'melan-seo-schema');
      document.head.appendChild(schemaScript);
    }

    const businessSchema = {
      '@context': 'https://schema.org',
      '@type': 'CafeOrCoffeeShop',
      'name': 'Melan Coffee & Patisserie',
      'image': IMAGES.heroBg,
      '@id': 'https://melanaddis.com',
      'url': window.location.origin,
      'telephone': '+251116612345',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Bole Road, behind Friendship Mall',
        'addressLocality': 'Addis Ababa',
        'addressRegion': 'Addis Ababa',
        'addressCountry': 'ET'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '9.0116',
        'longitude': '38.7831'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '07:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday', 'Sunday'],
          'opens': '08:00',
          'closes': '22:00'
        }
      ],
      'servesCuisine': ['Ethiopian Coffee', 'European Patisserie', 'French Pastries', 'Artisan Bakery'],
      'sameAs': [
        'https://instagram.com/melan_addis',
        'https://facebook.com/melancoffee'
      ]
    };

    schemaScript.textContent = JSON.stringify(businessSchema);
  }, [currentPage]);

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
                        href="/menu" 
                        className="px-8 py-4 bg-primary hover:bg-secondary text-white font-bold text-[10px] uppercase tracking-[0.25em] rounded-tl-2xl rounded-br-2xl transition-all duration-300 shadow-lg hover:shadow-primary/20"
                      >
                        Explore The Menu
                      </a>
                      <a 
                        href="/story" 
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

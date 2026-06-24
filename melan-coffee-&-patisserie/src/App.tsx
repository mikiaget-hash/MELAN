/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
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

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-cream font-sans antialiased text-dark" id="app-root">
      
      {/* Premium Floating Header */}
      <Header onOpenReservation={handleOpenReservation} />

      {/* Main Sections */}
      <main>
        {/* Full-Screen Hero */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* Brand Narrative / Story */}
        <Story />

        {/* Filterable Menu Grid */}
        <Menu />

        {/* Core Pillars / Why Melan */}
        <WhyChooseUs />

        {/* Multi-sensory Custom Storytelling Panel */}
        <SignatureExperience />

        {/* Interactive Image Gallery with Lightbox */}
        <Gallery />

        {/* Testimonials Auto-scroll Carousel */}
        <Testimonials />

        {/* Central Map location, Opening Hours, Services, and Contact Forms */}
        <Contact />

        {/* Instagram Snapshot Grid */}
        <Instagram />
      </main>

      {/* Directory Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Central Table Reservation Experience Drawer */}
      <ReservationModal isOpen={isReservationOpen} onClose={handleCloseReservation} />

    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, Map, Landmark, Compass } from 'lucide-react';
import { ContactMessage } from '../types';
import MelanLogo from './MelanLogo';

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [mapTheme, setMapTheme] = useState<'real' | 'luxury' | 'blueprint'>('real');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return;
    }
    setIsSent(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSent(false);
  };

  const services = [
    'Premium Dine-In', 'Express Takeaway', 'Free Corporate Wi-Fi',
    'Business Meetings Space', 'Family Gatherings Room', 'Heated Outdoor Seating'
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center justify-center gap-1.5">
            <Compass className="h-3.5 w-3.5" /> Visit Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
            Visit Melan Coffee & Patisserie
          </h2>
          <p className="text-muted-text font-light text-base leading-relaxed">
            Located in the vibrant heart of central Addis Ababa. Stop by for your daily espresso ritual, or send us a message for premium event catering and corporate bookings.
          </p>
        </div>

        {/* The Single Interactive Map with Swing Location - Now right under the header snippet */}
        <div className="max-w-5xl mx-auto mb-16" id="single-interactive-map-container">
          <div className="bg-cream rounded-tl-[50px] rounded-br-[50px] p-1 border border-accent/25 overflow-hidden shadow-md">
            <div className="bg-white p-4 flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-gray-100 rounded-tl-[45px]">
              <div className="flex items-center gap-2">
                <Map className="h-4 w-4 text-accent" />
                <span className="font-serif text-sm font-bold text-primary">Central Addis Ababa Map (Bole District)</span>
              </div>
              <div className="flex gap-1.5" id="map-theme-switcher">
                <button
                  onClick={() => setMapTheme('real')}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition ${
                    mapTheme === 'real'
                      ? 'bg-primary text-white'
                      : 'bg-cream text-primary hover:bg-gray-100'
                  }`}
                >
                  Google Map
                </button>
                <button
                  onClick={() => setMapTheme('luxury')}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition ${
                    mapTheme === 'luxury'
                      ? 'bg-primary text-white'
                      : 'bg-cream text-primary hover:bg-gray-100'
                  }`}
                >
                  Luxury Art
                </button>
                <button
                  onClick={() => setMapTheme('blueprint')}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition ${
                    mapTheme === 'blueprint'
                      ? 'bg-primary text-white'
                      : 'bg-cream text-primary hover:bg-gray-100'
                  }`}
                >
                  Blueprint
                </button>
              </div>
            </div>

            {/* Custom Map Canvas */}
            <div
              className={`relative h-[380px] sm:h-[450px] w-full overflow-hidden transition-all duration-500 flex items-center justify-center ${
                mapTheme === 'real' ? 'bg-[#E5E3DF]' : mapTheme === 'luxury' ? 'bg-[#F2ECE4]' : 'bg-[#101827]'
              }`}
              id="interactive-map-canvas"
            >
              {mapTheme === 'real' ? (
                <iframe
                  title="Melan Coffee & Patisserie Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5422634354025!2d38.7830656758652!3d9.013289091047547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85aaf8b0cf25%3A0xe54dcf9c4889c!2sBole%20Rd%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1719310000000!5m2!1sen!2set"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <>
                  {/* SVG High-Fidelity Road Map Background */}
                  <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
                    {/* Land Mass */}
                    <rect width="100%" height="100%" fill={mapTheme === 'luxury' ? '#F4EDE4' : '#111827'} />
                    
                    {/* Subtle Grid Overlay */}
                    <defs>
                      <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={mapTheme === 'luxury' ? '#E5DAC9' : '#1F2937'} strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGrid)" opacity="0.4" />

                    {/* Rivers / Blue Water Canal crossing */}
                    <path 
                      d="M -50 220 Q 200 240 320 180 T 600 120 T 850 140" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#E3ECF5' : '#1E293B'} 
                      strokeWidth="32" 
                      strokeLinecap="round" 
                      opacity="0.8"
                    />
                    <path 
                      d="M -50 220 Q 200 240 320 180 T 600 120 T 850 140" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#D5E6F5' : '#172554'} 
                      strokeWidth="16" 
                      strokeLinecap="round" 
                      opacity="0.9"
                    />

                    {/* Scenic Parks & Gardens */}
                    <path 
                      d="M 120 40 Q 200 30 220 120 T 150 150 Z" 
                      fill={mapTheme === 'luxury' ? '#E1EAD2' : '#0F4C43'} 
                      opacity="0.75" 
                    />
                    <path 
                      d="M 620 220 Q 700 200 740 280 T 660 320 Z" 
                      fill={mapTheme === 'luxury' ? '#E1EAD2' : '#0F4C43'} 
                      opacity="0.75" 
                    />

                    {/* Building Blocks / City Footprints */}
                    <rect x="50" y="80" width="45" height="30" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />
                    <rect x="110" y="80" width="40" height="30" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />
                    <rect x="50" y="125" width="50" height="25" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />
                    
                    <rect x="360" y="30" width="70" height="35" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />
                    <rect x="445" y="30" width="50" height="35" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />

                    <rect x="520" y="280" width="60" height="35" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />
                    <rect x="520" y="330" width="45" height="30" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />
                    <rect x="580" y="330" width="50" height="30" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />

                    <rect x="250" y="280" width="55" height="40" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />
                    <rect x="315" y="280" width="45" height="40" rx="4" fill={mapTheme === 'luxury' ? '#EFE6DB' : '#1F2937'} stroke={mapTheme === 'luxury' ? '#E1D3C2' : '#374151'} strokeWidth="1" />

                    {/* Minor Roads Networks */}
                    <path d="M 0 100 L 800 100" fill="none" stroke={mapTheme === 'luxury' ? '#EDE3D5' : '#1F2937'} strokeWidth="12" />
                    <path d="M 220 0 L 220 400" fill="none" stroke={mapTheme === 'luxury' ? '#EDE3D5' : '#1F2937'} strokeWidth="12" />
                    <path d="M 600 0 L 600 400" fill="none" stroke={mapTheme === 'luxury' ? '#EDE3D5' : '#1F2937'} strokeWidth="12" />
                    <path d="M 0 320 L 800 320" fill="none" stroke={mapTheme === 'luxury' ? '#EDE3D5' : '#1F2937'} strokeWidth="12" />

                    {/* MAJOR HIGHWAY: Bole Road / Cameroon Street */}
                    <path 
                      d="M -50 350 L 850 50" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#E4D5BF' : '#334155'} 
                      strokeWidth="28" 
                    />
                    <path 
                      d="M -50 350 L 850 50" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#FDFBFA' : '#0891B2'} 
                      strokeWidth="18" 
                    />
                    <path 
                      d="M -50 350 L 850 50" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#C89B3C' : '#22D3EE'} 
                      strokeWidth="2" 
                      strokeDasharray="8 6" 
                    />

                    {/* MAJOR HIGHWAY: Africa Avenue */}
                    <path 
                      d="M 400 -50 L 400 450" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#E4D5BF' : '#334155'} 
                      strokeWidth="28" 
                    />
                    <path 
                      d="M 400 -50 L 400 450" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#FDFBFA' : '#0891B2'} 
                      strokeWidth="18" 
                    />
                    <path 
                      d="M 400 -50 L 400 450" 
                      fill="none" 
                      stroke={mapTheme === 'luxury' ? '#C89B3C' : '#22D3EE'} 
                      strokeWidth="2" 
                      strokeDasharray="8 6" 
                    />

                    {/* Intersection Roundabout Circle */}
                    <circle 
                      cx="400" 
                      cy="200" 
                      r="32" 
                      fill={mapTheme === 'luxury' ? '#E4D5BF' : '#334155'} 
                    />
                    <circle 
                      cx="400" 
                      cy="200" 
                      r="24" 
                      fill={mapTheme === 'luxury' ? '#FDFBFA' : '#0891B2'} 
                    />
                    <circle 
                      cx="400" 
                      cy="200" 
                      r="12" 
                      fill={mapTheme === 'luxury' ? '#DDE7C7' : '#0F4C43'} 
                      stroke={mapTheme === 'luxury' ? '#C89B3C' : '#22D3EE'} 
                      strokeWidth="2" 
                    />

                    {/* Typography Road Labels */}
                    <text 
                      x="180" 
                      y="260" 
                      fill={mapTheme === 'luxury' ? '#8F7E66' : '#94A3B8'} 
                      fontSize="10" 
                      fontWeight="bold" 
                      fontFamily="sans-serif" 
                      transform="rotate(-20 180 260)" 
                      letterSpacing="0.1em"
                    >
                      BOLE ROAD
                    </text>
                    <text 
                      x="620" 
                      y="100" 
                      fill={mapTheme === 'luxury' ? '#8F7E66' : '#94A3B8'} 
                      fontSize="10" 
                      fontWeight="bold" 
                      fontFamily="sans-serif" 
                      transform="rotate(-20 620 100)" 
                      letterSpacing="0.1em"
                    >
                      CAMEROON ST
                    </text>
                    <text 
                      x="414" 
                      y="80" 
                      fill={mapTheme === 'luxury' ? '#8F7E66' : '#94A3B8'} 
                      fontSize="10" 
                      fontWeight="bold" 
                      fontFamily="sans-serif" 
                      letterSpacing="0.1em"
                    >
                      AFRICA AVE
                    </text>
                  </svg>

                  {/* Nearby Landmarks */}
                  {/* Bole Medhane Alem Cathedral */}
                  <div className="absolute top-[12%] left-[10%] flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-100 shadow-sm z-10">
                    <Landmark className="h-3.5 w-3.5 text-accent" />
                    <span className={`text-[8px] font-bold uppercase tracking-wider font-sans ${mapTheme === 'luxury' ? 'text-primary' : 'text-primary'}`}>
                      Bole Medhane Alem
                    </span>
                  </div>

                  {/* Bole Airport Parkway */}
                  <div className="absolute bottom-[10%] left-[5%] flex items-center gap-1 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-100 shadow-sm z-10">
                    <span className={`text-[8px] font-bold uppercase tracking-wider font-sans ${mapTheme === 'luxury' ? 'text-primary' : 'text-primary'}`}>
                      To Bole Airport (5 min)
                    </span>
                  </div>

                  {/* Bole Atlas */}
                  <div className="absolute top-[12%] right-[10%] flex items-center gap-1 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-100 shadow-sm z-10">
                    <span className={`text-[8px] font-bold uppercase tracking-wider font-sans ${mapTheme === 'luxury' ? 'text-primary' : 'text-primary'}`}>
                      Atlas Junction
                    </span>
                  </div>

                  {/* CENTRAL MELAN COFFEE HOUSE PIN - Rocking/Swinging Side-to-Side */}
                  <motion.a
                    href="https://maps.app.goo.gl/L7td8PP8dTH9jGoU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    animate={{ 
                      rotate: [-3, 3, -3],
                      y: [0, -4, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: 'easeInOut' 
                    }}
                    style={{ transformOrigin: 'bottom center' }}
                    className="absolute top-[40%] left-[46%] z-20 flex flex-col items-center cursor-pointer group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent rounded-full scale-150 blur-sm opacity-50 animate-pulse" />
                      <div className="p-2.5 bg-primary text-accent rounded-full border border-accent shadow-xl relative flex items-center justify-center">
                        <MelanLogo className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="bg-primary text-white border border-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl mt-2 select-none group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                      Melan Coffee
                    </div>
                    <span className="text-[8px] font-mono font-bold text-accent mt-0.5 uppercase tracking-wider group-hover:underline">★ Click to Navigate</span>
                  </motion.a>

                  {/* Compass HUD decoration */}
                  <div className="absolute bottom-4 right-4 flex flex-col items-center gap-1 opacity-40">
                    <Compass className={`h-8 w-8 ${mapTheme === 'luxury' ? 'text-primary' : 'text-white'}`} />
                    <span className={`text-[7px] font-bold ${mapTheme === 'luxury' ? 'text-primary' : 'text-white'}`}>BOLE C</span>
                  </div>
                </>
              )}

              {/* Swing Map Icon (Beautiful Hanging Pendulum Sign) - Visible on both real and custom maps */}
              <motion.div
                animate={{ rotate: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-0 right-16 z-30 flex flex-col items-center pointer-events-none"
                id="hanging-swing-map-sign"
              >
                {/* Chains holding the sign */}
                <div className="flex gap-6">
                  <div className="w-[1.5px] h-12 bg-gradient-to-b from-primary to-accent/80 shadow-sm" />
                  <div className="w-[1.5px] h-12 bg-gradient-to-b from-primary to-accent/80 shadow-sm" />
                </div>
                {/* Wooden/Gold Sign Board */}
                <div className="bg-primary/95 border border-accent/60 text-accent px-3.5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 backdrop-blur-md -mt-1 border-t-2">
                  <Map className="h-4.5 w-4.5 text-accent animate-pulse" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] font-serif font-bold tracking-widest text-cream uppercase">MELAN</span>
                    <span className="text-[7px] font-mono font-semibold tracking-wider text-accent/80 uppercase">Interactive Map</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="contact-content-grid">
          
          {/* Left Column: Contact Cards & Services */}
          <div className="space-y-8" id="contact-info-panel">
            
            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <a
                href="https://maps.app.goo.gl/L7td8PP8dTH9jGoU7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/40 border border-gray-100 hover:border-accent p-5 rounded-tl-[30px] rounded-br-[30px] flex flex-col items-start space-y-3 transition duration-300 group cursor-pointer"
              >
                <div className="p-2.5 bg-primary rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-primary group-hover:text-accent transition duration-300">Location</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  Bole Road, Block 4C<br />
                  Next to Cameroon Street<br />
                  Addis Ababa, Ethiopia
                </p>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 group-hover:underline">
                  Open in Maps →
                </span>
              </a>

              {/* Hours Card */}
              <div className="bg-cream/40 border border-gray-100 p-5 rounded-tl-[30px] rounded-br-[30px] flex flex-col items-start space-y-3">
                <div className="p-2.5 bg-primary rounded-xl text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-primary">Hours</h4>
                <div className="text-xs text-muted-text font-light space-y-1">
                  <div>
                    <span className="font-medium text-primary">Mon – Fri:</span>
                    <p>7:00 AM – 9:00 PM</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Sat – Sun:</span>
                    <p>8:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-cream/40 border border-gray-100 p-5 rounded-tl-[30px] rounded-br-[30px] flex flex-col items-start space-y-3">
                <div className="p-2.5 bg-primary rounded-xl text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-primary">Phone</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  Direct: +251 911 234 567<br />
                  Catering: +251 922 789 012<br />
                  Tel: +251 116 456 789
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-cream/40 border border-gray-100 p-5 rounded-tl-[30px] rounded-br-[30px] flex flex-col items-start space-y-3">
                <div className="p-2.5 bg-primary rounded-xl text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-primary">Email</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  concierge@melanaddis.com<br />
                  events@melanaddis.com<br />
                  careers@melanaddis.com
                </p>
              </div>

            </div>

            {/* Premium Services Offered Checklist */}
            <div className="bg-cream/40 border border-accent/25 rounded-tl-[30px] rounded-br-[30px] p-6 md:p-8 space-y-4">
              <h4 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" /> Our Services
              </h4>
              <p className="text-xs text-muted-text font-light">
                Whether you need a quiet cubby to work on your startup or a lush outdoor dining table for Sunday brunch:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {services.map((srv) => (
                  <div key={srv} className="flex items-center gap-2 text-xs text-primary/90 font-medium">
                    <span className="h-1.5 w-1.5 bg-accent rounded-full" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="space-y-8" id="contact-interactive-panel">
            
            {/* Custom Contact & Inquiry Form */}
            <div className="bg-cream/30 border border-gray-100 p-8 rounded-tl-[50px] rounded-br-[50px]" id="contact-form-container">
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-primary">Send Us a Message</h4>
                    <p className="text-xs text-muted-text font-light">
                      Planning a birthday celebration, corporate party, or want to stock our coffee bags? Write to us below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                        placeholder="Yared Shimelis"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                        placeholder="yared@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      placeholder="+251 912 345 678"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      placeholder="Specify your event date, number of expected guests, or coffee supply requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-tl-xl rounded-br-xl transition shadow-md hover:shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer"
                    id="submit-contact-btn"
                  >
                    <Send className="h-4 w-4" />
                    Submit Inquiry
                  </button>
                </form>
              ) : (
                /* Sent success voucher message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                  id="contact-success-view"
                >
                  <div className="flex justify-center">
                    <div className="p-3.5 bg-green-50 rounded-full border border-green-200 text-green-600">
                      <Send className="h-8 w-8 animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-xl font-bold text-primary">Inquiry Sent Successfully</h4>
                    <p className="text-sm text-muted-text max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Melan Coffee & Patisserie, <span className="font-semibold text-primary">{formData.name}</span>. Our café management team will review your message and reply via <span className="font-semibold text-primary">{formData.email}</span> within 24 hours.
                    </p>
                  </div>

                  <div className="bg-cream/50 rounded-2xl p-4 border border-dashed border-accent/30 max-w-sm mx-auto text-xs space-y-1 text-left">
                    <p className="text-primary font-semibold uppercase tracking-wider">Inquiry Summary:</p>
                    <p className="text-muted-text">Sender: {formData.name}</p>
                    <p className="text-muted-text">Tel: {formData.phone}</p>
                    <p className="text-muted-text italic">Message: "{formData.message.substring(0, 80)}..."</p>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="px-6 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition shadow-md"
                    id="contact-another-btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </div>

          </div>

        </div>

        {/* Subtle padding spacing */}
        <div className="mt-8" />

      </div>
    </section>
  );
}

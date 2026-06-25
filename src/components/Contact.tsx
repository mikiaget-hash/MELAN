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
  const [mapTheme, setMapTheme] = useState<'luxury' | 'blueprint'>('luxury');

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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-content-grid">
          
          {/* Left Column: Contact Cards & Services (5 cols) */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
            
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

          {/* Right Column: Interactive Styled Map & Contact Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8" id="contact-interactive-panel">
            
            {/* Interactive Vector Map with Central Addis Details */}
            <div className="bg-cream rounded-tl-[50px] rounded-br-[50px] p-1 border border-accent/25 overflow-hidden shadow-md">
              <div className="bg-white p-4 flex justify-between items-center border-b border-gray-100 rounded-tl-[45px]">
                <div className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-accent" />
                  <span className="font-serif text-sm font-bold text-primary">Central Addis Ababa Map (Bole District)</span>
                </div>
                <div className="flex gap-1.5" id="map-theme-switcher">
                  <button
                    onClick={() => setMapTheme('luxury')}
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition ${
                      mapTheme === 'luxury'
                        ? 'bg-primary text-white'
                        : 'bg-cream text-primary hover:bg-gray-100'
                    }`}
                  >
                    Luxury
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
                className={`relative h-[250px] w-full overflow-hidden transition-all duration-500 flex items-center justify-center ${
                  mapTheme === 'luxury' ? 'bg-[#F2ECE4]' : 'bg-[#1E2638]'
                }`}
                id="interactive-map-canvas"
              >
                {/* Visual Streets (Luxury/Blueprint vector elements) */}
                <div className={`absolute top-0 bottom-0 left-[40%] w-6 md:w-8 transform rotate-[15deg] ${mapTheme === 'luxury' ? 'bg-[#E3DACF]' : 'bg-[#29354E]'}`} />
                <div className={`absolute left-0 right-0 top-[45%] h-6 md:h-8 transform -rotate-[5deg] ${mapTheme === 'luxury' ? 'bg-[#E3DACF]' : 'bg-[#29354E]'}`} />
                <div className={`absolute top-0 bottom-0 right-[25%] w-4 transform -rotate-[35deg] ${mapTheme === 'luxury' ? 'bg-[#E5DCD1]' : 'bg-[#29354E]'}`} />

                {/* Grid coordinate helper */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-[0.05] pointer-events-none">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className={`border-r border-b ${mapTheme === 'luxury' ? 'border-primary' : 'border-white'}`} />
                  ))}
                </div>

                {/* Nearby Landmarks */}
                {/* Bole Medhane Alem Cathedral */}
                <div className="absolute top-[20%] left-[25%] flex items-center gap-1.5">
                  <Landmark className={`h-4 w-4 ${mapTheme === 'luxury' ? 'text-primary/40' : 'text-white/30'}`} />
                  <span className={`text-[9px] font-bold uppercase tracking-wider font-sans ${mapTheme === 'luxury' ? 'text-primary/40' : 'text-white/30'}`}>
                    Bole Medhane Alem
                  </span>
                </div>

                {/* Bole Airport Parkway */}
                <div className="absolute bottom-[20%] left-[10%] flex items-center gap-1">
                  <span className={`text-[9px] font-bold uppercase tracking-wider font-sans ${mapTheme === 'luxury' ? 'text-primary/40' : 'text-white/30'}`}>
                    To Bole Int'l Airport (5 min)
                  </span>
                </div>

                {/* Bole Atlas */}
                <div className="absolute top-[15%] right-[15%] flex items-center gap-1">
                  <span className={`text-[9px] font-bold uppercase tracking-wider font-sans ${mapTheme === 'luxury' ? 'text-primary/40' : 'text-white/30'}`}>
                    Atlas Junction
                  </span>
                </div>

                {/* CENTRAL MELAN COFFEE HOUSE PIN */}
                <motion.a
                  href="https://maps.app.goo.gl/L7td8PP8dTH9jGoU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="absolute top-[40%] left-[48%] z-10 flex flex-col items-center cursor-pointer group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent rounded-full scale-150 blur-sm opacity-50 animate-pulse" />
                    <div className="p-2 bg-primary text-accent rounded-full border border-accent shadow-xl relative flex items-center justify-center">
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
              </div>
            </div>

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

      </div>
    </section>
  );
}

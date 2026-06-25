/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Flame, Coffee, Heart, Hourglass, Landmark } from 'lucide-react';
import { IMAGES } from '../data';

export default function SignatureExperience() {
  const [activeTab, setActiveTab] = useState<'ritual' | 'baking'>('ritual');

  const experienceDetails = {
    ritual: {
      title: 'The Sacred Coffee Ritual',
      subtitle: 'Celebrating the Birthplace of Coffee',
      tagline: 'A multi-sensory journey rooted in Kaffa heritage.',
      description: 'In Ethiopia, coffee is not a beverage; it is a profound social covenant. Our traditional coffee ceremony honors this history. When you order the Melan Coffee Ceremony, we bring the ritual directly to your table, bridging ancient customs with modern luxury.',
      process: [
        {
          step: '01',
          name: 'The Roasting',
          desc: 'Fresh green Sidamo beans are washed, then slow-roasted over a flat pan before your eyes, filling the room with sweet, complex aromas.'
        },
        {
          step: '02',
          name: 'The Grinding',
          desc: 'The hot roasted beans are ground by hand, releasing volatile oils that give our coffee its signature full-bodied depth.'
        },
        {
          step: '03',
          name: 'The Jebena Brew',
          desc: 'Ground coffee is simmered inside our clay Jebena. Our baristas watch the pour meticulously, aerating the hot brew into small ceramic cups.'
        },
        {
          step: '04',
          name: 'The Pairing',
          desc: 'Served hot alongside traditional salted popcorn, fresh sprigs of rue herb, and rich frankincense smoke rising to soothe the spirit.'
        }
      ],
      image: IMAGES.ceremony,
      statValue: '1,000+',
      statLabel: 'Years of Tradition'
    },
    baking: {
      title: 'The Artisan Baking Craft',
      subtitle: 'European Patisserie Excellence',
      tagline: 'French lamination meets modern Ethiopian ingredients.',
      description: 'Our kitchen laboratory is guided by a singular mission: to master the art of leavening and structural lamination. We treat flour, yeast, and butter as precious materials, spending up to 72 hours preparing each batch of pastries and signature cakes.',
      process: [
        {
          step: '01',
          name: 'The Sourdough Starter',
          desc: 'Our bakery relies on a wild liquid ferment nurtured over years, yielding complex lactic acid flavors and superior crumb.'
        },
        {
          step: '02',
          name: 'The French Lamination',
          desc: 'Imported high-fat dry butter is folded meticulously into 81 distinct paper-thin dough layers, creating extreme flakiness.'
        },
        {
          step: '03',
          name: 'The Proofing Stage',
          desc: 'We control humidity and proofing times for over 18 hours to ensure our pastries rise evenly and bake to a beautiful mahogany.'
        },
        {
          step: '04',
          name: 'Gilding with Gold',
          desc: 'Our signature cakes are glazed in Belgium dark cocoa mirror ganache, finished with hand-placed edible 24k gold leaf.'
        }
      ],
      image: IMAGES.cake,
      statValue: '81 Layers',
      statLabel: 'Of Pure Lamination'
    }
  };

  const currentExp = experienceDetails[activeTab];

  return (
    <section className="py-24 bg-white overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Hand-Crafted Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
            Our Signature Crafts
          </h2>
          <p className="text-muted-text font-light text-base leading-relaxed">
            At Melan, we host two dedicated disciplines under one roof: the ancient sacred coffee ceremony of Ethiopia and the classical baking techniques of European patisseries.
          </p>

          {/* Interactive Switcher Buttons */}
          <div className="inline-flex p-1 bg-cream border border-gray-100 mt-6 rounded-tl-2xl rounded-br-2xl" id="experience-tabs">
            <button
              onClick={() => setActiveTab('ritual')}
              className={`flex items-center gap-2 px-6 py-3 rounded-tl-xl rounded-br-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                activeTab === 'ritual'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-text hover:text-primary'
              }`}
            >
              <Coffee className="h-4 w-4" />
              The Coffee Ceremony
            </button>
            <button
              onClick={() => setActiveTab('baking')}
              className={`flex items-center gap-2 px-6 py-3 rounded-tl-xl rounded-br-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                activeTab === 'baking'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-text hover:text-primary'
              }`}
            >
              <Flame className="h-4 w-4" />
              The Artisan Baking
            </button>
          </div>
        </div>

        {/* Narrative Split Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            id={`experience-view-${activeTab}`}
          >
            {/* Column 1: Image / Stats Panel (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl border border-accent/10 relative group">
                <img
                  src={currentExp.image}
                  alt={currentExp.title}
                  className="w-full object-cover aspect-[4/5] transform scale-102 group-hover:scale-100 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
                
                {/* Embedded Floating Luxury Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-accent/20 shadow-xl flex items-center gap-4">
                  <div className="p-3 bg-cream rounded-xl text-accent">
                    <Hourglass className="h-6 w-6 animate-spin-slow" />
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-extrabold text-primary block leading-none">{currentExp.statValue}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text mt-1 block">{currentExp.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Storytelling Narrative & Stepped Process (7 cols) */}
            <div className="lg:col-span-7 space-y-8" id="experience-story-details">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent font-mono block">
                  {currentExp.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  {currentExp.title}
                </h3>
                <p className="text-base text-primary/80 font-medium italic">
                  "{currentExp.tagline}"
                </p>
                <p className="text-sm text-muted-text font-light leading-relaxed">
                  {currentExp.description}
                </p>
              </div>

              {/* Stepped Process Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentExp.process.map((p) => (
                  <div
                    key={p.step}
                    className="p-5 rounded-tl-[24px] rounded-br-[24px] bg-cream/40 border border-gray-100 hover:border-accent/20 hover:bg-cream/60 transition-all duration-300 space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent group-hover:scale-110 transition-transform">{p.step}</span>
                      <div className="h-1.5 w-1.5 bg-accent/40 rounded-full" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-primary">
                      {p.name}
                    </h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Leaf, Flame, ShieldCheck, Sparkles } from 'lucide-react';
import { IMAGES } from '../data';

export default function Story() {
  const stats = [
    {
      id: 'stat1',
      icon: <Award className="h-6 w-6 text-accent" />,
      title: 'Premium Ethiopian Coffee',
      desc: '100% organic, single-origin Sidamo, Yirgacheffe, and Guji beans roasted in-house.',
    },
    {
      id: 'stat2',
      icon: <Leaf className="h-6 w-6 text-accent" />,
      title: 'Fresh Pastries Daily',
      desc: 'Artisan pastries and custom-crafted desserts rolled, laminated, and baked every morning.',
    },
    {
      id: 'stat3',
      icon: <Flame className="h-6 w-6 text-accent" />,
      title: 'Comfortable Atmosphere',
      desc: 'Sleek Scandinavian interiors fused with warm Ethiopian textures, ideal for focus or socializing.',
    },
    {
      id: 'stat4',
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: 'Exceptional Service',
      desc: 'Merging legendary local hospitality with international service standards for every guest.',
    },
  ];

  return (
    <section className="py-24 bg-cream overflow-hidden" id="story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
            id="story-text-container"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Our Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
                Crafted With Passion, Inspired By Tradition
              </h2>
            </div>
            
            <p className="text-muted-text text-base leading-relaxed font-light">
              At Melan Coffee & Patisserie, every cup tells a story deeply rooted in Ethiopia's rich, legendary coffee heritage. We combine the traditional values of slow, thoughtful brewing with modern cafe excellence. We have created a sanctuary where people can connect, spark fresh collaborations, and enjoy exceptional, uncompromised flavors.
            </p>
            
            <p className="text-muted-text text-base leading-relaxed font-light">
              Our single-origin coffee is meticulously selected from ethically sourced high-altitude cooperatives, roasted locally, and prepared by award-winning baristas. Complementing our coffee, our premium European pastries, cakes, and light breakfasts are rolled and baked daily in our laboratory, utilizing only natural ingredients.
            </p>

            {/* In-Line Callout Quote */}
            <div className="border-l-4 border-accent pl-4 py-1 italic text-primary/90 text-sm font-medium bg-white/40 rounded-r-lg pr-4">
              "We don't just serve food and coffee. We offer a ritual of warmth and high craftsmanship, celebrating the local soil that feeds the world's coffee love."
            </div>
          </motion.div>

          {/* Right Collage Column (7 cols) */}
          <div className="lg:col-span-7 relative" id="story-visual-container">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Left taller image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-7 overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-xl border border-accent/10 relative group"
              >
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition duration-300 z-10" />
                <img
                  src={IMAGES.ceremony}
                  alt="Traditional coffee preparation"
                  className="w-full object-cover aspect-[4/5] transform scale-105 group-hover:scale-100 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right overlapping images */}
              <div className="col-span-5 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg border border-accent/10 relative group"
                >
                  <img
                    src={IMAGES.pastries}
                    alt="Artisan buttery croissants"
                    className="w-full object-cover aspect-[4/3] transform group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white p-6 rounded-tl-[30px] rounded-br-[30px] border border-accent/20 shadow-md text-center flex flex-col justify-center items-center"
                >
                  <span className="font-serif text-3xl md:text-4xl font-extrabold text-accent">100%</span>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mt-1">Single-Origin</span>
                  <span className="text-[10px] text-muted-text mt-0.5">Sidamo & Yirgacheffe</span>
                </motion.div>
              </div>
            </div>

            {/* Decorative organic blob or golden lines behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
          </div>
        </div>

        {/* Premium Highlights / Stats Section */}
        <div className="mt-24" id="story-stats-grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-tl-2xl rounded-br-2xl shadow-sm border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4 group"
              >
                <div className="p-3 bg-cream rounded-xl group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-primary">
                    {stat.title}
                  </h4>
                  <p className="text-sm text-muted-text font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

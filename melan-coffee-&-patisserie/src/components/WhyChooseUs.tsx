/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Coffee, ShieldCheck, Heart, Sparkles, Smile, Landmark, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 'f1',
      icon: <Coffee className="h-7 w-7 text-accent" />,
      title: 'Authentic Ethiopian Coffee',
      description: 'Journey to the ultimate birthplace of coffee. We ethically source single-origin specialty grades directly from Sidamo, Yirgacheffe, and Guji forest cooperatives, roasted with tailored profiles to highlight natural fruity, tea-like, and chocolate notes.',
      badge: 'Heritage'
    },
    {
      id: 'f2',
      icon: <ShieldCheck className="h-7 w-7 text-accent" />,
      title: 'Freshly Baked Daily',
      description: 'Our state-of-the-art laboratory runs around the clock. Every morning, our pastry chefs hand-laminate and bake French butter croissants, danishes, and custom artisan desserts from scratch, ensuring they crisp and melt in your mouth.',
      badge: 'Baking'
    },
    {
      id: 'f3',
      icon: <Landmark className="h-7 w-7 text-accent" />,
      title: 'Elegant Atmosphere',
      description: 'Fusing clean Scandinavian minimalism with the rich visual textures of Ethiopian design. Melan is engineered for your productivity and pleasure, featuring fast corporate Wi-Fi, cozy group corners, and an outdoor garden terrace.',
      badge: 'Ambiance'
    },
    {
      id: 'f4',
      icon: <Smile className="h-7 w-7 text-accent" />,
      title: 'Exceptional Hospitality',
      description: 'At the heart of Ethiopian culture is hospitality (Marhaban / Welcoming). Our staff is globally trained in professional hospitality to remember your name, your favorite beans, and to deliver a warm service experience.',
      badge: 'Service'
    }
  ];

  return (
    <section className="py-24 bg-cream" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Our Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
              The Melan Distinction
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-text font-light text-base leading-relaxed">
              We do not believe in shortcuts. From selecting raw beans to folding croissants, we pay meticulous attention to detail to ensure every visit is a sensory memory.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="why-choose-us-cards">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-tl-[45px] rounded-br-[45px] p-8 md:p-10 border border-gray-100 hover:border-accent/40 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-cream rounded-tl-xl rounded-br-xl text-accent group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20">
                    {feature.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-muted-text text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative Line Accent */}
              <div className="h-1 w-12 bg-accent/30 rounded-full group-hover:w-full group-hover:bg-accent transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

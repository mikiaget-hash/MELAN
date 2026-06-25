import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram as InstagramIcon, Sparkles, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';

export default function Instagram() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(200);
  const [isSwiped, setIsSwiped] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.offsetWidth;
        // Handle is 48px, padding is 8px
        setDragWidth(trackWidth - 48 - 8);
      }
    };
    
    // Initial calculation
    setTimeout(updateWidth, 100);
    
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleDrag = (event: any, info: any) => {
    if (info.offset.x >= dragWidth - 12 && !isSwiped) {
      setIsSwiped(true);
      window.open('https://www.instagram.com/reel/DZrX_GYouXc/?igsh=OXcxeWxhcmdpdmVj', '_blank');
      // Reset lock state after delay
      setTimeout(() => {
        setIsSwiped(false);
      }, 2000);
    }
  };

  return (
    <section className="py-20 bg-cream" id="instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Social Ambiance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Follow Us on Instagram
            </h2>
            <p className="text-muted-text font-light text-sm">
              Discover our signature coffee rituals, artisan patisserie, and masterclasses at <span className="font-bold text-primary hover:text-accent cursor-pointer">@MelanCoffeePatisserie</span>
            </p>
          </div>

          {/* Follow CTA */}
          <a
            href="https://www.instagram.com/reel/DZrX_GYouXc/?igsh=OXcxeWxhcmdpdmVj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-secondary text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-tl-xl rounded-br-xl transition duration-300 flex items-center gap-2 border border-accent/20 cursor-pointer"
            id="follow-instagram-btn"
          >
            <InstagramIcon className="h-4 w-4 text-accent animate-pulse" />
            Watch Reel on Instagram
          </a>
        </div>

        {/* Centralized High-Fidelity Reel Interactive Showcase */}
        <div className="relative max-w-md mx-auto mt-16 px-4" id="instagram-reel-showcase-container">
          
          {/* Left Hanging Swing Sign - Swings/rocks continuously */}
          <motion.a
            href="https://www.instagram.com/reel/DZrX_GYouXc/?igsh=OXcxeWxhcmdpdmVj"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ rotate: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center' }}
            className="absolute top-10 -left-16 lg:-left-24 z-30 sm:flex hidden flex-col items-center group cursor-pointer"
            id="instagram-swinging-sign"
          >
            {/* Hanging Chains */}
            <div className="flex gap-4">
              <div className="w-[1.5px] h-14 bg-gradient-to-b from-primary to-accent/80 shadow-sm" />
              <div className="w-[1.5px] h-14 bg-gradient-to-b from-primary to-accent/80 shadow-sm" />
            </div>
            {/* Wooden Board */}
            <div className="bg-primary/95 border border-accent/60 text-accent px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 backdrop-blur-md -mt-1 border-t-2 select-none group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <InstagramIcon className="h-4.5 w-4.5 text-accent animate-pulse group-hover:text-primary" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] font-serif font-bold tracking-widest text-cream uppercase">MELAN</span>
                <span className="text-[7px] font-mono font-semibold tracking-wider text-accent/80 group-hover:text-primary/90 uppercase">WATCH REEL</span>
              </div>
            </div>
          </motion.a>

          {/* Right Hanging Swing Sign - Alternate view indicator */}
          <motion.div
            animate={{ rotate: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center' }}
            className="absolute top-4 -right-16 lg:-right-24 z-30 sm:flex hidden flex-col items-center pointer-events-none"
            id="instagram-status-sign"
          >
            {/* Hanging Chains */}
            <div className="flex gap-3">
              <div className="w-[1.5px] h-10 bg-gradient-to-b from-primary to-accent/80 shadow-sm" />
              <div className="w-[1.5px] h-10 bg-gradient-to-b from-primary to-accent/80 shadow-sm" />
            </div>
            {/* Sign board */}
            <div className="bg-white/95 border border-accent/40 text-primary px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-1.5 backdrop-blur-md -mt-1 border-t-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              <span className="text-[8px] font-mono font-bold tracking-wider text-primary uppercase">SYNC ACTIVE</span>
            </div>
          </motion.div>

          {/* Device Frame */}
          <div className="relative mx-auto w-full max-w-[340px] bg-primary rounded-[52px] p-2.5 border-[6px] border-primary shadow-2xl overflow-hidden group">
            
            {/* Speaker Notching Decoration */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-primary rounded-full z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-gray-700 rounded-full" />
            </div>

            {/* Side Highlights Reflection */}
            <div className="absolute inset-y-0 left-0 w-[1px] bg-white/10 z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[1px] bg-white/5 z-10 pointer-events-none" />

            {/* Screen Content Container - Aspect 9:16 for Reels */}
            <div className="relative aspect-[9/16] w-full rounded-[42px] overflow-hidden bg-black border border-gray-900 shadow-inner">
              
              {/* Instagram Embedded Reel */}
              <iframe
                title="Melan Coffee Instagram Reel Player"
                src="https://www.instagram.com/reel/DZrX_GYouXc/embed"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />

              {/* Glowing Loading underlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 bg-gradient-to-b from-primary/95 to-black text-center p-6">
                <InstagramIcon className="h-10 w-10 text-accent animate-spin mb-3" />
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase">CONNECTING REEL FEED...</span>
              </div>
            </div>

          </div>

          {/* Swipe-to-Redirect Slider Dock - Combined custom "Swipe Icon" */}
          <div className="mt-8 max-w-[340px] mx-auto px-1" id="swipe-redirect-control-dock">
            <div 
              ref={trackRef}
              className={`relative h-14 rounded-full flex items-center justify-between p-1 overflow-hidden shadow-lg transition-colors duration-500 border ${
                isSwiped 
                  ? 'bg-accent border-accent text-primary' 
                  : 'bg-primary/95 border-accent/25 text-white'
              }`}
            >
              {/* Pulsing slider text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center select-none px-12">
                <span className={`text-[9px] font-sans font-bold tracking-[0.25em] uppercase transition-opacity duration-300 ${
                  isSwiped ? 'opacity-0' : 'animate-pulse opacity-60'
                }`}>
                  Swipe to Open Reel
                </span>
                <span className={`text-[10px] font-serif font-bold tracking-wider absolute transition-all duration-300 ${
                  isSwiped ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  Redirecting...
                </span>
              </div>

              {/* Progress track overlay */}
              <div className="absolute inset-y-1 left-1 bg-accent/15 rounded-full pointer-events-none" />

              {/* SWIPING HANDLE ICON */}
              <motion.div
                drag="x"
                dragElastic={0.1}
                dragMomentum={false}
                dragConstraints={{ left: 0, right: dragWidth }}
                onDrag={handleDrag}
                animate={isSwiped ? { x: dragWidth } : { x: 0 }}
                transition={isSwiped ? { type: 'spring', stiffness: 200, damping: 15 } : { type: 'spring', stiffness: 300, damping: 20 }}
                className={`h-11 w-11 rounded-full flex items-center justify-center shadow-md cursor-grab active:cursor-grabbing z-10 transition-colors ${
                  isSwiped ? 'bg-primary text-accent' : 'bg-accent text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSwiped ? (
                  <ExternalLink className="h-4.5 w-4.5 animate-bounce" />
                ) : (
                  <div className="flex items-center">
                    <InstagramIcon className="h-4 w-4" />
                    <ChevronRight className="h-3.5 w-3.5 -ml-0.5 animate-pulse" />
                  </div>
                )}
              </motion.div>

              {/* Success Indicator Badge */}
              <div className="pr-4 flex items-center gap-1 text-[8px] font-mono tracking-widest text-accent/60 font-semibold pointer-events-none uppercase">
                <span>IG</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>

          {/* Aesthetic Tag below the player */}
          <div className="text-center mt-4">
            <span className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] font-bold">@MelanCoffeePatisserie</span>
          </div>

        </div>

      </div>
    </section>
  );
}
